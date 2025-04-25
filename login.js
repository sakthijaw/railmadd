     
// Dynamic greeting based on the time of day

function setGreeting() {
    const hours = new Date().getHours();
    const greetingElement = document.querySelector('h2');

    if (hours < 12) {
        greetingElement.textContent = 'Good Morning! Welcome back!';
    } else if (hours < 18) {
        greetingElement.textContent = 'Good Afternoon! Welcome back!';
    } else {
        greetingElement.textContent = 'Good Evening! Welcome back!';
    }
}

// Form validation with custom messages
function validateForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');
        const termsCheckbox = form.querySelector('input[type="checkbox"]');

        if (!emailInput.value || !passwordInput.value || !termsCheckbox.checked) {
            event.preventDefault();
            alert('Please fill in all fields and accept the terms and conditions.');
        }
    });
}

// Function to initialize all features
function initialize() {
    setGreeting();
    validateForm();
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);
