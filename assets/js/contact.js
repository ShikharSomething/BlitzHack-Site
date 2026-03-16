document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contactForm');

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener('submit', () => {
        const submitBtn = contactForm.querySelector('.submit-btn');
        if (!submitBtn) {
            return;
        }

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
    });
});
