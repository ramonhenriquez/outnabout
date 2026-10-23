// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// Deployment settings are read from the environment so the same code can run
// locally (served from "/") and on a GitHub Pages project site
// (served from "/<repo-name>/").
//   SITE_URL   e.g. https://your-username.github.io
//   BASE_PATH  e.g. /outnabout
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
