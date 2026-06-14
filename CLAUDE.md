# Spickle Website

React + Vite site for Spickle Cleaning & Sealing (spickle.com.au).
Deployed on Vercel. GitHub repo: DJLanceUppercut organisation.

Stack: React, React Router v6, plain CSS modules (no Tailwind, no component libraries). Plain JSX only — no TypeScript.

## Design tokens (src/styles/global.css CSS variables)
- `--bg: #FFFFFF` (white page background)
- `--bg-card: #E8F5F1` (light mint for alternating sections and cards)
- `--text: #002f49` (dark navy for body and headings)
- `--text-secondary: #4a6a7a` (mid-teal for secondary/muted text)
- `--accent: #219EBC` (brand teal — CTAs, icons, links)
- `--font-display: 'Brother 1816', 'Montserrat', sans-serif`
- `--font-body: 'Inter', sans-serif`

## Button classes (global.css)
- `.btn-primary` — teal background (#219EBC), white text, square corners, 48px min height. Use on white/mint backgrounds.
- `.btn-ghost` — transparent, teal border and text. Use on white/mint backgrounds.
- `.btn-ghost-light` — transparent, white border and text. Use on dark/teal backgrounds (e.g. inside Hero over dark overlay, or on CTA banner).

## Rules
- No TypeScript. Plain JSX only.
- No CSS frameworks. CSS modules only.
- All surface pages use the SurfacePage component (src/components/SurfacePage.jsx), data passed as props from src/data/surfaces.js via SurfaceRouter.
- The Book Now button links to the ServiceM8 hosted form — do not build a custom form.
- All images live in /public/images/ or /public/gallery/.
- Mobile-first responsive. Key breakpoints: 375px, 768px, 1280px.
- Hero component always has a dark overlay over the image — always use explicit white (#FFFFFF) text inside Hero, never `var(--text)`.
- CTABanner component uses `var(--accent)` teal as its background. Its internal button uses `styles.ctaBtn` (white bg, navy text) defined in CTABanner.module.css.
- Header: transparent over hero (white text via `--header-fg` CSS custom property), switches to white background + navy text on scroll.

## Business info
- Phone: 1300 22 00 45
- Email: info@spickle.com.au
- Facebook: facebook.com/profile.php?id=100088685563706
- Instagram: instagram.com/spickle_sealing
- Products used: GuardIT Solutions, Lithofin and Environex (professional, eco-friendly stone care)
- ServiceM8 booking form: embed code added to /book page via dangerouslySetInnerHTML

## Image conventions
Placeholder images use local paths — replace with real photos when available:
- Surface hero: /images/surfaces/{slug}-hero.jpg
- Surface card thumb: /images/surfaces/{slug}-card.jpg
- Gallery before: /gallery/{slug}-before-{n}.jpg
- Gallery after: /gallery/{slug}-after-{n}.jpg
- Site hero: /images/hero-bg.png

When real images arrive, just drop them in at the same paths — no code changes needed.

## Logo
All logo files live in `/public/images/logo/`. Six variants:

| File | Description | Use where |
|------|-------------|-----------|
| `Spickle-Colour.png` | Teal logo with tagline | Standalone / print |
| `Spickle-Colour-noTagLine.png` | Teal logo, no tagline | Header and footer (works on both white and dark bg) |
| `Spickle-Inverted.png` | Black logo with tagline | Black-on-white print only |
| `Spickle-Inverted-noTagLine.png` | Black logo, no tagline | Black-on-white print only |
| `3D-White-Transparent.png` | 3D render, white, with tagline | Dark backgrounds / marketing |
| `3D-White-Transparent-noTagLine.png` | 3D render, white, no tagline | Dark backgrounds / marketing |

**Header:** single `Spickle-Colour-noTagLine.png` (teal) used for all states — works on both transparent and white scrolled header.
**Footer:** uses `Spickle-Colour-noTagLine.png` (light mint background). Tagline text is kept as a separate paragraph below.
