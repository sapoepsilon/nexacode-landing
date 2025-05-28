// Import all components
import { Header, initHeader } from './components/header.js';
import { Hero, initHero } from './components/hero.js';
import { Services, initServices } from './components/services.js';
import { Portfolio, initPortfolio } from './components/portfolio.js';
import { Testimonials, initTestimonials } from './components/testimonials.js';
import { FAQ, initFAQ } from './components/faq.js';
import { About, initAbout } from './components/about.js';
import { Contact, initContact } from './components/contact.js';
import { Footer, initFooter } from './components/footer.js';

// Main App class to manage the application
class App {
  constructor() {
    this.components = {
      header: Header,
      hero: Hero,
      services: Services,
      portfolio: Portfolio,
      testimonials: Testimonials,
      faq: FAQ,
      about: About,
      contact: Contact,
      footer: Footer
    };
    
    this.initializers = {
      header: initHeader,
      hero: initHero,
      services: initServices,
      portfolio: initPortfolio,
      testimonials: initTestimonials,
      faq: initFAQ,
      about: initAbout,
      contact: initContact,
      footer: initFooter
    };
  }

  render() {
    const app = document.getElementById('app');
    if (!app) {
      console.error('App container not found');
      return;
    }

    // Build the complete HTML with proper semantic structure
    const headerHtml = this.components.header();
    const mainContentHtml = [
      this.components.hero,
      this.components.services,
      this.components.portfolio,
      this.components.testimonials,
      this.components.faq,
      this.components.about,
      this.components.contact
    ].map(component => component()).join('');
    const footerHtml = this.components.footer();
    
    const html = `
      ${headerHtml}
      <main id="main-content">
        ${mainContentHtml}
      </main>
      ${footerHtml}
    `;
    
    // Insert HTML into the app container
    app.innerHTML = html;
    
    // Initialize all components
    this.initializeComponents();
    
    // Initialize global features
    this.initializeGlobalFeatures();
  }

  initializeComponents() {
    Object.values(this.initializers).forEach(init => init());
  }

  initializeGlobalFeatures() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .portfolio-card, h2, .skill-box').forEach(el => {
      observer.observe(el);
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    });

    // Add micro-interactions for buttons
    document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.05)';
      });
      
      button.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
      });
    });

    // Initialize service cards rendering
    if (window.renderServiceCards) {
      window.renderServiceCards();
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.render();
});

// Export App for use in other modules if needed
export default App;