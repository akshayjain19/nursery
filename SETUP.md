# Setup & Development Guide

## Prerequisites

- Node.js 20 or later
- npm 10+
- Git

## Installation

```bash
git clone https://github.com/akshayjain19/nursery.git
cd nursery
npm install
```

## Local Development

```bash
npm run dev
```

Opens at http://localhost:3000 (or next available port).

The dev server uses Turbopack for fast refresh. Changes to `app/`, `components/`, `config/`, and `data/` reflect immediately.

## Build

```bash
npm run build    # create optimized production build
npm start        # serve the production build locally
```

Build output goes to `.next/`. All pages are statically generated (no server required at runtime).

## Lint

```bash
npm run lint
```

## Environment Variables

**None required.** This is a fully static site. No `.env` file is needed.

## Project Structure

```
config/business.json   ← Edit this to change business info, phone, categories
data/products.json     ← Edit this to add/remove/update products
public/images/         ← Drop product photos here (JPG/PNG, name must match image field in products.json)
app/                   ← Pages
components/            ← UI components
lib/                   ← Utility functions
```

## Adding a Product

1. Open `data/products.json`
2. Add an entry at the end of the array:

```json
{
  "id": 31,
  "name": "Your Plant Name",
  "category": "Indoor Plants",
  "price": 499,
  "image": "/images/your-plant.jpg",
  "description": "Short one-line description",
  "scientificName": "Genus species",
  "careLevel": "Easy"
}
```

Valid categories (must match exactly):
- `Indoor Plants`
- `Outdoor Plants`
- `Semi-Indoor Plants`
- `Seasonal Plants`
- `Landscaping Plants`
- `Gifting Plants`
- `Succulents`
- `Creepers & Hanging Plants`
- `Garden Accessories`

3. Add the image to `public/images/your-plant.jpg`
4. Commit and push — Vercel auto-deploys.

## Changing the WhatsApp Number

Open `config/business.json`:

```json
"contact": {
  "phone": "+91 XXXXXXXXXX",
  "whatsapp": "+91 XXXXXXXXXX"
}
```

The number propagates to: Navbar WhatsApp button, Hero CTA, every ProductCard enquiry button, Footer contact info, Homepage CTA section.

## Production Deployment

The site is deployed on Vercel, connected to the `main` branch.

**Auto-deploy:** Every push to `main` triggers a new Vercel build and deployment.  
**Manual deploy:** Log in to vercel.com → nursery project → Deployments → Redeploy.

Build command: `npm run build`  
Output directory: `.next`  
Node version: 20.x

## Troubleshooting

### CSS not loading on production
The site uses Tailwind CSS via CDN (not PostCSS). Styling is loaded by this script in `app/layout.tsx`:

```jsx
<script src="https://cdn.tailwindcss.com" />
```

If styles are missing, check browser console for script load errors. The CDN URL must be reachable from the user's browser.

### Product images showing as broken
All product images in `data/products.json` reference paths like `/images/snake-plant.jpg`. These files need to exist in `public/images/`. The `public/images/` directory currently has no images — add real photos named to match the `image` field in each product.

### Port already in use during dev
Next.js dev server increments ports automatically. If 3000 is taken it tries 3001, 3002, etc. Check terminal output for the actual URL.

### TypeScript errors
Run `npx tsc --noEmit` to check types without building.
