# syntax=docker.io/docker/dockerfile:1

# Pinned by digest for reproducible builds. To update, pick the newest
# node:24.x-alpine tag and replace both the tag and the digest.
# Note: node:24.21.0-alpine3.24 segfaults on exit after network I/O, so stay on 3.23.
FROM node:24.21.0-alpine3.23@sha256:9ec4a2e289874ed0d722e1772ec2de45d2801541db8612f3638b26f128c69ac2 AS base

# Pick up Alpine security fixes released after the base image was built.
RUN apk upgrade --no-cache


FROM base AS build-base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# pnpm 12 ships native binaries that corepack cannot install, so install it with
# npm, using the version pinned in the "packageManager" field of package.json.
COPY package.json ./
RUN npm install --global --no-fund --no-audit "$(node -p "require('./package.json').packageManager")"


FROM build-base AS deps

# The Cypress binary is only needed for tests.
ENV CYPRESS_INSTALL_BINARY=0

COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile


FROM build-base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build


FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# The server only needs the node binary: remove the package managers bundled
# with the image (npm, npx, corepack, yarn) and their vulnerable dependencies.
RUN rm -rf /usr/local/lib/node_modules /opt/yarn-* \
    /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack \
    /usr/local/bin/yarn /usr/local/bin/yarnpkg

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
