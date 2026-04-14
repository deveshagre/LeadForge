/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Intersection Observer for Smooth Fade-Up Animations --- */
    const animatedElements = document.querySelectorAll('.fade-up');
    
    // Observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve element after animation triggers to run it only once
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Attach observer to each element
    animatedElements.forEach(el => {
        elementObserver.observe(el);
    });

    /* --- 2. Lightweight Parallax Effect for Featured Work Images --- */
    const parallaxImages = document.querySelectorAll('.parallax-img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxImages.forEach(img => {
            const speed = 0.05; // Gentle speed
            // Calculate relative offset based on elements position
            const rect = img.getBoundingClientRect();
            // Apply slight Y translation if image is within viewport
            if(rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(scrolled * speed);
                // Keep the original scale from CSS hover states intact
                // img.style.transform = `translateY(${yPos}px)`; 
                // We disabled direct transform override here so it doesn't conflict with CSS hover scale(1.05)
                // A better approach for parallax while keeping hover is wrapping the image.
                // We'll apply it to the wrapper if needed, or keep it strictly CSS for smoothness.
            }
        });
    });

    /* --- 3. Header Scroll State --- */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 15, 15, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(15, 15, 15, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

});
