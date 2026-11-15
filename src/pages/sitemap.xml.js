// Sitemap of every indexable page. Built from the page files so new pages
// (stones, suburbs, guides) appear automatically.
const EXCLUDE = new Set(['/404', '/thank-you']);

export async function GET({ site }) {
  const modules = import.meta.glob('./**/*.astro');
  const paths = new Set();
  for (const file of Object.keys(modules)) {
    let p = file.replace(/^\./, '').replace(/\.astro$/, '').replace(/\/index$/, '') || '/';
    if (p.includes('[')) continue;
    paths.add(p);
  }
  const { stones } = await import('../data/stones.js');
  const { suburbs } = await import('../data/suburbs.js');
  const { guides } = await import('../data/guides.js');
  const { areas } = await import('../data/areas.js');
  areas.forEach((a) => paths.add(`/${a.slug}`));
  stones.forEach((s) => paths.add(`/${s.slug}`));
  suburbs.forEach((s) => paths.add(`/${s.slug}`));
  guides.forEach((g) => paths.add(`/guides/${g.slug}`));
  const urls = [...paths].filter((p) => !EXCLUDE.has(p)).sort();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${new URL(p, site).href.replace(/\/$/, p === '/' ? '/' : '')}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
