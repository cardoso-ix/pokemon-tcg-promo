// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isProduction = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isProduction ? "https://pokemontcgpromo.online" : "http://localhost:4321",
  base: "/",
  vite: {
    plugins: [tailwindcss()]
  }
});