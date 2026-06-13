# Spickle Website

React + Vite site for Spickle Cleaning & Sealing (spickle.com.au).
Deployed on Vercel. GitHub repo: DJLanceUppercut organisation.

Stack: React, React Router v6, plain CSS modules (no Tailwind, no component libraries). Plain JSX only — no TypeScript.

## Design tokens (src/styles/global.css CSS variables)
- `--bg: #111111`
- `--bg-card: #1A1A1A`
- `--text: #FFFFFF`
- `--text-secondary: #F5F5F0`
- `--accent: #C8A96E`
- `--font-display: 'Playfair Display', serif`
- `--font-body: 'Inter', sans-serif`

## Rules
- No TypeScript. Plain JSX only.
- No CSS frameworks. CSS modules only.
- All surface pages use the SurfacePage component (src/components/SurfacePage.jsx), data passed as props from src/data/surfaces.js via SurfaceRouter.
- The Book Now button links to the ServiceM8 hosted form — do not build a custom form.
- All images live in /public/images/ or /public/gallery/.
- Mobile-first responsive. Key breakpoints: 375px, 768px, 1280px.
- CTA buttons: gold background (#C8A96E), black text, no border radius, 48px height minimum. Class: `.btn-primary` in global.css.
- Ghost/outline buttons: `.btn-ghost` in global.css.

## Business info
- Phone: 1300 22 00 45
- Email: info@spickle.com.au
- Facebook: facebook.com/profile.php?id=100088685563706
- Instagram: instagram.com/spickle_sealing
- Products used: GuardIT Solutions (Australian-made, eco-friendly)
- ServiceM8 booking form: embed code added to /book page via dangerouslySetInnerHTML

## Image conventions
Placeholder images use local paths — replace with real photos when available:
- Surface hero: /images/surfaces/{slug}-hero.jpg
- Surface card thumb: /images/surfaces/{slug}-card.jpg
- Gallery before: /gallery/{slug}-before-{n}.jpg
- Gallery after: /gallery/{slug}-after-{n}.jpg
- Site hero: /images/hero-bg.jpg

When real images arrive, just drop them in at the same paths — no code changes needed.
