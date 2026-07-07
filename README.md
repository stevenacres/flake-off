# Flake Off — site

Single-page Astro site. Static output, built for Cloudflare Pages.

## Run it locally

1. Install [Node.js](https://nodejs.org) (LTS) if you don't have it.
2. Open a terminal in this `site/` folder.
3. `npm install` (first time only)
4. `npm run dev` — opens the site at http://localhost:4321 with live reload.

## Where things live

| What | Where |
|---|---|
| Colors, spacing, type scale | `src/styles/tokens.css` (change here, everything inherits) |
| Product names, prices, links, images | `src/data/products.ts` |
| Page copy | each component in `src/components/` |
| Section order | `src/pages/index.astro` |
| Fonts, logo, product images | `public/` |

## Swapping in the real product shots

1. Drop transparent PNGs into `public/images/` (e.g. `nizoral.png`).
2. In `src/data/products.ts`, change the three `image:` paths.
3. That updates the hero lineup and the product cards at once.

## Swapping in affiliate links

In `src/data/products.ts`, replace the three tokens:
`AFFILIATE_LINK_KETOCONAZOLE`, `AFFILIATE_LINK_CLEANSER`, `AFFILIATE_LINK_MOISTURIZER`.

Also replace `CONTACT_EMAIL` in `src/components/Footer.astro`.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo (or use direct upload).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
4. Set the real domain, then update `site:` in `astro.config.mjs`.

A prebuilt `dist/` is included; you can also drag-and-drop that folder into Cloudflare Pages direct upload for a zero-setup deploy.
