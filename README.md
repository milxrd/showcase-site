# Showcase site

A personal showcase website with an about page, a contact page and a blog. Blog posts and portfolio entries are written in **Notion**, exported to Markdown and compiled into typed data at build time.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript)
![pnpm](https://img.shields.io/badge/pnpm-12-f69220?logo=pnpm)

## Features

- **Static pages**: Home, About, Blog and Contact, all prerendered at build time.
- **Notion as a CMS**: a sync script pulls posts and portfolio entries from Notion databases into `app/content` and downloads their images into `public/images`.
- **Typed content**: [Contentlayer2](https://github.com/timlrx/contentlayer2) turns the Markdown files into typed `allPosts` / `allPortfolios` collections.
- **Custom look**: Tailwind CSS 4 with a custom theme (olive, beige and bottle-green palette, Marmelad font) and entrance animations.
- **Security headers**: a Content-Security-Policy, `X-Frame-Options` and `Permissions-Policy`. Markdown is rendered with raw HTML disabled.
- **Tests**: Cypress end-to-end tests and component tests.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Styling | Tailwind CSS 4, `@tailwindcss/typography`, `tailwind-scrollbar-hide` |
| Content | Contentlayer2, markdown-it, `@kodaps/notion-parse` |
| Icons | Font Awesome 7 |
| Quality | TypeScript 6, ESLint 10 (`eslint-config-next`), Cypress 16 |

## Getting started

### Requirements

- **Node.js** 22 or newer (the Docker image uses Node 24)
- **pnpm** 12 (the exact version is pinned in `package.json`). Install it with `npm install -g pnpm@12` or `pnpm self-update`. Corepack can't install pnpm 12's native binaries.

### Install and run

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

`pnpm dev` and `pnpm build` generate the content first (`contentlayer2 build`), so `app/content` has to exist. See [Content](#content).

## Content

Content lives in `app/content` as Markdown files with YAML front matter:

```text
app/content/
├── post/        # blog posts   -> allPosts
└── portfolio/   # portfolio    -> allPortfolios
```

```markdown
---
title: My first post
slug: my-first-post
date: 2025-01-02
tags: [news]
enabled: true
image:
  src: /images/post/cover.jpg
  width: 837
  height: 939
text: |-
  ## Hello

  Post body in **Markdown**.
---
```

The schema is defined in [`contentlayer.config.ts`](contentlayer.config.ts). `app/content` and `public/images` are git-ignored because they are generated from Notion.

### Syncing from Notion

1. Create a Notion integration and share your Post and Portfolio databases with it.
2. Create a `.env` file in the project root:

   ```dotenv
   NOTION_SECRET=secret_xxx
   NOTION_POST_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NOTION_PORTFOLIO_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

3. Run the sync script:

   ```bash
   node app/lib/notion.js
   ```

`.env` files are git-ignored. Never commit your Notion secret.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Generate content and start the dev server |
| `pnpm build` | Generate content and create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm test:e2e` | Run Cypress E2E tests (needs a running server on :3000) |
| `pnpm test:e2e:headed` | Run E2E tests in a visible browser |
| `pnpm test:e2e:ui` | Open the Cypress UI |
| `pnpm exec cypress run --component` | Run Cypress component tests |

## Project structure

```text
app/
├── about/ blog/ contact/   # routes
├── ui/                     # Header, Footer, ContentCard, EmailSubscription
├── lib/                    # Font Awesome setup, Notion sync script
├── AppContext.tsx          # site title, navigation and author
├── layout.tsx              # root layout
├── error.tsx, not-found.tsx
└── globals.css             # Tailwind entry point
cypress/
├── e2e/                    # end-to-end specs
└── component/              # component specs
patches/                    # pnpm patches for vulnerable transitive deps
```

To change the site title, navigation links or author name, edit `app/AppContext.tsx`. Theme colors, fonts and animations are in `tailwind.config.ts`.

## Docker

The multi-stage `Dockerfile` installs dependencies with pnpm, builds the app and runs the Next.js standalone server as a non-root user on port 3000. The runtime image is hardened:

- The base image is pinned by digest, and Alpine packages are upgraded at build time.
- The runtime stage ships only the `node` binary: npm, npx, corepack and yarn are removed.
- `.dockerignore` keeps `.env*` files and other secrets out of the build context.

```bash
docker build -t showcase-site .
docker run -p 3000:3000 showcase-site
```

> The generated content in `app/content` must be present in the build context (run the Notion sync first).

To scan the image for vulnerabilities:

```bash
docker save showcase-site -o showcase-site.tar
docker run --rm -v "$PWD:/scan" aquasec/trivy image --scanners vuln,secret --input /scan/showcase-site.tar
```

## Dependency security

Dependencies are kept free of known vulnerabilities (`pnpm audit`). Some fixes for transitive dependencies of unmaintained packages are configured in `pnpm-workspace.yaml`:

- **`overrides`** force patched versions (`toml`, `uuid`, OpenTelemetry, `file-type`).
- **`patchedDependencies`** apply the patches in `patches/`:
  - `@jimp/core`: supports the patched, ESM-only `file-type`.
  - `@opentelemetry/core@1.30.1`: backport of the fix for GHSA-8988-4f7v-96qf. This advisory is listed under `auditConfig.ignoreGhsas` and can be removed once contentlayer2 moves to OpenTelemetry 2.x.
- **`allowBuilds`** lists the only packages allowed to run install scripts.
