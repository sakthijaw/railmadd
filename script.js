// Typing effect for the word "Welcome"
const welcomeText = "Welcome!";
let index = 0;

function typeEffect() {
  if (index < welcomeText.length) {
    document.querySelector('.typing-effect').textContent += welcomeText.charAt(index);
    index++;
    setTimeout(typeEffect, 150); // Adjust speed here (in milliseconds)
  }
}

// Call the typing effect when the page loads
window.onload = function() {
  typeEffect();
};

// Smooth scrolling for "Know More" button
document.querySelector('.know-more-btn').addEventListener('click', function() {
  document.querySelector('#more-info').scrollIntoView({ behavior: 'smooth' });
});

// Button hover effect
document.querySelectorAll('nav button, .know-more-btn').forEach(button => {
  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#FFA500'; // Lighter shade of the button color
  });
  
  button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#FFB800'; // Original button color
  });
});

// Language selector toggle
const languageSelector = document.querySelector('.language-selector');
languageSelector.addEventListener('click', function() {
  const currentLanguage = this.textContent.trim();
  this.textContent = currentLanguage === 'EN ▼' ? 'हिन्दी ▼' : 'EN ▼';
  alert(`Language switched to ${this.textContent}`);
});

// Header logo click (scroll to top)
document.querySelector('.logo img').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
