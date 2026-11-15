# Spickle Website (Astro rebuild, branch `astro-rebuild`)

Astro static site for Spickle Cleaning & Sealing (spickle.com.au). Deployed on Vercel project `spickle-website`.
The June React build lives on `master`; this branch is the Astro rebuild being compared against it.

## Stack
- Astro, static output (`npm run build` -> `dist/`). No CSS frameworks. Component-scoped `<style>` plus `src/styles/global.css`.
- Fonts: Archivo Variable for body/UI (stand-in until a Brother 1816 web licence is bought) and Marcellus for display headings. Both self-hosted via @fontsource.
- Design direction: "Dusk" (picked 14 Nov from the design canvas). Dark navy ground throughout, Marcellus display type, photo-led hero, mint pricing band as the one light moment. Stone pages generate from `src/data/stones.js` via `src/pages/[stone].astro`.

## Brand tokens (src/styles/global.css)
- `--teal: #219ebc`, `--navy: #002f49`, `--mint: #e8f5f1`, `--ink: #2d2a26` (from the 2022 brand guidelines)
- Logos: `public/logo-colour.png`, `public/logo-white.png`

## Rules
- Bookings go through ServiceM8 (embed or hosted link). Do not build a custom booking form.
- Keep the old Strikingly page addresses (/bluestone, /limestone, /granite, /travertine, /slate, /aggregate, /services, /faq, /book-now, /contact) so rankings carry over.
- Anything still needed from Lukey is shown in a `.todo` dashed block. Don't invent facts (years in business, insurance, review counts).
- `<meta name="robots" content="noindex">` in `src/layouts/Base.astro` is deliberate until launch. Remove it at cutover.
- No em dashes in copy.

## Business info
- Phone: 1300 22 00 45 · Email: info@spickle.com.au
- Pricing: from $15 per m² (no upper figure on the site: bigger or more demanding jobs can go higher), depending on the sealer and the job; rural travel is a separate fee.
