// Before/after pairs from real Spickle jobs. Every section that shows pairs
// (homepage, gallery, stone pages) hides itself while this list is empty.
//
// Two kinds of entry:
//
// 1. One side-by-side photo (the "BEFORE | AFTER" images from our socials):
//    {
//      image: '/gallery/crazy-paving-pool.webp',
//      alt: 'Crazy paving pool surround, before and after cleaning',
//      caption: 'Crazy paving pool surround',
//      stone: 'porphyry',      // optional: slug from stones.js, shows it on that stone page
//      suburb: 'Cheltenham',   // optional
//    }
//
// 2. Two matching photos from the same spot, shown as a drag slider:
//    {
//      before: '/gallery/cheltenham-firepit-before.jpg',
//      after: '/gallery/cheltenham-firepit-after.jpg',
//      caption: 'Crazy paving fire pit area',
//      stone: 'bluestone',
//      suburb: 'Cheltenham',
//    }

export const pairs = [
  {
    image: '/gallery/aggregate-patio.webp',
    alt: 'Exposed aggregate patio beside a pool fence, before and after cleaning',
    caption: 'Exposed aggregate patio',
    stone: 'aggregate',
  },
  {
    image: '/gallery/crazy-paving-pool.webp',
    alt: 'Crazy paving pool surround, before and after cleaning',
    caption: 'Crazy paving pool surround',
  },
  {
    image: '/gallery/pavers-patio.webp',
    alt: 'Pale stone pavers on a patio, before and after cleaning',
    caption: 'Pale stone pavers',
  },
];

// Caption with the suburb added when we have one.
export const captionFor = (p) => (p.suburb ? `${p.caption}, ${p.suburb}` : p.caption);
