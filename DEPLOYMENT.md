# GitHub Pages Deployment Guide

## Quick Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `jppd_portfolio` (or whatever you prefer)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### 2. Update Configuration

1. **Update `package.json`** - Replace `yourusername` with your actual GitHub username:
```json
"homepage": "https://yourusername.github.io/jppd_portfolio"
```

2. **Update `src/App.jsx`** - Replace placeholder content:
   - Replace `[Your Name]` with your actual name
   - Update project descriptions and links
   - Update contact information

### 3. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/jppd_portfolio.git

# Push to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
# Deploy the build to GitHub Pages
npm run deploy
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Click **Save**

### 6. Your Site is Live!

Your portfolio will be available at:
`https://yourusername.github.io/jppd_portfolio`

## Custom Domain (Optional)

If you want to use a custom domain:

1. Buy a domain (e.g., from Namecheap, GoDaddy, etc.)
2. Add a file named `CNAME` in the `public` folder with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS settings with your domain provider
4. Deploy again: `npm run deploy`

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the `homepage` URL in `package.json` is correct
2. **Build Fails**: Check that all dependencies are installed (`npm install`)
3. **Styling Issues**: Clear browser cache or try incognito mode
4. **Images Not Loading**: Make sure image paths are correct

### Updating Your Site

After making changes:

```bash
# Commit your changes
git add .
git commit -m "Update portfolio"
git push

# Deploy the new version
npm run deploy
```

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Consider implementing lazy loading for images
3. **Minimize Dependencies**: Only include necessary packages
4. **CDN**: GitHub Pages serves from CDN for fast loading

## Analytics (Optional)

To track visitors:

1. Create a Google Analytics account
2. Add the tracking code to `public/index.html`
3. Deploy: `npm run deploy`

---

**Your portfolio is now ready to showcase your work! 🚀** 