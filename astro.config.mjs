import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// Static output (default). Deploys to Cloudflare Pages as-is:
// build command: npm run build, output directory: dist
export default defineConfig({
  // TODO: swap in the real domain before launch
  site: 'https://flakeoff.example.com',

  compressHTML: true,
  adapter: cloudflare()
});