// One entry per stone page. Keep the old Strikingly addresses as slugs.
// General stone facts only; anything Spickle-specific that Lukey hasn't
// confirmed stays out or goes in a .todo block on the page.

export const stones = [
  {
    slug: 'bluestone',
    name: 'Bluestone',
    image: '/images/surfaces/bluestone.jpg',
    tagline: 'Melbourne’s stone. Dense, dark and forgiving, until oil finds it.',
    what: 'Bluestone is a volcanic basalt and the classic Melbourne paver, from laneways to pool surrounds. It’s dense and hard-wearing, with the small surface holes known as cat’s paws that give it its character.',
    risks: [
      'Those cat’s paw holes trap dirt, soap scum and barbecue fat, and they’re slow to scrub out by hand.',
      'The dark colour hides oil stains until the stone is wet, so they’re often further along than they look.',
      'New bluestone commonly throws efflorescence, the white salt haze, in its first months.',
    ],
    treatment: 'We clean with products matched to basalt, lift efflorescence and any early staining, then seal. A penetrating sealer is the usual choice outdoors: it protects from within the stone, keeps the natural look and doesn’t change slip resistance. An enhancing sealer can deepen the colour towards its wet look if that’s the finish you’re after.',
  },
  {
    slug: 'limestone',
    name: 'Limestone',
    image: '/images/surfaces/limestone.webp',
    tagline: 'Soft, light and porous. The stone that most needs sealing, and careful cleaning.',
    what: 'Limestone brings a pale, warm look to pool surrounds and alfresco areas. It’s a soft, porous stone, which is exactly why it needs more care than most.',
    risks: [
      'Limestone is acid-sensitive. Wine, citrus, vinegar and many off-the-shelf cleaners etch the surface permanently.',
      'Its open pores drink in oil, tannins from leaves, and red wine quickly.',
      'Around pools, salt and minerals can mark unsealed limestone.',
    ],
    treatment: 'We clean limestone with pH-neutral products only; acid-based cleaners that are routine on other surfaces would etch it. After cleaning, a penetrating sealer is close to essential outdoors: it slows absorption so spills sit long enough to be wiped up instead of soaking straight in.',
  },
  {
    slug: 'travertine',
    name: 'Travertine',
    image: '/images/surfaces/travertine-tile.jpg',
    tagline: 'Beautiful, pitted, and quick to hold grime in every void.',
    what: 'Travertine is a limestone formed around mineral springs, known for the natural pits and voids across its face. It’s a favourite for pool copings and alfresco floors.',
    risks: [
      'The pits collect dirt, organic matter and mould, and they’re tedious to clean once filled.',
      'Like limestone, travertine is acid-sensitive and etches with wine, citrus and harsh cleaners.',
      'Unfilled travertine is especially absorbent, so oil marks spread below the surface.',
    ],
    treatment: 'We clean the stone and its pits with pH-neutral products, treat any mould or staining, then apply a penetrating sealer so the surface and the voids stop holding on to grime. Filled and honed travertine can also take a topical finish where a sheen is wanted indoors.',
  },
  {
    slug: 'granite',
    name: 'Granite',
    image: '/images/surfaces/granite.jfif',
    tagline: 'The toughest of the common pavers. Low maintenance, not no maintenance.',
    what: 'Granite is a dense igneous stone, one of the hardest paving materials going. Flamed granite is popular for driveways and high-traffic areas because it shrugs off wear that would mark softer stone.',
    risks: [
      'Dense doesn’t mean sealed: oil from cars and cooking can still penetrate and leave shadows.',
      'Light granites show rust spots where iron-bearing minerals oxidise.',
      'Grout haze and efflorescence from installation sit on the surface until they’re properly removed.',
    ],
    treatment: 'Granite needs less protection than porous stone, but a penetrating sealer still earns its keep on driveways and entertaining areas, where oil is the main threat. We clean off installation residues first so the sealer bonds to stone, not haze.',
  },
  {
    slug: 'slate',
    name: 'Slate',
    image: '/images/surfaces/slate.jpg',
    tagline: 'Layered, textured and prone to flaking when the wrong sealer peels.',
    what: 'Slate is a fine-grained layered stone with natural texture and colour variation, common in older Melbourne paths and patios as well as new work.',
    risks: [
      'Slate’s layers can lift and flake, and a failing topical coating accelerates it.',
      'Old slate is often carrying layers of past sealers that have whitened or peeled.',
      'The textured face holds dirt and mould in its low spots.',
    ],
    treatment: 'Where an old coating is failing we strip it back before anything else. Dense slate doesn’t absorb film-forming sealers well, so a penetrating sealer is usually the safer choice; an enhancing version brings out the colour range that makes slate worth having.',
  },
  {
    slug: 'sandstone',
    name: 'Sandstone',
    image: '/images/surfaces/sandstone.jpg',
    tagline: 'The most absorbent stone we treat. Seal it early or it shows everything.',
    what: 'Sandstone’s warm banded colours make it a favourite for paths, steps and pool surrounds. It’s also the most porous stone on this list, which drives everything about how it’s treated.',
    risks: [
      'Sandstone drinks liquids: oil, wine and tannin stains establish fast and deep.',
      'In shaded or damp spots it greens up with mould and algae quicker than denser stone.',
      'Aggressive pressure cleaning can scour the soft surface and leave wand marks.',
    ],
    treatment: 'We clean sandstone gently, treat mould and staining, then seal with a penetrating sealer, the closest thing to a must-have for this stone. Sealing early in its life is the difference between a surface that wipes clean and one that records every spill.',
  },
  {
    slug: 'porphyry',
    name: 'Porphyry',
    image: '/images/surfaces/porphyry.jpg',
    tagline: 'Dense European cobble stone, built for traffic, better sealed.',
    what: 'Porphyry is a dense volcanic stone, usually laid as cobbles, crazy paving or flagstones. It’s extremely hard-wearing, which is why it turns up on driveways and commercial forecourts.',
    risks: [
      'The many joints in cobble and crazy-paved porphyry mean plenty of grout to haze the surface during installation.',
      'Oil from vehicles is the main stain risk on porphyry driveways.',
      'Its textured face holds dirt that dulls the stone’s natural colour range.',
    ],
    treatment: 'We remove installation residues and built-up grime, then seal. A penetrating sealer protects without changing the look; an enhancing sealer deepens porphyry’s reds, greys and purples, which is often why people chose the stone in the first place.',
  },
  {
    slug: 'aggregate',
    name: 'Concrete & exposed aggregate',
    image: '/images/surfaces/aggregate-tile.jpg',
    tagline: 'Not stone, but it stains like it. Driveways are where sealing pays for itself.',
    what: 'Exposed aggregate and plain concrete cover more Melbourne driveways than any stone. Concrete is porous, and the textured face of exposed aggregate gives oil and dirt plenty to hold on to.',
    risks: [
      'Oil drips from cars soak into unsealed concrete and spread into shadows that resist scrubbing.',
      'Tyre marks, leaf tannins and rust streaks build up and dull the finish.',
      'Weather and traffic slowly erode an unsealed surface, loosening fines around the aggregate.',
    ],
    treatment: 'We pressure clean with controlled equipment, treat oil and rust staining, then seal. Penetrating sealers keep the natural matte look; topical sealers can add the wet-look or satin finish many exposed aggregate owners want, and we’ll tell you the trade-offs of each before you choose.',
  },
];
