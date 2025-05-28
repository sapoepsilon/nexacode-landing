// Private AI Services data
const servicesData = [
  {
    id: "medical-ai",
    title: "Medical AI Solutions",
    description:
      "HIPAA-compliant AI for patient data analysis, medical imaging, and diagnostic assistance",
    icon: "fas fa-user-md",
    iconPosition: "pl-1",
    gradientFrom: "from-secondary",
    gradientTo: "to-teal-600",
    glowColor: "bg-secondary",
    hoverColor: "group-hover:text-secondary",
    checkColor: "text-secondary",
    features: [
      "HIPAA Compliance",
      "Medical Imaging AI",
      "Patient Data Analysis",
    ],
  },
  {
    id: "legal-ai",
    title: "Legal AI Systems",
    description:
      "Confidential document processing, case law analysis, and contract review with zero data exposure",
    icon: "fas fa-gavel",
    iconPosition: "pl-1",
    gradientFrom: "from-accent",
    gradientTo: "to-orange-600",
    glowColor: "bg-accent",
    hoverColor: "group-hover:text-accent",
    checkColor: "text-accent",
    features: ["Document Processing", "Case Law Analysis", "Contract Review"],
  },
  {
    id: "coding-ai",
    title: "Private Coding Assistants",
    description:
      "Code review, documentation, and development assistance for proprietary software without IP exposure",
    icon: "fas fa-code",
    iconPosition: "pl-1",
    gradientFrom: "from-primary",
    gradientTo: "to-indigo-700",
    glowColor: "bg-primary",
    hoverColor: "group-hover:text-indigo-600",
    checkColor: "text-indigo-600",
    features: ["Code Review", "Documentation", "Proprietary Security"],
  },
];

function createServiceCard(service) {
  return `
    <div class="service-card group">
      <div class="service-icon-wrapper">
        <div class="service-icon bg-gradient-to-br ${service.gradientFrom} ${
    service.gradientTo
  } group-hover:scale-110 md:group-hover:scale-110">
          <i class="${service.icon} text-white text-2xl md:text-3xl ${
    service.iconPosition
  }"></i>
        </div>
        <div class="icon-glow ${service.glowColor}"></div>
      </div>
      <h3 class="font-montserrat text-lg md:text-xl text-primary mb-2 md:mb-3 ${
        service.hoverColor
      } transition-colors">
        ${service.title}
      </h3>
      <p class="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
        ${service.description}
      </p>
      <ul class="text-xs md:text-sm text-gray-600 space-y-1.5 md:space-y-2">
        ${service.features
          .map(
            (feature) => `
          <li class="flex items-center">
            <i class="fas fa-check ${service.checkColor} mr-2"></i>${feature}
          </li>
        `
          )
          .join("")}
      </ul>
      <div class="mt-6 pt-4 border-t border-gray-100">
        <div class="flex gap-2">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18tvjwamRi5TnTLPTCGPfktQPDLH3vg-50tM9-5Zp7UyfEEeO-ArTnENmXDFhNxVZ_aVw1H3Xg"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 bg-gradient-to-r from-accent to-orange-600 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Consultation
          </a>
          <a
            href="#contact"
            class="flex-1 bg-white border border-primary text-primary px-4 py-2 rounded-lg text-center text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  `;
}

// Comparison Table Component
function createComparisonTable() {
  return `
    <div class="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-200">
      <div class="text-center mb-8 md:mb-12">
        <h3 class="font-montserrat text-2xl md:text-3xl text-primary mb-4">
          Why Choose <span class="text-secondary">Private AI</span>?
        </h3>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Compare the benefits of our private AI solutions vs public AI services
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gradient-to-r from-primary to-indigo-700 text-white">
              <tr>
                <th class="px-6 py-4 text-left font-semibold">Feature</th>
                <th class="px-6 py-4 text-center font-semibold">Public AI<br><span class="text-sm font-normal">(ChatGPT, Claude)</span></th>
                <th class="px-6 py-4 text-center font-semibold bg-secondary">Private AI<br><span class="text-sm font-normal">(Our Solution)</span></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-900">Data Privacy</td>
                <td class="px-6 py-4 text-center">
                  <i class="fas fa-times text-red-500 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">Data sent to third parties</div>
                </td>
                <td class="px-6 py-4 text-center bg-green-50">
                  <i class="fas fa-check text-green-600 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">100% private & secure</div>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-900">HIPAA Compliance</td>
                <td class="px-6 py-4 text-center">
                  <i class="fas fa-times text-red-500 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">Not compliant</div>
                </td>
                <td class="px-6 py-4 text-center bg-green-50">
                  <i class="fas fa-check text-green-600 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">Fully compliant</div>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-900">Customization</td>
                <td class="px-6 py-4 text-center">
                  <i class="fas fa-minus text-yellow-500 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">Limited options</div>
                </td>
                <td class="px-6 py-4 text-center bg-green-50">
                  <i class="fas fa-check text-green-600 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">Fully customizable</div>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-900">Data Control</td>
                <td class="px-6 py-4 text-center">
                  <i class="fas fa-times text-red-500 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">No control over data</div>
                </td>
                <td class="px-6 py-4 text-center bg-green-50">
                  <i class="fas fa-check text-green-600 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">Complete control</div>
                </td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 font-semibold text-gray-900">Industry Training</td>
                <td class="px-6 py-4 text-center">
                  <i class="fas fa-minus text-yellow-500 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">General purpose</div>
                </td>
                <td class="px-6 py-4 text-center bg-green-50">
                  <i class="fas fa-check text-green-600 text-xl"></i>
                  <div class="text-sm text-gray-600 mt-1">Industry-specific</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function Services() {
  return `
    <section
      id="services"
      class="py-12 md:py-24 bg-gradient-to-b from-white to-light"
    >
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-12 md:mb-16">
          <h2
            class="font-montserrat text-2xl sm:text-3xl md:text-5xl text-primary mb-3 md:mb-4 animate-fadeIn"
          >
            <span class="text-secondary">Private AI</span> Solutions
          </h2>
          <p
            class="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-slideUp px-4"
          >
            Professional-grade AI that keeps your sensitive data secure and compliant
          </p>
        </div>

        <div
          id="services-grid"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          <!-- Service cards will be dynamically rendered here by JavaScript -->
        </div>

        ${createComparisonTable()}

        <!-- Service Process Section -->
        <div class="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-200">
          <h3
            class="font-montserrat text-xl sm:text-2xl md:text-3xl text-primary text-center mb-8 md:mb-12"
          >
            Our Implementation Process
          </h3>

          <!-- Desktop Timeline -->
          <div class="hidden md:block relative max-w-5xl mx-auto px-12">
            <!-- Process Timeline Line -->
            <div
              class="process-timeline-line absolute h-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-full top-10 left-20 right-20 z-0"
            ></div>

            <div class="flex justify-between items-start relative z-10">
              ${processSteps.map((step, index) => createProcessStep(step, index)).join("")}
            </div>
          </div>

          <!-- Mobile Vertical Timeline -->
          <div class="md:hidden px-4">
            <div class="relative">
              <!-- Vertical Timeline Line -->
              <div
                class="absolute h-full w-1 bg-gradient-to-b from-secondary via-accent to-primary left-8 top-0 rounded-full"
              ></div>

              <div class="space-y-12">
                ${processSteps
                  .map((step, index) => createMobileProcessStep(step, index))
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

const processSteps = [
  {
    id: "assess",
    title: "Assess",
    subtitle: "Privacy & compliance needs",
    icon: "fa-shield-alt",
    colorClasses: "bg-secondary",
    hoverClasses: "hover:bg-teal-600",
    description:
      "We evaluate your data privacy requirements, compliance needs, and current infrastructure to design the perfect AI solution.",
    detailPosition: "left",
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Private AI architecture",
    icon: "fa-drafting-compass",
    colorClasses: "bg-accent",
    hoverClasses: "hover:bg-orange-600",
    description:
      "Our experts design a secure, private AI system tailored to your industry requirements and regulatory compliance.",
    detailPosition: "left",
  },
  {
    id: "deploy",
    title: "Deploy",
    subtitle: "Secure implementation",
    icon: "fa-server",
    colorClasses: "bg-primary",
    hoverClasses: "hover:bg-indigo-700",
    description:
      "We deploy your private AI system on-premise or in your dedicated cloud environment with enterprise security.",
    detailPosition: "left",
  },
  {
    id: "support",
    title: "Support",
    subtitle: "Ongoing optimization",
    icon: "fa-headset",
    colorClasses: "bg-purple-600",
    hoverClasses: "hover:bg-purple-700",
    description:
      "Continuous monitoring, updates, and optimization to ensure peak performance and security compliance.",
    detailPosition: "right",
  },
];

function createProcessStep(step, index) {
  const isLastStep = index === processSteps.length - 1;
  const detailPositionClass = isLastStep ? "right-0" : "left-0";
  
  return `
    <div class="process-step-enhanced group relative flex-1" data-step="${step.id}">
      <div class="flex flex-col items-center">
        <div class="relative mb-4">
          <div
            class="process-icon-enhanced ${step.colorClasses} ${step.hoverClasses} 
                   group-hover:scale-110 transition-all duration-300 shadow-lg rounded-full
                   w-20 h-20 flex items-center justify-center"
          >
            <i class="fas ${step.icon} text-white text-2xl"></i>
          </div>
          <div class="absolute inset-0 ${step.colorClasses} opacity-20 blur-xl 
                      group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
        </div>
        
        <h4 class="font-semibold text-primary text-lg mb-2 text-center">
          ${step.title}
        </h4>
        <p class="text-sm text-gray-600 text-center max-w-[150px]">
          ${step.subtitle}
        </p>
      </div>
      
      <div
        class="process-detail opacity-0 group-hover:opacity-100 pointer-events-none
               group-hover:pointer-events-auto transition-all duration-300 
               absolute top-28 ${detailPositionClass} bg-white p-5 rounded-xl 
               shadow-2xl w-64 z-30 border border-gray-100
               transform group-hover:translate-y-2"
      >
        <div class="absolute -top-2 ${isLastStep ? 'right-8' : 'left-8'} 
                    w-4 h-4 bg-white border-t border-l border-gray-100 
                    transform rotate-45"></div>
        <p class="text-sm text-gray-700 leading-relaxed">
          ${step.description}
        </p>
      </div>
    </div>
  `;
}

function createMobileProcessStep(step, index) {
  return `
    <div class="process-step-mobile relative pl-16" data-step="${step.id}">
      <div
        class="process-icon-mobile absolute left-4 w-9 h-9 ${step.colorClasses}
               rounded-full flex items-center justify-center shadow-lg 
               transform -translate-x-1/2 transition-all duration-300"
      >
        <i class="fas ${step.icon} text-white text-sm"></i>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg 
                  transition-shadow duration-300 border border-gray-100">
        <h4 class="font-semibold text-primary text-base mb-1">
          ${step.title}
        </h4>
        <p class="text-xs text-gray-600 mb-2">
          ${step.subtitle}
        </p>
        <p class="text-xs text-gray-700 leading-relaxed">
          ${step.description}
        </p>
      </div>
    </div>
  `;
}

export function initServices() {
  // Render service cards
  const servicesContainer = document.querySelector("#services-grid");
  if (servicesContainer) {
    const servicesHTML = servicesData
      .map((service) => createServiceCard(service))
      .join("");
    servicesContainer.innerHTML = servicesHTML;

    // Re-apply animations and interactions to new elements
    const newServiceCards = servicesContainer.querySelectorAll(".service-card");

    // Apply fade-in animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    newServiceCards.forEach((el) => {
      observer.observe(el);
    });

    // Apply mouse tracking for desktop
    if (window.innerWidth > 768) {
      newServiceCards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });

        card.addEventListener("mouseleave", () => {
          card.style.setProperty("--mouse-x", "50%");
          card.style.setProperty("--mouse-y", "50%");
        });
      });
    }

    // Apply touch feedback for mobile
    newServiceCards.forEach((card) => {
      card.addEventListener("touchstart", () => {
        card.classList.add("touch-active");
      });

      card.addEventListener("touchend", () => {
        setTimeout(() => {
          card.classList.remove("touch-active");
        }, 300);
      });
    });
  }

  // Process step animations
  const processObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.setProperty("--index", index);
          entry.target.classList.add("visible");
          processObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".process-step").forEach((step, index) => {
    step.style.setProperty("--index", index);
    processObserver.observe(step);
  });
}