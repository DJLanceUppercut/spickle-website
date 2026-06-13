# Spickle Website Rebuild — Project Plan

## Overview

Full rebuild of spickle.com.au from Strikingly to a custom React + Vite site deployed on Vercel. The site is a lead-generation and credibility tool for a Melbourne-based natural stone cleaning and sealing business. Its one job: get a visitor to book a job or request a quote. ServiceM8 handles all booking logic — the website links out to the hosted ServiceM8 booking form.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React + Vite | Lukey already uses this stack (SDC Catalog / Vercel workflow) |
| Styling | Plain CSS modules or inline styles | No build complexity, consistent with existing projects |
| Routing | React Router v6 | Clean multi-page URLs, good for SEO |
| Deployment | Vercel | Already set up, GitHub integration via DJLanceUppercut |
| Booking | ServiceM8 hosted form (linked, not embedded) | Zero maintenance, native ServiceM8 UX, jobs land in dashboard automatically |
| Analytics | Google Analytics 4 | Track conversions (Book Now clicks) |
| Maps | Google Maps embed | Show Melbourne service area on Contact page |

No CMS is needed at this stage. Content changes are infrequent and can be done directly in code.

---

## Design Direction

**Aesthetic:** Premium trade service. Clean, dark, minimal. Stone textures used sparingly as accents — not wallpaper. The site should feel like it belongs next to a high-end builder or architect's website, not a generic tradie directory listing.

**Palette:**
- `#111111` — near-black background (primary)
- `#FFFFFF` — primary text
- `#F5F5F0` — off-white for secondary text / subtle section contrast
- `#C8A96E` — warm stone gold (accent, used on CTAs and key headings only)
- `#1A1A1A` — card/panel backgrounds

**Typography:**
- Display: `Playfair Display` (serif) — hero headlines and section titles, conveys premium quality
- Body: `Inter` (sans-serif) — all other text, readable at any size
- Both available via Google Fonts

**Photography (placeholder until real images arrive):**
Use high-quality placeholder images from Unsplash (stone textures, polished floors) as temporary fills. When Lukey supplies before/after images, they slot in via the same `src` path — no layout changes needed.

**CTA Style:** A single consistent "Book Now" button style across the whole site. Gold background (`#C8A96E`), black text, no border radius (sharp corners signal confidence, not a SaaS app).

---

## Site Structure

```
/                    → Homepage
/services            → Services overview
/surfaces            → Surfaces hub (optional, or redirect to individual pages)
/surfaces/bluestone  → Bluestone cleaning & sealing
/surfaces/limestone  → Limestone cleaning & sealing
/surfaces/granite    → Granite cleaning & sealing
/surfaces/travertine → Travertine cleaning & sealing
/surfaces/slate      → Slate cleaning & sealing
/surfaces/sandstone  → Sandstone cleaning & sealing
/surfaces/aggregate  → Aggregate / concrete cleaning & sealing
/gallery             → Before & after gallery
/faq                 → Frequently asked questions
/book                → Book Now (ServiceM8 link / button page)
/contact             → Contact page
/404                 → Not found
```

---

## Page-by-Page Specification

### `/` — Homepage

**Job of this page:** Convert a visitor who found Spickle via Google into someone who books or at least picks up the phone.

**Sections in order:**

1. **Hero**
   - Full-viewport dark section with a high-quality background image (polished stone / cleaned surface)
   - Headline: `Melbourne's Stone Cleaning & Sealing Specialists`
   - Subheadline: `Natural stone, concrete and aggregate — cleaned, sealed and protected.`
   - Two CTAs side by side: `Book Now` (primary, gold) and `See Our Services` (secondary, ghost/outline)
   - Phone number visible: `1300 22 00 45`

2. **Trust bar** (thin strip below hero)
   - 3–4 short trust signals in a horizontal row, e.g.: `20+ Years Experience`, `Melbourne-Wide Service`, `Eco-Friendly Products`, `Fully Insured`

3. **What We Do** (3 columns)
   - Cleaning / Sealing / Stain Removal
   - Icon + short heading + 2-sentence description each
   - No links — this is a summary only

4. **Surfaces We Clean** (grid)
   - 8 surface types as clickable cards: Bluestone, Limestone, Granite, Travertine, Slate, Sandstone, Aggregate, Porphyry
   - Each card: surface image (or texture placeholder) + name + arrow link to surface page
   - Headline: `Every Surface Is Different`

5. **Why Spickle** (alternating image + text or single-column)
   - 3 key differentiators:
     - GuardIT products (eco-friendly, Australian-made)
     - Tailored process per stone type
     - Professional results, not DIY shortcuts

6. **Before & After teaser**
   - 2–3 before/after image pairs (placeholder initially)
   - Link to full gallery page

7. **CTA banner**
   - Dark full-width strip: `Ready to restore your stone?` + `Book Now` button

8. **Footer** (shared across all pages — see below)

---

### `/services` — Services

**Sections:**
1. Page hero — `What We Do` with short intro paragraph
2. Three service cards (full detail this time):
   - **Cleaning** — method overview, what it achieves, what surfaces it suits
   - **Sealing** — types of sealers (penetrating vs topical), how long it lasts, why it matters
   - **Stain Removal** — efflorescence, mould, tannins, oil & grease — what Spickle uses (GuardIT)
3. Surface type grid (same component as homepage, reused)
4. CTA strip — Book Now

---

### `/surfaces/[surface]` — Individual Surface Pages

One page per surface. All share the same layout template, content differs.

Surfaces: `bluestone`, `limestone`, `granite`, `travertine`, `slate`, `sandstone`, `aggregate`, `porphyry`

**Template layout:**
1. **Hero** — surface name as headline, one-line descriptor, hero image of that surface
2. **About this surface** — 2–3 paragraphs: what it is, where it's commonly used, why it needs professional care
3. **Our process for [surface]** — 3–4 steps: inspect → clean → treat/stain remove → seal
4. **Before & After** — 2 image pairs specific to that surface (placeholder initially)
5. **Products we use** — GuardIT callout with brief explanation of why it suits this surface
6. **FAQ** — 3–4 surface-specific questions (inline, not linked to main FAQ)
7. **CTA** — `Book a [Bluestone] Clean` button linking to ServiceM8

SEO notes per page:
- Title tag: `[Surface] Cleaning & Sealing Melbourne | Spickle`
- Meta description: unique per surface, 150–160 characters
- H1: `[Surface] Cleaning & Sealing Melbourne`
- Internal links to related surfaces and services

---

### `/gallery` — Before & After Gallery

**Layout:**
- Grid of before/after image pairs
- Each pair: side-by-side or slider (slider preferred for mobile)
- Filter bar at top by surface type: All / Bluestone / Limestone / Granite / etc.
- No lightbox required at launch — full images in the grid is fine
- Caption under each: surface type + brief job description (e.g., `Bluestone paving — stain removal + seal, Brighton`)

**Implementation note:** Images stored in `/public/gallery/` as JPGs. The filter is handled in React state — no backend needed.

---

### `/faq` — FAQ

**Layout:**
- Accordion-style Q&A
- Grouped by category:
  - General
  - Cleaning
  - Sealing
  - Pricing & Booking

**Sample questions to pre-populate (expand with real content):**
- How often should I have my stone sealed?
- Do I need to move furniture before you arrive?
- What products do you use and are they safe for pets and children?
- How long does sealing take to cure?
- Do you service all Melbourne suburbs?
- What's the difference between cleaning and sealing?
- Can you fix scratched or etched stone?

---

### `/book` — Book Now

**Layout:**
- Simple dark page, centred
- Headline: `Book a Job or Request a Quote`
- Short paragraph: what to expect after submitting (response time, what info helps)
- Large prominent ServiceM8 booking button (copy the HTML embed code from ServiceM8 dashboard → Settings → Online Booking)
- Alternative: phone number and email as secondary contact options below the button

**Note for Claude Code:** The ServiceM8 button is a pre-built HTML snippet from the ServiceM8 dashboard. Drop it into this page as a raw HTML block using React's `dangerouslySetInnerHTML` or place it in a plain `.html` wrapper if preferred.

---

### `/contact` — Contact

**Sections:**
1. Contact details:
   - Phone: `1300 22 00 45`
   - Email: `info@spickle.com.au`
   - Service area: `All Melbourne metropolitan suburbs`
2. Google Maps embed (centred on Melbourne)
3. Social links: Facebook + Instagram
4. Simple enquiry note — direct people to Book Now for job requests, contact for general questions

No contact form needed — all job enquiries go through ServiceM8.

---

### Shared Components

**Header (fixed/sticky):**
- Logo left (same logo from current site, white/transparent version)
- Nav links: Services | Surfaces (dropdown) | Gallery | FAQ | Contact
- `Book Now` button right-aligned (gold, always visible)
- Mobile: hamburger menu, full-screen overlay nav

**Footer:**
- Logo + tagline
- 3 column links: Services, Surfaces, Company (FAQ, Gallery, Contact)
- Contact details: phone + email
- Social icons: Facebook, Instagram
- Copyright: `© Spickle Pty Ltd 2025`
- GuardIT logo/mention (check if they require this)

---

## SEO Plan

Every page needs:
- Unique `<title>` tag: `[Page Topic] | Spickle — Melbourne Stone Cleaning & Sealing`
- Unique meta description
- One H1 per page
- Schema markup on homepage: `LocalBusiness` with name, phone, address, service area

Target keywords by page:

| Page | Primary keyword |
|---|---|
| Homepage | stone cleaning sealing Melbourne |
| Bluestone | bluestone cleaning Melbourne / bluestone sealing Melbourne |
| Limestone | limestone cleaning Melbourne |
| Granite | granite sealing Melbourne |
| Travertine | travertine cleaning Melbourne |
| Slate | slate sealing Melbourne |
| Services | natural stone cleaning service Melbourne |
| FAQ | how often seal bluestone Melbourne |

Google Business Profile: ensure it links to spickle.com.au and categories include `Stone cleaning service`.

---

## ServiceM8 Integration

1. In ServiceM8 dashboard: go to **Account → Features & Integrations → Online Booking**
2. Configure services (Cleaning, Sealing, Stain Removal) with questions and pricing logic
3. Copy the HTML button embed code
4. Paste into `/book` page in the React site
5. All enquiries land in ServiceM8 Inbox → convert to Job Card with customer details pre-filled

No API calls. No webhooks. Zero maintenance after setup.

---

## File Structure

```
spickle-website/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── gallery/              ← before/after images go here
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── CTABanner.jsx
│   │   ├── SurfaceCard.jsx
│   │   ├── BeforeAfter.jsx
│   │   └── FAQAccordion.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── FAQ.jsx
│   │   ├── Book.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   └── surfaces/
│   │       ├── Bluestone.jsx
│   │       ├── Limestone.jsx
│   │       ├── Granite.jsx
│   │       ├── Travertine.jsx
│   │       ├── Slate.jsx
│   │       ├── Sandstone.jsx
│   │       ├── Aggregate.jsx
│   │       └── Porphyry.jsx
│   ├── styles/
│   │   ├── global.css        ← CSS variables, resets, base typography
│   │   └── components/       ← per-component CSS modules
│   ├── data/
│   │   ├── surfaces.js       ← surface metadata (name, slug, description, hero image path)
│   │   └── faq.js            ← FAQ content array
│   ├── App.jsx               ← Router setup
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── CLAUDE.md                 ← project context for Claude Code sessions
```

---

## CLAUDE.md Content (for Claude Code)

When starting Claude Code sessions on this project, the CLAUDE.md at root should contain:

```
# Spickle Website

React + Vite site for Spickle Cleaning & Sealing (spickle.com.au).
Deployed on Vercel. GitHub repo: [to be created].

Stack: React, React Router v6, plain CSS (no Tailwind, no component libraries).

Design tokens (defined in src/styles/global.css as CSS variables):
--bg: #111111
--bg-card: #1A1A1A
--text: #FFFFFF
--text-secondary: #F5F5F0
--accent: #C8A96E
--font-display: 'Playfair Display', serif
--font-body: 'Inter', sans-serif

Rules:
- No TypeScript. Plain JSX only.
- No CSS frameworks.
- All surface pages use the same template (SurfacePage component), data passed as props.
- The Book Now button links to ServiceM8 hosted form — do not build a custom form.
- All images live in /public/gallery/ or /public/images/.
- Mobile-first responsive design. Test at 375px, 768px, 1280px.
- CTA buttons: gold background (#C8A96E), black text, no border radius, 48px height minimum.

Business info:
- Phone: 1300 22 00 45
- Email: info@spickle.com.au
- Social: facebook.com/profile.php?id=100088685563706 | instagram.com/spickle_sealing
- Products used: GuardIT Solutions (Australian-made, eco-friendly)
```

---

## Launch Checklist

- [ ] GitHub repo created and connected to Vercel
- [ ] Custom domain `spickle.com.au` pointed to Vercel (update DNS away from Strikingly)
- [ ] Google Analytics 4 property created, GA4 script added to `index.html`
- [ ] Google Search Console verified
- [ ] ServiceM8 booking form configured and embed code added to `/book`
- [ ] All surface pages written with unique SEO content
- [ ] Real before/after images uploaded to `/public/gallery/`
- [ ] Google Business Profile updated to link to new site
- [ ] Favicon set
- [ ] robots.txt and sitemap.xml generated (Vite plugin or manual)
- [ ] Test on mobile (iOS Safari + Android Chrome)
- [ ] Test Book Now flow end-to-end (submit a test job in ServiceM8)
- [ ] SSL active (Vercel handles this automatically)
- [ ] Old Strikingly site cancelled after confirming new site is live
