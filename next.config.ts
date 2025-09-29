import { withContentlayer } from 'next-contentlayer2'
import type { NextConfig } from 'next'

const config: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "block-all-mixed-content; default-src 'self'; object-src 'none';"
          },
          {
            key: 'Content-Security-Policy',
            value: "img-src https: data:;"
          },
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests;"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), speaker=()'
          },
        ],
      },
    ]
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    optimizeRouterScrolling: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = 'eval-source-map';

      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'source-map-loader',
            options: {
              filterSourceMappingUrl: (url: string, resourcePath: string) => {
                if (
                  resourcePath.includes('installHook.js') ||
                  resourcePath.includes('react_devtools_backend_compact.js') ||
                  resourcePath.includes('react-refresh')
                ) {
                  return false;
                }
                return true;
              },
            },
          },
        ],
        enforce: 'pre',
      });
    }

    return config;
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
    resolveAlias: {
      underscore: 'lodash',
      mocha: { browser: 'mocha/browser-entry.js' },
    },
    resolveExtensions: [
      '.mdx',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.mjs',
      '.json',
    ],
  },
}

export default withContentlayer(config);
