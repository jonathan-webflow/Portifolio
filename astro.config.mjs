// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://jonathanrocha.work',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'byqsupply-components.netlify.app' },
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        webp: {
          quality: 82,
          alphaQuality: 90,
          effort: 6,
        },
        avif: {
          quality: 75,
          effort: 7,
        },
        jpeg: {
          mozjpeg: true,
          quality: 85,
        },
        png: {
          compressionLevel: 9,
        },
      },
    },
  },
});
