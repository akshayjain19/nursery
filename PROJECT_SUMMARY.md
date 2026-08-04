# Project Summary — Indore Nursery Lead Gen Website

## Overview

A premium static website for Indore Nursery, a plant and garden supply business in Indore, Madhya Pradesh. The site is a lead generation tool — there is no shopping cart or payment flow. Every product interaction routes the visitor to WhatsApp, where the sale closes manually.

**Live URL:** https://nursery-fawn.vercel.app  
**Client:** Indore Nursery (indorenursery.com)  
**WhatsApp:** +91 8305449559  

---

## Business Problem Being Solved

The client's existing website (indorenursery.com) is outdated and generates almost no inbound enquiries. The typical purchase journey for a nursery customer in India is:
1. Find a plant on Google or social media
2. Ask about availability and price on WhatsApp
3. Visit in person or arrange delivery

This site bridges steps 1 and 2 — it gets customers from search/social to WhatsApp with one click.

---

## Product Goals

- Drive WhatsApp enquiries for every product
- Present 30+ products with prices in a searchable, filterable catalogue
- Build trust through professional design
- Rank for local SEO terms like "plant nursery in Indore"
- Be fast, mobile-first, and easy for the client to maintain (JSON-based data)

---

## Target Users

**Primary:** Indore residents aged 25–50 looking to buy indoor/outdoor plants  
**Secondary:** Corporate/office buyers looking for bulk plants or landscaping  
**Tertiary:** People looking for gifting plants (birthdays, housewarming)

---

## Implementation Status

### Completed
- Homepage with hero, category grid, best sellers, "Why Choose Us", CTA
- Product catalogue page with search (Fuse.js), category filters, price range, sorting
- 30 products across 9 categories with prices in INR
- WhatsApp deep links on every product card (pre-fills product name + price in message)
- Sticky Navbar with WhatsApp CTA button
- Footer with address, contact info, social links
- Privacy Policy page
- Terms & Conditions page
- Business config JSON (single source of truth for all contact/business data)
- Deployed to Vercel

### Partially Complete
- **Product images** — all products reference `/images/*.jpg` paths but no real images have been uploaded. Currently shows broken image placeholder. Needs real plant photos added to `public/images/`.
- **CSS styling on production** — Tailwind switched to CDN approach to fix build pipeline issues; styling should now work but has not been visually confirmed post-CDN switch.

### Not Started
- Individual product detail pages (`/products/[id]`)
- About Us page (`/about`)
- Contact form or contact page
- WhatsApp floating button (persistent bottom-right)
- Blog / care guides section
- Google Analytics / tracking
- OG image / social sharing image
- Sitemap.xml for SEO
- robots.txt
- Google My Business structured data (LocalBusiness schema)

---

## Architecture

```
Static Site (Next.js App Router)
├── Data Layer: JSON files (no database)
│   ├── config/business.json  ← all business configuration
│   └── data/products.json    ← product catalogue
├── Pages: app/ directory (Next.js App Router)
├── Components: components/ directory
├── Utilities: lib/ (search, filtering, formatting, WhatsApp URL builder)
└── Types: types/index.ts
```

All pages are statically generated at build time (SSG). No server-side rendering, no API routes, no database.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.12 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS (via CDN) | 3.x |
| Animations | Framer Motion | ^12 |
| Search | Fuse.js | ^7.5 |
| Deployment | Vercel | — |
| Node | Node.js | 20+ |

---

## Folder Structure

```
nursery/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout (Tailwind CDN loaded here)
│   ├── globals.css         # Base CSS (fonts, body defaults)
│   ├── categories/
│   │   └── page.tsx        # Product browse/search/filter page
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── terms/
│       └── page.tsx        # Terms & conditions
├── components/             # Reusable React components
│   ├── Button.tsx          # Primary button (4 variants)
│   ├── CategoryCard.tsx    # Category grid card
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Homepage hero section
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── ProductCard.tsx     # Product grid card with WhatsApp CTA
│   └── WhatsAppButton.tsx  # WhatsApp enquiry button
├── config/
│   └── business.json       # All business data (phone, address, categories, etc.)
├── data/
│   ├── products.json       # 30 products with prices
│   └── plants-reference.json # Extended plant data (not used in UI yet)
├── lib/
│   ├── search.ts           # Fuse.js search wrapper
│   └── utils.ts            # Helpers: cn(), formatPrice(), filterProducts(), getWhatsAppLink()
├── public/
│   └── images/             # Product images (EMPTY — needs real photos)
├── types/
│   └── index.ts            # TypeScript interfaces (Product, FilterState, Category)
├── next.config.ts
├── tailwind.config.ts      # Tailwind v3 config (used only locally, not for CDN)
└── postcss.config.mjs      # PostCSS config (tailwindcss + autoprefixer)
```

---

## APIs and Integrations

**WhatsApp Business API (wa.me links)**
- Format: `https://wa.me/919305449559?text=<encoded message>`
- Every product card generates a pre-filled WhatsApp message with product name and price
- Central phone number sourced from `config/business.json`

**Google Fonts (CDN)**
- DM Sans (headings) and Inter (body) loaded via `@import` in `globals.css`

**Tailwind CSS CDN**
- Loaded via `<script src="https://cdn.tailwindcss.com">` in layout.tsx
- Custom color palette configured inline as `tailwind.config` object

---

## Environment Variables

None required. This is a fully static site with no server-side secrets.

---

## Known Limitations

1. **No real product images** — all 30 products use placeholder image paths that return 404. Real photos need to be added to `public/images/`.
2. **Tailwind CDN in production** — loading all of Tailwind (~300KB uncompressed) via CDN on every visit is slower than a build-time purged stylesheet. Acceptable for MVP; should be replaced with proper PostCSS build when the styling pipeline is fixed.
3. **Category mismatch** — `types/index.ts` defines 7 old categories; `config/business.json` defines 9 real categories; `data/products.json` uses the 9 real ones. The `CATEGORIES` export in `types/index.ts` is stale and not used anywhere meaningful.
4. **Hardcoded WhatsApp number in utils.ts** — `getWhatsAppLink()` defaults to `+919999999999` as fallback; all actual usages pass the correct number from `businessConfig`, but the fallback is wrong.
5. **No product images in public/** — `public/images/` directory exists but is empty.

---

## Technical Debt

- `hooks/` and `utils/` directories exist at root but are empty
- `data/plants-reference.json` is a comprehensive plant database (25+ plants with care info) that is not consumed by any UI component
- `tailwind.config.ts` is maintained but only relevant for local dev with PostCSS; the CDN approach uses its own inline config
- `types/index.ts` CATEGORIES array is stale (old 7 categories vs. 9 in use)
- `lib/utils.ts` has a wrong default phone number in `getWhatsAppLink()`

---

## Future Roadmap

### Phase 2 — Content & SEO
- Add real product photos to `public/images/`
- Individual product pages (`/products/[id]`)
- About Us page with nursery story
- Blog/care guides (helps SEO)
- Google My Business structured data (LocalBusiness JSON-LD)
- Sitemap.xml + robots.txt

### Phase 3 — Engagement
- WhatsApp floating button (always visible, bottom-right)
- Customer testimonials section
- Instagram feed embed
- Plant care quiz → WhatsApp CTA
- Google Analytics 4 integration

### Phase 4 — Growth
- WhatsApp catalogue integration (official WhatsApp Business API)
- Repeat customer section (loyalty, offers)
- Seasonal promotions banner

---

## Recommended Next Priorities

1. **Add product images** — biggest visual gap right now
2. **Verify CDN styling works** — confirm the Tailwind CDN fix is rendering correctly at https://nursery-fawn.vercel.app
3. **Fix types/index.ts CATEGORIES** — align with the 9 categories in business.json
4. **Add WhatsApp floating button** — highest ROI for lead gen
5. **Individual product pages** — needed for SEO and sharing links
