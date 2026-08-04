# Code Review

## Dead Code

| File | Issue |
|------|-------|
| `hooks/` | Empty directory — delete it |
| `utils/` | Empty directory — delete it |
| `data/plants-reference.json` | Complete plant database, not consumed by any component |
| `tailwind.config.ts` | Maintained but only used locally; CDN uses inline config |
| `postcss.config.mjs` | Still present but PostCSS pipeline is bypassed by CDN approach |
| `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/window.svg`, `public/vercel.svg` | Default Next.js placeholder assets, not used by any component |

## Bugs

### Critical
1. **Hardcoded wrong phone number in `lib/utils.ts`**
   - Line 5: `phoneNumber = '+919999999999'`
   - The correct number is `+918305449559`
   - All actual WhatsApp buttons pass the correct number from `businessConfig`, so the user sees the right number — but if `getWhatsAppLink` is ever called without the second argument, it silently uses the wrong number

2. **Hardcoded wrong phone in homepage CTA**
   - `app/page.tsx` around line 131: `window.open('https://wa.me/919999999999', '_blank')`
   - Should be: `businessConfig.contact.whatsapp.replace(/\D/g, '')`

### Medium
3. **Stale CATEGORIES export in `types/index.ts`**
   - Exports 7 old categories (`Indoor Plants`, `Outdoor Plants`, `Flowering Plants`, `Fruit Plants`, `Pots & Planters`, `Seeds`, `Soil & Compost`)
   - The actual product data and businessConfig use 9 different categories
   - CATEGORIES is used in `app/categories/page.tsx` for filter tabs — this means 2 category tabs show (Flowering Plants, Fruit Plants, Pots & Planters, Seeds, Soil & Compost) that have 0 products, and 4 real categories are missing from the filter

4. **Footer business name**
   - Footer copyright: `© {year} Nursery` — should be `© {year} {businessConfig.businessName}` (i.e., "Indore Nursery")

## Missing Error Handling

- `ProductCard.tsx` — `<Image>` component has no `onError` fallback. When the image 404s, Next.js Image shows nothing. Add a placeholder/fallback.
- `categories/page.tsx` — If products.json fails to import (malformed JSON), the entire page crashes with no error boundary.

## Security Concerns

- No issues with XSS, CSRF, or injection — the site is static with no user input being rendered back. WhatsApp message content is URL-encoded before being passed to `wa.me`.
- `dangerouslySetInnerHTML` used in `app/layout.tsx` for the Tailwind config script — content is hardcoded (not user-supplied), so no XSS risk.

## Performance Issues

- **Tailwind CDN (~300KB)** — loads all Tailwind classes, most unused. Should be replaced with PostCSS build which typically outputs 5–15KB for a site this size.
- **Google Fonts via `@import` in CSS** — blocks render. Better to use `next/font/google` for automatic font optimization.
- **No image optimization for missing images** — `ProductCard` uses `<Image fill>` which is correct, but since all images are missing, Next.js is making fetch attempts for 30 non-existent images.
- **All components are Client Components** — entire JS bundle ships to browser even for mostly-static content like Footer. Consider making Footer and Navbar Server Components (requires removing Framer Motion from them or using a separate animated wrapper).

## Potential Bugs

- `CategoryCard.tsx` builds href as `` `${href}?category=${encodeURIComponent(name)}` `` — encodes spaces as `%20`. The categories page reads `searchParams.category` — this should work, but test with multi-word category names like "Creepers & Hanging Plants".
- `FilterState.priceRange` typed as `[number, number]` but the price range slider state is managed separately as `selectedPriceRange` — there's no validation that `selectedPriceRange[0] <= selectedPriceRange[1]`.

## Missing Validation

- `data/products.json` — no runtime schema validation. A malformed product entry (missing required fields) could crash components. Consider adding Zod validation on import.
- `config/business.json` — same concern. If `contact.whatsapp` is missing, WhatsApp buttons produce `wa.me/undefined`.

## TODO / FIXME Comments

None found in the codebase (no explicit TODO comments left in code).

## Unused Dependencies

Run `npx depcheck` to confirm, but based on code review:
- All listed dependencies appear to be used
- `tailwind-merge` and `clsx` are used in `lib/utils.ts` via `cn()`
- `framer-motion` is used across all components
- `fuse.js` is used in `lib/search.ts`

## Summary Table

| Category | Count | Priority |
|----------|-------|---------|
| Dead code / empty dirs | 7 | Low |
| Bugs (hardcoded wrong phone) | 2 | High |
| Bugs (stale categories) | 1 | High |
| Missing error handling | 2 | Medium |
| Performance issues | 4 | Medium |
| Security concerns | 0 | — |
