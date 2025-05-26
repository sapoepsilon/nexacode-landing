# Eazy Technology - Digital Services Agency Landing Page

A modern, professional landing page for Eazy Technology - a digital services agency specializing in custom websites, mobile apps, and AI integration.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher) - for running the development server
- A modern web browser
- Git (optional, for cloning the repository)

### Running the Project

1. **Clone the repository** (or download the ZIP file):
   ```bash
   git clone https://github.com/yourusername/contractor_landing_page.git
   cd contractor_landing_page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   This will open the website in your default browser at `http://localhost:3000`

   **Alternative methods:**
   - Run with live reload: `npm run serve`
   - Or simply open `index.html` directly in your browser (no server required)

### Development Commands

```bash
# Start development server (opens in browser)
npm start

# Run local development server with live reload
npm run serve

# Run linting (when configured)
npm run lint
```

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS via CDN
- Smooth animations and micro-interactions
- SEO optimized with meta tags and schema markup
- Fast loading with optimized assets
- Netlify Forms integration for contact form
- Portfolio showcase with case studies
- Service sections with hover effects
- FAQ accordion
- Mobile-optimized navigation

## 📁 Project Structure

```
contractor_landing_page/
├── index.html                 # Main landing page
├── script.js                  # Main JavaScript file (animations, form handling)
├── faq.js                     # FAQ accordion functionality
├── logo.svg                   # Company logo
├── README.md                  # Project documentation
├── CLAUDE.md                  # AI assistant instructions
├── package.json               # Node.js dependencies and scripts
├── netlify.toml              # Netlify configuration
├── .gitignore                # Git ignore file
└── Case Studies/
    ├── estmtagent-case-study.html    # EstmtAgent project details
    ├── skilldrop-case-study.html     # SkillDrop project details
    └── viusbuilt-case-study.html     # ViusBuilt project details
```

## Brand Elements

### Colors
- Primary: Deep Indigo (#2D3047)
- Secondary: Vibrant Teal (#1B998B)
- Accent: Coral Orange (#FF9B71)
- Light: Off-white (#F5F5F5)
- Dark: Charcoal (#333333)

### Typography
- Headings: Montserrat (Bold)
- Body: Open Sans
- Code: Roboto Mono

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process required - uses CDN for Tailwind CSS

## Customization

### To update company information:
1. Replace "YourLogo" in the header with your company name/logo
2. Update contact information in the contact section
3. Replace portfolio items with your own projects
4. Update the about section with your company details

### To modify colors:
Edit the Tailwind config in `index.html`:
```javascript
colors: {
    'primary': '#2D3047',
    'secondary': '#1B998B',
    'accent': '#FF9B71',
    'light': '#F5F5F5',
    'dark': '#333333'
}
```

### To add/modify services:
Edit the services section in `index.html` by copying the service card structure and updating the content.

## Deployment

This is a static website that can be deployed to any web hosting service:

### Netlify (Recommended for form functionality)
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Deploy with default settings
4. Configure form notifications in Netlify dashboard:
   - Go to **Site Settings** → **Forms** → **Form notifications**
   - Add email notification to `ismatulla@mansurov.dev`

### Other Hosting Options
- **GitHub Pages**: Free hosting for static sites
- **Vercel**: Great for static sites with excellent performance
- **AWS S3**: For enterprise-level hosting
- **Traditional web hosting**: Simply upload files via FTP

**Note**: Contact form functionality requires Netlify or a custom backend implementation.

## Contact Form Setup

The contact form uses Netlify Forms for processing submissions:

1. **Netlify Forms** (current implementation):
   - Automatically detected when deployed to Netlify
   - Submissions stored in Netlify dashboard
   - Email notifications configurable
   - Spam protection included

2. **Alternative Solutions**:
   - Formspree
   - EmailJS
   - Custom backend API
   - Google Forms integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

The landing page is optimized for performance:
- Minimal JavaScript
- Tailwind CSS via CDN with purge
- Optimized fonts loading
- Lazy loading for images (when added)
- Minified resources

## Future Enhancements

Consider adding:
- Backend integration for contact form
- CMS integration for dynamic content
- Analytics tracking
- Additional animations
- Blog section
- Team member profiles
- Client testimonials
- Case studies

## License

This project is available for commercial use. Please ensure you have the rights to use any images or content you add.

## Support

For questions or customization requests, please contact your developer or open an issue in the repository.