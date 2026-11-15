// Area pages: what people search for by place ("pool paver sealing"),
// as opposed to by stone. Each entry builds /<slug> via AreaTemplate.
// Written from general stone knowledge; no invented facts about Spickle.
import poolImg from '../assets/hero-dusk.jpg';
import drivewayImg from '../assets/surfaces/aggregate-tile.jpg';

export const areas = [
  {
    slug: 'pool-surrounds',
    name: 'Pool surrounds',
    title: 'Pool Surround & Coping Sealing Melbourne | Spickle',
    description:
      'Cleaning and sealing for stone pool surrounds and coping across Melbourne and the Mornington Peninsula. Keeps slip resistance. From $15/m².',
    h1: 'Pool surround cleaning and sealing',
    tagline:
      'Pool water, salt, sunscreen and wet feet all end up in the stone. A good seal keeps the surround looking new without making it slippery.',
    image: poolImg,
    imageAlt: 'Stone pool surround at dusk',
    problems: [
      'Salt from saltwater pools crystallises inside the stone as it dries, and over time it can make the surface flake and pit.',
      'White efflorescence marks where pool water evaporates and leaves salts behind.',
      'Sunscreen and body oil darken the stone around steps, edges and loungers.',
      'Mould and algae on shaded edges that stay damp.',
      'Acid-based pool and tile cleaners that etch limestone and travertine coping.',
    ],
    treatment: [
      'We clean with products matched to the stone, lift the oil and efflorescence marks, then seal.',
      'Around pools that almost always means a penetrating sealer. It works inside the stone, so the surface keeps its grip for wet bare feet, and there is no film for chlorine and sun to wear away. Topical films can turn slippery when wet, so we only suggest one where it suits.',
      'We test a patch first, so you see how your stone looks sealed before we do the whole surround.',
    ],
    stones: ['travertine', 'limestone', 'bluestone', 'granite', 'sandstone'],
    faqs: [
      {
        q: 'Will sealing make my pool surround slippery?',
        a: 'Not with a penetrating sealer, which is what we use around most pools. It protects the stone from within and leaves the surface texture as it was.',
      },
      {
        q: 'Can you seal around a saltwater pool?',
        a: 'Yes, and it matters more there. Sealing slows how much salty water the stone absorbs, which is what drives salt damage over time.',
      },
      {
        q: 'Do we need to empty the pool?',
        a: 'No. We work around the water and tell you how long to keep off the surround afterwards.',
      },
    ],
    guide: { href: '/guides/white-haze-on-new-paving', text: 'White haze on paving: efflorescence explained' },
  },
  {
    slug: 'driveways',
    name: 'Driveways',
    title: 'Driveway Cleaning & Sealing Melbourne | Spickle',
    description:
      'Driveway cleaning and sealing for exposed aggregate, concrete and stone across Melbourne. Oil stains treated, then sealed. From $15/m².',
    h1: 'Driveway cleaning and sealing',
    tagline:
      'Car oil, leaf stains and years of weather. A sealed driveway holds the next drip on top, where a rag and some detergent deal with it.',
    image: drivewayImg,
    imageAlt: 'Exposed aggregate driveway surface',
    problems: [
      'Oil and transmission fluid that soak into concrete and leave a dark shadow after washing.',
      'Leaf tannins and rust marks from cars, trailers and garden furniture.',
      'Weathering that dulls the colour of exposed aggregate.',
      'Mould and moss in the shaded strip along the fence.',
      'Old topical sealer that has peeled, gone patchy or lifted under hot tyres.',
    ],
    treatment: [
      'We clean the whole driveway, then treat oil and other stains with methods that draw them out rather than just washing the top.',
      'Then we seal: a penetrating sealer for a natural look, or a topical sealer for a wet-look or satin finish on concrete and aggregate. We tell you which suits a surface that takes cars.',
      'If an old sealer has failed, we strip it back first so the new one bonds properly. We test a patch before doing the whole driveway.',
    ],
    stones: ['aggregate', 'bluestone', 'granite', 'porphyry'],
    faqs: [
      {
        q: 'Can you get old oil stains out of my driveway?',
        a: 'Most improve a lot and many come out completely. A stain that has sat for months doesn’t always leave entirely, and we’ll tell you what’s realistic from your photos.',
      },
      {
        q: 'How long until I can drive on it?',
        a: 'It depends on the sealer and the weather. We tell you the time for your job when you book, so you can plan where the car goes.',
      },
      {
        q: 'My driveway was sealed before and it’s peeling. Can you fix it?',
        a: 'Yes. We strip the failed sealer, clean the surface back, then reseal with a product that suits a driveway.',
      },
    ],
    guide: { href: '/guides/oil-stains-on-exposed-aggregate', text: 'Oil stains on an exposed aggregate driveway' },
  },
];
