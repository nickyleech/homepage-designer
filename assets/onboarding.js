// Enhanced Onboarding System for Design Generator Pro
class OnboardingSystem {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 4;
        this.userPreferences = {
            projectType: null,
            experienceLevel: null,
            preferredStyle: null
        };
        this.isFirstVisit = !localStorage.getItem('design-generator-visited');
        this.init();
    }

    init() {
        // Show onboarding for first-time users
        if (this.isFirstVisit) {
            setTimeout(() => {
                this.startOnboarding();
            }, 1000); // Delay to let page load
        }

        this.bindEvents();
    }

    bindEvents() {
        // Navigation buttons
        const nextBtn = document.getElementById('nextOnboardingBtn');
        const prevBtn = document.getElementById('prevOnboardingBtn');

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextStep());
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevStep());
        }

        // Quiz option selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.quiz-option')) {
                const option = e.target.closest('.quiz-option');
                const step = option.closest('.onboarding-step');
                
                // Remove selected class from siblings
                step.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                option.classList.add('selected');
                
                // Store the selection
                const value = option.dataset.value;
                const stepNumber = parseInt(step.dataset.step);
                
                if (stepNumber === 2) {
                    this.userPreferences.projectType = value;
                } else if (stepNumber === 3) {
                    this.userPreferences.experienceLevel = value;
                }
            }
        });
    }

    startOnboarding() {
        const modal = document.getElementById('onboardingModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    skipOnboarding() {
        this.completeOnboarding();
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            // Validate current step before proceeding
            if (this.validateCurrentStep()) {
                this.currentStep++;
                this.updateUI();
                
                if (this.currentStep === this.totalSteps) {
                    this.generateRecommendations();
                }
            }
        } else {
            this.completeOnboarding();
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateUI();
        }
    }

    validateCurrentStep() {
        if (this.currentStep === 2 && !this.userPreferences.projectType) {
            this.showValidationMessage('Please select your project type to continue.');
            return false;
        }
        
        if (this.currentStep === 3 && !this.userPreferences.experienceLevel) {
            this.showValidationMessage('Please select your experience level to continue.');
            return false;
        }
        
        return true;
    }

    showValidationMessage(message) {
        // Create temporary validation message
        const existingMsg = document.querySelector('.validation-message');
        if (existingMsg) existingMsg.remove();

        const msgDiv = document.createElement('div');
        msgDiv.className = 'validation-message';
        msgDiv.style.cssText = `
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #991b1b;
            padding: 0.75rem;
            border-radius: 6px;
            margin-top: 1rem;
            font-size: 0.9rem;
            animation: fadeIn 0.3s ease;
        `;
        msgDiv.textContent = message;

        const currentStepElement = document.querySelector(`.onboarding-step[data-step="${this.currentStep}"]`);
        if (currentStepElement) {
            currentStepElement.appendChild(msgDiv);
            
            // Remove after 3 seconds
            setTimeout(() => {
                if (msgDiv.parentNode) {
                    msgDiv.remove();
                }
            }, 3000);
        }
    }

    updateUI() {
        // Update step indicators
        const indicators = document.querySelectorAll('.step-dot');
        indicators.forEach((dot, index) => {
            dot.classList.toggle('active', index < this.currentStep);
        });

        // Update step content
        document.querySelectorAll('.onboarding-step').forEach((step, index) => {
            step.classList.toggle('active', index + 1 === this.currentStep);
        });

        // Update navigation buttons
        const nextBtn = document.getElementById('nextOnboardingBtn');
        const prevBtn = document.getElementById('prevOnboardingBtn');

        if (prevBtn) {
            prevBtn.style.display = this.currentStep > 1 ? 'block' : 'none';
        }

        if (nextBtn) {
            if (this.currentStep === this.totalSteps) {
                nextBtn.textContent = 'Start Designing!';
                nextBtn.classList.remove('btn-primary');
                nextBtn.classList.add('btn-primary');
                nextBtn.style.background = '#059669';
            } else {
                nextBtn.textContent = 'Next';
                nextBtn.style.background = '#3b82f6';
            }
        }
    }

    generateRecommendations() {
        const { projectType, experienceLevel } = this.userPreferences;
        const recommendations = this.getRecommendations(projectType, experienceLevel);
        
        const setupDiv = document.getElementById('setupRecommendations');
        if (setupDiv) {
            setupDiv.innerHTML = recommendations.html;
        }

        // Store preferences for future use
        this.userPreferences.preferredStyle = recommendations.style;
    }

    getRecommendations(projectType, experienceLevel) {
        const recommendations = {
            business: {
                style: 'corporate',
                template: 'hero',
                color: 'blue',
                features: ['Professional layout', 'Contact forms', 'Service showcase']
            },
            creative: {
                style: 'creative',
                template: 'portfolio',
                color: 'purple',
                features: ['Image galleries', 'Project showcases', 'Creative layouts']
            },
            tech: {
                style: 'tech',
                template: 'landing',
                color: 'green',
                features: ['Modern design', 'Feature highlights', 'CTA optimization']
            },
            ecommerce: {
                style: 'ecommerce',
                template: 'grid',
                color: 'orange',
                features: ['Product grids', 'Shopping features', 'Conversion focus']
            },
            blog: {
                style: 'blog',
                template: 'magazine',
                color: 'monochrome',
                features: ['Typography focus', 'Content layouts', 'Reading experience']
            },
            restaurant: {
                style: 'restaurant',
                template: 'hero',
                color: 'orange',
                features: ['Menu showcase', 'Food imagery', 'Booking system']
            }
        };

        const rec = recommendations[projectType] || recommendations.business;
        
        const complexityFeatures = {
            beginner: ['Guided tutorials', 'Simple customisation', 'Pre-built templates'],
            intermediate: ['Advanced styling', 'Component library', 'Custom layouts'],
            advanced: ['Full customisation', 'Code export', 'API integration']
        };

        const html = `
            <div style="margin-bottom: 1rem;">
                <strong>🎨 Recommended Style:</strong> ${rec.style.charAt(0).toUpperCase() + rec.style.slice(1)}<br>
                <strong>📐 Template:</strong> ${rec.template.charAt(0).toUpperCase() + rec.template.slice(1)}<br>
                <strong>🎨 Colour Scheme:</strong> ${rec.color.charAt(0).toUpperCase() + rec.color.slice(1)}
            </div>
            <div style="margin-bottom: 1rem;">
                <strong>✨ Key Features:</strong>
                <ul style="margin: 0.5rem 0 0 1.5rem;">
                    ${rec.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div>
                <strong>🛠️ Recommended Tools:</strong>
                <ul style="margin: 0.5rem 0 0 1.5rem;">
                    ${complexityFeatures[experienceLevel].map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;

        return { html, style: rec.style, template: rec.template, color: rec.color };
    }

    completeOnboarding() {
        const modal = document.getElementById('onboardingModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Apply recommendations if available
        if (this.userPreferences.preferredStyle) {
            this.applyRecommendations();
        }

        // Mark as visited
        localStorage.setItem('design-generator-visited', 'true');
        localStorage.setItem('user-preferences', JSON.stringify(this.userPreferences));

        // Show welcome message
        this.showWelcomeMessage();
    }

    applyRecommendations() {
        const { preferredStyle } = this.userPreferences;
        const recommendations = this.getRecommendations(
            this.userPreferences.projectType, 
            this.userPreferences.experienceLevel
        );

        // Apply recommended style
        const styleOption = document.querySelector(`[data-style="${preferredStyle}"]`);
        if (styleOption) {
            document.querySelectorAll('.style-option').forEach(opt => opt.classList.remove('active'));
            styleOption.classList.add('active');
            
            // Trigger style change
            if (window.designGenerator) {
                window.designGenerator.currentStyle = preferredStyle;
                window.designGenerator.updatePreview();
            }
        }

        // Apply recommended template
        const templateOption = document.querySelector(`[data-template="${recommendations.template}"]`);
        if (templateOption) {
            document.querySelectorAll('.template-option').forEach(opt => opt.classList.remove('active'));
            templateOption.classList.add('active');
            
            // Trigger template change
            if (window.designGenerator) {
                window.designGenerator.currentTemplate = recommendations.template;
                window.designGenerator.updatePreview();
            }
        }

        // Apply recommended colour scheme
        const colorSelect = document.getElementById('colorScheme');
        if (colorSelect) {
            colorSelect.value = recommendations.color;
            
            // Trigger colour change
            if (window.designGenerator) {
                window.designGenerator.updatePreview();
            }
        }
    }

    showWelcomeMessage() {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            color: #059669;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-width: 300px;
            animation: slideInRight 0.5s ease;
        `;
        
        welcomeDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.2rem;">🎉</span>
                <strong>Welcome to Design Generator Pro!</strong>
            </div>
            <p style="margin: 0; font-size: 0.9rem;">Your preferences have been applied. Start creating your amazing design!</p>
        `;

        document.body.appendChild(welcomeDiv);

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // Remove after 5 seconds
        setTimeout(() => {
            welcomeDiv.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => {
                if (welcomeDiv.parentNode) {
                    welcomeDiv.remove();
                }
            }, 500);
        }, 5000);
    }

    // Public method to restart onboarding
    restart() {
        this.currentStep = 1;
        this.userPreferences = {
            projectType: null,
            experienceLevel: null,
            preferredStyle: null
        };
        
        // Clear selected options
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        this.updateUI();
        this.startOnboarding();
    }
}

// Global functions for onboarding
function startOnboarding() {
    if (window.onboardingSystem) {
        window.onboardingSystem.restart();
    } else {
        window.onboardingSystem = new OnboardingSystem();
        window.onboardingSystem.startOnboarding();
    }
}

function skipOnboarding() {
    if (window.onboardingSystem) {
        window.onboardingSystem.skipOnboarding();
    }
}

// Initialize onboarding system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.onboardingSystem = new OnboardingSystem();
});