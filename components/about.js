export function About() {
  return `
    <section id="about" class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-montserrat text-3xl md:text-5xl text-primary mb-6">
              About Our Agency
            </h2>
            <p class="text-lg text-gray-700 mb-6">
              We are a forward-thinking digital services agency with a passion
              for transforming businesses through technology. Our team combines
              deep technical expertise with a thorough understanding of business
              challenges.
            </p>
            <p class="text-lg text-gray-700 mb-6">
              From startups to enterprises, we've helped dozens of companies
              navigate their digital transformation journey, delivering
              solutions that not only meet today's needs but scale for
              tomorrow's opportunities.
            </p>
            <div class="grid grid-cols-3 gap-6 mb-8">
              ${stats.map(stat => createStatBox(stat)).join('')}
            </div>
          </div>
          <div class="relative">
            <div class="about-visual">
              <div
                class="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-3xl"
              ></div>
              <div class="relative p-8">
                <div class="grid grid-cols-2 gap-4">
                  ${skills.map(skill => `<div class="skill-box">${skill}</div>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' }
];

const skills = [
  'Frontend Development',
  'Backend Development',
  'Mobile Development',
  'AI & Machine Learning',
  'Cloud Architecture',
  'DevOps'
];

function createStatBox(stat) {
  return `
    <div class="text-center">
      <div class="font-montserrat text-3xl text-secondary mb-2">
        ${stat.value}
      </div>
      <div class="text-gray-700">${stat.label}</div>
    </div>
  `;
}

export function initAbout() {
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
}