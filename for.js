document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[type="email"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission to demonstrate the functionality

        const emailValue = emailInput.value.trim();
        if (validateEmail(emailValue)) {
            showMessage("A reset link has been sent to your email address.", "success");
        } else {
            showMessage("Please enter a valid email address.", "error");
        }
    });

    function validateEmail(email) {
        // Simple email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function showMessage(message, type) {
        // Remove any existing message first
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.className = `message ${type}`;
        messageElement.textContent = message;

        // Insert the message into the DOM, after the form
        form.insertAdjacentElement('afterend', messageElement);

        // Automatically remove the message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
});
