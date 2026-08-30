// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGitHubPages ? "https://cardoso-ix.github.io" : "http://localhost:4321",
  base: isGitHubPages ? "/pokemon-tcg-promo/" : "/",
  vite: {
    plugins: [tailwindcss()]
  }
});