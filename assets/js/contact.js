document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const contactCard = document.querySelector('.contact-card');

    // Initialize EmailJS with your public key
    emailjs.init("yfrPyxw2Fr_MVqLMi"); 

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Send email using EmailJS
            await emailjs.sendForm(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                contactForm,
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            // Show success state
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(45deg, #00ff8c, #00a1ff)';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
            // Show error state
            submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
            submitBtn.style.background = 'linear-gradient(45deg, #ff4444, #ff0000)';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'linear-gradient(45deg, #00ff8c, #00a1ff)';
            }, 3000);
        }
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