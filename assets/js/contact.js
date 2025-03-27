document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const contactCard = document.querySelector('.contact-card');

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
    });

    // Add input focus effects
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateZ(30px)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateZ(0)';
        });
    });
}); 