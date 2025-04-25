document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to allow validation

        let isValid = true;
        let errorMessage = '';

        // Name validation
        if (nameInput.value.trim() === '') {
            isValid = false;
            errorMessage += 'Name is required.\n';
        }

        // Mobile number validation (basic validation, should be enhanced as per requirement)
        if (mobileInput.value.trim() === '' || !/^\d{10}$/.test(mobileInput.value.trim())) {
            isValid = false;
            errorMessage += 'Valid mobile number is required (10 digits).\n';
        }

        // Email validation
        if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
            isValid = false;
            errorMessage += 'Valid email address is required.\n';
        }

        if (isValid) {
            // Simulate a successful form submission
            alert('Profile updated successfully!');
            form.reset(); // Reset the form fields
        } else {
            alert('Please correct the following errors:\n' + errorMessage);
        }
    });

    // Optional: Add interactivity to change password link
    const changePasswordLink = document.querySelector('.password-link a');
    changePasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Password change functionality is under development.');
    });
});
