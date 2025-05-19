// Simple FAQ accordion implementation
document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ questions
    const faqButtons = document.querySelectorAll('.faq-question');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the answer div (next sibling)
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle the answer
            if (answer.classList.contains('hidden')) {
                // Close all other answers first
                document.querySelectorAll('.faq-answer').forEach(a => {
                    a.classList.add('hidden');
                });
                document.querySelectorAll('.faq-question i').forEach(i => {
                    i.classList.remove('fa-minus');
                    i.classList.add('fa-plus');
                });
                
                // Open this answer
                answer.classList.remove('hidden');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                // Close this answer
                answer.classList.add('hidden');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
});