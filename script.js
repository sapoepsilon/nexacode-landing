// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.hidden.md\\:flex');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileMenuButton?.addEventListener('click', () => {
        const isOpen = navLinks?.classList.contains('flex');
        
        if (isOpen) {
            // Close menu
            navLinks?.classList.add('hidden');
            navLinks?.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-6', 'space-y-4');
            menuIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
        } else {
            // Open menu
            navLinks?.classList.remove('hidden');
            navLinks?.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-6', 'space-y-4');
            menuIcon?.classList.add('hidden');
            closeIcon?.classList.remove('hidden');
        }
    });
    
    // Close menu when clicking on a link
    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks?.classList.add('hidden');
            navLinks?.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-6', 'space-y-4');
            menuIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
        });
    });
});

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

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('shadow-lg');
        header.classList.add('bg-white/95');
        header.classList.add('backdrop-blur-sm');
    } else {
        header.classList.remove('shadow-lg');
        header.classList.remove('bg-white/95');
        header.classList.remove('backdrop-blur-sm');
    }
    
    lastScroll = currentScroll;
});

// Form submission - handled later in the script with full validation

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

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card, .portfolio-card, h2, .skill-box {
        opacity: 0;
    }
    
    /* Hover effects for interactive elements */
    .tech-card:hover {
        transform: translateY(-5px) scale(1.05);
    }
    
    .service-card:hover .service-icon {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
    
    .portfolio-card:hover .portfolio-image {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
    
    .portfolio-image {
        transition: transform 0.3s ease;
    }
    
    /* Button hover effects */
    .btn-primary:hover, .btn-secondary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    /* Service card interactive gradient */
    .service-card::before {
        background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(27, 153, 139, 0.08) 0%,
            transparent 50%
        );
    }
    
    /* Process step animations */
    .process-step {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .process-step.visible {
        animation: fadeInUp 0.6s ease-out forwards;
        animation-delay: calc(var(--index) * 0.1s);
    }
    
    /* Mobile touch feedback */
    .service-card.touch-active {
        transform: scale(0.98);
        transition: transform 0.1s ease;
    }
    
    @media (max-width: 768px) {
        .service-card {
            -webkit-tap-highlight-color: transparent;
        }
    }
`;
document.head.appendChild(style);

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});

// Service card interactive mouse tracking (desktop only)
if (window.innerWidth > 768) {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });
}

// Add touch feedback for mobile
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.classList.add('touch-active');
    });
    
    card.addEventListener('touchend', () => {
        setTimeout(() => {
            card.classList.remove('touch-active');
        }, 300);
    });
});

// Process step animations
const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.setProperty('--index', index);
            entry.target.classList.add('visible');
            processObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.process-step').forEach((step, index) => {
    step.style.setProperty('--index', index);
    processObserver.observe(step);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-animation');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000, isPercentage = false) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(start) + (isPercentage ? '%' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (isPercentage ? '%' : '');
        }
    };
    
    updateCounter();
}

// Trigger counter animation when in view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const isPercentage = target.classList.contains('percentage');
            const value = parseInt(target.textContent);
            target.textContent = '0' + (isPercentage ? '%' : '');
            animateCounter(target, value, 2000, isPercentage);
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.querySelectorAll('.counter, .percentage').forEach(el => {
    counterObserver.observe(el);
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

// Typing effect for hero headline (optional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const heroHeadline = document.querySelector('h1');
// if (heroHeadline) {
//     const originalText = heroHeadline.textContent;
//     typeWriter(heroHeadline, originalText);
// }

// FAQ accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', (e) => {
            e.preventDefault();
            
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            
            // Check if this item is currently open
            const isOpen = !answer.classList.contains('hidden');
            
            // Close all FAQ items first
            document.querySelectorAll('.faq-item').forEach(item => {
                const itemAnswer = item.querySelector('.faq-answer');
                const itemIcon = item.querySelector('.faq-question i');
                
                if (itemAnswer && itemIcon) {
                    itemAnswer.classList.add('hidden');
                    itemIcon.classList.remove('fa-minus');
                    itemIcon.classList.add('fa-plus');
                }
            });
            
            // If the clicked item was closed, open it
            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });
});

// Active navigation highlighting based on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-secondary', 'active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('text-secondary', 'active');
        }
    });
});

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    // Add input event listeners for real-time validation
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');
    
    // Real-time validation
    nameInput.addEventListener('blur', () => validateField(nameInput, 'name'));
    emailInput.addEventListener('blur', () => validateField(emailInput, 'email'));
    messageInput.addEventListener('blur', () => validateField(messageInput, 'message'));
    
    function validateField(field, type) {
        const value = field.value.trim();
        const errorSpan = field.parentElement.querySelector('.error-message');
        
        let isValid = true;
        
        switch(type) {
            case 'name':
                isValid = value.length > 0;
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
                break;
            case 'message':
                isValid = value.length > 10;
                break;
        }
        
        if (!isValid) {
            field.classList.add('error');
            errorSpan?.classList.remove('hidden');
            // Update icon color for enhanced form
            const icon = field.parentElement.querySelector('.input-icon');
            if (icon) icon.classList.add('text-red-500');
        } else {
            field.classList.remove('error');
            errorSpan?.classList.add('hidden');
            // Reset icon color for enhanced form
            const icon = field.parentElement.querySelector('.input-icon');
            if (icon) icon.classList.remove('text-red-500');
        }
        
        return isValid;
    }
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Check honeypot (bot-field for Netlify)
        const botField = contactForm.querySelector('input[name="bot-field"]');
        if (botField && botField.value) {
            return; // Bot detected
        }
        
        // Validate all fields
        const isNameValid = validateField(nameInput, 'name');
        const isEmailValid = validateField(emailInput, 'email');
        const isMessageValid = validateField(messageInput, 'message');
        
        if (!isNameValid || !isEmailValid || !isMessageValid) {
            return;
        }
        
        // Disable button during submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const buttonText = submitButton.querySelector('.button-text');
        const buttonIcon = submitButton.querySelector('.button-icon');
        
        submitButton.disabled = true;
        if (buttonText) buttonText.textContent = 'Sending...';
        if (buttonIcon) buttonIcon.classList.add('fa-spin');
        
        // Submit to Netlify Forms
        try {
            const formData = new FormData(contactForm);
            
            // Submit form to Netlify
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            
            if (response.ok) {
                // Show success message
                const successMessage = contactForm.querySelector('.success-message');
                successMessage.classList.remove('hidden');
                
                // Reset form
                contactForm.reset();
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            submitButton.disabled = false;
            if (buttonText) buttonText.textContent = 'Send Message';
            if (buttonIcon) buttonIcon.classList.remove('fa-spin');
        }
    });
}

// Mobile navigation improvements
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navMenu = document.querySelector('.hidden.md\\:flex');

if (mobileMenuButton && navMenu) {
    // Close mobile menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.add('hidden');
            navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-6');
        });
    });
}

// Service Cards Component
const servicesData = [
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Lightning-fast, SEO-optimized websites that captivate visitors and drive conversions',
        icon: 'fas fa-laptop-code',
        iconPosition: 'pl-2',
        gradientFrom: 'from-secondary',
        gradientTo: 'to-teal-600',
        glowColor: 'bg-secondary',
        hoverColor: 'group-hover:text-secondary',
        checkColor: 'text-secondary',
        features: [
            'Custom Design',
            'Responsive & Mobile-First',
            'Performance Optimized'
        ]
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        description: 'Native and cross-platform apps that deliver exceptional user experiences',
        icon: 'fas fa-mobile-screen',
        iconPosition: 'pl-2',
        gradientFrom: 'from-accent',
        gradientTo: 'to-orange-600',
        glowColor: 'bg-accent',
        hoverColor: 'group-hover:text-accent',
        checkColor: 'text-accent',
        features: [
            'iOS & Android',
            'React Native',
            'Flutter Apps'
        ]
    },
    {
        id: 'ai-integration',
        title: 'AI Integration',
        description: 'Intelligent solutions powered by cutting-edge artificial intelligence',
        icon: 'fas fa-robot',
        iconPosition: 'pl-2',
        gradientFrom: 'from-primary',
        gradientTo: 'to-indigo-700',
        glowColor: 'bg-primary',
        hoverColor: 'group-hover:text-indigo-600',
        checkColor: 'text-indigo-600',
        features: [
            'Machine Learning',
            'Natural Language',
            'Computer Vision'
        ]
    },
    {
        id: 'custom-software',
        title: 'Custom Software',
        description: 'Bespoke solutions tailored to your unique business requirements',
        icon: 'fas fa-microchip',
        iconPosition: '',
        gradientFrom: 'from-purple-600',
        gradientTo: 'to-pink-600',
        glowColor: 'bg-purple-600',
        hoverColor: 'group-hover:text-purple-600',
        checkColor: 'text-purple-600',
        features: [
            'Enterprise Solutions',
            'API Development',
            'Cloud Architecture'
        ]
    }
];

function createServiceCard(service) {
    return `
        <div class="service-card group">
            <div class="service-icon-wrapper">
                <div class="service-icon bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} group-hover:scale-110 md:group-hover:scale-110 rounded-full">
                    <i class="${service.icon} text-white text-2xl md:text-3xl ${service.iconPosition}"></i>
                </div>
                <div class="icon-glow ${service.glowColor}"></div>
            </div>
            <h3 class="font-montserrat text-lg md:text-xl text-primary mb-2 md:mb-3 ${service.hoverColor} transition-colors">
                ${service.title}
            </h3>
            <p class="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                ${service.description}
            </p>
            <ul class="text-xs md:text-sm text-gray-600 space-y-1.5 md:space-y-2">
                ${service.features.map(feature => `
                    <li class="flex items-center">
                        <i class="fas fa-check ${service.checkColor} mr-2"></i>${feature}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function renderServiceCards() {
    const servicesContainer = document.querySelector('#services-grid');
    if (!servicesContainer) return;
    
    const servicesHTML = servicesData.map(service => createServiceCard(service)).join('');
    servicesContainer.innerHTML = servicesHTML;
    
    // Re-apply animations and interactions to new elements
    const newServiceCards = servicesContainer.querySelectorAll('.service-card');
    
    // Apply fade-in animation observer
    newServiceCards.forEach(el => {
        observer.observe(el);
    });
    
    // Apply mouse tracking for desktop
    if (window.innerWidth > 768) {
        newServiceCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--mouse-x', '50%');
                card.style.setProperty('--mouse-y', '50%');
            });
        });
    }
    
    // Apply touch feedback for mobile
    newServiceCards.forEach(card => {
        card.addEventListener('touchstart', () => {
            card.classList.add('touch-active');
        });
        
        card.addEventListener('touchend', () => {
            setTimeout(() => {
                card.classList.remove('touch-active');
            }, 300);
        });
    });
}

// Initialize service cards when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderServiceCards();
});