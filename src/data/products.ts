/**
 * The three products. Everything product-related lives here.
 *
 * TO SWAP IN REAL AFFILIATE LINKS:
 * Replace the three AFFILIATE_LINK_* placeholder strings below with your
 * Amazon Associates tracked URLs. Nothing else needs to change.
 *
 * TO SWAP IN REAL PRODUCT SHOTS:
 * Drop transparent PNGs into /public/images/ and update the `image` paths.
 */

export interface Product {
  id: string;
  role: string;          // short label: what job it does
  name: string;
  blurb: string;         // one line, what it does
  price: string;         // approximate, phrased so it doesn't rot
  image: string;
  imageAlt: string;
  link: string;          // affiliate placeholder token
}

export const products: Product[] = [
  {
    id: 'antifungal',
    role: 'The treatment',
    name: 'Nizoral (ketoconazole 1%)',
    blurb: 'The antifungal that targets the yeast. This is the piece that does the actual work.',
    price: 'about $15',
    image: '/images/FlakeOff-Nizoral.webp',
    imageAlt: 'Nizoral anti-dandruff shampoo bottle',
    link: 'AFFILIATE_LINK_KETOCONAZOLE',
  },
  {
    id: 'cleanser',
    role: 'The daily cleanser',
    name: 'Vanicream Cleanser',
    blurb: 'Cleans without stripping, irritating, or feeding the problem. Fragrance-free.',
    price: 'about $10',
    image: '/images/FlakeOff-Vanicream-Cleanser.webp',
    imageAlt: 'Vanicream Gentle Facial Cleanser pump bottle',
    link: 'AFFILIATE_LINK_CLEANSER',
  },
  {
    id: 'moisturizer',
    role: 'The barrier repair',
    name: 'Vanicream Moisturizer',
    blurb: 'Ceramides and hyaluronic acid rebuild the barrier so you flare less often.',
    price: 'about $14',
    image: '/images/FlakeOff-Vanicream-Moisturizer.webp',
    imageAlt: 'Vanicream Daily Facial Moisturizer bottle',
    link: 'AFFILIATE_LINK_MOISTURIZER',
  },
];

export const AMAZON_DISCLOSURE =
  'As an Amazon Associate I earn from qualifying purchases.';
