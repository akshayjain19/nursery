# Development Log

## Session Summary

**Project:** Indore Nursery Lead Gen Website  
**Developer:** Claude (AI assistant)  
**Period:** August 2026

---

## What Was Built

### 1. Project Initialization
- Bootstrapped with `create-next-app` using Next.js 16.2, TypeScript, Tailwind CSS, and App Router
- Configured custom Tailwind color palette: Forest Green (`#3a8e7a`), Sage Green (`#4d9681`), Terracotta (`#e67c3c`), Warm White (`#faf9f7`), Charcoal (`#2d2a27`)
- Set up DM Sans (headings) + Inter (body) via Google Fonts
- Installed Framer Motion for animations, Fuse.js for client-side search

### 2. Business Data Extraction
- Scraped and extracted client data from https://indorenursery.com
- Created `config/business.json` as single source of truth for:
  - Business name, tagline, description
  - Contact: phone, email, WhatsApp (+91 8305449559)
  - Location: 663/2 Radhakunj colony, LIG LINK ROAD, Indore, MP
  - Social media: Facebook, Instagram
  - 9 product categories with emojis and slugs
  - "Why Choose Us" points with icons

### 3. Product Database
- Created `data/products.json` with 30 realistic plant products
- Categories: Indoor Plants, Outdoor Plants, Semi-Indoor Plants, Seasonal Plants, Landscaping Plants, Gifting Plants, Succulents, Creepers & Hanging Plants, Garden Accessories
- Price range: ₹199 – ₹4999
- Each product includes: name, scientific name, care level, description, image path
- Also created `data/plants-reference.json` with extended care data (not yet wired to UI)

### 4. Core Components
All components are client components (`'use client'`) due to Framer Motion usage.

**Button.tsx** — 4 variants (primary, secondary, outline, ghost), 3 sizes  
**Navbar.tsx** — Sticky with blur backdrop, WhatsApp CTA, responsive  
**Hero.tsx** — Animated hero with gradient background, decorative blobs, trust badges  
**CategoryCard.tsx** — Hover-animated card linking to `/categories?category=<name>`  
**ProductCard.tsx** — Image + name + price + WhatsApp enquiry button  
**WhatsAppButton.tsx** — Builds wa.me URL with pre-filled message from `businessConfig`  
**Footer.tsx** — 4-column grid with brand, links, policies, contact + social icons  

### 5. Pages
**Homepage (`app/page.tsx`):**
- Hero section
- Category grid (9 categories from businessConfig)
- Best Sellers (first 6 products)
- Why Choose Us (4 points from businessConfig)
- CTA section with green gradient

**Categories page (`app/categories/page.tsx`):**
- Fuse.js fuzzy search
- Category filter tabs (All + 9 categories from businessConfig)
- Price range slider
- Sort options: relevance, price low-high, price high-low, alphabetical
- Product grid (responsive 1/2/3 columns)
- Results count display

**Privacy Policy (`app/privacy/page.tsx`)** — Standard legal text  
**Terms & Conditions (`app/terms/page.tsx`)** — Standard legal text  

### 6. Utilities
**lib/utils.ts:**
- `cn()` — class name merger (clsx + tailwind-merge)
- `formatPrice()` — INR formatting via Intl.NumberFormat
- `filterProducts()` — category + price range + sort filtering
- `getPriceRange()` — extracts min/max price from products array
- `getWhatsAppLink()` — builds wa.me URL with encoded message

**lib/search.ts:**
- `createSearchIndex()` — initializes Fuse.js with name/category/description keys
- `searchProducts()` — returns filtered array from fuzzy query

---

## Architectural Decisions

### Decision: JSON files instead of a database
**Why:** This is a small business site with ~30 products. A database adds unnecessary complexity, cost, and maintenance burden. JSON files can be edited by anyone in a text editor, are version-controlled in git, and are free to deploy.  
**Tradeoff:** Manual updates require a git commit + deployment. No admin UI for the client to self-serve. Acceptable for MVP.

### Decision: WhatsApp-only CTA (no shopping cart)
**Why:** Indian SMB customers in this segment strongly prefer WhatsApp for purchases. Adding a cart would require payment gateway integration (Razorpay/Stripe), which is overkill for a business that closes sales manually.  
**Tradeoff:** No online revenue tracking; all conversions happen off-site.

### Decision: Tailwind CSS via CDN (after build pipeline failures)
**Why:** Multiple failed attempts to get Tailwind PostCSS working on Vercel. The project uses Next.js 16 with Turbopack; `@tailwindcss/postcss` (v4 syntax) was initially installed but Tailwind was v4 which had production build issues. After downgrading to Tailwind v3 and fixing `postcss.config.mjs`, the CSS still didn't render on Vercel. Switched to CDN as a pragmatic fix.  
**Tradeoff:** CDN loads all of Tailwind (~300KB) instead of just the used classes. Slower first load. Needs to be fixed in a future session.

### Decision: All components are Client Components
**Why:** Framer Motion's `motion.*` components and `whileHover`/`animate` props require the React DOM, which isn't available in Server Components.  
**Tradeoff:** Slightly larger JS bundle; no streaming SSR for these components. Acceptable for a small site.

### Decision: Single `config/business.json` for all business data
**Why:** The client may want to change phone numbers, add categories, update descriptions. Centralizing this means any update affects the entire site without touching component code.

---

## Libraries Introduced

| Library | Version | Why |
|---------|---------|-----|
| framer-motion | ^12 | Smooth animations on cards, hero, sections |
| fuse.js | ^7.5 | Client-side fuzzy search without a backend |
| clsx | ^2.1 | Conditional class name merging |
| tailwind-merge | ^3.6 | Prevents Tailwind class conflicts in Button variants |

---

## Refactors Performed

- Moved all business data from hardcoded component values to `config/business.json`
- Moved WhatsApp number from hardcoded strings to `businessConfig.contact.whatsapp`
- Extracted `getWhatsAppLink()` to `lib/utils.ts` for consistent URL building

---

## CSS Build Issues (Critical — Unresolved)

This was the primary unresolved problem during this session. Timeline:

1. **Initial:** Tailwind v4 with `@tailwindcss/postcss` — worked locally, failed on Vercel (CSS not loading)
2. **Attempt 1:** Set `experimental.cssInlining: false` in next.config.ts — no effect
3. **Attempt 2:** Downgraded to Tailwind v3.4.1, fixed `postcss.config.mjs` — build passed locally, still no CSS on Vercel
4. **Attempt 3:** Set `experimental.inlineCss: true` — CSS inlined in HTML, build passed, no Vercel confirmation
5. **Final fix:** Removed PostCSS Tailwind entirely, added `<script src="https://cdn.tailwindcss.com">` to `app/layout.tsx` with inline custom config — bypasses build pipeline entirely

**Root cause hypothesis:** Vercel's build cache was retaining old node_modules with `@tailwindcss/postcss` even after `npm uninstall`. The CDN approach sidesteps this entirely.

**What needs to be done later:** Replace CDN with a proper PostCSS build. Clear Vercel build cache from the Vercel dashboard, then re-enable PostCSS Tailwind.

---

## Remaining TODOs

- [ ] Add real product photos to `public/images/`
- [ ] Fix `types/index.ts` CATEGORIES to match the 9 in `business.json`
- [ ] Fix default phone number in `getWhatsAppLink()` (`+919999999999` → real number)
- [ ] Wire `data/plants-reference.json` to individual product pages (when built)
- [ ] Add individual product pages (`/products/[id]`)
- [ ] Add WhatsApp floating button
- [ ] Replace CDN Tailwind with PostCSS build
- [ ] Add Google Analytics
- [ ] Add SEO metadata (OG images, LocalBusiness schema)
