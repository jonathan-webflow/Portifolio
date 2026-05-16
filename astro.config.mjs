// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://portfolio2026.vercel.app', // Atualizar com URL real da Vercel
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
        webp: {
          quality: 82,
          alphaQuality: 90,
          effort: 6,
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
