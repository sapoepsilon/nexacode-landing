export function Footer() {
  return `
    <footer class="bg-dark text-white py-8">
      <div class="container mx-auto px-6">
        <div class="text-center mb-6">
          <p class="mb-4">&copy; 2024 Eazy Technology. All rights reserved.</p>
          <p class="text-sm opacity-75 mb-6">
            Digital innovation, engineered for growth.
          </p>
          <div class="flex justify-center">
            <a
              href="https://linkedin.com/company/eazytechnology"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-secondary transition-colors"
              aria-label="Visit Eazy Technology on LinkedIn (opens in new tab)"
            >
              <i class="fab fa-linkedin fa-lg" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initFooter() {
  // No specific initialization needed for footer
}