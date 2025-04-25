// Ensure the document is fully loaded before running any script
document.addEventListener('DOMContentLoaded', function () {
    // Select all info boxes
    const infoBoxes = document.querySelectorAll('.info-box');

    // Add a hover effect to each info box
    infoBoxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            // Increase the scale slightly when hovered
            box.style.transform = 'scale(1.05)';
            box.style.transition = 'transform 0.3s ease-in-out';
        });

        box.addEventListener('mouseout', function () {
            // Reset the scale when mouse leaves
            box.style.transform = 'scale(1)';
        });
    });
    
    // Add click event for future functionality (optional example)
    infoBoxes.forEach(function (box) {
        box.addEventListener('click', function () {
            // Example action: alert the text inside the clicked box
            alert(box.querySelector('p').textContent);
        });
    });
});