// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Invalid email address';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    // If the form is valid, submit it
    if (valid) {
        this.submit();
    }
});
