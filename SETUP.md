# Setup & Development Guide

## Prerequisites

Install these **before** running any commands:

1. **Git for Windows** — https://git-scm.com/download/win  
   - Use default options during install  
   - **Close and reopen** PowerShell after install (required for `git` to be recognized)

2. **Node.js LTS** — https://nodejs.org/  
   - Includes npm  
   - Restart terminal after install

Verify both work in a **new** PowerShell window:

```powershell
git --version
node --version
npm --version
```

If `git` is still not recognized, Git is not installed or the terminal was not restarted.

## Windows Setup

### Git not recognized?

`git : The term 'git' is not recognized` means **Git is not installed**.

1. Download and install: https://git-scm.com/download/win  
2. **Close PowerShell completely** and open a new window  
3. Run `git --version` — you should see something like `git version 2.x.x`  
4. Then clone again (see step 1 above)

**No Git?** You can download the repo as a ZIP instead:
1. Open https://github.com/akshayjain19/nursery  
2. Click **Code** → **Download ZIP**  
3. Extract to `C:\Users\lenovo\Documents\nursery`  
4. `cd C:\Users\lenovo\Documents\nursery`  
5. `npm install` then `npm run dev`  

ZIP works for running locally, but install Git when you want to push changes.

`C:\WINDOWS\system32` is **not** the project. You must be inside the cloned repo.

**Option A — clone fresh (first time):**
```powershell
cd $HOME\Documents
git clone https://github.com/akshayjain19/nursery.git
cd nursery
```

**Option B — already cloned:** open File Explorer, go to your `nursery` folder, then:
- Right-click inside the folder → **Open in Terminal**, or
- In PowerShell: `cd C:\Users\YourName\Documents\nursery` (use your actual path)

Confirm you're in the right place — this should show `.git`:
```powershell
git status
```

### 2. Fix the npm PowerShell error

If you see *"running scripts is disabled on this system"*, run **PowerShell as Administrator** once:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Type `Y` to confirm, close that window, then open a normal terminal in the `nursery` folder.

**Alternatives (no policy change):**
- Use **Git Bash** (installed with Git for Windows) instead of PowerShell
- Or use **Command Prompt** (`cmd`) — `npm install` works there without the script policy issue

### 3. Install and run

```powershell
git checkout dev
git pull origin dev
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Hard refresh: `Ctrl + Shift + R`.

## Installation

```bash
git clone https://github.com/akshayjain19/nursery.git
cd nursery
git checkout dev
npm install
```

## Git Workflow

Only two branches exist: **`dev`** and **`main`**.

- **`dev`** — build and test all features here
- **`main`** — production releases only; Vercel auto-deploys from this branch

```bash
# Start work
git checkout dev
git pull origin dev

# After changes
git add .
git commit -m "Describe your change"
git push origin dev

# Ship to production
git checkout main
git merge dev
git push origin main
git checkout dev
```

Never create additional branches.

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
