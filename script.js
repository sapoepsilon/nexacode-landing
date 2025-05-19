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

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send the data to a server
    console.log('Form submitted with data:', data);
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    contactForm.reset();
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
    const honeypot = contactForm.querySelector('input[name="website"]');
    
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
        } else {
            field.classList.remove('error');
            errorSpan?.classList.add('hidden');
        }
        
        return isValid;
    }
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Check honeypot
        if (honeypot.value) {
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
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // Simulate form submission
        try {
            const formData = new FormData(contactForm);
            // In a real application, you would send this data to a server
            console.log('Form submitted:', Object.fromEntries(formData));
            
            // Simulate server delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
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
            
        } catch (error) {
            alert('An error occurred. Please try again later.');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
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