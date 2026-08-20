# Deployment Guide - Indore Nursery Website

## 🚀 Quick Start Deployment (2-3 minutes)

### Step 1: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Import Project"
4. Select repository: `akshayjain19/nursery`

### Step 2: Configure Project
- **Project Name:** nursery (or your choice)
- **Framework:** Next.js
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)

### Step 3: Deploy
1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Get your live URL

## 📋 Environment Variables (Optional)

No environment variables required! This is a static site with JSON data.

If you want to customize later:
- Phone number: Edit `config/business.json`
- Products: Edit `data/products.json`
- Business info: Edit `config/business.json`

## ✅ Verification Checklist

After deployment, verify:

- [ ] Homepage loads with hero section
- [ ] Categories page displays 30 products
- [ ] Search functionality works
- [ ] Filters work (price range, category, sort)
- [ ] WhatsApp buttons link to +91 8305449559
- [ ] Footer displays correct business info
- [ ] Mobile responsive design works
- [ ] All pages load without errors

## 🔗 Important URLs

After deployment, you'll get:
- **Live Site:** `https://nursery-XXX.vercel.app`
- **GitHub Repo:** `https://github.com/akshayjain19/nursery`
- **Main Branch:** Deployed automatically

## 📝 Future Updates

To make changes after deployment:

1. **Update Products:**
   ```
   Edit: data/products.json
   Commit & Push
   Vercel auto-deploys (2-3 mins)
   ```

2. **Update Business Info:**
   ```
   Edit: config/business.json
   Commit & Push
   Vercel auto-deploys (2-3 mins)
   ```

3. **Update Categories:**
   ```
   Edit: config/business.json → categories array
   Commit & Push
   Vercel auto-deploys (2-3 mins)
   ```

## 🎯 Maintenance Workflow

This is your **recurring revenue model**:

1. **Client sends product updates** → Email/WhatsApp
2. **You update JSON files** → 15 mins work
3. **Git commit & push** → Automatic deployment
4. **Bill the client** → Monthly maintenance fee

**No complex admin panel needed!**

## 💡 Tips

- **Custom Domain:** Add your domain in Vercel settings
- **Analytics:** Vercel provides free analytics
- **Environment:** Production auto-deploys from `main` branch
- **Preview URLs:** Feature branches get preview URLs

## 🆘 Support

If deployment fails:
1. Check build logs in Vercel dashboard
2. Verify `npm run build` works locally
3. Ensure all files are committed to git
4. Check GitHub Actions for any issues

---

**You're all set!** 🚀 Your Nursery website will be live in minutes.
