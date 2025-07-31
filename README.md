# JPPD Portfolio

A modern, responsive portfolio website built with React and Vite, designed to showcase your projects and skills.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast loading with Vite
- 📱 Mobile-friendly
- 🎯 Smooth scrolling navigation
- 🌟 Beautiful animations
- 📊 Project showcase section
- 💼 Skills and technologies display
- 📧 Contact information

## Tech Stack

- **React 19** - Latest React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with animations
- **GitHub Pages** - Free hosting and deployment

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jppd_portfolio.git
cd jppd_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

1. **Update your name and title** in `src/App.jsx`:
   - Replace `[Your Name]` with your actual name
   - Update the job title and description

2. **Add your projects** in the projects section:
   - Update project titles, descriptions, and technologies
   - Add real links to your GitHub repositories and live demos

3. **Customize your skills** in the skills section:
   - Add or remove skills based on your expertise
   - Update the skill categories as needed

4. **Update contact information**:
   - Replace the email address with your actual email
   - Update GitHub and LinkedIn links with your profiles

### Styling

- Colors and styling can be customized in `src/App.css`
- The main color scheme uses blue (`#2563eb`) and purple gradients
- Font family is set to Inter with system fallbacks

## Deployment to GitHub Pages

### Automatic Deployment

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. **Update the homepage URL** in `package.json`:
   - Replace `yourusername` with your actual GitHub username
   - The URL should be: `https://yourusername.github.io/jppd_portfolio`

3. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose the `gh-pages` branch
   - Save the settings

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` folder
3. Upload the contents of the `dist` folder to your GitHub Pages branch

## Project Structure

```
jppd_portfolio/
├── public/           # Static assets
├── src/
│   ├── App.jsx      # Main application component
│   ├── App.css      # Styles for the application
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── package.json     # Dependencies and scripts
├── vite.config.js   # Vite configuration
└── README.md        # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Customization Tips

### Adding New Sections

1. Add a new section component in `App.jsx`
2. Add corresponding styles in `App.css`
3. Update the navigation if needed

### Adding Animations

The portfolio includes smooth animations using CSS keyframes. You can add more animations by:

1. Defining new keyframes in `App.css`
2. Applying them to elements using the `animation` property

### Performance Optimization

- Images are optimized automatically by Vite
- CSS is minified in production builds
- Consider lazy loading for large images
- Use WebP format for better compression

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with customization, feel free to open an issue on GitHub.

---

**Happy coding! 🚀**
