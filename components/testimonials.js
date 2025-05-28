export function Testimonials() {
  return `
    <section id="testimonials" class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-montserrat text-3xl md:text-5xl text-primary mb-4">
            What Our Clients Say
          </h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from businesses that have transformed with our custom digital
            solutions.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          ${testimonials.map(testimonial => createTestimonialCard(testimonial)).join('')}
        </div>
      </div>
    </section>
  `;
}

const testimonials = [
  {
    id: 1,
    quote: "Eazy Technology transformed our business processes completely. Their custom software solution reduced our operational costs by 35% and improved our team's productivity significantly.",
    author: "Sarah Johnson",
    role: "CEO, TechVantage"
  },
  {
    id: 2,
    quote: "The AI integration Eazy Technology developed for our platform has been a game-changer. We're now able to provide personalized recommendations that have increased our conversion rate by 50%.",
    author: "Mark Chen",
    role: "CTO, DataDrive Solutions"
  },
  {
    id: 3,
    quote: "Working with Eazy Technology felt like having an extended tech team. They delivered our mobile app ahead of schedule, and the quality exceeded our expectations.",
    author: "Emily Rodriguez",
    role: "Founder, HealthConnect"
  }
];

function createTestimonialCard(testimonial) {
  return `
    <div class="testimonial-card bg-light rounded-2xl p-8">
      <div class="mb-6">
        <i
          class="fas fa-quote-left text-3xl text-secondary opacity-50"
        ></i>
      </div>
      <p class="text-gray-700 mb-6 italic">
        "${testimonial.quote}"
      </p>
      <div class="flex items-center">
        <div class="w-12 h-12 bg-secondary rounded-full mr-4"></div>
        <div>
          <h4 class="font-semibold text-primary">${testimonial.author}</h4>
          <p class="text-sm text-gray-600">${testimonial.role}</p>
        </div>
      </div>
    </div>
  `;
}

export function initTestimonials() {
  // Testimonial animations are handled by the main observer
}