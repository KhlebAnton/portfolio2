function showContent(id) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(el => {
        el.classList.remove('active');
    });

    // Show selected content
    document.getElementById(id).classList.add('active');

    // Add terminal typing sound effect
    playTypeSound();
}



// Show about section by default
document.getElementById('about').classList.add('active');

const texts = [
    "WELCOME TO MY PORTFOLIO",
    "PRESS ANY KEY TO START",
    "LOADING AWESOME CONTENT..."
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
    const typedTextElement = document.getElementById('typed-text');
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1) + "_";
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            typeText();
        }, 2000);
    }
}
window.onload = typeText;
// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key >= '1' && key <= '4') {
        const sections = ['about', 'projects', 'skills', 'contact'];
        showContent(sections[parseInt(key) - 1]);2
    }
});