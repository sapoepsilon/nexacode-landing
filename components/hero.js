export function Hero() {
  return `
    <section
      id="home"
      class="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-light min-h-[600px]"
    >
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              class="font-montserrat text-4xl md:text-6xl text-primary mb-6 leading-tight"
            >
              Your Own Private AI Assistant
            </h1>
            <p class="text-xl text-gray-700 mb-6">
              Professional-grade AI for medical, legal, and software companies who can't risk their data with public AI services.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              <span class="font-semibold text-secondary">No Data Sharing</span> • 
              <span class="font-semibold text-secondary">Full Control</span> • 
              <span class="font-semibold text-secondary">HIPAA Compliant</span>
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18tvjwamRi5TnTLPTCGPfktQPDLH3vg-50tM9-5Zp7UyfEEeO-ArTnENmXDFhNxVZ_aVw1H3Xg"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-lg inline-flex items-center justify-center gap-2"
              >
                <i class="fas fa-calendar-check"></i>
                Schedule Private AI Consultation
              </a>
              <a
                href="#contact"
                class="btn-secondary bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 border-2 border-primary inline-flex items-center justify-center gap-2"
              >
                <i class="fas fa-envelope"></i>
                Get Custom Quote
              </a>
            </div>
            <div class="mt-6 text-sm text-gray-600">
              <p><i class="fas fa-clock text-secondary mr-2"></i>15-minute consultation • Custom proposal within 24h</p>
            </div>
          </div>
          <div class="relative">
            <div class="hero-animation">
              <div
                class="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-10 rounded-3xl"
              ></div>
              <div class="grid grid-cols-3 gap-4 p-8">
                <div class="tech-card">Medical AI</div>
                <div class="tech-card">Legal AI</div>
                <div class="tech-card">Coding AI</div>
                <div class="tech-card">HIPAA</div>
                <div class="tech-card">Private</div>
                <div class="tech-card">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Floating Meeting Button -->
      <a
        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18tvjwamRi5TnTLPTCGPfktQPDLH3vg-50tM9-5Zp7UyfEEeO-ArTnENmXDFhNxVZ_aVw1H3Xg"
        target="_blank"
        rel="noopener noreferrer"
        class="floating-meeting-btn"
        id="floating-meeting-btn"
      >
        <i class="fas fa-calendar-check"></i>
        Book Call
      </a>
    </section>
  `;
}

export function initHero() {
  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-animation');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Show/hide floating button based on scroll
  let ticking = false;
  
  function updateFloatingButton() {
    const floatingBtn = document.getElementById('floating-meeting-btn');
    const heroSection = document.getElementById('home');
    
    if (floatingBtn && heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 100; // Show 100px before hero ends
      const scrollPosition = window.pageYOffset;
      
      if (scrollPosition > heroBottom) {
        floatingBtn.classList.add('visible');
      } else {
        floatingBtn.classList.remove('visible');
      }
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateFloatingButton);
      ticking = true;
    }
  });

  // Initial check
  updateFloatingButton();
}