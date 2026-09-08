# Indore Nursery — Lead Generation Website

A static Next.js website for **Indore Nursery**, a plant nursery business based in Indore, India. The site is purpose-built to generate WhatsApp leads by showcasing products and routing all purchase intent to WhatsApp enquiries.

**Live site:** https://nursery-fawn.vercel.app  
**GitHub:** https://github.com/akshayjain19/nursery  
**Client website:** https://indorenursery.com  

---

## Quick Start

```bash
git clone https://github.com/akshayjain19/nursery.git
cd nursery
git checkout dev
npm install
npm run dev
```

Open http://localhost:3000

**Windows:** Run these inside the `nursery` folder (not `C:\WINDOWS\system32`). If PowerShell blocks `npm`, see [SETUP.md](./SETUP.md#windows-setup).

## Branches

This repo uses **two branches only**:

| Branch | Purpose |
|--------|---------|
| `dev` | Day-to-day feature work — always branch from and push here |
| `main` | Production — merge `dev` into `main` when ready to deploy |

```bash
# Daily development (Windows: Command Prompt, PowerShell, or Git Bash)
git checkout dev
git pull origin dev
# ... make changes ...
git add .
git commit -m "Your message"
git push origin dev

# Release to production
git checkout main
git pull origin main
git merge dev
git push origin main
git checkout dev
```

Do not create feature branches. All work happens on `dev`.

## Build & Deploy

```bash
npm run build   # production build
npm start       # run production build locally
```

Vercel production deploys automatically on every push to `main`.

## Key Files

| File | Purpose |
|------|---------|
| `config/business.json` | All business info — edit this to update contact, categories, WhatsApp number |
| `data/products.json` | Product catalogue (30 products) |
| `app/page.tsx` | Homepage |
| `app/categories/page.tsx` | Browse/search/filter page |
| `components/` | Reusable UI components |

## Updating the WhatsApp Number

Open `config/business.json` and change:
```json
"contact": {
  "whatsapp": "+91 8305449559"
}
```

All WhatsApp links across the site update automatically.

## Adding Products

Add an object to `data/products.json`:
```json
{
  "id": 31,
  "name": "Plant Name",
  "category": "Indoor Plants",
  "price": 499,
  "image": "/images/filename.jpg",
  "description": "Short description",
  "scientificName": "Scientific name",
  "careLevel": "Easy"
}
```

Place the image in `public/images/`.

## Tech Stack

- **Framework:** Next.js 16.2 (App Router, TypeScript)
- **Styling:** Tailwind CSS via CDN (custom color config inline in `app/layout.tsx`)
- **Animations:** Framer Motion
- **Search:** Fuse.js (client-side fuzzy search)
- **Deployment:** Vercel (auto-deploy from `main`)
