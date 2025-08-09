// Comprehensive Claude Code Integration System v2.0
class ClaudeCodeIntegration {
    constructor() {
        this.projectData = null;
        this.generatedPrompt = null;
        this.projectStructure = null;
        this.contextualData = null;
        this.transformationRules = null;
        this.customisationOptions = this.initCustomisationOptions();
        this.init();
    }

    init() {
        this.bindEvents();
        this.initContextualAdaptation();
        this.initTransformationEngine();
    }

    bindEvents() {
        // Preview and generation buttons are handled by global functions
        this.setupAdvancedEventHandlers();
    }

    initCustomisationOptions() {
        return {
            // Technical Architecture (15 options)
            architecture: {
                renderingStrategy: ['SSG', 'SSR', 'SPA', 'ISR', 'Hybrid'],
                stateManagement: ['Built-in', 'Zustand', 'Redux Toolkit', 'Jotai', 'Valtio'],
                dataFetching: ['Fetch API', 'Axios', 'SWR', 'React Query', 'GraphQL'],
                authentication: ['NextAuth.js', 'Clerk', 'Auth0', 'Firebase Auth', 'Custom'],
                database: ['None', 'Prisma + PostgreSQL', 'MongoDB', 'Supabase', 'Firebase']
            },
            
            // Performance & Optimisation (10 options)
            performance: {
                imageOptimisation: ['Next.js Image', 'Cloudinary', 'Custom', 'None'],
                caching: ['Default', 'Redis', 'Edge Caching', 'Memory Cache'],
                bundling: ['Default', 'Webpack', 'Turbopack', 'Vite'],
                analytics: ['None', 'Vercel Analytics', 'Google Analytics', 'Plausible'],
                monitoring: ['None', 'Sentry', 'LogRocket', 'Datadog']
            },
            
            // User Experience (12 options)
            ux: {
                loadingStates: ['Basic', 'Skeleton', 'Spinner', 'Custom'],
                errorHandling: ['Basic', 'Comprehensive', 'User-friendly', 'Technical'],
                accessibility: ['WCAG AA', 'WCAG AAA', 'Custom', 'Basic'],
                internationalisation: ['None', 'next-i18next', 'react-i18next', 'Custom'],
                darkMode: ['None', 'System', 'Toggle', 'Automatic'],
                animations: ['None', 'Framer Motion', 'CSS Animations', 'GSAP']
            },
            
            // Development Experience (8 options)
            dx: {
                typescript: ['Strict', 'Moderate', 'Basic', 'None'],
                linting: ['ESLint + Prettier', 'ESLint', 'Biome', 'None'],
                testing: ['Jest + RTL', 'Vitest', 'Playwright', 'None'],
                documentation: ['Storybook', 'Docusaurus', 'README', 'None']
            },
            
            // Deployment & DevOps (5 options)
            devops: {
                cicd: ['GitHub Actions', 'Vercel', 'Netlify', 'Custom'],
                environment: ['Vercel', 'Netlify', 'AWS', 'Self-hosted'],
                monitoring: ['Vercel', 'Sentry', 'DataDog', 'None']
            }
        };
    }

    initContextualAdaptation() {
        // Context-driven design adaptation system
        this.contextualData = {
            industryPatterns: {
                'tech': { primaryColours: ['#3B82F6', '#10B981'], animations: 'smooth', layout: 'minimal' },
                'healthcare': { primaryColours: ['#06B6D4', '#059669'], animations: 'subtle', layout: 'trust' },
                'finance': { primaryColours: ['#1E40AF', '#065F46'], animations: 'minimal', layout: 'professional' },
                'creative': { primaryColours: ['#8B5CF6', '#EC4899'], animations: 'dramatic', layout: 'bold' },
                'ecommerce': { primaryColours: ['#F59E0B', '#EF4444'], animations: 'engaging', layout: 'conversion' }
            },
            audienceTargeting: {
                'b2b': { language: 'professional', trust: 'high', complexity: 'detailed' },
                'b2c': { language: 'friendly', trust: 'medium', complexity: 'simple' },
                'enterprise': { language: 'formal', trust: 'very-high', complexity: 'comprehensive' },
                'startup': { language: 'innovative', trust: 'medium', complexity: 'focused' }
            },
            geographicAdaptation: {
                'uk': { language: 'british-english', currency: 'GBP', dateFormat: 'DD/MM/YYYY' },
                'us': { language: 'american-english', currency: 'USD', dateFormat: 'MM/DD/YYYY' },
                'eu': { language: 'international-english', currency: 'EUR', dateFormat: 'DD.MM.YYYY' }
            }
        };
    }

    initTransformationEngine() {
        // Design transformation system for converting existing applications
        this.transformationRules = {
            styleTransitions: {
                'minimalist-to-corporate': {
                    colours: 'increase-contrast',
                    typography: 'add-serif-options',
                    layout: 'add-structure',
                    components: 'formal-styling'
                },
                'creative-to-minimalist': {
                    colours: 'reduce-palette',
                    typography: 'simplify-fonts',
                    layout: 'increase-whitespace',
                    components: 'remove-decorative'
                },
                'corporate-to-tech': {
                    colours: 'modernise-palette',
                    typography: 'san-serif-focus',
                    layout: 'increase-interactivity',
                    components: 'add-animations'
                }
            },
            frameworkMigrations: {
                'html-to-react': { components: 'componentise', state: 'add-hooks', routing: 'add-router' },
                'vue-to-react': { syntax: 'jsx-conversion', state: 'hooks-migration', directives: 'props-conversion' },
                'jquery-to-modern': { dom: 'react-refs', events: 'react-handlers', ajax: 'modern-fetch' }
            }
        };
    }

    setupAdvancedEventHandlers() {
        // Enhanced event handling for new features
        if (typeof document !== 'undefined') {
            // Context adaptation handlers
            document.addEventListener('change', (e) => {
                if (e.target.matches('[data-contextual]')) {
                    this.handleContextualChange(e.target);
                }
            });
            
            // Transformation preview handlers
            document.addEventListener('click', (e) => {
                if (e.target.matches('[data-preview-transformation]')) {
                    this.previewTransformation(e.target.dataset.previewTransformation);
                }
            });
        }
    }

    handleContextualChange(element) {
        // Handle context-aware changes
        const context = element.dataset.contextual;
        const value = element.value;
        
        switch (context) {
            case 'industry':
                this.adaptToIndustry(value);
                break;
            case 'audience':
                this.adaptToAudience(value);
                break;
            case 'geography':
                this.adaptToGeography(value);
                break;
        }
    }

    adaptToIndustry(industry) {
        const patterns = this.contextualData.industryPatterns[industry];
        if (patterns) {
            // Apply industry-specific adaptations
            this.updateColourRecommendations(patterns.primaryColours);
            this.updateAnimationPreset(patterns.animations);
            this.updateLayoutSuggestions(patterns.layout);
        }
    }

    adaptToAudience(audience) {
        const targeting = this.contextualData.audienceTargeting[audience];
        if (targeting) {
            // Apply audience-specific adaptations
            this.updateLanguageTone(targeting.language);
            this.updateTrustElements(targeting.trust);
            this.updateComplexityLevel(targeting.complexity);
        }
    }

    adaptToGeography(region) {
        const adaptation = this.contextualData.geographicAdaptation[region];
        if (adaptation) {
            // Apply geographic adaptations
            this.updateLanguageVariant(adaptation.language);
            this.updateCurrencyFormat(adaptation.currency);
            this.updateDateFormat(adaptation.dateFormat);
        }
    }

    generateClaudePrompt() {
        // Collect all design data with enhanced context
        this.projectData = this.collectDesignData();
        this.applyContextualAdaptations();
        
        // Generate enhanced prompt based on integration type
        const integrationType = document.getElementById('claudePromptType')?.value || 'new-project';
        
        switch (integrationType) {
            case 'new-project':
                this.generateNewProjectPrompt();
                break;
            case 'convert':
                this.generateConversionPrompt();
                break;
            case 'enhance':
                this.generateEnhancementPrompt();
                break;
            case 'integrate':
                this.generateIntegrationPrompt();
                break;
            case 'component-library':
                this.generateComponentLibraryPrompt();
                break;
            case 'design-system':
                this.generateDesignSystemPrompt();
                break;
            case 'transform-existing':
                this.generateTransformationPrompt();
                break;
            case 'migration':
                this.generateMigrationPrompt();
                break;
            case 'enhancement':
                this.generateProgressiveEnhancementPrompt();
                break;
            default:
                this.generateNewProjectPrompt();
        }
        
        this.showPromptOutput();
    }

    applyContextualAdaptations() {
        // Apply contextual data to project data
        const industry = document.getElementById('targetIndustry')?.value;
        const audience = document.getElementById('targetAudience')?.value;
        const region = document.getElementById('targetRegion')?.value;
        
        if (industry && this.contextualData.industryPatterns[industry]) {
            this.projectData.industryContext = this.contextualData.industryPatterns[industry];
        }
        
        if (audience && this.contextualData.audienceTargeting[audience]) {
            this.projectData.audienceContext = this.contextualData.audienceTargeting[audience];
        }
        
        if (region && this.contextualData.geographicAdaptation[region]) {
            this.projectData.geographicContext = this.contextualData.geographicAdaptation[region];
        }
    }

    collectDesignData() {
        return {
            // Basic design info
            style: document.querySelector('.style-option.active')?.dataset.style || 'minimalist',
            template: document.querySelector('.template-option.active')?.dataset.template || 'hero',
            colourScheme: document.getElementById('colourScheme')?.value || 'blue',
            fontFamily: document.getElementById('fontFamily')?.value || 'sans',
            themeMode: document.querySelector('input[name="themeMode"]:checked')?.value || 'light',
            
            // Content
            siteTitle: document.getElementById('siteTitle')?.value || 'Your Brand',
            siteSubtitle: document.getElementById('siteSubtitle')?.value || 'Creating beautiful experiences',
            navLinks: document.getElementById('navLinks')?.value.split('\n').filter(link => link.trim()) || ['Home', 'About', 'Services', 'Contact'],
            mainContent: document.getElementById('mainContent')?.value || 'Welcome to our professional homepage.',
            
            // Page settings
            currentPage: document.querySelector('.page-btn.active')?.dataset.page || 'home',
            pageTitle: document.getElementById('pageTitle')?.value || 'Homepage',
            pageContent: document.getElementById('pageContent')?.value || 'This is the homepage content.',
            includeHero: document.getElementById('includeHero')?.checked || false,
            includeNav: document.getElementById('includeNav')?.checked || false,
            includeFooter: document.getElementById('includeFooter')?.checked || false,
            includeSidebar: document.getElementById('includeSidebar')?.checked || false,
            
            // Technical settings
            framework: document.getElementById('targetFramework')?.value || 'nextjs',
            deploymentTarget: document.getElementById('deploymentTarget')?.value || 'vercel',
            projectComplexity: document.getElementById('projectComplexity')?.value || 'simple',
            cssFramework: document.getElementById('cssFramework')?.value || 'tailwind',
            
            // Features
            includeComments: document.getElementById('includeComments')?.checked || false,
            minifyCode: document.getElementById('minifyCode')?.checked || false,
            includeReadme: document.getElementById('includeReadme')?.checked || false,
            includeClaudeMd: document.getElementById('includeClaudeMd')?.checked || false,
            includeProjectStructure: document.getElementById('includeProjectStructure')?.checked || false,
            includeDependencies: document.getElementById('includeDependencies')?.checked || false,
            includeEnvConfig: document.getElementById('includeEnvConfig')?.checked || false,
            includeTests: document.getElementById('includeTests')?.checked || false,
            includeDocumentation: document.getElementById('includeDocumentation')?.checked || false,
            
            // Animations
            animationPreset: document.getElementById('animationPreset')?.value || 'smooth',
            animateButtons: document.getElementById('animateButtons')?.checked || false,
            animateCards: document.getElementById('animateCards')?.checked || false,
            animateInputs: document.getElementById('animateInputs')?.checked || false,
            animateNavigation: document.getElementById('animateNavigation')?.checked || false,
            animateScrolling: document.getElementById('animateScrolling')?.checked || false,
            
            // Accessibility
            accessibilityLevel: document.getElementById('accessibilityLevel')?.value || 'AA',
            
            // Enhanced Customisation Options (50+ variables)
            // Technical Architecture
            renderingStrategy: document.getElementById('renderingStrategy')?.value || 'SSG',
            stateManagement: document.getElementById('stateManagement')?.value || 'Built-in',
            dataFetching: document.getElementById('dataFetching')?.value || 'Fetch API',
            authentication: document.getElementById('authentication')?.value || 'None',
            database: document.getElementById('database')?.value || 'None',
            
            // Performance & Optimisation
            imageOptimisation: document.getElementById('imageOptimisation')?.value || 'Next.js Image',
            caching: document.getElementById('caching')?.value || 'Default',
            bundling: document.getElementById('bundling')?.value || 'Default',
            analytics: document.getElementById('analytics')?.value || 'None',
            monitoring: document.getElementById('monitoring')?.value || 'None',
            
            // User Experience
            loadingStates: document.getElementById('loadingStates')?.value || 'Basic',
            errorHandling: document.getElementById('errorHandling')?.value || 'Basic',
            internationalisation: document.getElementById('internationalisation')?.value || 'None',
            darkMode: document.getElementById('darkMode')?.value || 'None',
            animations: document.getElementById('animationLibrary')?.value || 'CSS Animations',
            
            // Development Experience
            typescript: document.getElementById('typescript')?.value || 'Basic',
            linting: document.getElementById('linting')?.value || 'ESLint + Prettier',
            testing: document.getElementById('testing')?.value || 'None',
            documentation: document.getElementById('documentation')?.value || 'README',
            
            // Deployment & DevOps
            cicd: document.getElementById('cicd')?.value || 'GitHub Actions',
            environment: document.getElementById('environment')?.value || 'Vercel',
            environmentMonitoring: document.getElementById('environmentMonitoring')?.value || 'None',
            
            // Context-Aware Options
            targetIndustry: document.getElementById('targetIndustry')?.value || 'general',
            targetAudience: document.getElementById('targetAudience')?.value || 'general',
            targetRegion: document.getElementById('targetRegion')?.value || 'global',
            businessModel: document.getElementById('businessModel')?.value || 'general',
            
            // Progressive Web App Features
            pwaEnabled: document.getElementById('pwaEnabled')?.checked || false,
            offlineSupport: document.getElementById('offlineSupport')?.checked || false,
            pushNotifications: document.getElementById('pushNotifications')?.checked || false,
            
            // SEO & Marketing
            seoOptimisation: document.getElementById('seoOptimisation')?.value || 'Basic',
            structuredData: document.getElementById('structuredData')?.checked || false,
            socialMediaIntegration: document.getElementById('socialMediaIntegration')?.checked || false,
            googleAnalytics: document.getElementById('googleAnalytics')?.checked || false,
            
            // Security & Privacy
            securityHeaders: document.getElementById('securityHeaders')?.checked || true,
            gdprCompliance: document.getElementById('gdprCompliance')?.checked || false,
            cookieConsent: document.getElementById('cookieConsent')?.checked || false,
            
            // Content Management
            cmsIntegration: document.getElementById('cmsIntegration')?.value || 'None',
            blogSupport: document.getElementById('blogSupport')?.checked || false,
            multiLanguage: document.getElementById('multiLanguage')?.checked || false,
            
            // E-commerce (if applicable)
            ecommerceFeatures: document.getElementById('ecommerceFeatures')?.checked || false,
            paymentIntegration: document.getElementById('paymentIntegration')?.value || 'None',
            inventoryManagement: document.getElementById('inventoryManagement')?.checked || false,
            
            // Timestamps and versioning
            generatedAt: new Date().toISOString(),
            version: '3.0.0'
        };
    }

    generateNewProjectPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Create ${this.getFrameworkName(projectData.framework)} Project: "${projectData.siteTitle}"

I need you to create a complete, production-ready ${this.getFrameworkName(projectData.framework)} project based on my design specifications. This should be a fully functional website ready for deployment to ${this.getDeploymentTarget(projectData.deploymentTarget)}.

## 🎨 Design Specifications

**Primary Style**: ${this.getStyleDescription(projectData.style)}
**Layout Template**: ${this.getTemplateDescription(projectData.template)}
**Colour Scheme**: ${this.getColourDescription(projectData.colourScheme)}
**Typography**: ${this.getFontDescription(projectData.fontFamily)}
**Theme Mode**: ${projectData.themeMode === 'auto' ? 'System preference (light/dark)' : projectData.themeMode}
**CSS Framework**: ${this.getCSSFrameworkDescription(projectData.cssFramework)}

${projectData.animateButtons || projectData.animateCards || projectData.animateInputs ? `
**Animations**: 
- Animation Style: ${projectData.animationPreset} (${this.getAnimationSpeed(projectData.animationPreset)})
${projectData.animateButtons ? '- Button hover effects and interactions' : ''}
${projectData.animateCards ? '- Card hover and lift animations' : ''}
${projectData.animateInputs ? '- Input focus and validation animations' : ''}
${projectData.animateNavigation ? '- Navigation link animations' : ''}
${projectData.animateScrolling ? '- Scroll-based fade-in animations' : ''}
` : ''}

## 📝 Content Structure

**Site Title**: "${projectData.siteTitle}"
**Subtitle**: "${projectData.siteSubtitle}"
**Main Content**: "${projectData.mainContent}"

**Navigation Menu**:
${projectData.navLinks.map(link => `- ${link}`).join('\n')}

**Page Components**:
${projectData.includeHero ? '- Hero section with call-to-action' : ''}
${projectData.includeNav ? '- Responsive navigation bar' : ''}
${projectData.includeFooter ? '- Professional footer' : ''}
${projectData.includeSidebar ? '- Sidebar navigation' : ''}

## 🏗️ Technical Requirements

**Framework**: ${this.getFrameworkDetails(projectData.framework)}
**Deployment**: Optimised for ${this.getDeploymentTarget(projectData.deploymentTarget)}
**Complexity Level**: ${this.getComplexityDescription(projectData.projectComplexity)}
**Accessibility**: WCAG ${projectData.accessibilityLevel} compliance
**Performance**: Core Web Vitals optimised

${this.getFrameworkSpecificRequirements(projectData)}

## 📁 Project Structure Requirements

${projectData.includeProjectStructure ? `Create a complete project structure including:
- All necessary configuration files
- Organised component architecture
- Asset management system
- Type definitions (if TypeScript)
` : ''}

${projectData.includeDependencies ? `Generate an optimised package.json with:
- All required dependencies
- Development dependencies
- Useful scripts for development and deployment
- Proper version constraints
` : ''}

${projectData.includeEnvConfig ? `Include environment configuration:
- .env.example with required variables
- Development and production configurations
- Deployment-specific settings
` : ''}

${projectData.includeTests ? `Add testing framework:
- Jest and React Testing Library setup
- Sample component tests
- Testing utilities and helpers
- Test scripts in package.json
` : ''}

## 📚 Documentation Requirements

${projectData.includeClaudeMd ? `Create a comprehensive CLAUDE.md file with:
- Project overview and architecture
- Development setup instructions
- Component usage examples
- Deployment guidelines
- Integration with Claude Code workflows
- Troubleshooting and best practises
` : ''}

${projectData.includeDocumentation ? `Generate complete documentation:
- README.md with setup instructions
- Component documentation
- API documentation (if applicable)
- Deployment guide
- Contributing guidelines
` : ''}

## 🚀 Deployment Optimisation

${this.getDeploymentOptimisations(projectData)}

## 🎯 Specific Implementation Notes

1. **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
2. **Performance**: Lazy loading, code splitting, and optimised images
3. **SEO**: Proper meta tags, structured data, and semantic HTML
4. **Accessibility**: Keyboard navigation, screen reader support, proper contrast ratios
5. **Modern Practices**: Use latest ${this.getFrameworkName(projectData.framework)} patterns and hooks
6. **Code Quality**: TypeScript (if selected), ESLint, Prettier configuration
7. **Security**: Input validation, XSS protection, secure headers

## 💡 Additional Context

This project was generated using Design Generator Pro v2.0.0 on ${new Date(projectData.generatedAt).toLocaleString('en-GB')}.

The design follows ${this.getStylePhilosophy(projectData.style)} principles with a focus on ${this.getProjectFocus(projectData.projectComplexity)}.

Please ensure the final implementation matches the design specifications exactly while following ${this.getFrameworkName(projectData.framework)} best practises and maintaining high code quality standards.

${projectData.includeComments ? '\n**Code Style**: Include comprehensive comments explaining component logic and functionality.' : ''}
${projectData.minifyCode ? '\n**Optimisation**: Ensure all code is production-ready and optimised for performance.' : ''}

---

**Expected Deliverables**:
1. Complete project files and folder structure
2. All components and pages as specified
3. Styling that matches the design specifications
4. Documentation and setup instructions
5. Deployment-ready configuration

Please start by creating the project structure and then implement each component systematically. Let me know if you need clarification on any aspect of the design specifications.`;

        this.generateProjectStructure();
    }

    generateConversionPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Convert Design to ${this.getFrameworkName(projectData.framework)}

I have a design created with Design Generator Pro that I need converted to a ${this.getFrameworkName(projectData.framework)} application.

## Current Design Specifications
${this.getDesignSummary()}

## Conversion Requirements
- Convert to ${this.getFrameworkName(projectData.framework)} with ${projectData.cssFramework}
- Maintain exact visual design and layout
- Ensure responsive behaviour across all devices
- Implement proper component architecture
- Add TypeScript support if selected
- Optimise for ${this.getDeploymentTarget(projectData.deploymentTarget)} deployment

${this.getFrameworkSpecificConversionNotes(projectData)}

Please provide the complete converted codebase with proper component structure and modern ${this.getFrameworkName(projectData.framework)} patterns.`;
    }

    generateEnhancementPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Enhance Existing Project with Design Generator Pro Styling

I want to enhance my existing ${this.getFrameworkName(projectData.framework)} project by applying the design and features from Design Generator Pro.

## Target Design Specifications
${this.getDesignSummary()}

## Enhancement Requirements
- Apply the new design system to existing components
- Maintain existing functionality while updating the visual design
- Add responsive design if not already present
- Implement the specified animations and interactions
- Ensure accessibility compliance
- Update styling to match the design specifications

Please show me how to integrate these design changes into my existing project structure while preserving current functionality.`;
    }

    generateIntegrationPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Integrate Design Components into Existing Codebase

I need to integrate specific design components and styling from Design Generator Pro into my existing ${this.getFrameworkName(projectData.framework)} project.

## Design Components to Integrate
${this.getDesignSummary()}

## Integration Requirements
- Create reusable components that match the design specifications
- Ensure compatibility with existing codebase
- Provide CSS/styling that doesn't conflict with current styles
- Include proper TypeScript definitions if applicable
- Add documentation for the new components

Please provide the specific components and integration instructions for seamless integration.`;
    }

    generateComponentLibraryPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Create Component Library from Design System

Generate a complete component library based on my Design Generator Pro specifications.

## Design System Specifications
${this.getDesignSummary()}

## Component Library Requirements
- Create a comprehensive component library with Storybook
- Include all UI primitives (buttons, inputs, cards, etc.)
- Implement design tokens and theming system
- Add TypeScript definitions for all components
- Include proper documentation and examples
- Export for NPM package distribution
- Ensure tree-shaking support

Please create a professional component library that can be used across multiple projects.`;
    }

    generateDesignSystemPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Export Complete Design System

Create a comprehensive design system package based on my Design Generator Pro configuration.

## Design System Specifications
${this.getDesignSummary()}

## Design System Requirements
- Design tokens (colours, typography, spacing, etc.)
- Component specifications and guidelines
- Usage documentation and examples
- Figma/Sketch design file generation
- CSS custom properties
- Design system documentation site
- Brand guidelines document

Please create a complete design system package that can be used by designers and developers.`;
    }

    getDesignSummary() {
        const { projectData } = this;
        return `
**Style**: ${this.getStyleDescription(projectData.style)}
**Template**: ${this.getTemplateDescription(projectData.template)}
**Colours**: ${this.getColourDescription(projectData.colourScheme)}
**Typography**: ${this.getFontDescription(projectData.fontFamily)}
**Theme**: ${projectData.themeMode}
**Content**: "${projectData.siteTitle}" - "${projectData.siteSubtitle}"
`;
    }

    generateProjectStructure() {
        const { projectData } = this;
        const framework = projectData.framework;
        
        let structure = '';
        
        if (framework === 'nextjs') {
            structure = `my-${projectData.siteTitle.toLowerCase().replace(/\s+/g, '-')}-app/
├── README.md
${projectData.includeClaudeMd ? '├── CLAUDE.md' : ''}
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
${projectData.includeEnvConfig ? '├── .env.example' : ''}
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── (routes)/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Navigation.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Sidebar.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── styles/
│   │   └── components.css
│   └── types/
│       └── index.ts
${projectData.includeTests ? '├── __tests__/\n│   ├── components/\n│   └── pages/' : ''}
├── .eslintrc.json
├── .gitignore
└── vercel.json`;
        } else if (framework === 'react-vite') {
            structure = `my-${projectData.siteTitle.toLowerCase().replace(/\s+/g, '-')}-app/
├── README.md
${projectData.includeClaudeMd ? '├── CLAUDE.md' : ''}
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
${projectData.includeEnvConfig ? '├── .env.example' : ''}
├── index.html
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── components/
│   │   ├── ui/
│   │   └── layout/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── types/
${projectData.includeTests ? '├── tests/\n│   ├── components/\n│   └── utils/' : ''}
└── dist/`;
        } else {
            structure = `my-project/
├── README.md
${projectData.includeClaudeMd ? '├── CLAUDE.md' : ''}
├── package.json
├── src/
└── dist/`;
        }
        
        this.projectStructure = structure;
    }

    showPromptOutput() {
        const outputDiv = document.getElementById('claudePromptOutput');
        const promptTextarea = document.getElementById('claudePromptText');
        const structureDiv = document.getElementById('projectStructurePreview');
        
        if (promptTextarea) {
            promptTextarea.value = this.generatedPrompt;
        }
        
        if (structureDiv && this.projectStructure) {
            structureDiv.textContent = this.projectStructure;
        }
        
        if (outputDiv) {
            outputDiv.style.display = 'block';
        }
    }

    previewClaudeIntegration() {
        // Generate preview data
        this.projectData = this.collectDesignData();
        this.generateProjectStructure();
        
        // Create preview modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
        `;

        modal.innerHTML = `
            <div style="background: white; border-radius: 16px; max-width: 1000px; width: 95%; max-height: 90vh; overflow-y: auto;">
                <div style="padding: 2rem; border-bottom: 1px solid #e5e7eb;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h2 style="colour: #374151; margin: 0;">👀 Claude Code Integration Preview</h2>
                        <button onclick="this.closest('.integration-preview-modal').remove()" style="background: none; border: none; font-size: 1.5rem; colour: #6b7280; cursor: pointer;">×</button>
                    </div>
                </div>
                <div style="padding: 2rem;">
                    ${this.generatePreviewContent()}
                    <div style="text-align: center; margin-top: 2rem;">
                        <button class="btn-primary" onclick="this.closest('.integration-preview-modal').remove(); generateClaudePrompt();" style="margin-right: 0.5rem;">
                            ✨ Generate Full Package
                        </button>
                        <button class="btn-secondary" onclick="this.closest('.integration-preview-modal').remove();">
                            Close Preview
                        </button>
                    </div>
                </div>
            </div>
        `;

        modal.className = 'integration-preview-modal';
        document.body.appendChild(modal);
    }

    generatePreviewContent() {
        const { projectData } = this;
        
        return `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <h3 style="colour: #374151; margin-bottom: 1rem;">🎨 Design Configuration</h3>
                    <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; font-size: 0.9rem;">
                        <div style="margin-bottom: 0.5rem;"><strong>Style:</strong> ${this.getStyleDescription(projectData.style)}</div>
                        <div style="margin-bottom: 0.5rem;"><strong>Template:</strong> ${this.getTemplateDescription(projectData.template)}</div>
                        <div style="margin-bottom: 0.5rem;"><strong>Framework:</strong> ${this.getFrameworkName(projectData.framework)}</div>
                        <div style="margin-bottom: 0.5rem;"><strong>CSS:</strong> ${projectData.cssFramework}</div>
                        <div><strong>Deployment:</strong> ${this.getDeploymentTarget(projectData.deploymentTarget)}</div>
                    </div>
                </div>
                <div>
                    <h3 style="colour: #374151; margin-bottom: 1rem;">📝 Content Summary</h3>
                    <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem; font-size: 0.9rem;">
                        <div style="margin-bottom: 0.5rem;"><strong>Title:</strong> "${projectData.siteTitle}"</div>
                        <div style="margin-bottom: 0.5rem;"><strong>Subtitle:</strong> "${projectData.siteSubtitle}"</div>
                        <div style="margin-bottom: 0.5rem;"><strong>Pages:</strong> ${projectData.navLinks.join(', ')}</div>
                        <div><strong>Theme:</strong> ${projectData.themeMode}</div>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="colour: #374151; margin-bottom: 1rem;">📁 Project Structure Preview</h3>
                <div style="background: #1f2937; colour: #10b981; padding: 1.5rem; border-radius: 8px; font-family: 'SF Mono', Monaco, monospace; font-size: 0.85rem; line-height: 1.6; max-height: 300px; overflow-y: auto;">
                    <pre style="margin: 0; white-space: pre-wrap;">${this.projectStructure}</pre>
                </div>
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 1rem;">
                <h4 style="colour: #92400e; margin-bottom: 0.5rem;">📦 What Will Be Generated:</h4>
                <ul style="colour: #92400e; margin: 0; padding-left: 1.5rem; font-size: 0.9rem;">
                    <li>Complete ${this.getFrameworkName(projectData.framework)} project structure</li>
                    <li>Context-aware Claude Code prompt (2000+ words)</li>
                    ${projectData.includeClaudeMd ? '<li>Comprehensive CLAUDE.md integration guide</li>' : ''}
                    ${projectData.includeDependencies ? '<li>Optimised package.json with all dependencies</li>' : ''}
                    ${projectData.includeEnvConfig ? '<li>Environment configuration files</li>' : ''}
                    ${projectData.includeTests ? '<li>Testing framework setup and sample tests</li>' : ''}
                    ${projectData.includeDocumentation ? '<li>Complete project documentation</li>' : ''}
                    <li>Deployment-ready configuration for ${this.getDeploymentTarget(projectData.deploymentTarget)}</li>
                </ul>
            </div>
        `;
    }

    // Helper methods for generating descriptions
    getStyleDescription(style) {
        const descriptions = {
            minimalist: 'Clean, minimal design with focus on typography and whitespace',
            dashboard: 'Professional admin interface with data-focused layouts',
            corporate: 'Traditional business design with trust-building elements',
            creative: 'Artistic portfolio design with bold visual elements',
            tech: 'Modern startup aesthetic with innovation-focused styling',
            ecommerce: 'Product-focused design optimised for conversions',
            blog: 'Content-heavy layout with excellent readability',
            restaurant: 'Food-focused design with appetising imagery',
            photography: 'Image-centric layout with gallery features',
            realestate: 'Property showcase with professional presentation',
            healthcare: 'Medical professional design with trust elements',
            education: 'Learning-focused layout with course structure'
        };
        return descriptions[style] || 'Custom design style';
    }

    getTemplateDescription(template) {
        const descriptions = {
            hero: 'Large hero section with prominent call-to-action',
            centered: 'Centred content layout with balanced composition',
            sidebar: 'Side navigation with main content area',
            grid: 'Grid-based layout for showcasing multiple items',
            split: 'Two-column split layout for balanced content',
            masonry: 'Pinterest-style masonry grid layout',
            fullscreen: 'Immersive full-screen experience',
            timeline: 'Chronological content presentation',
            magazine: 'Multi-column editorial layout',
            portfolio: 'Creative project showcase grid',
            landing: 'Conversion-optimised landing page',
            'dashboard-pro': 'Advanced admin interface layout',
            'blog-modern': 'Contemporary blog reading experience',
            cards: 'Card-based content organisation',
            'ecommerce-grid': 'Product grid for online stores'
        };
        return descriptions[template] || 'Custom layout template';
    }

    getFrameworkName(framework) {
        const names = {
            nextjs: 'Next.js',
            'react-vite': 'React with Vite',
            vue: 'Vue.js',
            nuxt: 'Nuxt.js',
            svelte: 'SvelteKit',
            angular: 'Angular',
            html: 'Static HTML/CSS',
            astro: 'Astro'
        };
        return names[framework] || 'Web Framework';
    }

    getCSSFrameworkDescription(framework) {
        const descriptions = {
            vanilla: 'Custom CSS with modern features',
            tailwind: 'Tailwind CSS utility-first framework',
            bootstrap: 'Bootstrap component framework',
            bulma: 'Bulma modern CSS framework'
        };
        return descriptions[framework] || 'CSS Framework';
    }

    getDeploymentTarget(target) {
        const targets = {
            vercel: 'Vercel',
            netlify: 'Netlify',
            'github-pages': 'GitHub Pages',
            aws: 'AWS Amplify',
            cloudflare: 'Cloudflare Pages',
            'self-hosted': 'Self-Hosted'
        };
        return targets[target] || 'Deployment Platform';
    }

    // Additional helper methods...
    getColourDescription(scheme) {
        const descriptions = {
            blue: 'Professional blue colour palette',
            monochrome: 'Sophisticated monochrome scheme',
            green: 'Success-oriented green palette',
            purple: 'Creative purple colour scheme',
            orange: 'Energetic orange palette',
            dark: 'Modern dark theme'
        };
        return descriptions[scheme] || 'Custom colour scheme';
    }

    getFontDescription(font) {
        const descriptions = {
            sans: 'Modern sans-serif typography',
            serif: 'Classic serif typography',
            mono: 'Developer-friendly monospace',
            display: 'Decorative display fonts'
        };
        return descriptions[font] || 'Custom typography';
    }

    getAnimationSpeed(preset) {
        const speeds = {
            subtle: '200ms',
            smooth: '300ms',
            bouncy: '400ms',
            dramatic: '600ms'
        };
        return speeds[preset] || '300ms';
    }

    getComplexityDescription(complexity) {
        const descriptions = {
            simple: 'Basic landing page or simple website',
            medium: 'Multi-page site with forms and CMS integration',
            complex: 'Full web application with authentication',
            enterprise: 'Large-scale application with advanced features'
        };
        return descriptions[complexity] || 'Standard complexity';
    }

    getFrameworkDetails(framework) {
        const details = {
            nextjs: 'Next.js 14+ with App Router, TypeScript, and Tailwind CSS',
            'react-vite': 'React 18+ with Vite, TypeScript, and modern tooling',
            vue: 'Vue.js 3 with Composition API and TypeScript',
            nuxt: 'Nuxt.js 3 with auto-imports and server-side rendering',
            svelte: 'SvelteKit with TypeScript and modern features',
            angular: 'Angular with TypeScript and Angular Material',
            html: 'Modern HTML5, CSS3, and vanilla JavaScript',
            astro: 'Astro with island architecture and optimal performance'
        };
        return details[framework] || 'Modern web framework';
    }

    getFrameworkSpecificRequirements(projectData) {
        const { framework, deploymentTarget } = projectData;
        
        let requirements = '';
        
        if (framework === 'nextjs') {
            requirements += `
**Next.js Specific Requirements**:
- Use App Router (not Pages Router)
- Implement proper metadata API for SEO
- Use Server Components where appropriate
- Add Image component for optimised images
- Include proper TypeScript configurations
`;
        }
        
        if (deploymentTarget === 'vercel') {
            requirements += `
**Vercel Optimisation**:
- Configure vercel.json for optimal deployment
- Use Edge Runtime where beneficial
- Implement proper caching strategies
- Add Web Vitals monitoring
`;
        }
        
        return requirements;
    }

    getDeploymentOptimisations(projectData) {
        const { deploymentTarget, framework } = projectData;
        
        let optimisations = `Optimised for ${this.getDeploymentTarget(deploymentTarget)} deployment with:
- Automatic SSL certificates and HTTPS
- Global CDN distribution
- Optimised build configurations
- Performance monitoring setup`;
        
        if (deploymentTarget === 'vercel' && framework === 'nextjs') {
            optimisations += `
- Edge Runtime where applicable
- Image optimisation with next/image
- Automatic static optimisation
- Preview deployments for development`;
        }
        
        return optimisations;
    }

    getStylePhilosophy(style) {
        const philosophies = {
            minimalist: 'minimalist design',
            dashboard: 'data-driven interface',
            corporate: 'professional business',
            creative: 'artistic expression',
            tech: 'innovation and technology',
            ecommerce: 'conversion-optimised commerce',
            blog: 'content-first',
            restaurant: 'hospitality and appetite appeal',
            photography: 'visual storytelling',
            realestate: 'property presentation',
            healthcare: 'trust and professionalism',
            education: 'learning and engagement'
        };
        return philosophies[style] || 'custom design';
    }

    getProjectFocus(complexity) {
        const focuses = {
            simple: 'clean presentation and easy navigation',
            medium: 'user engagement and content management',
            complex: 'advanced functionality and user experience',
            enterprise: 'scalability and enterprise-grade features'
        };
        return focuses[complexity] || 'balanced functionality';
    }

    downloadProjectTemplate() {
        // Generate complete project template as ZIP
        const projectData = this.projectData || this.collectDesignData();
        
        // Create comprehensive project files
        const files = this.generateProjectFiles(projectData);
        
        // Create and download ZIP file
        this.createAndDownloadZip(files, `${projectData.siteTitle.toLowerCase().replace(/\s+/g, '-')}-claude-template`);
    }

    generateProjectFiles(projectData) {
        const files = {};
        
        // Generate CLAUDE.md
        if (projectData.includeClaudeMd) {
            files['CLAUDE.md'] = this.generateClaudeMd(projectData);
        }
        
        // Generate package.json
        if (projectData.includeDependencies) {
            files['package.json'] = this.generatePackageJson(projectData);
        }
        
        // Generate README.md
        if (projectData.includeDocumentation) {
            files['README.md'] = this.generateReadme(projectData);
        }
        
        // Generate environment files
        if (projectData.includeEnvConfig) {
            files['.env.example'] = this.generateEnvExample(projectData);
        }
        
        // Generate configuration files based on framework
        const configFiles = this.generateConfigFiles(projectData);
        Object.assign(files, configFiles);
        
        return files;
    }

    generateClaudeMd(projectData) {
        return `# CLAUDE.md - ${projectData.siteTitle}

This file provides guidance to Claude Code when working with the ${projectData.siteTitle} project.

## Project Overview

**${projectData.siteTitle}** is a ${this.getComplexityDescription(projectData.projectComplexity)} built with ${this.getFrameworkName(projectData.framework)} and designed with ${this.getStyleDescription(projectData.style)} principles.

## Design System

### Visual Design
- **Style**: ${this.getStyleDescription(projectData.style)}
- **Template**: ${this.getTemplateDescription(projectData.template)}
- **Colour Scheme**: ${this.getColourDescription(projectData.colourScheme)}
- **Typography**: ${this.getFontDescription(projectData.fontFamily)}
- **Theme Mode**: ${projectData.themeMode}

### Technical Stack
- **Framework**: ${this.getFrameworkDetails(projectData.framework)}
- **CSS Framework**: ${this.getCSSFrameworkDescription(projectData.cssFramework)}
- **Deployment**: ${this.getDeploymentTarget(projectData.deploymentTarget)}

## Development Commands

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Deploy to ${this.getDeploymentTarget(projectData.deploymentTarget)}
${this.getDeployCommand(projectData.deploymentTarget)}
\`\`\`

## Project Structure

${this.projectStructure}

## Component Guidelines

### Styling Conventions
- Use ${projectData.cssFramework} for styling
- Follow ${this.getStyleDescription(projectData.style)} design principles
- Maintain consistent spacing and typography
- Ensure responsive design across all breakpoints

### Accessibility Standards
- Follow WCAG ${projectData.accessibilityLevel} guidelines
- Ensure proper keyboard navigation
- Maintain appropriate colour contrast ratios
- Include proper ARIA attributes

### Performance Considerations
- Optimise images and assets
- Implement lazy loading where appropriate
- Use code splitting for better performance
- Follow ${this.getFrameworkName(projectData.framework)} best practises

## Integration with Claude Code

When working with Claude Code on this project:

1. **File Organisation**: Components are organised by functionality and reusability
2. **Styling Approach**: ${this.getCSSFrameworkDescription(projectData.cssFramework)} is used for consistent styling
3. **State Management**: Use modern ${this.getFrameworkName(projectData.framework)} patterns for state
4. **Testing**: ${projectData.includeTests ? 'Jest and Testing Library are configured for component testing' : 'Add testing framework as needed'}

## Deployment

This project is optimised for deployment to ${this.getDeploymentTarget(projectData.deploymentTarget)}:

${this.getDeploymentOptimisations(projectData)}

## Common Tasks

### Adding New Components
1. Create component in appropriate directory
2. Follow established naming conventions
3. Add proper TypeScript types
4. Include responsive styling
5. Add accessibility attributes

### Modifying Styles
1. Use design tokens from the established system
2. Maintain consistency with existing components
3. Test across different screen sizes
4. Ensure accessibility compliance

### Performance Optimisation
1. Optimise images and assets
2. Implement code splitting
3. Use proper caching strategies
4. Monitor Core Web Vitals

## Notes

- Generated with Design Generator Pro v2.0.0
- Design system follows ${this.getStylePhilosophy(projectData.style)} principles
- Project complexity: ${this.getComplexityDescription(projectData.projectComplexity)}
- Created on: ${new Date(projectData.generatedAt).toLocaleString('en-GB')}
`;
    }

    generatePackageJson(projectData) {
        const basePackage = {
            name: projectData.siteTitle.toLowerCase().replace(/\s+/g, '-'),
            version: "0.1.0",
            private: true,
            description: projectData.siteSubtitle,
            keywords: [projectData.style, "responsive", "modern", "web-app"],
            author: "Generated with Design Generator Pro",
            license: "MIT"
        };

        // Add framework-specific dependencies and scripts
        if (projectData.framework === 'nextjs') {
            basePackage.scripts = {
                dev: "next dev",
                build: "next build",
                start: "next start",
                lint: "next lint",
                type: "tsc --noEmit"
            };
            
            basePackage.dependencies = {
                next: "^14.0.0",
                react: "^18.0.0",
                "react-dom": "^18.0.0"
            };
            
            basePackage.devDependencies = {
                "@types/node": "^20.0.0",
                "@types/react": "^18.0.0",
                "@types/react-dom": "^18.0.0",
                eslint: "^8.0.0",
                "eslint-config-next": "^14.0.0",
                typescript: "^5.0.0"
            };
        }

        // Add CSS framework dependencies
        if (projectData.cssFramework === 'tailwind') {
            basePackage.devDependencies = {
                ...basePackage.devDependencies,
                tailwindcss: "^3.3.0",
                autoprefixer: "^10.4.0",
                postcss: "^8.4.0"
            };
        }

        // Add testing dependencies
        if (projectData.includeTests) {
            basePackage.devDependencies = {
                ...basePackage.devDependencies,
                jest: "^29.0.0",
                "@testing-library/react": "^13.0.0",
                "@testing-library/jest-dom": "^6.0.0",
                "@testing-library/user-event": "^14.0.0"
            };
            
            basePackage.scripts = {
                ...basePackage.scripts,
                test: "jest",
                "test:watch": "jest --watch",
                "test:coverage": "jest --coverage"
            };
        }

        return JSON.stringify(basePackage, null, 2);
    }

    generateReadme(projectData) {
        return `# ${projectData.siteTitle}

${projectData.siteSubtitle}

A modern ${this.getComplexityDescription(projectData.projectComplexity)} built with ${this.getFrameworkName(projectData.framework)} and designed with ${this.getStyleDescription(projectData.style)} principles.

## Features

- 🎨 ${this.getStyleDescription(projectData.style)}
- 📱 Fully responsive design
- ⚡ Optimised for performance
- ♿ WCAG ${projectData.accessibilityLevel} accessibility compliance
- 🚀 Deployment-ready for ${this.getDeploymentTarget(projectData.deploymentTarget)}
${projectData.animateButtons ? '- ✨ Smooth animations and interactions' : ''}
${projectData.includeTests ? '- 🧪 Comprehensive test coverage' : ''}

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd ${projectData.siteTitle.toLowerCase().replace(/\s+/g, '-')}
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Start the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint
${projectData.includeTests ? '- `npm test` - Run tests\n- `npm run test:watch` - Run tests in watch mode\n- `npm run test:coverage` - Run tests with coverage' : ''}

## Project Structure

${this.projectStructure.split('\n').map(line => line.startsWith('├──') || line.startsWith('└──') ? '  ' + line : line).join('\n')}

## Deployment

This project is optimised for deployment to ${this.getDeploymentTarget(projectData.deploymentTarget)}.

${this.getDeploymentInstructions(projectData.deploymentTarget)}

## Design System

### Colours
- Primary: ${this.getColourDescription(projectData.colourScheme)}
- Theme: ${projectData.themeMode}

### Typography
- Font Family: ${this.getFontDescription(projectData.fontFamily)}

### Layout
- Template: ${this.getTemplateDescription(projectData.template)}
- Style: ${this.getStyleDescription(projectData.style)}

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

Generated with [Design Generator Pro](https://github.com/anthropics/claude-code) v2.0.0`;
    }

    generateEnvExample(projectData) {
        let envContent = `# Environment Configuration for ${projectData.siteTitle}

# Application
NEXT_PUBLIC_APP_NAME="${projectData.siteTitle}"
NEXT_PUBLIC_APP_DESCRIPTION="${projectData.siteSubtitle}"
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Theme
NEXT_PUBLIC_DEFAULT_THEME=${projectData.themeMode}

# Features
NEXT_PUBLIC_ANALYTICS_ENABLED=false
NEXT_PUBLIC_SEO_ENABLED=true
`;

        if (projectData.deploymentTarget === 'vercel') {
            envContent += `
# Vercel Configuration
VERCEL_URL=
VERCEL_ENV=development
`;
        }

        return envContent;
    }

    generateConfigFiles(projectData) {
        const files = {};
        
        if (projectData.framework === 'nextjs') {
            files['next.config.js'] = this.generateNextConfig(projectData);
            files['tsconfig.json'] = this.generateTSConfig(projectData);
        }
        
        if (projectData.cssFramework === 'tailwind') {
            files['tailwind.config.js'] = this.generateTailwindConfig(projectData);
            files['postcss.config.js'] = this.generatePostCSSConfig();
        }
        
        if (projectData.deploymentTarget === 'vercel') {
            files['vercel.json'] = this.generateVercelConfig(projectData);
        }
        
        return files;
    }

    generateNextConfig(projectData) {
        return `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  ${projectData.deploymentTarget === 'vercel' ? `
  // Vercel optimisations
  poweredByHeader: false,
  compress: true,` : ''}
}

module.exports = nextConfig`;
    }

    generateTSConfig(projectData) {
        return JSON.stringify({
            compilerOptions: {
                target: "es5",
                lib: ["dom", "dom.iterable", "es6"],
                allowJs: true,
                skipLibCheck: true,
                strict: true,
                forceConsistentCasingInFileNames: true,
                noEmit: true,
                esModuleInterop: true,
                module: "esnext",
                moduleResolution: "node",
                resolveJsonModule: true,
                isolatedModules: true,
                jsx: "preserve",
                incremental: true,
                plugins: [
                    {
                        name: "next"
                    }
                ],
                baseUrl: ".",
                paths: {
                    "@/*": ["./src/*"]
                }
            },
            include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
            exclude: ["node_modules"]
        }, null, 2);
    }

    generateTailwindConfig(projectData) {
        return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colours: {
        // Custom colour palette based on ${projectData.colourScheme}
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        // Custom typography: ${projectData.fontFamily}
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: '${projectData.themeMode === 'dark' ? 'class' : 'media'}',
}`;
    }

    generatePostCSSConfig() {
        return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
    }

    generateVercelConfig(projectData) {
        return JSON.stringify({
            framework: projectData.framework === 'nextjs' ? 'nextjs' : null,
            buildCommand: projectData.framework === 'nextjs' ? 'next build' : 'npm run build',
            devCommand: projectData.framework === 'nextjs' ? 'next dev' : 'npm run dev',
            installCommand: 'npm install',
            headers: [
                {
                    source: '/(.*)',
                    headers: [
                        {
                            key: 'X-Content-Type-Options',
                            value: 'nosniff'
                        },
                        {
                            key: 'X-Frame-Options',
                            value: 'DENY'
                        },
                        {
                            key: 'X-XSS-Protection',
                            value: '1; mode=block'
                        }
                    ]
                }
            ]
        }, null, 2);
    }

    getDeployCommand(target) {
        const commands = {
            vercel: 'vercel --prod',
            netlify: 'netlify deploy --prod',
            'github-pages': 'npm run build && npm run deploy',
            aws: 'amplify publish',
            cloudflare: 'wrangler pages publish dist',
            'self-hosted': 'npm run build'
        };
        return commands[target] || 'npm run build';
    }

    getDeploymentInstructions(target) {
        const instructions = {
            vercel: `### Deploy to Vercel

1. Install Vercel CLI: \`npm i -g vercel\`
2. Run: \`vercel\`
3. Follow the prompts
4. Your site will be deployed to a unique URL`,
            
            netlify: `### Deploy to Netlify

1. Build the project: \`npm run build\`
2. Drag and drop the \`dist\` folder to Netlify
3. Or connect your Git repository for automatic deployments`,
            
            'github-pages': `### Deploy to GitHub Pages

1. Install gh-pages: \`npm install --save-dev gh-pages\`
2. Add deploy script to package.json
3. Run: \`npm run deploy\``,
            
            aws: `### Deploy to AWS Amplify

1. Install Amplify CLI: \`npm install -g @aws-amplify/cli\`
2. Run: \`amplify init\`
3. Run: \`amplify add hosting\`
4. Run: \`amplify publish\``,
            
            cloudflare: `### Deploy to Cloudflare Pages

1. Connect your Git repository to Cloudflare Pages
2. Set build command: \`npm run build\`
3. Set output directory: \`dist\`
4. Deploy automatically on git push`,
            
            'self-hosted': `### Self-Hosted Deployment

1. Build the project: \`npm run build\`
2. Upload the \`dist\` folder to your web server
3. Configure your web server to serve the static files`
        };
        
        return instructions[target] || 'Follow your hosting provider\'s deployment instructions.';
    }

    createAndDownloadZip(files, filename) {
        // Check if JSZip is available
        if (typeof JSZip === 'undefined') {
            console.error('JSZip library not loaded');
            alert('ZIP functionality not available. Please refresh the page and try again.');
            return;
        }

        const zip = new JSZip();
        
        try {
            // Add all files to the ZIP
            Object.keys(files).forEach(path => {
                const content = typeof files[path] === 'string' ? files[path] : JSON.stringify(files[path], null, 2);
                zip.file(path, content);
            });
            
            // Add Claude-specific README
            const readmeContent = `# ${filename}

This is your Claude Code integration template package.

## Contents:
${Object.keys(files).map(path => `- ${path}`).join('\n')}

## Usage with Claude Code:
1. Extract the ZIP file to your project directory
2. Use Claude Code to work with these templates:
   - "Convert the ${Object.keys(files).find(f => f.includes('.html')) || 'template'} to React components"
   - "Apply the styling from this template to my existing project"
   - "Create a complete website based on this template"

## Integration Examples:
\`\`\`bash
# Example Claude Code commands:
"Use this template as the base for a portfolio website"
"Convert this to Next.js with TypeScript"
"Apply this design system to my Vue.js app"
\`\`\`

Generated by Homepage Design Generator Pro - Claude Integration
${new Date().toLocaleDateString()}`;
            
            zip.file('CLAUDE_README.md', readmeContent);
            
            // Generate and download ZIP
            zip.generateAsync({ type: 'blob' })
                .then((content) => {
                    const url = URL.createObjectURL(content);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${filename}.zip`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    
                    // Show success message
                    this.showSuccessMessage('Claude Code template ZIP downloaded successfully!');
                })
                .catch((error) => {
                    console.error('ZIP generation failed:', error);
                    alert('Failed to create ZIP file. Please try again.');
                });
                
        } catch (error) {
            console.error('ZIP creation error:', error);
            alert('Failed to create ZIP file. Please try again.');
        }
    }

    showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            colour: #059669;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-width: 300px;
            animation: slideInRight 0.5s ease;
        `;
        
        successDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.2rem;">✅</span>
                <strong>Success!</strong>
            </div>
            <p style="margin: 0; font-size: 0.9rem;">${message}</p>
        `;

        document.body.appendChild(successDiv);

        // Remove after 5 seconds
        setTimeout(() => {
            successDiv.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => {
                if (successDiv.parentNode) {
                    successDiv.remove();
                }
            }, 500);
        }, 5000);
    }

    // New Transformation and Enhancement Methods
    generateTransformationPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Transform Existing Application

I need you to transform an existing application from one design style/framework to another whilst preserving all functionality.

## 🔄 Transformation Specifications

**Current Design**: Please analyse the existing application
**Target Design**: ${this.getStyleDescription(projectData.style)} with ${this.getTemplateDescription(projectData.template)}
**Target Framework**: ${this.getFrameworkName(projectData.framework)}
**Target CSS Framework**: ${this.getCSSFrameworkDescription(projectData.cssFramework)}

## 🎯 Transformation Goals

**Visual Design Changes**:
- Apply ${projectData.colourScheme} colour scheme with proper contrast ratios
- Update typography to ${this.getFontDescription(projectData.fontFamily)}
- Implement ${projectData.themeMode} theme mode support
${projectData.industryContext ? `- Adapt design patterns for ${projectData.targetIndustry} industry` : ''}

**Technical Modernisation**:
- Migrate to ${projectData.renderingStrategy} rendering strategy
- Implement ${projectData.stateManagement} for state management
- Add ${projectData.dataFetching} for API communication
- Optimise performance with ${projectData.imageOptimisation}

**User Experience Enhancements**:
- Add ${projectData.loadingStates} loading states
- Implement ${projectData.errorHandling} error handling
- Ensure ${projectData.accessibilityLevel} accessibility compliance
${projectData.darkMode !== 'None' ? `- Add ${projectData.darkMode} dark mode support` : ''}

## 📋 Transformation Process

1. **Analysis Phase**: Identify existing components, functionality, and data flow
2. **Migration Strategy**: Plan step-by-step transformation approach  
3. **Component Mapping**: Map existing components to new design system
4. **Functionality Preservation**: Ensure all existing features remain intact
5. **Enhancement Integration**: Add new features whilst maintaining compatibility
6. **Testing Strategy**: Comprehensive testing plan for transformed application

## 🔧 Technical Requirements

**Framework Migration**:
${this.generateTechnicalMigrationSpec()}

**Design System Migration**:
${this.generateDesignSystemMigrationSpec()}

**Performance Optimisation**:
${this.generatePerformanceOptimisationSpec()}

## 📝 Deliverables

1. **Migration Plan**: Step-by-step transformation guide
2. **Component Library**: New design system components
3. **Code Implementation**: Complete transformed application
4. **Testing Suite**: Comprehensive test coverage
5. **Documentation**: Migration notes and new feature guides
6. **Deployment Guide**: Updated deployment configuration

${this.generateContextualGuidance()}

This transformation should result in a modern, performant application that maintains all existing functionality whilst providing an enhanced user experience.`;
    }

    generateMigrationPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Framework Migration Project

I need you to migrate an existing application to ${this.getFrameworkName(projectData.framework)} whilst preserving all functionality and improving the architecture.

## 🚀 Migration Specifications

**Target Framework**: ${this.getFrameworkName(projectData.framework)}
**Target Architecture**: ${projectData.renderingStrategy}
**State Management**: ${projectData.stateManagement}
**Styling System**: ${this.getCSSFrameworkDescription(projectData.cssFramework)}

## 🏗️ Technical Migration Plan

**Architecture Modernisation**:
- Implement ${projectData.renderingStrategy} rendering for optimal performance
- Set up ${projectData.stateManagement} for predictable state management
- Configure ${projectData.dataFetching} for efficient data handling
- Add ${projectData.typescript} TypeScript integration
- Set up ${projectData.testing} testing framework

**Performance Optimisation**:
- Implement ${projectData.imageOptimisation} for images
- Configure ${projectData.caching} caching strategy  
- Set up ${projectData.bundling} for optimal bundle sizes
- Add ${projectData.monitoring} performance monitoring

**Developer Experience**:
- Configure ${projectData.linting} for code quality
- Set up ${projectData.cicd} for automated deployments
- Add ${projectData.documentation} documentation system

## 🎨 Design System Integration

Apply the following design specifications during migration:

**Visual Design**: ${this.getStyleDescription(projectData.style)}
**Colour System**: ${projectData.colourScheme} with semantic colour tokens
**Typography**: ${this.getFontDescription(projectData.fontFamily)} with proper scale
**Component Architecture**: Atomic design principles with reusable components

## 📋 Migration Phases

### Phase 1: Foundation Setup
- Set up new ${projectData.framework} project structure
- Configure build tools and development environment
- Establish design system foundation

### Phase 2: Component Migration
- Port existing components to new framework
- Implement new design system styling
- Add TypeScript types and interfaces

### Phase 3: Feature Integration
- Migrate business logic and state management
- Implement routing and navigation
- Add form handling and validation

### Phase 4: Enhancement & Optimisation
- Add new features and improvements
- Implement performance optimisations
- Complete testing and documentation

## 🔍 Quality Assurance

**Testing Requirements**:
- Unit tests for all components
- Integration tests for user flows
- End-to-end tests for critical paths
- Performance benchmarking
- Accessibility audit (${projectData.accessibilityLevel} compliance)

**Migration Verification**:
- Feature parity checklist
- Performance comparison metrics
- User experience validation
- Cross-browser compatibility testing

${this.generateDeploymentConfiguration()}

The migration should result in a modern, scalable application with improved performance, developer experience, and maintainability.`;
    }

    generateProgressiveEnhancementPrompt() {
        const { projectData } = this;
        
        this.generatedPrompt = `# Progressive Enhancement Plan

I need you to progressively enhance an existing application by adding modern features and improvements whilst maintaining backward compatibility.

## 🎯 Enhancement Objectives

**Performance Enhancements**:
- Implement ${projectData.imageOptimisation} for faster loading
- Add ${projectData.caching} caching strategies
- Optimise with ${projectData.bundling} for better bundle management
- Integrate ${projectData.monitoring} performance monitoring

**User Experience Improvements**:
- Add ${projectData.loadingStates} loading indicators
- Implement ${projectData.errorHandling} error boundaries
- Ensure ${projectData.accessibilityLevel} accessibility compliance
${projectData.darkMode !== 'None' ? `- Add ${projectData.darkMode} dark mode toggle` : ''}
${projectData.pwaEnabled ? '- Convert to Progressive Web App with offline support' : ''}

**Modern Features Integration**:
${projectData.authentication !== 'None' ? `- Add ${projectData.authentication} authentication system` : ''}
${projectData.database !== 'None' ? `- Integrate ${projectData.database} database layer` : ''}
${projectData.analytics !== 'None' ? `- Set up ${projectData.analytics} analytics tracking` : ''}
${projectData.socialMediaIntegration ? '- Add social media integration and sharing' : ''}

## 🛠️ Implementation Strategy

### Phase 1: Foundation Improvements
1. **Performance Baseline**: Establish current performance metrics
2. **Architecture Assessment**: Identify enhancement opportunities
3. **Dependency Audit**: Update and optimise dependencies
4. **Build Optimisation**: Implement modern build tools and practices

### Phase 2: User Experience Enhancements
1. **Loading States**: Add skeleton screens and loading indicators
2. **Error Handling**: Implement comprehensive error boundaries
3. **Accessibility**: Audit and improve WCAG ${projectData.accessibilityLevel} compliance
4. **Responsive Design**: Enhance mobile and tablet experiences

### Phase 3: Feature Additions
1. **Authentication**: ${projectData.authentication !== 'None' ? `Implement ${projectData.authentication} login system` : 'Skip - not required'}
2. **Data Management**: ${projectData.database !== 'None' ? `Add ${projectData.database} integration` : 'Skip - not required'}
3. **Analytics**: ${projectData.analytics !== 'None' ? `Set up ${projectData.analytics} tracking` : 'Skip - not required'}
4. **PWA Features**: ${projectData.pwaEnabled ? 'Add service worker and offline capabilities' : 'Skip - not required'}

### Phase 4: Advanced Optimisations
1. **Code Splitting**: Implement intelligent bundle splitting
2. **Caching Strategy**: Add ${projectData.caching} for optimal performance
3. **SEO Enhancement**: Improve search engine optimisation
4. **Security Hardening**: Add ${projectData.securityHeaders ? 'security headers and' : ''} best practices

## 🎨 Design System Enhancements

**Visual Improvements**:
- Refine colour palette with ${projectData.colourScheme} scheme
- Enhance typography with ${this.getFontDescription(projectData.fontFamily)}
- Add micro-interactions and ${projectData.animationPreset} animations
- Implement consistent spacing and layout system

**Component Library**:
- Create reusable component library
- Add Storybook documentation (if ${projectData.documentation === 'Storybook'})
- Implement design tokens system
- Add component testing suite

## 📈 Success Metrics

**Performance Targets**:
- Lighthouse score: 90+ (Performance, Accessibility, SEO, Best Practices)
- Core Web Vitals: All metrics in "Good" range
- Bundle size reduction: 20%+ smaller than baseline
- Load time improvement: 30%+ faster first contentful paint

**User Experience Metrics**:
- Accessibility score: WCAG ${projectData.accessibilityLevel} compliance
- Mobile responsiveness: Perfect across all devices
- Error rate reduction: 50%+ fewer user-facing errors
- User engagement: Improved time on site and interaction rates

## 🚀 Deployment Strategy

${this.generateDeploymentConfiguration()}

**Rollout Plan**:
1. **Staging Deployment**: Test all enhancements in staging environment
2. **A/B Testing**: Gradually roll out improvements to user segments
3. **Monitoring**: Track performance and user experience metrics
4. **Feedback Loop**: Collect user feedback and iterate improvements

${this.generateContextualGuidance()}

This progressive enhancement should result in a significantly improved application with better performance, user experience, and modern capabilities whilst maintaining full backward compatibility.`;
    }

    generateTechnicalMigrationSpec() {
        const { projectData } = this;
        return `
**Rendering Strategy**: ${projectData.renderingStrategy}
${projectData.renderingStrategy === 'SSG' ? '- Pre-generate all pages at build time for optimal performance' : ''}
${projectData.renderingStrategy === 'SSR' ? '- Server-side render pages for SEO and initial load performance' : ''}
${projectData.renderingStrategy === 'ISR' ? '- Incremental static regeneration for dynamic content with static performance' : ''}

**State Management**: ${projectData.stateManagement}
${projectData.stateManagement !== 'Built-in' ? `- Implement ${projectData.stateManagement} for complex state scenarios` : '- Use built-in React state management'}

**Data Layer**: ${projectData.dataFetching}
- Configure API communication with ${projectData.dataFetching}
- Add error handling and loading states
- Implement caching strategy with ${projectData.caching}
`;
    }

    generateDesignSystemMigrationSpec() {
        const { projectData } = this;
        return `
**Design Tokens**: Create comprehensive design token system
- Colour palette: ${projectData.colourScheme} with semantic naming
- Typography scale: ${this.getFontDescription(projectData.fontFamily)}
- Spacing system: Consistent rem-based spacing scale
- Border radius: Consistent radius values for components

**Component Architecture**: 
- Atomic design methodology (Atoms, Molecules, Organisms)
- Consistent prop interfaces and TypeScript types
- Comprehensive Storybook documentation
- Accessibility-first component design

**Animation System**: ${projectData.animations}
- Consistent timing functions and durations
- Reduced motion preferences support
- Performance-optimised animations
`;
    }

    generatePerformanceOptimisationSpec() {
        const { projectData } = this;
        return `
**Image Optimisation**: ${projectData.imageOptimisation}
- WebP format with fallbacks
- Responsive images with appropriate sizing
- Lazy loading for below-the-fold images

**Bundle Optimisation**: ${projectData.bundling}
- Code splitting at route and component level
- Tree shaking to eliminate unused code
- Dynamic imports for heavy dependencies

**Caching Strategy**: ${projectData.caching}
- Browser caching for static assets
- API response caching where appropriate
- Service worker for offline functionality (if PWA enabled)
`;
    }

    generateDeploymentConfiguration() {
        const { projectData } = this;
        return `
## 🚀 Deployment Configuration

**Target Platform**: ${projectData.environment}
**CI/CD Pipeline**: ${projectData.cicd}
**Monitoring**: ${projectData.environmentMonitoring}

**Environment Configuration**:
- Production optimisations enabled
- Environment-specific configuration
- Automated deployment pipeline
- Health checks and monitoring setup

**Vercel Optimisation** (if applicable):
- Edge Runtime configuration where beneficial  
- Automatic static optimisation
- Image optimisation with next/image
- Preview deployments for development branches
`;
    }

    generateContextualGuidance() {
        const { projectData } = this;
        let guidance = '\n## 🎯 Contextual Guidance\n\n';
        
        if (projectData.industryContext) {
            guidance += `**Industry-Specific Considerations (${projectData.targetIndustry})**:\n`;
            guidance += `- Design patterns optimised for ${projectData.targetIndustry} users\n`;
            guidance += `- Colour psychology appropriate for industry standards\n`;
            guidance += `- Trust and credibility elements for ${projectData.targetIndustry} sector\n\n`;
        }
        
        if (projectData.audienceContext) {
            guidance += `**Target Audience (${projectData.targetAudience})**:\n`;
            guidance += `- Language and tone: ${projectData.audienceContext.language}\n`;
            guidance += `- Trust level requirements: ${projectData.audienceContext.trust}\n`;
            guidance += `- Interface complexity: ${projectData.audienceContext.complexity}\n\n`;
        }
        
        if (projectData.geographicContext) {
            guidance += `**Geographic Considerations (${projectData.targetRegion})**:\n`;
            guidance += `- Language variant: ${projectData.geographicContext.language}\n`;
            guidance += `- Currency format: ${projectData.geographicContext.currency}\n`;
            guidance += `- Date format: ${projectData.geographicContext.dateFormat}\n`;
        }
        
        return guidance;
    }

    // Helper methods for contextual updates
    updateColourRecommendations(colours) {
        // Update colour picker recommendations
        console.log('Updating colour recommendations:', colours);
    }

    updateAnimationPreset(preset) {
        // Update animation preset selection
        console.log('Updating animation preset:', preset);
    }

    updateLayoutSuggestions(layout) {
        // Update layout template suggestions
        console.log('Updating layout suggestions:', layout);
    }

    updateLanguageTone(tone) {
        // Update content generation tone
        console.log('Updating language tone:', tone);
    }

    updateTrustElements(level) {
        // Update trust-building elements
        console.log('Updating trust elements:', level);
    }

    updateComplexityLevel(complexity) {
        // Update interface complexity
        console.log('Updating complexity level:', complexity);
    }

    updateLanguageVariant(variant) {
        // Update language variant
        console.log('Updating language variant:', variant);
    }

    updateCurrencyFormat(currency) {
        // Update currency formatting
        console.log('Updating currency format:', currency);
    }

    updateDateFormat(format) {
        // Update date formatting
        console.log('Updating date format:', format);
    }

    previewTransformation(transformationType) {
        // Preview transformation effects
        console.log('Previewing transformation:', transformationType);
        // Implementation would show preview of transformation
    }

    }
}

// Global functions for Claude Code integration
function generateClaudePrompt() {
    if (!window.claudeIntegration) {
        window.claudeIntegration = new ClaudeCodeIntegration();
    }
    window.claudeIntegration.generateClaudePrompt();
}

function previewClaudeIntegration() {
    if (!window.claudeIntegration) {
        window.claudeIntegration = new ClaudeCodeIntegration();
    }
    window.claudeIntegration.previewClaudeIntegration();
}

function copyClaudePrompt() {
    const textarea = document.getElementById('claudePromptText');
    if (textarea && textarea.value) {
        navigator.clipboard.writeText(textarea.value);
        
        // Show success feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✅ Copied!';
        btn.style.background = '#059669';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#10b981';
        }, 2000);
    }
}

function downloadProjectTemplate() {
    if (!window.claudeIntegration) {
        window.claudeIntegration = new ClaudeCodeIntegration();
    }
    window.claudeIntegration.downloadProjectTemplate();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.claudeIntegration = new ClaudeCodeIntegration();
});