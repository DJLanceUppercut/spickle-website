// Local landing pages for search: one per suburb, built at /service-areas/<slug>.
// These are separate from the flyer pages in suburbs.js (those sit at /<slug>
// and carry the campaign wording). Chosen for larger homes with pools and
// paving, where the work tends to be bigger and the owners care about finish.
//
// To add a suburb, add an entry. `angle` must be written for that suburb:
// no copied sentences, no invented facts (no counts, years, named streets or
// customers). `near` lists neighbouring suburbs by name; any that have their
// own page here are linked automatically.

export const localAreas = [
  // Inner and eastern
  { slug: 'toorak', name: 'Toorak', region: 'inner', near: ['South Yarra', 'Armadale', 'Malvern'],
    angle: 'Large blocks, established gardens and generous entertaining areas mean a lot of paving in Toorak. We clean and seal bluestone, limestone, travertine and the rest, from front entries to pool surrounds.' },
  { slug: 'south-yarra', name: 'South Yarra', region: 'inner', near: ['Toorak', 'Armadale', 'Prahran', 'Richmond'],
    angle: 'South Yarra mixes period houses, newer townhouses and apartment courtyards, so the stone comes in every age and type. We match the cleaner and sealer to each one.' },
  { slug: 'armadale', name: 'Armadale', region: 'inner', near: ['Toorak', 'Malvern', 'South Yarra', 'Prahran'],
    angle: 'Period homes with front paths, steps and courtyards are common in Armadale, and older stone needs a gentler hand. We test a patch first and choose the cleaner for the stone, not the other way round.' },
  { slug: 'malvern', name: 'Malvern', region: 'inner', near: ['Armadale', 'Toorak', 'Glen Iris', 'Caulfield'],
    angle: 'Established gardens in Malvern drop leaves, shade the paving and keep it damp, which is how moss and tannin staining start. We clean the stone back and seal it so the next season is easier.' },
  { slug: 'kew', name: 'Kew', region: 'inner', near: ['Hawthorn', 'Balwyn', 'Alphington', 'Fairfield'],
    angle: 'Mature trees over Kew paths, patios and driveways mean leaf stains, moss and slippery algae. We lift them with methods suited to the stone, then seal it against the next round.' },
  { slug: 'hawthorn', name: 'Hawthorn', region: 'inner', near: ['Kew', 'Camberwell', 'Richmond', 'Burnley'],
    angle: 'Older Hawthorn homes often have original paving alongside stone added in renovations. We identify each stone before choosing a cleaner, because the wrong one can etch softer stone for good.' },
  { slug: 'camberwell', name: 'Camberwell', region: 'inner', near: ['Hawthorn', 'Balwyn', 'Glen Iris', 'Kew'],
    angle: 'Larger family homes in Camberwell mean bigger patios, pool surrounds and long driveways. We price from photos and a rough size, so you know the cost before anyone visits.' },
  { slug: 'balwyn', name: 'Balwyn', region: 'inner', near: ['Kew', 'Camberwell', 'Mont Albert', 'Bulleen'],
    angle: 'Established gardens and shaded paving in Balwyn collect moss, algae and leaf stains. We clean stone and concrete back with methods that suit the surface, then seal it.' },
  { slug: 'glen-iris', name: 'Glen Iris', region: 'inner', near: ['Malvern', 'Ashburton', 'Camberwell', 'Burwood'],
    angle: 'Shady paving under established gardens is hard on stone in Glen Iris, with moss and tannin staining the usual result. We clean it back and seal it so it stays easier to keep clean.' },
  { slug: 'templestowe', name: 'Templestowe', region: 'inner', near: ['Doncaster', 'Bulleen', 'Donvale', 'Warrandyte'],
    angle: 'Larger blocks and bush-edged gardens in Templestowe mean leaf litter, shade and plenty of paving to look after. We clean and seal driveways, patios and pool surrounds to suit the stone.' },

  // Bayside
  { slug: 'brighton', name: 'Brighton', region: 'bayside', near: ['Hampton', 'Gardenvale', 'Elsternwick', 'Sandringham'],
    angle: 'Salt air, sand and constant pool use are hard on paving around Brighton. We clean stone and concrete back, then seal it so spills and sand are easier to deal with.' },
  { slug: 'hampton', name: 'Hampton', region: 'bayside', near: ['Brighton', 'Sandringham', 'Highett'],
    angle: 'Bayside homes around Hampton often have limestone, travertine or bluestone around pools and entertaining areas. Each takes cleaners and sealers differently, so we identify the stone first.' },
  { slug: 'sandringham', name: 'Sandringham', region: 'bayside', near: ['Hampton', 'Brighton', 'Black Rock', 'Highett'],
    angle: 'Salt air and sand reach the paving in Sandringham, and pool surrounds go through constant wet and dry cycles. We clean the stone back and seal it to suit.' },
  { slug: 'beaumaris', name: 'Beaumaris', region: 'bayside', near: ['Black Rock', 'Cheltenham', 'Mentone', 'Sandringham'],
    angle: 'Close to the bay, Beaumaris paving takes salt, sand and plenty of weather. We clean it back and choose a sealer to suit the stone and how it is used.' },
  { slug: 'black-rock', name: 'Black Rock', region: 'bayside', near: ['Beaumaris', 'Sandringham', 'Cheltenham'],
    angle: 'Coastal air, shade from established trees and pool surrounds mean Black Rock paving gets a lot of use. We clean and seal stone and concrete to suit each surface.' },

  // Mornington Peninsula
  { slug: 'mount-eliza', name: 'Mount Eliza', region: 'peninsula', near: ['Mornington', 'Frankston', 'Langwarrin'],
    angle: 'Larger blocks, established gardens and coastal weather around Mount Eliza are tough on paving. We clean and seal driveways, terraces and pool surrounds, matching the treatment to the stone.' },
  { slug: 'mornington', name: 'Mornington', region: 'peninsula', near: ['Mount Eliza', 'Mount Martha'],
    angle: 'Coastal weather and shaded gardens around Mornington bring moss, algae and salt onto paving. We clean it back and seal it, matching the treatment to the stone.' },
  { slug: 'mount-martha', name: 'Mount Martha', region: 'peninsula', near: ['Mornington', 'Safety Beach', 'Dromana'],
    angle: 'Sea air and sheltered gardens in Mount Martha keep paving damp and prone to algae. We clean it back and seal it so it is easier to keep clean.' },
  { slug: 'sorrento', name: 'Sorrento', region: 'peninsula', near: ['Portsea', 'Blairgowrie', 'Rye'],
    angle: 'Salt air, sand and holiday homes that sit empty between visits let moss and algae take hold on Sorrento paving. We clean it back and seal it to suit the stone.' },
  { slug: 'portsea', name: 'Portsea', region: 'peninsula', near: ['Sorrento', 'Blairgowrie'],
    angle: 'Coastal weather and homes used in bursts are hard on Portsea paving, with salt, algae and moss building up between visits. We clean it back and seal it to suit the stone.' },
];

// Guides worth reading, by region, shown at the foot of each page.
export const regionGuides = {
  inner: ['mould-on-sandstone', 'how-often-to-reseal'],
  bayside: ['limestone-etching', 'how-often-to-reseal'],
  peninsula: ['mould-on-sandstone', 'how-often-to-reseal'],
};
