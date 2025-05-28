export function Portfolio() {
  return `
    <section id="portfolio" class="py-16 md:py-24 bg-light">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-montserrat text-3xl md:text-5xl text-primary mb-4">
            Our Portfolio
          </h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            transform digitally.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          ${portfolioItems.map(item => createPortfolioCard(item)).join('')}
        </div>
      </div>
    </section>
  `;
}

const portfolioItems = [
  {
    id: 'viusbuilt',
    title: 'ViusBuilt.com',
    description: 'Construction management platform streamlining project workflows and communication.',
    image: 'https://placehold.co/600x400/1B998B/FFFFFF?text=ViusBuilt',
    gradientFrom: 'from-secondary',
    gradientTo: 'to-primary',
    technologies: ['React', 'Node.js', 'MongoDB'],
    result: '50% increase in project efficiency',
    caseStudyUrl: 'viusbuilt-case-study.html'
  },
  {
    id: 'estmtagent',
    title: 'EstmtAgent.com',
    description: 'Real estate technology solution revolutionizing property estimation and listing.',
    image: 'https://placehold.co/600x400/FF9B71/FFFFFF?text=EstmtAgent',
    gradientFrom: 'from-accent',
    gradientTo: 'to-secondary',
    technologies: ['Vue.js', 'Python', 'AI/ML'],
    result: '3x faster property valuations',
    caseStudyUrl: 'estmtagent-case-study.html'
  },
  {
    id: 'skilldrop',
    title: 'SkillDrop.ru',
    description: 'Educational technology platform connecting learners with expert instructors globally.',
    image: 'https://placehold.co/600x400/2D3047/FFFFFF?text=SkillDrop',
    gradientFrom: 'from-primary',
    gradientTo: 'to-accent',
    technologies: ['Angular', 'Django', 'PostgreSQL'],
    result: '10,000+ active users',
    caseStudyUrl: 'skilldrop-case-study.html'
  }
];

function createPortfolioCard(item) {
  return `
    <div class="portfolio-card">
      <div
        class="portfolio-image bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} relative overflow-hidden hover:shadow-xl rounded-xl"
      >
        <img
          src="${item.image}"
          alt="${item.title} - ${item.description}"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="p-6">
        <h3 class="font-montserrat text-xl text-primary mb-2">
          ${item.title}
        </h3>
        <p class="text-gray-700 mb-4">
          ${item.description}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <p class="text-sm text-secondary font-semibold mb-4">
          ${item.result}
        </p>
        <a
          href="${item.caseStudyUrl}"
          class="btn-secondary bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-block"
          >View Case Study</a
        >
      </div>
    </div>
  `;
}

export function initPortfolio() {
  // Portfolio animations are handled by the main observer
}