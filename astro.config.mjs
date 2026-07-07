import { defineConfig } from 'astro/config';

// Static output (default). Deploys to Cloudflare Pages as-is:
// build command: npm run build, output directory: dist
export default defineConfig({
  site: 'https://flake-off.pages.dev',
  compressHTML: true,
});
