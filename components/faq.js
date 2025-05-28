export function FAQ() {
  return `
    <section id="faq" class="py-16 md:py-24 bg-light">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="font-montserrat text-3xl md:text-5xl text-primary mb-4">
            Private AI <span class="text-secondary">Questions & Answers</span>
          </h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to know about our private AI solutions for healthcare, legal, and software companies.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          ${faqItems.map(item => createFAQItem(item)).join('')}
        </div>
        
        <div class="text-center mt-12">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18tvjwamRi5TnTLPTCGPfktQPDLH3vg-50tM9-5Zp7UyfEEeO-ArTnENmXDFhNxVZ_aVw1H3Xg"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-lg inline-flex items-center justify-center gap-2"
            >
              <i class="fas fa-calendar-check"></i>
              Schedule AI Consultation
            </a>
            <a
              href="#contact"
              class="btn-secondary bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 border-2 border-primary inline-flex items-center justify-center gap-2"
            >
              <i class="fas fa-envelope"></i>
              Get Detailed Quote
            </a>
          </div>
          <p class="text-sm text-gray-600 mt-4">
            <i class="fas fa-shield-alt text-secondary mr-2"></i>
            All consultations are confidential and HIPAA-compliant
          </p>
        </div>
      </div>
    </section>
  `;
}

const faqItems = [
  {
    id: 1,
    question: 'What makes your AI solutions "private" compared to ChatGPT or Claude?',
    answer: `Our private AI solutions run entirely on your infrastructure or dedicated cloud environment, ensuring your data never leaves your control. Unlike public AI services (ChatGPT, Claude, etc.) that send your data to third-party servers:<br/><br/>
      <strong>✓ Zero data sharing:</strong> Your conversations and documents stay 100% private<br/>
      <strong>✓ HIPAA compliance:</strong> Meets all healthcare privacy requirements<br/>
      <strong>✓ Custom training:</strong> AI trained specifically on your industry and use case<br/>
      <strong>✓ Complete control:</strong> You own the data, models, and infrastructure<br/>
      <strong>✓ No usage limits:</strong> Unlimited queries without per-token charges`
  },
  {
    id: 2,
    question: 'How long does implementation take and what are the costs?',
    answer: `Implementation timeline varies by complexity:<br/><br/>
      <strong>Medical AI Systems:</strong> 4-8 weeks, $75k-150k + hosting<br/>
      <strong>Legal AI Solutions:</strong> 3-6 weeks, $50k-100k + hosting<br/>
      <strong>Private Coding Assistants:</strong> 2-4 weeks, $25k-75k + hosting<br/><br/>
      <strong>Ongoing costs:</strong><br/>
      • On-premise: Hardware purchase ($20k-50k) + maintenance<br/>
      • Private cloud hosting: $2k-5k/month (includes GPU resources)<br/>
      • Support & updates: $500-1,500/month<br/><br/>
      Most clients see ROI within 3-6 months through time savings and reduced risk.`
  },
  {
    id: 3,
    question: 'Is this really HIPAA compliant for healthcare organizations?',
    answer: `Yes, absolutely. Our healthcare AI solutions are designed from the ground up for HIPAA compliance:<br/><br/>
      <strong>✓ Business Associate Agreements (BAA):</strong> We sign comprehensive BAAs<br/>
      <strong>✓ On-premise deployment:</strong> AI runs entirely within your network<br/>
      <strong>✓ Audit logging:</strong> Complete audit trails for all AI interactions<br/>
      <strong>✓ Access controls:</strong> Role-based permissions and authentication<br/>
      <strong>✓ Data encryption:</strong> End-to-end encryption at rest and in transit<br/>
      <strong>✓ Regular assessments:</strong> Ongoing compliance monitoring and reporting<br/><br/>
      We work with healthcare compliance officers to ensure all requirements are met.`
  },
  {
    id: 4,
    question: 'Can you integrate with our existing software systems?',
    answer: `Yes, our private AI solutions are designed for seamless integration:<br/><br/>
      <strong>Healthcare:</strong> EMRs (Epic, Cerner), PACS systems, laboratory databases<br/>
      <strong>Legal:</strong> Document management, case management, time tracking systems<br/>
      <strong>Software:</strong> Git repositories, documentation platforms, IDEs, CI/CD pipelines<br/><br/>
      <strong>Integration methods:</strong><br/>
      • REST APIs for real-time communication<br/>
      • Secure file transfers and batch processing<br/>
      • Custom connectors for proprietary systems<br/>
      • Workflow automation using n8n or similar tools<br/><br/>
      We conduct a thorough system analysis before implementation to ensure compatibility.`
  },
  {
    id: 5,
    question: 'What if we need to scale or add more users?',
    answer: `Our solutions are designed for enterprise scalability:<br/><br/>
      <strong>Horizontal scaling:</strong> Add more servers/GPUs as demand grows<br/>
      <strong>Load balancing:</strong> Distribute requests across multiple AI instances<br/>
      <strong>User management:</strong> Easy addition of new users with role-based access<br/>
      <strong>Department isolation:</strong> Separate AI instances for different teams/departments<br/><br/>
      <strong>Scaling options:</strong><br/>
      • On-premise: Add additional hardware as needed<br/>
      • Private cloud: Auto-scaling based on usage patterns<br/>
      • Hybrid: Combine on-premise and cloud for optimal performance<br/><br/>
      Pricing scales predictably with usage, no surprises.`
  },
  {
    id: 6,
    question: 'How do you ensure the AI is accurate for our specific industry?',
    answer: `We customize AI models specifically for your industry and use case:<br/><br/>
      <strong>Medical AI:</strong><br/>
      • Trained on medical literature, clinical guidelines, and diagnostic databases<br/>
      • Validated against real patient cases (with proper anonymization)<br/>
      • Continuous learning from your organization's best practices<br/><br/>
      <strong>Legal AI:</strong><br/>
      • Trained on case law, legal precedents, and regulatory documents<br/>
      • Specialized for your practice areas (corporate, litigation, etc.)<br/>
      • Regular updates with new legal developments<br/><br/>
      <strong>Coding AI:</strong><br/>
      • Trained on your codebase, documentation, and coding standards<br/>
      • Understands your specific frameworks and architecture<br/>
      • Learns from your team's code review patterns<br/><br/>
      We include performance benchmarks and accuracy metrics in all implementations.`
  },
  {
    id: 7,
    question: 'What support do you provide after deployment?',
    answer: `Comprehensive ongoing support is included with every deployment:<br/><br/>
      <strong>24/7 monitoring:</strong> Real-time system health and performance monitoring<br/>
      <strong>Regular updates:</strong> Model improvements and security patches<br/>
      <strong>Performance optimization:</strong> Continuous tuning for better results<br/>
      <strong>User training:</strong> Ongoing training for new team members<br/>
      <strong>Compliance reporting:</strong> Regular compliance audits and documentation<br/>
      <strong>Technical support:</strong> Direct access to our AI engineers<br/><br/>
      <strong>Response times:</strong><br/>
      • Critical issues: 1-hour response<br/>
      • Standard support: 4-hour response<br/>
      • Feature requests: Next business day<br/><br/>
      We also provide quarterly business reviews to optimize your AI strategy.`
  }
];

function createFAQItem(item) {
  return `
    <div class="faq-item mb-6">
      <button
        type="button"
        class="faq-question w-full text-left p-6 bg-white rounded-lg font-semibold text-primary flex justify-between items-center hover:shadow-lg transition-all duration-300"
      >
        <span class="text-lg">${item.question}</span>
        <div class="faq-icon text-secondary ml-4 flex-shrink-0">
          <i class="fas fa-plus transition-transform duration-300 text-xl"></i>
        </div>
      </button>
      <div class="faq-answer hidden p-6 bg-white -mt-2 rounded-b-lg border-t border-gray-100">
        <div class="text-gray-700 leading-relaxed">
          ${item.answer}
        </div>
      </div>
    </div>
  `;
}

export function initFAQ() {
  // FAQ accordion functionality
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
          itemIcon.style.transform = 'rotate(0deg)';
        }
      });
      
      // If the clicked item was closed, open it
      if (!isOpen) {
        answer.classList.remove('hidden');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}