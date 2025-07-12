// Advanced Micro-Interactions and Animation System
const AnimationSystem = {
    // Animation presets
    presets: {
        subtle: {
            duration: '200ms',
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            scale: 1.02,
            opacity: 0.8
        },
        smooth: {
            duration: '300ms',
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            scale: 1.05,
            opacity: 0.9
        },
        bouncy: {
            duration: '400ms',
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            scale: 1.1,
            opacity: 1
        },
        dramatic: {
            duration: '600ms',
            easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
            scale: 1.15,
            opacity: 0.95
        }
    },

    // Micro-interaction types
    interactions: {
        button: {
            hover: {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            },
            active: {
                transform: 'translateY(0px) scale(0.98)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.1s ease'
            },
            focus: {
                outline: '2px solid var(--accent-color)',
                outlineOffset: '2px',
                transition: 'outline 0.2s ease'
            }
        },
        
        card: {
            hover: {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            },
            loading: {
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }
        },

        input: {
            focus: {
                borderColor: 'var(--accent-color)',
                boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                transform: 'scale(1.02)',
                transition: 'all 0.2s ease'
            },
            invalid: {
                borderColor: '#ef4444',
                boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.1)',
                animation: 'shake 0.4s ease-in-out'
            }
        },

        navigation: {
            hover: {
                color: 'var(--accent-color)',
                transform: 'translateY(-1px)',
                transition: 'all 0.2s ease'
            },
            active: {
                borderBottom: '2px solid var(--accent-color)',
                color: 'var(--accent-color)'
            }
        },

        icon: {
            hover: {
                transform: 'rotate(5deg) scale(1.1)',
                transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            },
            spin: {
                animation: 'spin 1s linear infinite'
            }
        }
    },

    // Page transition animations
    pageTransitions: {
        fadeIn: {
            name: 'fadeIn',
            duration: '0.5s',
            keyframes: {
                '0%': { opacity: 0 },
                '100%': { opacity: 1 }
            }
        },
        
        slideInUp: {
            name: 'slideInUp',
            duration: '0.6s',
            keyframes: {
                '0%': { 
                    opacity: 0,
                    transform: 'translateY(30px)'
                },
                '100%': { 
                    opacity: 1,
                    transform: 'translateY(0)'
                }
            }
        },

        slideInLeft: {
            name: 'slideInLeft',
            duration: '0.5s',
            keyframes: {
                '0%': { 
                    opacity: 0,
                    transform: 'translateX(-30px)'
                },
                '100%': { 
                    opacity: 1,
                    transform: 'translateX(0)'
                }
            }
        },

        scaleIn: {
            name: 'scaleIn',
            duration: '0.4s',
            keyframes: {
                '0%': { 
                    opacity: 0,
                    transform: 'scale(0.9)'
                },
                '100%': { 
                    opacity: 1,
                    transform: 'scale(1)'
                }
            }
        }
    },

    // Scroll animations
    scrollAnimations: {
        parallax: {
            transform: 'translateY(var(--scroll-y, 0) * 0.5)'
        },
        
        fadeInOnScroll: {
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
        },

        staggered: {
            animationDelay: 'calc(var(--stagger-index, 0) * 0.1s)'
        }
    },

    // Loading animations
    loadingAnimations: {
        pulse: {
            name: 'pulse',
            duration: '2s',
            keyframes: {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.5 }
            }
        },

        skeleton: {
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite'
        },

        spinner: {
            name: 'spin',
            duration: '1s',
            keyframes: {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
            }
        }
    },

    // Generate CSS for animations
    generateCSS: (animationConfig) => {
        let css = '';

        // Generate keyframes
        Object.values(AnimationSystem.pageTransitions).forEach(animation => {
            css += `
@keyframes ${animation.name} {
${Object.entries(animation.keyframes).map(([key, value]) => `
    ${key} {
        ${Object.entries(value).map(([prop, val]) => `${prop}: ${val};`).join('\n        ')}
    }`).join('\n')}
}
            `;
        });

        // Generate utility animations
        css += `
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

@keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: translate3d(0, 0, 0); }
    40%, 43% { transform: translate3d(0, -8px, 0); }
    70% { transform: translate3d(0, -4px, 0); }
    90% { transform: translate3d(0, -2px, 0); }
}
        `;

        // Generate interaction styles
        css += `
/* Button Animations */
.btn-animated {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.btn-animated:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.btn-animated:active {
    transform: translateY(0px) scale(0.98);
    transition: all 0.1s ease;
}

.btn-animated::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.btn-animated:hover::before {
    left: 100%;
}

/* Card Animations */
.card-animated {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card-animated:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Input Animations */
.input-animated {
    transition: all 0.2s ease;
}

.input-animated:focus {
    transform: scale(1.02);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Navigation Animations */
.nav-animated {
    position: relative;
    transition: all 0.2s ease;
}

.nav-animated::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-color, #3b82f6);
    transition: width 0.3s ease;
}

.nav-animated:hover::after {
    width: 100%;
}

/* Loading States */
.loading-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

.loading-spinner {
    animation: spin 1s linear infinite;
}

/* Scroll Animations */
.fade-in-up {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
    opacity: 1;
    transform: translateY(0);
}

.stagger-animation {
    animation-delay: calc(var(--stagger-index, 0) * 0.1s);
}

/* Utility Classes */
.animate-bounce { animation: bounce 1s infinite; }
.animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animate-spin { animation: spin 1s linear infinite; }
.animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
.animate-slide-in-up { animation: slideInUp 0.6s ease-out; }
.animate-scale-in { animation: scaleIn 0.4s ease-out; }

/* Hover Effects */
.hover-lift:hover { transform: translateY(-4px); transition: transform 0.3s ease; }
.hover-scale:hover { transform: scale(1.05); transition: transform 0.3s ease; }
.hover-glow:hover { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); transition: box-shadow 0.3s ease; }
        `;

        return css;
    },

    // Apply animations to components
    applyToComponent: (componentHTML, animationType, preset = 'smooth') => {
        const config = AnimationSystem.presets[preset];
        let animatedHTML = componentHTML;

        switch (animationType) {
            case 'buttons':
                animatedHTML = animatedHTML.replace(/<button([^>]*?)>/gi, '<button$1 class="btn-animated">');
                break;
            
            case 'cards':
                animatedHTML = animatedHTML.replace(/<div([^>]*?)class="([^"]*?)card([^"]*?)"([^>]*?)>/gi, '<div$1class="$2card$3 card-animated"$4>');
                break;
            
            case 'inputs':
                animatedHTML = animatedHTML.replace(/<input([^>]*?)>/gi, '<input$1 class="input-animated">');
                animatedHTML = animatedHTML.replace(/<textarea([^>]*?)>/gi, '<textarea$1 class="input-animated">');
                break;
            
            case 'navigation':
                animatedHTML = animatedHTML.replace(/<a([^>]*?)href([^>]*?)>/gi, '<a$1href$2 class="nav-animated">');
                break;
            
            case 'page':
                animatedHTML = `<div class="animate-fade-in">${animatedHTML}</div>`;
                break;
            
            case 'sections':
                animatedHTML = animatedHTML.replace(/<section([^>]*?)>/gi, '<section$1 class="fade-in-up">');
                break;
        }

        return animatedHTML;
    },

    // Generate scroll animation JavaScript
    generateScrollJS: () => {
        return `
// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll('.fade-in-up').forEach(el => {
    scrollObserver.observe(el);
});

// Stagger animations
document.querySelectorAll('.stagger-animation').forEach((el, index) => {
    el.style.setProperty('--stagger-index', index);
});

// Parallax scroll effect
let ticking = false;

function updateParallax() {
    const scrollY = window.pageYOffset;
    
    document.querySelectorAll('[data-parallax]').forEach(el => {
        const speed = el.dataset.parallax || 0.5;
        const yPos = -(scrollY * speed);
        el.style.transform = \`translateY(\${yPos}px)\`;
    });
    
    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestParallaxUpdate);

// Smooth scroll for anchor links
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
        `;
    },

    // Create animation timeline
    createTimeline: (animations) => {
        let timeline = '';
        let delay = 0;

        animations.forEach((animation, index) => {
            timeline += `
.timeline-item:nth-child(${index + 1}) {
    animation: ${animation.name} ${animation.duration} ease-out ${delay}s both;
}
            `;
            delay += animation.delay || 0.1;
        });

        return timeline;
    },

    // Performance optimization
    optimizeAnimations: (css) => {
        // Add will-change property to animated elements
        let optimized = css.replace(/transition: all/g, 'will-change: transform, opacity; transition: all');
        
        // Add transform3d for hardware acceleration
        optimized = optimized.replace(/transform: translate/g, 'transform: translate3d');
        
        return optimized;
    }
};