document.addEventListener('DOMContentLoaded', () => {
  console.log('Orb Bots website loaded!');

  // Basic form submission handling (replace with actual submission logic)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Form submitted! (This is a placeholder)');
      // You would typically send the form data to a server here
    });
  }
});

