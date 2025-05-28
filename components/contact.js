export function Contact() {
  return `
    <section
      id="contact"
      class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5"
    >
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2
            class="font-montserrat text-3xl md:text-5xl text-primary mb-4 animate-fadeIn"
          >
            Let's Build Something Amazing Together
          </h2>
          <p class="text-xl text-gray-700 max-w-3xl mx-auto animate-slideUp">
            Ready to transform your digital vision into reality? Get in touch
            and let's discuss your project.
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <!-- Contact Form -->
            <div
              class="form-container bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-bl-full"
              ></div>
              <div
                class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-tr-full"
              ></div>

              <h3
                class="font-montserrat text-2xl md:text-3xl text-primary mb-8 relative z-10"
              >
                Send Us a Message
              </h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                class="contact-form space-y-6 relative z-10"
              >
                <input type="hidden" name="form-name" value="contact" />

                ${formFields.map(field => createFormField(field)).join('')}

                <!-- Netlify spam protection -->
                <div class="hidden" aria-hidden="true">
                  <label
                    >Don't fill this out if you're human:
                    <input name="bot-field" tabindex="-1" autocomplete="off"
                  /></label>
                </div>

                <button type="submit" class="submit-button group" aria-describedby="submit-help">
                  <span class="button-text">Send Message</span>
                  <i class="fas fa-paper-plane button-icon" aria-hidden="true"></i>
                </button>
                <div id="submit-help" class="sr-only">Submit your message to contact Eazy Technology</div>

                <div
                  class="success-message mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-2xl hidden"
                  role="alert"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <div class="flex items-start space-x-3">
                    <i
                      class="fas fa-check-circle text-2xl text-green-600 mt-0.5"
                    ></i>
                    <div>
                      <p class="font-semibold text-lg mb-1">
                        Thank you for your message!
                      </p>
                      <p class="text-green-700">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
              <div class="animate-slideUp">
                <h3
                  class="font-montserrat text-2xl md:text-3xl text-primary mb-6"
                >
                  Get in Touch
                </h3>
                <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                  We're here to help bring your digital vision to life. Whether
                  you have a question about our services, pricing, or want to
                  discuss a potential project, don't hesitate to reach out.
                </p>
              </div>

              <div class="space-y-6">
                ${contactInfo.map(info => createContactInfoCard(info)).join('')}

                <!-- Quick Response Promise -->
                <div class="response-promise-card">
                  <i class="fas fa-bolt text-3xl text-accent mb-3"></i>
                  <h4 class="font-montserrat text-lg text-primary mb-2">
                  Quick Response Promise
                </h4>
                <p class="text-gray-700">
                  We typically respond within 2-4 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

const formFields = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'John Doe',
    icon: 'fa-user',
    required: true,
    errorMessage: 'Please enter your name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'john@example.com',
    icon: 'fa-envelope',
    required: true,
    errorMessage: 'Please enter a valid email'
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Phone',
    placeholder: '+1 (555) 123-4567',
    icon: 'fa-phone',
    required: false
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Project Description',
    placeholder: 'Tell us about your project goals, timeline, and any specific requirements...',
    icon: 'fa-message',
    required: true,
    errorMessage: 'Please describe your project',
    rows: 5
  }
];

const contactInfo = [
  {
    icon: 'fa-envelope',
    title: 'Email',
    value: 'ismatulla@mansurov.dev',
    href: 'mailto:ismatulla@mansurov.dev',
    gradientFrom: 'from-secondary',
    gradientTo: 'to-teal-600'
  },
  {
    icon: 'fa-phone',
    title: 'Phone',
    value: '+1 (801) 635-0784',
    href: 'tel:+18016350784',
    gradientFrom: 'from-accent',
    gradientTo: 'to-orange-600'
  },
  {
    icon: 'fa-map-marker-alt',
    title: 'Location',
    value: 'Salt Lake City, UT, USA',
    gradientFrom: 'from-primary',
    gradientTo: 'to-indigo-700'
  }
];

function createFormField(field) {
  const fieldId = `field-${field.name}`;
  const errorId = `error-${field.name}`;
  
  if (field.type === 'textarea') {
    return `
      <div class="form-group">
        <label for="${fieldId}" class="form-label">
          <span class="label-text">${field.label}</span>
          ${field.required ? '<span class="label-required" aria-label="required">*</span>' : ''}
        </label>
        <div class="input-wrapper">
          <i class="fas ${field.icon} input-icon textarea-icon" aria-hidden="true"></i>
          <textarea
            id="${fieldId}"
            ${field.required ? 'required' : ''}
            class="form-input-enhanced min-h-[150px] resize-y"
            rows="${field.rows}"
            placeholder="${field.placeholder}"
            name="${field.name}"
            ${field.errorMessage ? `aria-describedby="${errorId}"` : ''}
            aria-invalid="false"
          ></textarea>
        </div>
        ${field.errorMessage ? `<span id="${errorId}" class="error-message text-red-500 text-sm hidden mt-1" role="alert">${field.errorMessage}</span>` : ''}
      </div>
    `;
  }

  return `
    <div class="form-group">
      <label for="${fieldId}" class="form-label">
        <span class="label-text">${field.label}</span>
        ${field.required ? '<span class="label-required" aria-label="required">*</span>' : ''}
      </label>
      <div class="input-wrapper">
        <i class="fas ${field.icon} input-icon" aria-hidden="true"></i>
        <input
          id="${fieldId}"
          type="${field.type}"
          ${field.required ? 'required' : ''}
          class="form-input-enhanced"
          placeholder="${field.placeholder}"
          name="${field.name}"
          ${field.errorMessage ? `aria-describedby="${errorId}"` : ''}
          aria-invalid="false"
        />
      </div>
      ${field.errorMessage ? `<span id="${errorId}" class="error-message text-red-500 text-sm hidden mt-1" role="alert">${field.errorMessage}</span>` : ''}
    </div>
  `;
}

function createContactInfoCard(info) {
  const content = info.href 
    ? `<a href="${info.href}" class="text-gray-700 hover:text-secondary transition-colors text-lg" aria-label="${info.title}: ${info.value}">${info.value}</a>`
    : `<p class="text-gray-700 text-lg">${info.value}</p>`;

  return `
    <div class="contact-info-card group">
      <div
        class="contact-icon-wrapper bg-gradient-to-br ${info.gradientFrom} ${info.gradientTo} rounded-full"
      >
        <i class="fas ${info.icon} text-white pl-2" aria-hidden="true"></i>
      </div>
      <div class="flex-1">
        <h4 class="font-semibold text-primary text-lg mb-1">
          ${info.title}
        </h4>
        ${content}
      </div>
    </div>
  `;
}

export function initContact() {
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
        field.setAttribute('aria-invalid', 'true');
        errorSpan?.classList.remove('hidden');
        // Update icon color for enhanced form
        const icon = field.parentElement.querySelector('.input-icon');
        if (icon) icon.classList.add('text-red-500');
      } else {
        field.classList.remove('error');
        field.setAttribute('aria-invalid', 'false');
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
}