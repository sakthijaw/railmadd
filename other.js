// Function to run when the page loads
window.onload = function() {
    alert("Welcome to the Railway Services portal!");
};

// Adding a hover effect to service icons
const serviceIcons = document.querySelectorAll('.service-icon');

serviceIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.2s';
    });

    icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Function to change the subheader text when a service is clicked
const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('click', function() {
        document.querySelector('.subheader').innerText = "You selected " + this.querySelector('.service-label').innerText;
    });
});
