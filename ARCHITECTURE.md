# Architecture

## High-Level Overview

```
Browser
  │
  ├── CDN (Vercel Edge)
  │     └── Serves pre-built static HTML/JS/CSS
  │
  └── External services (loaded client-side)
        ├── Google Fonts CDN (DM Sans, Inter)
        ├── Tailwind CSS CDN (utility classes)
        └── WhatsApp (wa.me links → opens WhatsApp)
```

No backend. No database. No API server. Every page is pre-rendered at build time and served as static HTML from Vercel's CDN.

---

## Frontend Architecture

### Framework: Next.js 16 (App Router)

The App Router uses file-system-based routing under `app/`. Each `page.tsx` becomes a route.

```
app/
├── layout.tsx          → Root layout (wraps all pages, loads fonts + Tailwind CDN)
├── page.tsx            → / (homepage)
├── categories/page.tsx → /categories
├── privacy/page.tsx    → /privacy
└── terms/page.tsx      → /terms
```

All pages are statically generated (`○` in build output). Next.js renders them at build time — no server work happens per-request.

### Component Model

All components use `'use client'` directive because they import Framer Motion, which requires browser APIs. This means every component is a Client Component and ships as JavaScript to the browser.

```
components/
├── Navbar.tsx        → sticky header, WhatsApp CTA
├── Hero.tsx          → homepage hero section
├── CategoryCard.tsx  → category grid item
├── ProductCard.tsx   → product with price + WhatsApp button
├── WhatsAppButton.tsx → builds wa.me URL, wraps Button
├── Button.tsx        → base button (4 variants × 3 sizes)
└── Footer.tsx        → footer with links, contact, social
```

### Data Flow

```
config/business.json  ──┐
                         ├──→ Navbar (phone number)
                         ├──→ Hero (tagline, description)
                         ├──→ Footer (address, phone, social)
                         ├──→ CategoryCard list (9 categories)
                         └──→ WhatsAppButton (phone number)

data/products.json ──────┐
                          ├──→ Homepage (first 6 → best sellers)
                          ├──→ Categories page (all 30 → search/filter)
                          └──→ ProductCard (name, price, image, category)
```

No props drilling through many levels — each component imports JSON directly.

---

## Styling Architecture

### Tailwind CSS (CDN)

Loaded via script tag in `app/layout.tsx`:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: { primary, secondary, accent, neutral, warmwhite, charcoal },
        fontFamily: { sans, display },
        boxShadow: { soft, soft-md, soft-lg },
        borderRadius: { lg, xl, 2xl }
      }
    }
  }
</script>
```

The CDN version loads all Tailwind utilities and reads the inline `tailwind.config` object for custom values. This replaces the PostCSS build pipeline which had production incompatibilities.

**Why CDN:** Three attempts to fix the PostCSS build failed on Vercel. CDN guarantees CSS loads regardless of build environment.

**Custom color palette:**
| Name | Hex | Use |
|------|-----|-----|
| `primary-500` | `#3a8e7a` | Forest Green — primary buttons, links |
| `secondary-500` | `#4d9681` | Sage Green — gradients, accents |
| `accent-500` | `#e67c3c` | Terracotta — prices, highlights |
| `warmwhite` | `#faf9f7` | Page background |
| `charcoal` | `#2d2a27` | Primary text |

### Base CSS

`app/globals.css` provides:
- Google Fonts `@import`
- `box-sizing: border-box` reset
- Font family defaults
- `body` background and text color
- Heading size scale for h1–h3
- Smooth scroll on `html`

---

## Search & Filtering

Located in `app/categories/page.tsx` using React state + useMemo.

```
User input (search text, category, price, sort)
     │
     ▼
searchProducts() [Fuse.js fuzzy match on name/category/description]
     │
     ▼
filterProducts() [category filter + price range filter + sort]
     │
     ▼
Render filtered ProductCard grid
```

All filtering is client-side — no API calls. Fuse.js fuzzy search handles typos and partial matches. Re-runs on every input change via `useMemo`.

---

## WhatsApp Integration

Every product generates a WhatsApp deep link:

```
https://wa.me/918305449559?text=Hi%2C%20I%20am%20interested%20in%3A%0A%0ASnake%20Plant%0A%0APrice%3A%20%E2%82%B9499
```

Decoded message:
```
Hi, I am interested in:

Snake Plant

Price: ₹499
```

The phone number is always sourced from `config/business.json` → `contact.whatsapp`. The `WhatsAppButton` component calls `getWhatsAppLink()` in `lib/utils.ts` which builds the URL.

---

## State Management

No global state management library. All state is local React `useState` within each page:

- `app/categories/page.tsx` — `searchQuery`, `filters`, `selectedPriceRange`

No Context, no Redux, no Zustand. The site is simple enough that this is appropriate.

---

## Security Considerations

- No user authentication
- No user data collected or stored
- No API keys or secrets in the codebase
- All external links use `target="_blank" rel="noopener noreferrer"` to prevent tab-napping
- No forms (contact is via WhatsApp links only)
- Content Security Policy: not configured (could be added for defense-in-depth)

---

## Performance Considerations

- All pages statically generated — zero server runtime cost
- Vercel Edge CDN serves HTML from nearest data center
- **Current bottleneck:** Tailwind CDN loads ~300KB of CSS on every page load. Should be replaced with PostCSS build which purges unused classes (~5-15KB typical output).
- Product images not yet added — when added, use Next.js `<Image>` component (already in ProductCard) which auto-optimizes, resizes, and lazy-loads.
- Google Fonts loaded via `@import` — consider switching to `next/font` for better performance.
