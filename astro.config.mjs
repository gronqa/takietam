import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gronqa.github.io',
  base: '/takietam',
  integrations: [react()],
  devToolbar: {
    enabled: false
  },
  build: {
    assets: 'assets' // CRITICAL for GitHub Pages as per GEMINI.md
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
