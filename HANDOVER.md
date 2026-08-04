# Developer Handover

## Current Progress

**~60% complete** toward a shippable MVP.

The site structure, data layer, and all major UI components are built. The biggest outstanding issue is visual — the Tailwind CDN fix needs verification in production, and product images are completely missing.

---

## What's Working (Locally Confirmed)

- Homepage renders with all sections: hero, categories, best sellers, why choose us, CTA, footer
- Categories page renders with search, filters, price range, sort
- All 30 products display with correct name, category, price (INR), WhatsApp button
- WhatsApp links generate correctly with pre-filled messages for each product
- All business data (phone, address, social) pulled from `config/business.json`
- Privacy and Terms pages exist
- Build passes with `npm run build`
- Deployed to Vercel: https://nursery-fawn.vercel.app

## What's Not Confirmed

- **Styling on production** — the CDN fix was pushed but the user had not yet refreshed to verify. This is the highest priority check.

---

## High-Priority Bugs

### 1. Product images all 404
**Impact:** Every product card shows a broken image.  
**Fix:** Add real plant photos to `public/images/`. File names must match the `image` field in `data/products.json`:
- `/images/snake-plant.jpg`
- `/images/money-plant.jpg`
- ... (30 files total)

If you don't have photos, use free stock from Unsplash or Pexels. Alternatively, update the `image` paths in `products.json` to point to Unsplash direct URLs temporarily:
```json
"image": "https://images.unsplash.com/photo-XXXXX?w=400"
```
Note: Unsplash URLs require `next.config.ts` to whitelist the domain:
```ts
images: { remotePatterns: [{ hostname: 'images.unsplash.com' }] }
```

### 2. Wrong default phone in getWhatsAppLink()
**File:** `lib/utils.ts` line 5  
**Bug:** `phoneNumber = '+919999999999'` — hardcoded wrong default  
**Fix:**
```ts
export function getWhatsAppLink(product: Product, phoneNumber = '+918305449559'): string {
```

### 3. CATEGORIES in types/index.ts is stale
**File:** `types/index.ts`  
**Bug:** Exports 7 old categories; the site uses 9 different ones from `business.json`  
**Fix:** Either remove CATEGORIES from types and derive from businessConfig, or update the array to match the 9 real categories.

---

## Known Issues

- Tailwind CDN loads all utility classes (~300KB) — slow on poor connections. Replace with PostCSS when build pipeline is fixed.
- `hooks/` and `utils/` directories at root are empty — delete them.
- `data/plants-reference.json` is unused — comprehensive plant data ready to be wired into individual product pages.
- Footer copyright says "© {year} Nursery" — should say "Indore Nursery" (pull from businessConfig).
- Homepage CTA button has hardcoded WhatsApp number `+919999999999` — see `app/page.tsx` line ~131.

---

## Edge Cases to Watch

- **Category query params:** `/categories?category=Indoor+Plants` — spaces encoded as `+`. The CategoryCard links use `encodeURIComponent()` which encodes as `%20`. The categories page reads `searchParams.category` — verify both encodings are handled.
- **Price range slider:** The min/max is derived from `getPriceRange(products)` which reads the actual data. If a product with an extreme price is added, the slider range updates automatically — good.
- **Fuse.js threshold:** Set at `0.3` — fairly strict. If search feels too narrow, increase to `0.4`; if too loose, decrease to `0.2`.

---

## Assumptions Made

- All sales close on WhatsApp — no cart, no payment
- Client will add product images manually or have someone do it
- No multi-language support needed (Hindi is the vernacular but site is English-only)
- No stock tracking needed (enquiry-based model, not e-commerce)
- Vercel free tier is sufficient (static site, very low traffic initially)

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| CSS not loading on production | Medium | High | Verify CDN approach works; if not, use inline `<style>` |
| Client can't maintain JSON files | Medium | Low | Build a simple admin UI or use Notion/Sheets + script |
| WhatsApp number changes | Low | High | Centralised in `config/business.json` — single edit |
| Product photos never added | High | High | Use placeholder service (placehold.co) as fallback |
| Vercel free tier limits hit | Low | Medium | Site is static — would need enormous traffic |

---

## Suggested Implementation Order

If you're picking this up fresh, tackle in this order:

1. **Verify production CSS** — Open https://nursery-fawn.vercel.app in a browser. If it looks styled, proceed. If not, debug Tailwind CDN script loading.

2. **Add product images** — Without images, the site looks broken. Even placeholder images from placehold.co will dramatically improve appearance. Update `data/products.json` with working image URLs.

3. **Fix the 3 bugs above** — Wrong phone default, stale CATEGORIES, hardcoded phone in CTA.

4. **Add WhatsApp floating button** — Highest ROI feature. A fixed bottom-right button on every page increases conversions significantly.

5. **Add individual product pages** — `/products/[slug]` with full description, care instructions (from `plants-reference.json`), and a large WhatsApp CTA.

6. **Fix Tailwind PostCSS build** — Replace CDN with proper build. Go to Vercel dashboard → Settings → Build Cache → Clear. Then test with PostCSS Tailwind again.

---

## Estimated Effort for Remaining Work

| Task | Effort |
|------|--------|
| Add product images (30 photos) | 2–4 hours |
| Fix 3 bugs listed above | 30 minutes |
| WhatsApp floating button | 1 hour |
| Individual product pages | 4–6 hours |
| About Us page | 2 hours |
| Fix PostCSS Tailwind build | 1–2 hours |
| Google Analytics | 1 hour |
| SEO (sitemap, OG images, schema) | 3–4 hours |
| **Total to production-ready** | **~15–20 hours** |
