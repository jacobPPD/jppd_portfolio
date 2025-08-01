# Deployment Guide - Jacob's Portfolio

This guide explains how to deploy this React portfolio website to GitHub Pages.

## 🚀 Quick Deployment

### Prerequisites
- GitHub account
- Node.js installed on your computer
- Git installed on your computer

### Step 1: Fork or Clone the Repository

**Option A: Fork (Recommended for customization)**
1. Go to [https://github.com/jacobPPD/jppd_portfolio](https://github.com/jacobPPD/jppd_portfolio)
2. Click the "Fork" button in the top right
3. Clone your forked repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/jppd_portfolio.git
   cd jppd_portfolio
   ```

**Option B: Clone (For reference/learning)**
```bash
git clone https://github.com/jacobPPD/jppd_portfolio.git
cd jppd_portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Customize the Portfolio

1. **Update Personal Information**
   - Edit `src/App.jsx` to change your name, title, and contact info
   - Update the projects section with your own work
   - Modify the skills and experience sections

2. **Update Repository URL**
   - Edit `package.json`
   - Change the `homepage` field to your GitHub Pages URL:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/jppd_portfolio"
   ```

### Step 4: Test Locally

```bash
npm run dev
```

Open `http://localhost:5173` to see your portfolio.

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your React app
- Create optimized files in the `dist` folder
- Push the files to a `gh-pages` branch
- Make your site live on GitHub Pages

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Click **Save**

### Step 7: Your Site is Live!

Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/jppd_portfolio`

## 🔧 Advanced Customization

### Adding Your Own Projects

Edit the projects section in `src/App.jsx`:

```jsx
<div className="project-card">
  <div className="project-image">
    <div className="project-placeholder">Your Project</div>
  </div>
  <div className="project-content">
    <h3>Your Project Name</h3>
    <p>Description of your project...</p>
    <div className="project-tech">
      <span>React</span>
      <span>Node.js</span>
    </div>
  </div>
</div>
```

### Changing Colors

Edit the CSS variables in `src/App.css`:

```css
/* Primary colors */
--primary-blue: #2563eb;
--gradient-start: #667eea;
--gradient-end: #764ba2;
```

### Adding New Sections

1. Add new section to `src/App.jsx`
2. Add corresponding styles to `src/App.css`
3. Update navigation if needed

## 📱 Mobile Optimization

The portfolio is fully responsive and includes:
- Mobile-first design
- Touch-friendly navigation
- Optimized typography for small screens
- Proper spacing on all devices

## 🚀 Performance Tips

- Images are automatically optimized by Vite
- CSS is minified in production
- Consider using WebP images for better compression
- The site loads in under 2 seconds on most connections

## 🔄 Updating Your Site

After making changes:

```bash
# Commit your changes
git add .
git commit -m "Update portfolio content"
git push

# Deploy the new version
npm run deploy
```

## 🐛 Troubleshooting

### Common Issues

1. **404 Error**: Make sure the `homepage` URL in `package.json` is correct
2. **Build Fails**: Check that all dependencies are installed (`npm install`)
3. **Styling Issues**: Clear browser cache or try incognito mode
4. **Images Not Loading**: Make sure image paths are correct

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Make sure your GitHub Pages is enabled
4. Check that the `gh-pages` branch exists

## 📞 Support

For questions about this portfolio template:
- **Email:** jpapasd@iu.edu
- **GitHub Issues:** [Create an issue](https://github.com/jacobPPD/jppd_portfolio/issues)

---

**Happy deploying! 🚀** 