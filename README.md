# Digital Services Agency Landing Page

A modern, professional landing page for a digital services agency specializing in custom websites, mobile apps, and AI integration.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- Smooth animations and micro-interactions
- SEO optimized with meta tags and schema markup
- Fast loading with optimized assets
- Contact form functionality
- Portfolio showcase
- Service sections

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
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Traditional web hosting

Simply upload the files to your hosting service.

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