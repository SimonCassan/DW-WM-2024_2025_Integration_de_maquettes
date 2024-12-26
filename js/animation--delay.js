const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-active');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.code-animation').forEach(box => observer.observe(box));