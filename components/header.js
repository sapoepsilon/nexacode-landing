export function Header() {
  return `
    <header class="fixed w-full top-0 bg-white shadow-md z-50 transition-all duration-300">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="font-montserrat text-2xl text-primary">
            <img
              src="logo.svg"
              alt="Eazy Technology Logo"
              class="h-10 w-auto"
            />
          </div>
          <div id="mobile-nav" class="hidden md:flex space-x-8 items-center">
            <a href="#home" class="nav-link active" aria-current="page">Home</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#portfolio" class="nav-link">Portfolio</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
          <button 
            class="md:hidden mobile-menu-button p-2"
            aria-expanded="false"
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <svg
              class="menu-icon w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Open menu"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              class="close-icon w-6 h-6 hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Close menu"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  `;
}

export function initHeader() {
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

  // Mobile menu toggle
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
      mobileMenuButton?.setAttribute('aria-expanded', 'false');
    } else {
      // Open menu
      navLinks?.classList.remove('hidden');
      navLinks?.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-6', 'space-y-4');
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
      mobileMenuButton?.setAttribute('aria-expanded', 'true');
    }
  });
  
  // Close menu when clicking on a link
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.add('hidden');
      navLinks?.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-6', 'space-y-4');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
      mobileMenuButton?.setAttribute('aria-expanded', 'false');
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
      link.removeAttribute('aria-current');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('text-secondary', 'active');
        link.setAttribute('aria-current', 'page');
      }
    });
  });
}