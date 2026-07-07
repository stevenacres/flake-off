import { defineConfig } from 'astro/config';

// Static output (default). Deploys to Cloudflare Pages as-is:
// build command: npm run build, output directory: dist
export default defineConfig({
  site: 'https://flakeoff.example.com', // TODO: swap in the real domain before launch
  compressHTML: true,
});
