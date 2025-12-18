// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = '✓ Message Sent!';
        button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
    });
}

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and features
document.querySelectorAll('.about-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const pixelCube = document.querySelector('.pixel-cube');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
    
    if (pixelCube && scrolled < window.innerHeight) {
        pixelCube.style.transform = `rotateY(${scrolled * 0.5}deg) rotateX(${scrolled * 0.3}deg)`;
    }
});

// Add dynamic gradient animation to buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.style.backgroundPosition = `${x}% ${y}%`;
    });
});

// Create floating particles effect
function createParticle() {
    // Limit total particles
    if (particleCount >= MAX_PARTICLES) return;
    
    particleCount++;
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 3 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = 'rgba(102, 126, 234, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    
    document.body.appendChild(particle);
    
    const duration = Math.random() * 3000 + 2000;
    const drift = (Math.random() - 0.5) * 200;
    
    particle.animate([
        { transform: 'translateY(0) translateX(0)', opacity: 0 },
        { transform: `translateY(-${window.innerHeight + 100}px) translateX(${drift}px)`, opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 200}px) translateX(${drift * 2}px)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'linear'
    }).onfinish = () => {
        particle.remove();
        particleCount--;
    };
}

// Create particles periodically with cleanup
let particleInterval = setInterval(createParticle, 1000);

// Limit particle creation to conserve resources
let particleCount = 0;
const MAX_PARTICLES = 50;

// Stop creating particles after reaching limit
if (document.visibilityState === 'hidden') {
    clearInterval(particleInterval);
}

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        clearInterval(particleInterval);
    } else {
        particleInterval = setInterval(createParticle, 1000);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or menus (reserved for future use)
    }
});

// Performance optimization: reduce animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Target only animated elements instead of all elements
    document.querySelectorAll('[class*="animation"], .pixel-cube, .about-card, .feature-item').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Track page load time for performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    // Performance metric available for analytics (removed console.log)
    if (window.performance && window.performance.mark) {
        window.performance.mark('page-loaded');
    }
});

// Add Easter egg - Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        // Easter egg activated - rainbow effect applied
    }
});
