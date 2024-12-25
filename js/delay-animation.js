const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-active');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.code-animation').forEach(box => observer.observe(box));


const preElement = document.querySelector('pre');
const animatedLines = document.querySelectorAll('.code-animation');

let animationsRemaining = animatedLines.length;

// Ajoute un listener pour suivre la fin de chaque animation
animatedLines.forEach((line) => {
    line.addEventListener('animationend', () => {
        animationsRemaining--;

        // Lorsque toutes les animations sont terminées
        if (animationsRemaining === 0) {
            preElement.classList.add('animations-completed');
        }
    });
});