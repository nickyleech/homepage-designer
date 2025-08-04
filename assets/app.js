// Custom Error Classes
class DesignGeneratorError extends Error {
    constructor(message, type = 'GENERAL') {
        super(message);
        this.name = 'DesignGeneratorError';
        this.type = type;
        this.timestamp = new Date().toISOString();
    }
}

class TemplateError extends DesignGeneratorError {
    constructor(message, templateName = '') {
        super(message, 'TEMPLATE_ERROR');
        this.name = 'TemplateError';
        this.templateName = templateName;
    }
}

class ValidationError extends DesignGeneratorError {
    constructor(message, field = '') {
        super(message, 'VALIDATION_ERROR');
        this.name = 'ValidationError';
        this.field = field;
    }
}

class NetworkError extends DesignGeneratorError {
    constructor(message, url = '') {
        super(message, 'NETWORK_ERROR');
        this.name = 'NetworkError';
        this.url = url;
    }
}

class ComponentError extends DesignGeneratorError {
    constructor(message, componentId = '') {
        super(message, 'COMPONENT_ERROR');
        this.name = 'ComponentError';
        this.componentId = componentId;
    }
}

// Error Handler Utility
const ErrorHandler = {
    handle(error, context = '') {
        console.error(`[${context}]`, error);
        
        // Show user-friendly error message
        if (error instanceof ValidationError) {
            this.showUserError(`Invalid ${error.field}: ${error.message}`);
        } else if (error instanceof TemplateError) {
            this.showUserError(`Template Error: Unable to generate ${error.templateName} template. Please try a different template.`);
        } else if (error instanceof NetworkError) {
            this.showUserError(`Network Error: Unable to fetch data from ${error.url}. Please check your connection.`);
        } else if (error instanceof ComponentError) {
            this.showUserError(`Component Error: Issue with ${error.componentId} component. Please try again.`);
        } else {
            this.showUserError('An unexpected error occurred. Please try again.');
        }
        
        // Log to analytics/monitoring service in production
        if (window.location.hostname !== 'localhost') {
            this.logError(error, context);
        }
    },
    
    showUserError(message) {
        // Create or update error notification
        let errorDiv = document.getElementById('error-notification');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'error-notification';
            errorDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #fee2e2;
                border: 1px solid #fca5a5;
                color: #991b1b;
                padding: 12px 16px;
                border-radius: 8px;
                max-width: 400px;
                z-index: 10000;
                font-size: 14px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            `;
            document.body.appendChild(errorDiv);
        }
        
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (errorDiv) {
                errorDiv.style.display = 'none';
            }
        }, 5000);
    },
    
    logError(error, context) {
        // In production, send to monitoring service
        // For now, just log detailed info
        console.log('Error details:', {
            message: error.message,
            type: error.type || 'UNKNOWN',
            context: context,
            timestamp: error.timestamp || new Date().toISOString(),
            stack: error.stack,
            userAgent: navigator.userAgent,
            url: window.location.href
        });
    }
};

// Input Validation Utilities
const ValidationUtils = {
    // Text field validation
    validateText(value, field, minLength = 0, maxLength = 1000) {
        if (typeof value !== 'string') {
            throw new ValidationError('Must be text', field);
        }
        
        if (value.length < minLength) {
            throw new ValidationError(`Must be at least ${minLength} characters`, field);
        }
        
        if (value.length > maxLength) {
            throw new ValidationError(`Must be no more than ${maxLength} characters`, field);
        }
        
        return value.trim();
    },
    
    // URL validation
    validateURL(url, field = 'URL') {
        if (!url || typeof url !== 'string') {
            throw new ValidationError('URL is required', field);
        }
        
        try {
            const urlObj = new URL(url);
            if (!['http:', 'https:'].includes(urlObj.protocol)) {
                throw new ValidationError('Must be HTTP or HTTPS URL', field);
            }
            return url;
        } catch (e) {
            throw new ValidationError('Invalid URL format', field);
        }
    },
    
    // Email validation
    validateEmail(email, field = 'Email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            throw new ValidationError('Invalid email format', field);
        }
        return email.toLowerCase().trim();
    },
    
    // Color validation
    validateColor(color, field = 'Color') {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        const namedColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', 'white', 'gray'];
        
        if (!color) return '#000000'; // Default color
        
        if (hexColorRegex.test(color) || namedColors.includes(color.toLowerCase())) {
            return color;
        }
        
        throw new ValidationError('Invalid color format (use hex codes like #FF0000 or named colors)', field);
    },
    
    // Navigation links validation
    validateNavLinks(navLinksText, field = 'Navigation Links') {
        if (!navLinksText) return [];
        
        const links = navLinksText.split('\n').filter(link => link.trim());
        
        if (links.length > 10) {
            throw new ValidationError('Maximum 10 navigation links allowed', field);
        }
        
        return links.map(link => {
            const trimmed = link.trim();
            if (trimmed.length > 50) {
                throw new ValidationError('Navigation link text too long (max 50 characters)', field);
            }
            return trimmed;
        });
    },
    
    // Template/Style validation
    validateChoice(value, validChoices, field = 'Selection') {
        if (!validChoices.includes(value)) {
            throw new ValidationError(`Invalid choice. Must be one of: ${validChoices.join(', ')}`, field);
        }
        return value;
    },
    
    // General form data validation
    validateFormData(data) {
        const validated = {};
        
        try {
            // Validate site title
            validated.siteTitle = this.validateText(data.siteTitle || '', 'Site Title', 1, 100);
            
            // Validate site subtitle
            validated.siteSubtitle = this.validateText(data.siteSubtitle || '', 'Site Subtitle', 0, 200);
            
            // Validate main content
            validated.mainContent = this.validateText(data.mainContent || '', 'Main Content', 0, 5000);
            
            // Validate page title and content
            validated.pageTitle = this.validateText(data.pageTitle || '', 'Page Title', 0, 100);
            validated.pageContent = this.validateText(data.pageContent || '', 'Page Content', 0, 5000);
            
            // Validate navigation links
            validated.navLinks = this.validateNavLinks(data.navLinks);
            
            // Validate template choices
            const validTemplates = ['hero', 'centered', 'sidebar', 'grid', 'portfolio'];
            const validStyles = ['minimalist', 'dashboard', 'corporate', 'creative', 'tech-startup', 'e-commerce'];
            const validColorSchemes = ['blue', 'monochrome', 'green', 'purple', 'orange', 'dark'];
            const validFonts = ['sans', 'serif', 'mono', 'display'];
            const validPages = ['home', 'about', 'services', 'portfolio', 'contact', 'blog'];
            
            validated.template = this.validateChoice(data.template, validTemplates, 'Template');
            validated.style = this.validateChoice(data.style, validStyles, 'Style');
            validated.colorScheme = this.validateChoice(data.colorScheme, validColorSchemes, 'Color Scheme');
            validated.fontFamily = this.validateChoice(data.fontFamily, validFonts, 'Font Family');
            validated.page = this.validateChoice(data.page, validPages, 'Page');
            
            // Boolean values don't need validation but ensure they're boolean
            validated.includeHero = Boolean(data.includeHero);
            validated.includeNav = Boolean(data.includeNav);
            validated.includeFooter = Boolean(data.includeFooter);  
            validated.includeSidebar = Boolean(data.includeSidebar);
            
            return validated;
            
        } catch (error) {
            if (error instanceof ValidationError) {
                throw error;
            }
            throw new ValidationError('Invalid form data', 'Form');
        }
    }
};

// Security Utilities
const SecurityUtils = {
    // Sanitize HTML content to prevent XSS
    sanitizeHTML(html) {
        const tempDiv = document.createElement('div');
        tempDiv.textContent = html;
        return tempDiv.innerHTML;
    },
    
    // Safe way to set content that may contain HTML
    setContent(element, content, allowHTML = false) {
        if (!element) return;
        
        if (allowHTML) {
            // For trusted content only - sanitize first
            element.innerHTML = this.sanitizeHTML(content);
        } else {
            // Safe for user input
            element.textContent = content;
        }
    },
    
    // Create safe HTML with escaped user content
    createSafeHTML(template, userContent) {
        const escaped = typeof userContent === 'object' 
            ? Object.fromEntries(Object.entries(userContent).map(([k, v]) => [k, this.sanitizeHTML(String(v))]))
            : this.sanitizeHTML(String(userContent));
        return template.replace(/\${(\w+)}/g, (match, key) => escaped[key] || '');
    }
};

// Main Application Logic
class DesignGenerator {
    constructor() {
        this.currentStyle = 'minimalist';
        this.currentTemplate = 'hero';
        this.currentPage = 'home';
        this.currentDevice = 'desktop';
        this.currentTab = 'design';
        this.canvasComponents = [];
        this.selectedComponent = null;
        this.abortController = new AbortController();
        
        // Cache frequently accessed DOM elements
        this.domCache = {};
        this.initDOMCache();
        this.init();
    }
    
    initDOMCache() {
        this.domCache = {
            // Main containers
            componentLibrary: document.getElementById('componentLibrary'),
            canvasComponents: document.getElementById('canvasComponents'),
            previewFrame: document.getElementById('previewFrame'),
            
            // Form elements
            siteTitle: document.getElementById('siteTitle'),
            siteSubtitle: document.getElementById('siteSubtitle'),
            navLinks: document.getElementById('navLinks'),
            mainContent: document.getElementById('mainContent'),
            pageTitle: document.getElementById('pageTitle'),
            pageContent: document.getElementById('pageContent'),
            colorScheme: document.getElementById('colorScheme'),
            fontFamily: document.getElementById('fontFamily'),
            
            // Checkboxes
            includeHero: document.getElementById('includeHero'),
            includeNav: document.getElementById('includeNav'),
            includeFooter: document.getElementById('includeFooter'),
            includeSidebar: document.getElementById('includeSidebar'),
            
            // Collections (cached once to avoid repeated queries)
            navTabs: document.querySelectorAll('.nav-tab'),
            styleOptions: document.querySelectorAll('.style-option'),
            templateOptions: document.querySelectorAll('.template-option'),
            pageButtons: document.querySelectorAll('.page-btn'),
            deviceButtons: document.querySelectorAll('.device-btn'),
            formInputs: document.querySelectorAll('input, select, textarea'),
            checkboxes: document.querySelectorAll('input[type="checkbox"]'),
            
            // Drop zones
            dropZone: document.getElementById('dropZone'),
            canvasArea: document.getElementById('canvasArea')
        };
    }
    
    // Clean up all event listeners
    destroy() {
        this.abortController.abort();
        this.abortController = new AbortController();
    }

    init() {
        this.bindEvents();
        this.initComponentLibrary();
        this.initURLProcessor();
        this.updatePreview();
    }

    initURLProcessor() {
        // Initialize URL processing functionality
        if (window.URLProcessor) {
            this.urlProcessor = new URLProcessor();
        }
        
        // Initialize content extractor and style analyzer
        if (window.ContentExtractor) {
            this.contentExtractor = new ContentExtractor();
        }
        
        if (window.StyleAnalyzer) {
            this.styleAnalyzer = new StyleAnalyzer();
        }
    }

    initComponentLibrary() {
        this.renderComponentLibrary();
        this.setupDragAndDrop();
    }

    renderComponentLibrary() {
        const library = this.domCache.componentLibrary;
        if (!library) return;

        let html = '';
        
        Object.keys(ComponentLibrary.categories).forEach(categoryKey => {
            const category = ComponentLibrary.categories[categoryKey];
            html += `
                <div class="component-category">
                    <div class="category-header">
                        <span>${category.icon}</span>
                        <span>${category.name}</span>
                    </div>
                    <div class="component-grid">
                        ${category.components.map(componentId => {
                            const component = ComponentLibrary.components[componentId];
                            if (!component) return '';
                            return `
                                <div class="component-card" draggable="true" data-component="${componentId}">
                                    <div class="component-preview-icon">${component.preview}</div>
                                    <div class="component-name">${component.name}</div>
                                    <div class="component-desc">${component.description}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });

        library.innerHTML = html;
    }

    setupDragAndDrop() {
        // Component drag start
        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('component-card')) {
                e.dataTransfer.setData('text/plain', e.target.dataset.component);
                e.target.style.opacity = '0.5';
            }
        }, { signal: this.abortController.signal });

        // Component drag end
        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('component-card')) {
                e.target.style.opacity = '1';
            }
        }, { signal: this.abortController.signal });

        // Drop zone events
        const { dropZone, canvasArea } = this.domCache;
        
        if (dropZone && canvasArea) {
            [dropZone, canvasArea].forEach(area => {
                area.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    area.classList.add('drag-over');
                }, { signal: this.abortController.signal });

                area.addEventListener('dragleave', (e) => {
                    e.preventDefault();
                    area.classList.remove('drag-over');
                }, { signal: this.abortController.signal });

                area.addEventListener('drop', (e) => {
                    e.preventDefault();
                    area.classList.remove('drag-over');
                    
                    const componentId = e.dataTransfer.getData('text/plain');
                    if (componentId) {
                        this.addComponentToCanvas(componentId);
                    }
                }, { signal: this.abortController.signal });
            });
        }
    }

    addComponentToCanvas(componentId) {
        const component = ComponentLibrary.components[componentId];
        if (!component) return;

        const componentInstance = {
            id: Date.now().toString(),
            type: componentId,
            props: this.getDefaultProps(component)
        };

        this.canvasComponents.push(componentInstance);
        this.renderCanvas();
        this.hideDropZone();
    }

    getDefaultProps(component) {
        const props = {};
        if (component.props) {
            Object.keys(component.props).forEach(key => {
                props[key] = component.props[key].default;
            });
        }
        return props;
    }

    renderCanvas() {
        const canvasComponents = document.getElementById('canvasComponents');
        if (!canvasComponents) return;

        const data = this.getFormData();
        const styleColors = DesignTemplates.styles[data.style]?.colors || DesignTemplates.styles.minimalist.colors;
        const schemeColors = DesignTemplates.colorSchemes[data.colorScheme] || DesignTemplates.colorSchemes.blue;
        const colors = { ...styleColors, ...schemeColors };
        const fonts = DesignTemplates.fonts[data.fontFamily] || DesignTemplates.fonts.sans;

        let html = '';
        this.canvasComponents.forEach(componentInstance => {
            const component = ComponentLibrary.components[componentInstance.type];
            if (component) {
                html += `
                    <div class="canvas-component" data-component-id="${componentInstance.id}">
                        <div class="component-toolbar">
                            <button class="toolbar-btn" onclick="editComponent('${componentInstance.id}')" title="Edit">✏️</button>
                            <button class="toolbar-btn" onclick="duplicateComponent('${componentInstance.id}')" title="Duplicate">📋</button>
                            <button class="toolbar-btn" onclick="deleteComponent('${componentInstance.id}')" title="Delete">🗑️</button>
                        </div>
                        ${component.generate(componentInstance.props, colors, fonts)}
                    </div>
                `;
            }
        });

        canvasComponents.innerHTML = html;
    }

    hideDropZone() {
        const dropZone = document.getElementById('dropZone');
        if (dropZone && this.canvasComponents.length > 0) {
            dropZone.style.display = 'none';
        }
    }

    showDropZone() {
        const dropZone = document.getElementById('dropZone');
        if (dropZone && this.canvasComponents.length === 0) {
            dropZone.style.display = 'flex';
        }
    }

    bindEvents() {
        // Tab navigation
        this.domCache.navTabs.forEach(tab => {
            tab.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab), { signal: this.abortController.signal });
        });

        // Style selection
        this.domCache.styleOptions.forEach(option => {
            option.addEventListener('click', (e) => this.selectStyle(e.target.closest('.style-option').dataset.style), { signal: this.abortController.signal });
        });

        // Template selection
        this.domCache.templateOptions.forEach(option => {
            option.addEventListener('click', (e) => this.selectTemplate(e.target.dataset.template), { signal: this.abortController.signal });
        });

        // Page selection
        this.domCache.pageButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.selectPage(e.target.dataset.page), { signal: this.abortController.signal });
        });

        // Device selection
        this.domCache.deviceButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.selectDevice(e.target.dataset.device), { signal: this.abortController.signal });
        });

        // Form inputs with validation
        this.domCache.formInputs.forEach(input => {
            input.addEventListener('input', () => {
                this.validateInput(input);
                this.updatePreview();
            }, { signal: this.abortController.signal });
        });

        // Checkboxes
        this.domCache.checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updatePreview(), { signal: this.abortController.signal });
        });
    }

    // Validate individual input fields
    validateInput(input) {
        const value = input.value;
        const id = input.id;
        
        // Remove existing error styling
        input.classList.remove('validation-error');
        const existingError = input.parentNode.querySelector('.validation-error-message');
        if (existingError) {
            existingError.remove();
        }
        
        try {
            switch (id) {
                case 'siteTitle':
                    ValidationUtils.validateText(value, 'Site Title', 1, 100);
                    break;
                case 'siteSubtitle':
                    ValidationUtils.validateText(value, 'Site Subtitle', 0, 200);
                    break;
                case 'mainContent':
                    ValidationUtils.validateText(value, 'Main Content', 0, 5000);
                    break;
                case 'pageTitle':
                    ValidationUtils.validateText(value, 'Page Title', 0, 100);
                    break;
                case 'pageContent':
                    ValidationUtils.validateText(value, 'Page Content', 0, 5000);
                    break;
                case 'navLinks':
                    ValidationUtils.validateNavLinks(value);
                    break;
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                this.showFieldError(input, error.message);
            }
        }
    }
    
    // Show field-specific validation error
    showFieldError(input, message) {
        input.classList.add('validation-error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'validation-error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.75rem;
            margin-top: 0.25rem;
            display: block;
        `;
        
        input.parentNode.appendChild(errorDiv);
    }

    switchTab(tabName) {
        this.currentTab = tabName;
        
        // Update tab buttons
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });
        
        // Handle special tabs that don't have corresponding nav-tab buttons
        if (tabName === 'pa-media') {
            // Clear all nav-tab active states for PA Media since it doesn't have a nav-tab button
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
        }

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.dataset.tab === tabName);
        });

        // Handle URL Import tab initialization
        if (tabName === 'url-import') {
            this.initURLImportTab();
        }
        
        // Switch preview/canvas view
        const previewFrame = document.getElementById('previewFrame');
        const canvasArea = document.getElementById('canvasArea');
        
        if (tabName === 'components') {
            previewFrame.style.display = 'none';
            canvasArea.style.display = 'block';
            this.renderCanvas();
        } else {
            previewFrame.style.display = 'block';
            canvasArea.style.display = 'none';
            this.updatePreview();
        }
    }

    initURLImportTab() {
        // Initialize the URL Import tab with any necessary setup
        // Clear any previous analysis results
        const resultsDiv = document.getElementById('urlAnalysisResults');
        const loadingDiv = document.getElementById('urlAnalysisLoading');
        const comparisonDiv = document.getElementById('comparisonView');
        
        if (resultsDiv) resultsDiv.style.display = 'none';
        if (loadingDiv) loadingDiv.style.display = 'none';
        if (comparisonDiv) comparisonDiv.style.display = 'none';
        
        // Reset the URL input
        const urlInput = document.getElementById('websiteUrl');
        if (urlInput) {
            urlInput.value = '';
            urlInput.focus();
        }
    }

    // Method to handle extracted data from URL processing
    applyExtractedData(extractedData) {
        if (!extractedData) return;

        // Apply content to form fields
        const titleInput = document.getElementById('siteTitle');
        const subtitleInput = document.getElementById('siteSubtitle');
        const contentInput = document.getElementById('mainContent');
        const navInput = document.getElementById('navLinks');

        if (titleInput && extractedData.title) {
            titleInput.value = extractedData.title;
        }

        if (subtitleInput && extractedData.description) {
            subtitleInput.value = extractedData.description.substring(0, 100);
        }

        if (contentInput && extractedData.content && extractedData.content.length > 0) {
            const contentText = extractedData.content
                .map(item => item.text)
                .join('\n\n')
                .substring(0, 400);
            contentInput.value = contentText;
        }

        if (navInput && extractedData.navigation && extractedData.navigation.length > 0) {
            const navText = extractedData.navigation
                .slice(0, 6)
                .map(nav => nav.text)
                .join('\n');
            navInput.value = navText;
        }

        // Apply suggested style
        if (extractedData.styleAnalysis && extractedData.styleAnalysis.style) {
            this.selectStyle(extractedData.styleAnalysis.style);
        }

        // Apply colors if available
        if (extractedData.colors && extractedData.colors.length > 0) {
            const primaryColorInput = document.getElementById('customPrimary');
            const secondaryColorInput = document.getElementById('customSecondary');
            
            if (primaryColorInput && extractedData.colors[0]) {
                primaryColorInput.value = extractedData.colors[0];
            }
            if (secondaryColorInput && extractedData.colors[1]) {
                secondaryColorInput.value = extractedData.colors[1];
            }
        }

        // Update the preview with new data
        this.updatePreview();
    }

    selectStyle(styleName) {
        this.currentStyle = styleName;
        
        // Update UI
        document.querySelectorAll('.style-option').forEach(option => {
            option.classList.toggle('active', option.dataset.style === styleName);
        });

        this.updatePreview();
    }

    selectTemplate(templateName) {
        this.currentTemplate = templateName;
        
        // Update UI
        document.querySelectorAll('.template-option').forEach(option => {
            option.classList.toggle('active', option.dataset.template === templateName);
        });

        this.updatePreview();
    }

    selectPage(pageName) {
        this.currentPage = pageName;
        
        // Update UI
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === pageName);
        });

        // Update page-specific content
        this.updatePageContent(pageName);
        this.updatePreview();
    }

    selectDevice(deviceName) {
        this.currentDevice = deviceName;
        
        // Update UI
        document.querySelectorAll('.device-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.device === deviceName);
        });

        // Update preview container
        const preview = document.getElementById('preview');
        preview.className = `preview ${deviceName}`;
    }

    updatePageContent(pageName) {
        const { pageTitle, pageContent } = this.domCache;

        const pageDefaults = {
            home: {
                title: 'Homepage',
                content: 'Welcome to our homepage. We create professional, modern designs that convert visitors into customers.'
            },
            about: {
                title: 'About Us',
                content: 'Learn about our company, our team, and our mission. We are passionate about creating exceptional digital experiences.'
            },
            services: {
                title: 'Our Services',
                content: 'Discover our comprehensive range of services designed to help your business grow and succeed in the digital world.'
            },
            portfolio: {
                title: 'Portfolio',
                content: 'Explore our latest projects and see how we have helped other businesses achieve their goals.'
            },
            contact: {
                title: 'Contact Us',
                content: 'Get in touch with our team. We would love to hear about your project and discuss how we can help.'
            },
            blog: {
                title: 'Blog',
                content: 'Read our latest insights, tips, and industry news. Stay updated with the latest trends and best practices.'
            }
        };

        if (pageDefaults[pageName]) {
            pageTitle.value = pageDefaults[pageName].title;
            pageContent.value = pageDefaults[pageName].content;
        }
    }

    getFormData() {
        const {
            siteTitle, siteSubtitle, navLinks, mainContent, pageTitle, pageContent,
            colorScheme, fontFamily, includeHero, includeNav, includeFooter, includeSidebar
        } = this.domCache;
        
        const rawData = {
            template: this.currentTemplate,
            style: this.currentStyle,
            page: this.currentPage,
            siteTitle: siteTitle?.value || '',
            siteSubtitle: siteSubtitle?.value || '',
            navLinks: navLinks?.value || '',
            mainContent: mainContent?.value || '',
            pageTitle: pageTitle?.value || '',
            pageContent: pageContent?.value || '',
            colorScheme: colorScheme?.value || 'blue',
            fontFamily: fontFamily?.value || 'sans',
            includeHero: includeHero?.checked || false,
            includeNav: includeNav?.checked || false,
            includeFooter: includeFooter?.checked || false,
            includeSidebar: includeSidebar?.checked || false
        };
        
        // Validate form data
        try {
            return ValidationUtils.validateFormData(rawData);
        } catch (error) {
            ErrorHandler.handle(error, 'getFormData');
            // Return raw data as fallback but log the validation error
            return rawData;
        }
    }

    updatePreview() {
        const data = this.getFormData();
        let html = '';

        // Get colors based on current style and color scheme
        const styleColors = DesignTemplates.styles[data.style]?.colors || DesignTemplates.styles.minimalist.colors;
        const schemeColors = DesignTemplates.colorSchemes[data.colorScheme] || DesignTemplates.colorSchemes.blue;
        
        // Merge colors (scheme overrides style)
        const colors = { ...styleColors, ...schemeColors };

        try {
            if (data.style === 'dashboard' && data.template === 'hero') {
                // Use dashboard layout for dashboard style
                if (!DesignTemplates.dashboardLayouts?.admin) {
                    throw new TemplateError('Dashboard template not found', 'dashboard-admin');
                }
                html = DesignTemplates.dashboardLayouts.admin.generate(data, data.style, colors);
            } else if (data.page !== 'home' && DesignTemplates.pageTemplates[data.page]) {
                // Use page-specific template
                const pageTemplate = DesignTemplates.pageTemplates[data.page];
                if (!pageTemplate) {
                    throw new TemplateError(`Page template not found for ${data.page}`, data.page);
                }
                html = pageTemplate.generate(data, data.style, colors);
            } else {
                // Use regular layout template
                const template = DesignTemplates.layouts[data.template];
                if (!template) {
                    throw new TemplateError(`Layout template not found: ${data.template}`, data.template);
                }
                html = template.generate(data, data.style, colors);
            }

            if (!html || html.trim() === '') {
                throw new TemplateError('Generated template is empty', data.template);
            }

            // Add responsive CSS
            html = this.addResponsiveStyles(html);

            this.domCache.previewFrame.innerHTML = html;
        } catch (error) {
            ErrorHandler.handle(error, 'updatePreview');
            this.domCache.previewFrame.innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;">Unable to generate preview. Please try a different template or check your settings.</div>';
        }
    }

    addResponsiveStyles(html) {
        const responsiveCSS = `
            <style>
                @media (max-width: 768px) {
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                    }
                    
                    div[style*="display: flex"] {
                        flex-direction: column !important;
                        text-align: center !important;
                    }
                    
                    nav ul {
                        flex-direction: column !important;
                        gap: 1rem !important;
                    }
                    
                    div[style*="padding: 3rem"] {
                        padding: 1.5rem !important;
                    }
                    
                    div[style*="padding: 2rem"] {
                        padding: 1rem !important;
                    }
                    
                    h1 {
                        font-size: 2rem !important;
                    }
                    
                    .preview.mobile div[style*="min-height: 100vh"] {
                        min-height: auto !important;
                    }
                }
                
                * {
                    box-sizing: border-box;
                }
            </style>
        `;
        
        return responsiveCSS + html;
    }

    generateCompleteHTML(data, template, colors) {
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.siteTitle}</title>
    <meta name="description" content="${data.siteSubtitle}">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }
        
        a {
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        a:hover {
            opacity: 0.8;
        }
        
        img {
            max-width: 100%;
            height: auto;
        }
        
        button {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        @media (max-width: 768px) {
            div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
            }
            
            div[style*="display: flex"] nav {
                flex-direction: column !important;
            }
            
            div[style*="display: flex"] nav a {
                margin: 0.5rem 0 !important;
            }
            
            div[style*="padding: 3rem"] {
                padding: 1.5rem !important;
            }
            
            div[style*="padding: 2rem"] {
                padding: 1rem !important;
            }
            
            h1 {
                font-size: 2rem !important;
            }
            
            nav ul {
                flex-direction: column !important;
                gap: 1rem !important;
                text-align: center !important;
            }
        }
        
        @media (max-width: 480px) {
            div[style*="padding: 1.5rem"] {
                padding: 1rem !important;
            }
            
            h1 {
                font-size: 1.8rem !important;
            }
            
            h2 {
                font-size: 1.4rem !important;
            }
        }
    </style>
</head>
<body>
    ${template.generate(data, data.style, colors)}
</body>
</html>`;

        return html;
    }
}

// Export and utility functions
function downloadHTML() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    
    // Get colors
    const styleColors = DesignTemplates.styles[data.style]?.colors || DesignTemplates.styles.minimalist.colors;
    const schemeColors = DesignTemplates.colorSchemes[data.colorScheme] || DesignTemplates.colorSchemes.blue;
    const colors = { ...styleColors, ...schemeColors };
    
    let template;
    if (data.style === 'dashboard' && data.template === 'hero') {
        template = DesignTemplates.dashboardLayouts.admin;
    } else if (data.page !== 'home' && DesignTemplates.pageTemplates[data.page]) {
        template = DesignTemplates.pageTemplates[data.page];
    } else {
        template = DesignTemplates.layouts[data.template];
    }
    
    if (!template) return;
    
    const html = generator.generateCompleteHTML(data, template, colors);
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    const filename = `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-${data.style}-${data.template}${data.page !== 'home' ? '-' + data.page : ''}.html`;
    a.download = filename;
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function exportDesign() {
    const format = document.getElementById('exportFormat').value;
    const framework = document.getElementById('cssFramework').value;
    
    switch (format) {
        case 'react':
            exportReactComponents();
            break;
        case 'nextjs':
            exportFramework('nextjs');
            break;
        case 'vue':
            exportVueComponents();
            break;
        case 'nuxtjs':
            exportFramework('nuxtjs');
            break;
        case 'svelte':
            exportFramework('svelte');
            break;
        case 'css':
            exportCSSOnly();
            break;
        case 'tokens':
            exportDesignTokens();
            break;
        default:
            downloadHTML();
    }
}

// Utility function for getting export configuration
function getExportOptions() {
    return {
        minify: document.getElementById('minifyCode')?.checked || false,
        includeComments: document.getElementById('includeComments')?.checked || true
    };
}

// Utility function for handling export errors
function handleExportError(error, framework) {
    ErrorHandler.handle(new ComponentError(`${framework} export failed: ${error.message}`, framework), 'export');
}

// Utility function for common export data preparation
function prepareExportData() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    const colors = getColorsForData(data);
    const fonts = DesignTemplates.fonts[data.fontFamily] || DesignTemplates.fonts.sans;
    
    return { generator, data, colors, fonts };
}

function exportReactComponents() {
    try {
        const { generator, data, colors, fonts } = prepareExportData();
        const options = getExportOptions();
        
        const exportData = ExportPipeline.generateExport(
            'react', 
            generator.canvasComponents, 
            data, 
            colors, 
            fonts,
            options
        );
        
        // Create a ZIP file with all components
        const filename = `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-react-export`;
        createAndDownloadZip(exportData, filename);
    } catch (error) {
        handleExportError(error, 'React');
    }
}

function exportVueComponents() {
    try {
        const { generator, data, colors, fonts } = prepareExportData();
        const options = getExportOptions();
        
        const exportData = ExportPipeline.generateExport(
            'vue', 
            generator.canvasComponents, 
            data, 
            colors, 
            fonts,
            options
        );
        
        const filename = `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-vue-export`;
        createAndDownloadZip(exportData, filename);
    } catch (error) {
        handleExportError(error, 'Vue');
    }
}

function exportCSSOnly() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    
    const styleColors = DesignTemplates.styles[data.style]?.colors || DesignTemplates.styles.minimalist.colors;
    const schemeColors = DesignTemplates.colorSchemes[data.colorScheme] || DesignTemplates.colorSchemes.blue;
    const colors = { ...styleColors, ...schemeColors };
    
    const cssCode = `:root {
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
  --text-color: ${colors.text};
  --background-color: ${colors.background};
  --surface-color: ${colors.surface};
  --border-color: ${colors.border};
  --font-family: ${DesignTemplates.fonts[data.fontFamily].family};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.6;
}

/* Add your custom styles here based on the generated design */`;
    
    const blob = new Blob([cssCode], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-styles.css`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function exportDesignTokens() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    
    // Generate comprehensive design tokens
    const tokens = DesignTokens.generate(data.style, data.colorScheme, data.fontFamily);
    
    // Export in multiple formats
    const formats = [
        {
            name: 'JSON',
            extension: 'json',
            content: JSON.stringify(tokens, null, 2),
            type: 'application/json'
        },
        {
            name: 'CSS',
            extension: 'css',
            content: DesignTokens.exportFormats.css(tokens),
            type: 'text/css'
        },
        {
            name: 'SCSS',
            extension: 'scss',
            content: DesignTokens.exportFormats.scss(tokens),
            type: 'text/scss'
        },
        {
            name: 'JavaScript',
            extension: 'js',
            content: DesignTokens.exportFormats.js(tokens),
            type: 'text/javascript'
        },
        {
            name: 'Tailwind Config',
            extension: 'js',
            content: DesignTokens.exportFormats.tailwind(tokens),
            type: 'text/javascript',
            filename: 'tailwind.config.js'
        }
    ];
    
    // Download all formats
    formats.forEach((format, index) => {
        setTimeout(() => {
            const blob = new Blob([format.content], { type: format.type });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = format.filename || `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-tokens.${format.extension}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, index * 300);
    });
}

function exportMultiPageZip() {
    // This would require a zip library - for now, just download the current page
    downloadHTML();
    alert('Multi-page ZIP export coming soon! For now, download individual pages.');
}

function saveTemplate() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    
    const template = {
        name: `${data.siteTitle} Template`,
        style: data.style,
        template: data.template,
        data: data,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem(`template_${Date.now()}`, JSON.stringify(template));
    alert('Template saved successfully!');
}

function resetForm() {
    document.getElementById('siteTitle').value = 'Your Brand';
    document.getElementById('siteSubtitle').value = 'Creating beautiful experiences';
    document.getElementById('navLinks').value = 'Home\nAbout\nServices\nContact';
    document.getElementById('mainContent').value = 'Welcome to our professional homepage. We create modern, responsive designs that focus on user experience and conversion.';
    document.getElementById('colorScheme').value = 'blue';
    document.getElementById('fontFamily').value = 'sans';
    
    // Reset selections
    document.querySelectorAll('.style-option').forEach(option => {
        option.classList.toggle('active', option.dataset.style === 'minimalist');
    });
    
    document.querySelectorAll('.template-option').forEach(option => {
        option.classList.toggle('active', option.dataset.template === 'hero');
    });
    
    window.designGenerator.currentStyle = 'minimalist';
    window.designGenerator.currentTemplate = 'hero';
    window.designGenerator.updatePreview();
}

// Component management functions
function editComponent(componentId) {
    const generator = window.designGenerator;
    const componentInstance = generator.canvasComponents.find(c => c.id === componentId);
    if (!componentInstance) return;

    const component = ComponentLibrary.components[componentInstance.type];
    if (!component) return;

    generator.selectedComponent = componentInstance;
    
    // Show component editor
    const editor = document.getElementById('componentEditor');
    const editorTitle = document.getElementById('editorTitle');
    const componentProps = document.getElementById('componentProps');
    
    editorTitle.textContent = `Edit ${component.name}`;
    editor.classList.add('active');
    
    // Render property editors
    let propsHtml = '';
    if (component.props) {
        Object.keys(component.props).forEach(propKey => {
            const prop = component.props[propKey];
            const currentValue = componentInstance.props[propKey] || prop.default;
            
            propsHtml += `
                <div class="prop-group">
                    <label class="prop-label" for="prop_${propKey}">${propKey}</label>
                    ${prop.type === 'textarea' ? 
                        `<textarea id="prop_${propKey}" rows="3">${currentValue}</textarea>` :
                        `<input type="text" id="prop_${propKey}" value="${currentValue}">`
                    }
                </div>
            `;
        });
    }
    
    componentProps.innerHTML = propsHtml;
}

function closeComponentEditor() {
    const editor = document.getElementById('componentEditor');
    editor.classList.remove('active');
    window.designGenerator.selectedComponent = null;
}

function updateComponent() {
    const generator = window.designGenerator;
    if (!generator.selectedComponent) return;

    const component = ComponentLibrary.components[generator.selectedComponent.type];
    if (!component || !component.props) return;

    // Update component props from form
    Object.keys(component.props).forEach(propKey => {
        const input = document.getElementById(`prop_${propKey}`);
        if (input) {
            generator.selectedComponent.props[propKey] = input.value;
        }
    });

    // Re-render canvas
    generator.renderCanvas();
    closeComponentEditor();
}

function duplicateComponent(componentId) {
    const generator = window.designGenerator;
    const componentInstance = generator.canvasComponents.find(c => c.id === componentId);
    if (!componentInstance) return;

    const duplicate = {
        id: Date.now().toString(),
        type: componentInstance.type,
        props: { ...componentInstance.props }
    };

    generator.canvasComponents.push(duplicate);
    generator.renderCanvas();
}

function deleteComponent(componentId) {
    const generator = window.designGenerator;
    generator.canvasComponents = generator.canvasComponents.filter(c => c.id !== componentId);
    generator.renderCanvas();
    
    if (generator.canvasComponents.length === 0) {
        generator.showDropZone();
    }
}

function clearCanvas() {
    const generator = window.designGenerator;
    generator.canvasComponents = [];
    generator.renderCanvas();
    generator.showDropZone();
    closeComponentEditor();
}

function saveComponents() {
    const generator = window.designGenerator;
    const layout = {
        name: `Layout ${Date.now()}`,
        components: generator.canvasComponents,
        style: generator.currentStyle,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem(`layout_${Date.now()}`, JSON.stringify(layout));
    alert('Layout saved successfully!');
}

// Utility functions for export system
function getColorsForData(data) {
    const styleColors = DesignTemplates.styles[data.style]?.colors || DesignTemplates.styles.minimalist.colors;
    const schemeColors = DesignTemplates.colorSchemes[data.colorScheme] || DesignTemplates.colorSchemes.blue;
    return { ...styleColors, ...schemeColors };
}

function createAndDownloadZip(exportData, filename) {
    // Simple file download for now - in a real implementation, you'd use JSZip
    // For now, download the main component file
    if (exportData.main) {
        const blob = new Blob([exportData.main.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = exportData.main.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Also download CSS if available
        if (exportData.styles) {
            setTimeout(() => {
                const cssBlob = new Blob([exportData.styles.content], { type: 'text/css' });
                const cssUrl = URL.createObjectURL(cssBlob);
                const cssA = document.createElement('a');
                cssA.href = cssUrl;
                cssA.download = exportData.styles.filename;
                document.body.appendChild(cssA);
                cssA.click();
                document.body.removeChild(cssA);
                URL.revokeObjectURL(cssUrl);
            }, 500);
        }
        
        // Download design tokens
        if (exportData.tokens) {
            setTimeout(() => {
                const tokensBlob = new Blob([exportData.tokens.content], { type: 'application/json' });
                const tokensUrl = URL.createObjectURL(tokensBlob);
                const tokensA = document.createElement('a');
                tokensA.href = tokensUrl;
                tokensA.download = exportData.tokens.filename;
                document.body.appendChild(tokensA);
                tokensA.click();
                document.body.removeChild(tokensA);
                URL.revokeObjectURL(tokensUrl);
            }, 1000);
        }
    }
}

// Enhanced export with Next.js and Nuxt.js support
function exportFramework(framework) {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    const colors = getColorsForData(data);
    const fonts = DesignTemplates.fonts[data.fontFamily] || DesignTemplates.fonts.sans;
    
    try {
        const exportData = ExportPipeline.generateExport(
            framework, 
            generator.canvasComponents, 
            data, 
            colors, 
            fonts,
            {
                minify: document.getElementById('minifyCode')?.checked || false,
                includeComments: document.getElementById('includeComments')?.checked || true
            }
        );
        
        createAndDownloadZip(exportData, `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-${framework}-export`);
    } catch (error) {
        console.error('Export failed:', error);
        alert(`${framework} export failed. Please try again.`);
    }
}

// AI Content Generation Functions
function generateAIContent() {
    const industry = document.getElementById('aiIndustry').value;
    const contentType = document.getElementById('contentType').value;
    const keywords = document.getElementById('aiKeywords').value.split(',').map(k => k.trim()).filter(k => k);
    
    const content = AIContentGenerator.generateContent(industry, contentType, { keywords });
    
    const resultDiv = document.getElementById('aiContentResult');
    const contentDiv = document.getElementById('aiContentText');
    
    if (content) {
        if (typeof content === 'object') {
            // Create safe HTML for object display
            const safeEntries = Object.entries(content).map(([key, value]) => {
                const safeKey = SecurityUtils.sanitizeHTML(String(key));
                const safeValue = SecurityUtils.sanitizeHTML(String(value));
                return `<strong>${safeKey}:</strong> ${safeValue}`;
            }).join('<br><br>');
            contentDiv.innerHTML = safeEntries;
        } else {
            // Use textContent for plain strings to prevent XSS
            SecurityUtils.setContent(contentDiv, content);
        }
        resultDiv.style.display = 'block';
        
        // Store for later application
        window.lastGeneratedContent = content;
    }
}

function applyAIContent() {
    const content = window.lastGeneratedContent;
    if (!content) return;
    
    // Apply to currently selected component or form fields
    if (window.designGenerator.selectedComponent) {
        // Apply to selected component
        Object.keys(content).forEach(key => {
            if (window.designGenerator.selectedComponent.props[key] !== undefined) {
                window.designGenerator.selectedComponent.props[key] = content[key];
            }
        });
        window.designGenerator.renderCanvas();
        closeComponentEditor();
    } else {
        // Apply to main form fields
        if (content.title) document.getElementById('siteTitle').value = content.title;
        if (content.subtitle) document.getElementById('siteSubtitle').value = content.subtitle;
        if (content.mainContent) document.getElementById('mainContent').value = content.mainContent;
        window.designGenerator.updatePreview();
    }
    
    alert('AI content applied successfully!');
}

function optimizeContent() {
    const content = document.getElementById('contentToOptimize').value;
    if (!content.trim()) {
        alert('Please enter content to analyze');
        return;
    }
    
    const suggestions = AIContentGenerator.suggestImprovements(content, {});
    const resultsDiv = document.getElementById('optimizationResults');
    
    let html = '<h3 style="color: #374151; margin-bottom: 1rem;">Optimization Suggestions:</h3>';
    
    if (suggestions.length === 0) {
        html += '<p style="color: #10b981;">✅ Your content looks great! No major improvements needed.</p>';
    } else {
        suggestions.forEach(suggestion => {
            html += `
                <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
                    <h4 style="color: #92400e; margin-bottom: 0.5rem;">${suggestion.type.toUpperCase()}</h4>
                    <p style="color: #92400e; margin-bottom: 0.5rem; font-size: 0.9rem;">${suggestion.message}</p>
                    <p style="color: #92400e; font-size: 0.85rem;"><strong>Suggestion:</strong> ${suggestion.suggestion}</p>
                </div>
            `;
        });
    }
    
    resultsDiv.innerHTML = html;
    resultsDiv.style.display = 'block';
}

// Animation Functions
function previewAnimations() {
    const preset = document.getElementById('animationPreset').value;
    const transition = document.getElementById('pageTransition').value;
    
    // Apply preview animation to preview area
    const previewFrame = document.getElementById('previewFrame');
    const canvasArea = document.getElementById('canvasArea');
    
    const activeArea = window.designGenerator.currentTab === 'components' ? canvasArea : previewFrame;
    
    // Remove existing animation classes
    activeArea.classList.remove('animate-fade-in', 'animate-slide-in-up', 'animate-scale-in');
    
    // Add selected animation
    setTimeout(() => {
        activeArea.classList.add(`animate-${transition.replace(/([A-Z])/g, '-$1').toLowerCase()}`);
    }, 50);
    
    // Update stagger value display
    const staggerValue = document.getElementById('staggerDelay').value;
    document.getElementById('staggerValue').textContent = staggerValue + 'ms';
}

function applyAnimations() {
    const preset = document.getElementById('animationPreset').value;
    const animateButtons = document.getElementById('animateButtons').checked;
    const animateCards = document.getElementById('animateCards').checked;
    const animateInputs = document.getElementById('animateInputs').checked;
    const animateNavigation = document.getElementById('animateNavigation').checked;
    const animateScrolling = document.getElementById('animateScrolling').checked;
    
    // Generate and inject animation CSS
    const animationCSS = AnimationSystem.generateCSS();
    
    // Remove existing animation styles
    const existingStyle = document.getElementById('animationStyles');
    if (existingStyle) existingStyle.remove();
    
    // Add new animation styles
    const styleElement = document.createElement('style');
    styleElement.id = 'animationStyles';
    styleElement.textContent = animationCSS;
    document.head.appendChild(styleElement);
    
    // Apply animations to current design
    if (window.designGenerator.currentTab === 'components') {
        window.designGenerator.canvasComponents.forEach(component => {
            // Apply animations based on component type and user selections
            // This would be implemented based on component types
        });
        window.designGenerator.renderCanvas();
    }
    
    alert('Animations applied successfully!');
}

// Accessibility Functions
function runAccessibilityAudit() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    const colors = getColorsForData(data);
    
    let htmlContent = '';
    if (generator.currentTab === 'components' && generator.canvasComponents.length > 0) {
        // Audit canvas content
        htmlContent = document.getElementById('canvasComponents').innerHTML;
    } else {
        // Audit preview content
        htmlContent = document.getElementById('previewFrame').innerHTML;
    }
    
    const auditResults = AccessibilityAuditor.auditDesign(htmlContent, { colors });
    
    // Display score
    const scoreDiv = document.getElementById('accessibilityScore');
    const scoreColor = auditResults.score.percentage >= 85 ? '#10b981' : auditResults.score.percentage >= 70 ? '#f59e0b' : '#ef4444';
    const safeDescription = SecurityUtils.sanitizeHTML(auditResults.compliance.description);
    scoreDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem; color: ${scoreColor};">
            ${parseInt(auditResults.score.percentage)}%
        </div>
        <div style="font-weight: 600; color: #374151;">Accessibility Score</div>
        <div style="font-size: 0.875rem; color: #6b7280;">${safeDescription}</div>
    `;
    
    // Display compliance level
    const complianceDiv = document.getElementById('complianceLevel');
    const level = auditResults.compliance.level;
    const bgColor = level === 'AAA' ? '#d1fae5' : level === 'AA' ? '#dbeafe' : '#fee2e2';
    const borderColor = level === 'AAA' ? '#10b981' : level === 'AA' ? '#3b82f6' : '#ef4444';
    const textColor = level === 'AAA' ? '#065f46' : level === 'AA' ? '#1e40af' : '#991b1b';
    const safeLevel = SecurityUtils.sanitizeHTML(level);
    const safeComplianceDesc = SecurityUtils.sanitizeHTML(auditResults.compliance.description);
    
    complianceDiv.innerHTML = `
        <div style="background: ${bgColor}; 
                    border: 1px solid ${borderColor}; 
                    border-radius: 0.5rem; padding: 1rem; text-align: center;">
            <div style="font-size: 1.5rem; font-weight: bold; color: ${textColor};">
                WCAG ${safeLevel}
            </div>
            <div style="color: ${textColor};">
                ${safeComplianceDesc}
            </div>
        </div>
    `;
    
    // Display issues
    const issuesDiv = document.getElementById('accessibilityIssues');
    if (auditResults.issues.length === 0) {
        issuesDiv.innerHTML = '<p style="color: #10b981;">✅ No accessibility issues found!</p>';
    } else {
        let issuesHTML = '<h3 style="color: #374151; margin-bottom: 1rem;">Issues Found:</h3>';
        auditResults.issues.forEach(issue => {
            const severityColor = issue.severity === 'error' ? '#ef4444' : '#f59e0b';
            const safeSeverity = SecurityUtils.sanitizeHTML(String(issue.severity));
            const safeType = SecurityUtils.sanitizeHTML(String(issue.type));
            const safeMessage = SecurityUtils.sanitizeHTML(String(issue.message));
            const safeElement = issue.element ? SecurityUtils.sanitizeHTML(String(issue.element)) : '';
            const safeSuggestion = SecurityUtils.sanitizeHTML(String(issue.suggestion));
            const safeWcag = SecurityUtils.sanitizeHTML(String(issue.wcag));
            
            issuesHTML += `
                <div style="background: #fef2f2; border-left: 4px solid ${severityColor}; padding: 1rem; margin-bottom: 1rem; border-radius: 0 0.5rem 0.5rem 0;">
                    <div style="font-weight: 600; color: ${severityColor}; margin-bottom: 0.5rem;">
                        ${safeSeverity.toUpperCase()}: ${safeType}
                    </div>
                    <div style="color: #374151; font-size: 0.9rem; margin-bottom: 0.5rem;">${safeMessage}</div>
                    ${safeElement ? `<div style="color: #6b7280; font-size: 0.8rem; margin-bottom: 0.5rem;">Element: ${safeElement}</div>` : ''}
                    <div style="color: #059669; font-size: 0.85rem;">💡 ${safeSuggestion}</div>
                    <div style="color: #6b7280; font-size: 0.75rem; margin-top: 0.5rem;">WCAG ${safeWcag} Level</div>
                </div>
            `;
        });
        issuesDiv.innerHTML = issuesHTML;
    }
    
    // Display suggestions
    const suggestionsDiv = document.getElementById('accessibilitySuggestions');
    if (auditResults.suggestions.length > 0) {
        let suggestionsHTML = '<h3 style="color: #374151; margin-bottom: 1rem;">Improvement Suggestions:</h3>';
        auditResults.suggestions.forEach(suggestion => {
            const safeTitle = SecurityUtils.sanitizeHTML(String(suggestion.title));
            const safeDescription = SecurityUtils.sanitizeHTML(String(suggestion.description));
            const safeActions = suggestion.actions.map(action => `<li>${SecurityUtils.sanitizeHTML(String(action))}</li>`).join('');
            
            suggestionsHTML += `
                <div style="background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
                    <h4 style="color: #0c4a6e; margin-bottom: 0.5rem;">${safeTitle}</h4>
                    <p style="color: #0c4a6e; margin-bottom: 0.5rem; font-size: 0.9rem;">${safeDescription}</p>
                    <ul style="color: #0c4a6e; font-size: 0.85rem; margin-left: 1.5rem;">
                        ${safeActions}
                    </ul>
                </div>
            `;
        });
        suggestionsDiv.innerHTML = suggestionsHTML;
    }
    
    // Store results for later use
    window.lastAccessibilityResults = auditResults;
    
    // Show results
    document.getElementById('accessibilityResults').style.display = 'block';
}

function fixAccessibilityIssues() {
    const results = window.lastAccessibilityResults;
    if (!results) {
        alert('Please run an accessibility audit first');
        return;
    }
    
    const generator = window.designGenerator;
    let htmlContent = '';
    
    if (generator.currentTab === 'components' && generator.canvasComponents.length > 0) {
        htmlContent = document.getElementById('canvasComponents').innerHTML;
    } else {
        htmlContent = document.getElementById('previewFrame').innerHTML;
    }
    
    const fixedHTML = AccessibilityAuditor.generateFixes(htmlContent, results.issues);
    
    // Apply fixes
    if (generator.currentTab === 'components') {
        document.getElementById('canvasComponents').innerHTML = fixedHTML;
    } else {
        document.getElementById('previewFrame').innerHTML = fixedHTML;
    }
    
    alert('Auto-fix applied! Please run audit again to see improvements.');
}

function exportAccessibilityReport() {
    const results = window.lastAccessibilityResults;
    if (!results) {
        alert('Please run an accessibility audit first');
        return;
    }
    
    const data = window.designGenerator.getFormData();
    const report = `
# Accessibility Audit Report
Generated: ${new Date().toLocaleDateString()}
Project: ${data.siteTitle}

## Overall Score: ${results.score.percentage}%
**Compliance Level:** WCAG ${results.compliance.level}
**Status:** ${results.compliance.description}

## Issues Found (${results.issues.length})
${results.issues.map(issue => `
### ${issue.severity.toUpperCase()}: ${issue.type}
- **Message:** ${issue.message}
- **Element:** ${issue.element || 'N/A'}
- **Suggestion:** ${issue.suggestion}
- **WCAG Level:** ${issue.wcag}
`).join('\n')}

## Recommendations
${results.suggestions.map(suggestion => `
### ${suggestion.title}
${suggestion.description}

**Actions:**
${suggestion.actions.map(action => `- ${action}`).join('\n')}
`).join('\n')}

---
Report generated by Design Generator Pro
    `;
    
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-accessibility-report.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Update stagger delay display
document.addEventListener('DOMContentLoaded', function() {
    const staggerSlider = document.getElementById('staggerDelay');
    if (staggerSlider) {
        staggerSlider.addEventListener('input', function() {
            document.getElementById('staggerValue').textContent = this.value + 'ms';
        });
    }
});

// Claude Code Integration Functions
function generateClaudePrompt() {
    const promptType = document.getElementById('claudePromptType').value;
    const targetFramework = document.getElementById('targetFramework').value;
    const exportFormat = document.getElementById('exportFormat').value;
    
    // Get current design configuration
    const currentStyle = window.designGenerator.currentStyle;
    const currentTemplate = window.designGenerator.currentTemplate;
    const currentPage = window.designGenerator.currentPage;
    
    // Get form values
    const siteTitle = document.getElementById('siteTitle').value || 'Your Website';
    const siteSubtitle = document.getElementById('siteSubtitle').value || 'Professional website description';
    const mainContent = document.getElementById('mainContent').value || 'Your main content here';
    
    const prompts = {
        convert: {
            react: `Convert this ${currentStyle} ${currentTemplate} design to React components with TypeScript:

**Design Specifications:**
- Style: ${currentStyle.charAt(0).toUpperCase() + currentStyle.slice(1)}
- Layout: ${currentTemplate.charAt(0).toUpperCase() + currentTemplate.slice(1)}
- Page Type: ${currentPage}
- Title: "${siteTitle}"
- Subtitle: "${siteSubtitle}"

**Requirements:**
- Use TypeScript for all components
- Implement responsive design with Tailwind CSS
- Create reusable component structure
- Include proper props interfaces
- Add hover states and smooth transitions
- Ensure accessibility compliance
- Export as production-ready components

**Key Features to Include:**
- Navigation with active states
- Hero section with call-to-action
- Responsive grid layouts
- Modern card components
- Footer with links

Please create a complete component library that matches this design style and is ready for production use.`,

            nextjs: `Create a Next.js application based on this ${currentStyle} design:

**Project Setup:**
- Next.js 14 with App Router
- TypeScript configuration
- Tailwind CSS for styling
- Component organization

**Design Details:**
- Style: ${currentStyle}
- Layout: ${currentTemplate}
- Title: "${siteTitle}"
- Subtitle: "${siteSubtitle}"
- Content: "${mainContent}"

**Structure Needed:**
- app/layout.tsx with metadata
- app/page.tsx for homepage
- components/ directory with reusable components
- styles/ directory with global styles
- Responsive design for all devices

**Components to Create:**
- Header with navigation
- Hero section
- Content sections
- Footer
- SEO metadata

Generate a complete, production-ready Next.js application that implements this design.`,

            vue: `Convert this design to Vue.js 3 components using Composition API:

**Design Configuration:**
- Style: ${currentStyle}
- Layout: ${currentTemplate}
- Framework: Vue 3 + TypeScript
- CSS: Tailwind CSS

**Content:**
- Site Title: "${siteTitle}"
- Subtitle: "${siteSubtitle}"
- Main Content: "${mainContent}"

**Requirements:**
- Use Composition API with <script setup>
- TypeScript for type safety
- Single File Components (SFC)
- Responsive design
- Modern Vue patterns

**Components Needed:**
- AppHeader.vue
- HeroSection.vue
- ContentSection.vue
- AppFooter.vue
- Main layout component

Create a complete Vue.js application with proper component structure, routing, and styling.`
        },
        
        enhance: {
            react: `I have an existing React project and want to enhance it with this ${currentStyle} design style:

**Current Project Enhancement:**
- Apply ${currentStyle} design system to existing components
- Update color scheme and typography
- Implement ${currentTemplate} layout pattern
- Maintain existing functionality

**Design Elements to Apply:**
- Modern ${currentStyle} styling
- Responsive ${currentTemplate} layout
- Professional color palette
- Clean typography system

**Please:**
1. Analyze my existing component structure
2. Update styling to match this design
3. Ensure consistency across all components
4. Maintain existing props and functionality
5. Add any missing responsive breakpoints

Focus on enhancing the visual design while preserving all existing functionality.`,

            generic: `Enhance my existing ${targetFramework} project with this design system:

**Design Style:** ${currentStyle}
**Layout Pattern:** ${currentTemplate}
**Target Framework:** ${targetFramework}

**Enhancement Goals:**
- Apply professional ${currentStyle} styling
- Implement responsive ${currentTemplate} layout
- Update color scheme and typography
- Improve user interface consistency

Please help me integrate this design into my existing codebase while maintaining current functionality.`
        },

        integrate: {
            generic: `I want to integrate this ${currentStyle} design pattern into my existing codebase:

**Integration Requirements:**
- Framework: ${targetFramework}
- Design Style: ${currentStyle}
- Layout Pattern: ${currentTemplate}
- Export Format: ${exportFormat}

**Design Details:**
- Title: "${siteTitle}"
- Subtitle: "${siteSubtitle}"

**Integration Approach:**
1. Analyze my current project structure
2. Create new components based on this design
3. Ensure compatibility with existing code
4. Provide migration guide for gradual adoption

Please help me seamlessly integrate these design elements without breaking existing functionality.`
        },

        customize: {
            generic: `Customize this ${currentStyle} design template for my specific needs:

**Base Design:**
- Style: ${currentStyle}
- Layout: ${currentTemplate}
- Framework: ${targetFramework}

**Current Content:**
- Title: "${siteTitle}"
- Subtitle: "${siteSubtitle}"
- Content: "${mainContent}"

**Customization Requests:**
- Modify colors to match my brand
- Adjust layout for my content type
- Add specific components I need
- Optimize for my target audience

Please help me customize this template to perfectly fit my project requirements while maintaining the professional design quality.`
        }
    };
    
    // Generate the prompt
    let prompt = '';
    
    if (prompts[promptType] && prompts[promptType][targetFramework]) {
        prompt = prompts[promptType][targetFramework];
    } else if (prompts[promptType] && prompts[promptType].generic) {
        prompt = prompts[promptType].generic;
    } else {
        prompt = prompts[promptType][Object.keys(prompts[promptType])[0]];
    }
    
    // Add footer with design generator context
    prompt += `\n\n**Generated by Homepage Design Generator Pro**
This prompt was created from a ${currentStyle} ${currentTemplate} design template. 
You can reference the original design files if needed for additional context.`;
    
    // Display the prompt
    document.getElementById('claudePromptText').value = prompt;
    document.getElementById('claudePromptOutput').style.display = 'block';
}

function copyClaudePrompt() {
    const promptText = document.getElementById('claudePromptText');
    promptText.select();
    document.execCommand('copy');
    
    // Visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '✅ Copied!';
    button.style.background = '#059669';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '#10b981';
    }, 2000);
}

// Global event cleanup controller
const globalEventController = new AbortController();

// Global cleanup function
function cleanupAllEventListeners() {
    globalEventController.abort();
    if (window.designGenerator) {
        window.designGenerator.destroy();
    }
}

// Theme Management Functions
function initThemeSystem() {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('designGeneratorTheme') || 'light';
    const themeToggle = document.querySelector(`input[name="themeMode"][value="${savedTheme}"]`);
    if (themeToggle) {
        themeToggle.checked = true;
    }
    
    // Apply initial theme
    applyTheme(savedTheme);
    
    // Theme toggle event listeners
    document.querySelectorAll('input[name="themeMode"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const theme = this.value;
            applyTheme(theme);
            localStorage.setItem('designGeneratorTheme', theme);
            window.designGenerator.updatePreview();
        }, { signal: globalEventController.signal });
    });
}

function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'auto') {
        // Use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme = prefersDark ? 'dark' : 'light';
    }
    
    if (theme === 'dark') {
        root.classList.add('dark-theme');
        // Update color scheme to dark
        document.getElementById('colorScheme').value = 'dark';
    } else {
        root.classList.remove('dark-theme');
        // Revert to previous color scheme if not dark
        const currentScheme = document.getElementById('colorScheme').value;
        if (currentScheme === 'dark') {
            document.getElementById('colorScheme').value = 'blue';
        }
    }
}

// Brand Color Extraction Functions
function initBrandColorTools() {
    const logoUpload = document.getElementById('logoUpload');
    if (logoUpload) {
        logoUpload.addEventListener('change', handleLogoUpload, { signal: globalEventController.signal });
    }
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (!file || !file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        extractColorsFromImage(e.target.result);
    };
    reader.readAsDataURL(file);
}

function extractColorsFromImage(imageSrc) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function() {
        // Resize for faster processing
        const maxSize = 100;
        const scale = Math.min(maxSize / img.width, maxSize / img.height);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const colors = getImageColors(imageData);
        displayExtractedColors(colors);
    };
    
    img.src = imageSrc;
}

function getImageColors(imageData) {
    const pixels = imageData.data;
    const colorMap = new Map();
    
    // Sample pixels (every 4th pixel for performance)
    for (let i = 0; i < pixels.length; i += 16) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];
        
        // Skip transparent and very light/dark pixels
        if (a < 128 || (r > 240 && g > 240 && b > 240) || (r < 15 && g < 15 && b < 15)) {
            continue;
        }
        
        // Quantize colors to reduce similar variations
        const quantizedR = Math.round(r / 32) * 32;
        const quantizedG = Math.round(g / 32) * 32;
        const quantizedB = Math.round(b / 32) * 32;
        
        const colorKey = `${quantizedR},${quantizedG},${quantizedB}`;
        colorMap.set(colorKey, (colorMap.get(colorKey) || 0) + 1);
    }
    
    // Sort by frequency and get top colors
    const sortedColors = Array.from(colorMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([color, count]) => {
            const [r, g, b] = color.split(',').map(Number);
            return {
                rgb: `rgb(${r}, ${g}, ${b})`,
                hex: rgbToHex(r, g, b),
                count
            };
        });
    
    return sortedColors;
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
}

function displayExtractedColors(colors) {
    const extractedColors = document.getElementById('extractedColors');
    const colorPalette = document.getElementById('colorPalette');
    
    let html = '';
    colors.forEach((color, index) => {
        html += `
            <div class="color-swatch" 
                 style="background-color: ${color.hex}" 
                 data-color="${color.hex}"
                 data-index="${index}"
                 onclick="selectExtractedColor(this)">
                <div class="color-info">${color.hex}</div>
            </div>
        `;
    });
    
    colorPalette.innerHTML = html;
    extractedColors.style.display = 'block';
    
    // Store colors for later use
    window.extractedColorPalette = colors;
}

function selectExtractedColor(element) {
    // Remove previous selection
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.classList.remove('selected');
    });
    
    // Select this color
    element.classList.add('selected');
    window.selectedExtractedColor = element.dataset.color;
}

function applyExtractedColors() {
    if (!window.extractedColorPalette) {
        alert('Please extract colors from a logo first');
        return;
    }
    
    const colors = window.extractedColorPalette;
    if (colors.length >= 2) {
        // Apply the two most prominent colors
        document.getElementById('customPrimary').value = colors[0].hex;
        document.getElementById('customSecondary').value = colors[1].hex;
        applyCustomColors();
    }
}

function applyCustomColors() {
    const primary = document.getElementById('customPrimary').value;
    const secondary = document.getElementById('customSecondary').value;
    
    if (!primary || !secondary) {
        alert('Please select both primary and secondary colors');
        return;
    }
    
    // Create custom color scheme
    const customScheme = {
        primary: primary,
        secondary: secondary,
        background: '#ffffff',
        surface: '#f8fafc',
        text: '#1f2937',
        accent: lightenColor(primary, 20)
    };
    
    // Apply to design
    applyColorScheme(customScheme);
    window.designGenerator.updatePreview();
    
    alert('Custom colors applied successfully!');
}

function lightenColor(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function applyColorScheme(scheme) {
    const root = document.documentElement;
    Object.entries(scheme).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
    });
}

// Template Marketplace Functions
function initTemplateMarketplace() {
    loadTemplateLibrary();
}

function saveCurrentTemplate() {
    const templateName = prompt('Enter a name for this template:');
    if (!templateName) return;
    
    const currentDesign = {
        name: templateName,
        style: window.designGenerator.currentStyle,
        template: window.designGenerator.currentTemplate,
        page: window.designGenerator.currentPage,
        content: {
            siteTitle: document.getElementById('siteTitle').value,
            siteSubtitle: document.getElementById('siteSubtitle').value,
            navLinks: document.getElementById('navLinks').value,
            mainContent: document.getElementById('mainContent').value,
        },
        styling: {
            colorScheme: document.getElementById('colorScheme').value,
            fontFamily: document.getElementById('fontFamily').value,
            themeMode: document.querySelector('input[name="themeMode"]:checked')?.value || 'light'
        },
        components: window.designGenerator.canvasComponents || [],
        created: new Date().toISOString(),
        category: determineCategory(window.designGenerator.currentStyle),
        tags: generateTags(window.designGenerator.currentStyle, window.designGenerator.currentTemplate),
        preview: generateTemplatePreview()
    };
    
    // Save to localStorage
    const savedTemplates = JSON.parse(localStorage.getItem('designTemplates') || '[]');
    savedTemplates.push(currentDesign);
    localStorage.setItem('designTemplates', JSON.stringify(savedTemplates));
    
    alert(`Template "${templateName}" saved successfully!`);
    loadTemplateLibrary();
}

function determineCategory(style) {
    const categoryMap = {
        'minimalist': 'portfolio',
        'dashboard': 'dashboard',
        'corporate': 'business',
        'creative': 'creative',
        'tech': 'landing',
        'ecommerce': 'ecommerce'
    };
    return categoryMap[style] || 'business';
}

function generateTags(style, template) {
    const styleTags = {
        'minimalist': ['clean', 'simple', 'modern'],
        'dashboard': ['admin', 'data', 'management'],
        'corporate': ['professional', 'business', 'enterprise'],
        'creative': ['artistic', 'portfolio', 'design'],
        'tech': ['startup', 'saas', 'technology'],
        'ecommerce': ['shop', 'store', 'products']
    };
    
    const templateTags = {
        'hero': ['landing', 'header', 'cta'],
        'centered': ['focused', 'minimal', 'content'],
        'sidebar': ['navigation', 'organized', 'structured'],
        'grid': ['cards', 'gallery', 'layout'],
        'split': ['comparison', 'features', 'divided']
    };
    
    return [...(styleTags[style] || []), ...(templateTags[template] || [])];
}

function generateTemplatePreview() {
    // Generate a simple preview representation
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 120;
    const ctx = canvas.getContext('2d');
    
    // Simple preview drawing
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, 200, 120);
    
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(10, 10, 180, 20);
    
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(10, 40, 180, 10);
    ctx.fillRect(10, 60, 120, 10);
    
    return canvas.toDataURL();
}

function loadTemplateLibrary() {
    const savedTemplates = JSON.parse(localStorage.getItem('designTemplates') || '[]');
    const templateGrid = document.getElementById('templateGrid');
    
    if (!templateGrid) return;
    
    // Add default templates
    const defaultTemplates = getDefaultTemplates();
    const allTemplates = [...defaultTemplates, ...savedTemplates];
    
    renderTemplates(allTemplates);
}

function getDefaultTemplates() {
    return [
        {
            name: 'Modern Landing Page',
            style: 'minimalist',
            template: 'hero',
            category: 'landing',
            tags: ['modern', 'clean', 'landing'],
            created: '2024-01-01T00:00:00.000Z',
            isDefault: true,
            description: 'Clean, modern landing page perfect for startups and products'
        },
        {
            name: 'Corporate Dashboard',
            style: 'dashboard',
            template: 'sidebar',
            category: 'dashboard',
            tags: ['corporate', 'admin', 'data'],
            created: '2024-01-01T00:00:00.000Z',
            isDefault: true,
            description: 'Professional dashboard template for business applications'
        },
        {
            name: 'Creative Portfolio',
            style: 'creative',
            template: 'grid',
            category: 'portfolio',
            tags: ['creative', 'portfolio', 'artistic'],
            created: '2024-01-01T00:00:00.000Z',
            isDefault: true,
            description: 'Artistic portfolio template for creative professionals'
        },
        {
            name: 'Business Homepage',
            style: 'corporate',
            template: 'hero',
            category: 'business',
            tags: ['business', 'professional', 'corporate'],
            created: '2024-01-01T00:00:00.000Z',
            isDefault: true,
            description: 'Professional business homepage with corporate styling'
        }
    ];
}

function renderTemplates(templates) {
    const templateGrid = document.getElementById('templateGrid');
    if (!templateGrid) return;
    
    if (templates.length === 0) {
        templateGrid.innerHTML = '<p style="text-align: center; color: #6b7280; grid-column: 1 / -1;">No templates found. Create your first template!</p>';
        return;
    }
    
    let html = '';
    templates.forEach((template, index) => {
        html += `
            <div class="template-card" onclick="showTemplateModal(${index})">
                <div class="template-preview">
                    ${template.preview ? `<img src="${template.preview}" alt="${template.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px;">` : '📄 Preview'}
                </div>
                <div class="template-title">${template.name}</div>
                <div class="template-meta">${template.style} • ${template.template}</div>
                <div class="template-tags">
                    ${template.tags.slice(0, 3).map(tag => `<span class="template-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
    });
    
    templateGrid.innerHTML = html;
    window.currentTemplates = templates;
}

function filterTemplates() {
    const searchTerm = document.getElementById('templateSearch').value.toLowerCase();
    const category = document.getElementById('templateCategory').value;
    
    if (!window.currentTemplates) return;
    
    let filtered = window.currentTemplates.filter(template => {
        const matchesSearch = !searchTerm || 
            template.name.toLowerCase().includes(searchTerm) ||
            template.style.toLowerCase().includes(searchTerm) ||
            template.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesCategory = category === 'all' || template.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    renderTemplates(filtered);
}

function showTemplateModal(templateIndex) {
    const template = window.currentTemplates[templateIndex];
    if (!template) return;
    
    const modal = document.getElementById('templateModal');
    const title = document.getElementById('modalTemplateTitle');
    const details = document.getElementById('modalTemplateDetails');
    const loadBtn = document.getElementById('loadTemplateBtn');
    
    title.textContent = template.name;
    
    let detailsHtml = `
        <div style="margin-bottom: 1rem;">
            <h4 style="margin-bottom: 0.5rem; color: #374151;">Description</h4>
            <p style="color: #6b7280; margin: 0;">${template.description || 'No description available'}</p>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
            <div>
                <h4 style="margin-bottom: 0.5rem; color: #374151; font-size: 0.875rem;">Style</h4>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${template.style}</p>
            </div>
            <div>
                <h4 style="margin-bottom: 0.5rem; color: #374151; font-size: 0.875rem;">Layout</h4>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${template.template}</p>
            </div>
            <div>
                <h4 style="margin-bottom: 0.5rem; color: #374151; font-size: 0.875rem;">Category</h4>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${template.category}</p>
            </div>
            <div>
                <h4 style="margin-bottom: 0.5rem; color: #374151; font-size: 0.875rem;">Created</h4>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">${new Date(template.created).toLocaleDateString()}</p>
            </div>
        </div>
        <div>
            <h4 style="margin-bottom: 0.5rem; color: #374151; font-size: 0.875rem;">Tags</h4>
            <div class="template-tags">
                ${template.tags.map(tag => `<span class="template-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    details.innerHTML = detailsHtml;
    loadBtn.onclick = () => loadTemplateFromModal(templateIndex);
    modal.style.display = 'flex';
    window.selectedTemplateIndex = templateIndex;
}

function closeTemplateModal() {
    document.getElementById('templateModal').style.display = 'none';
}

function loadTemplateFromModal(templateIndex) {
    const template = window.currentTemplates[templateIndex];
    if (!template) return;
    
    loadTemplateData(template);
    closeTemplateModal();
}

function loadTemplateData(template) {
    // Apply template data to current design
    if (template.style) {
        window.designGenerator.currentStyle = template.style;
        document.querySelector(`[data-style="${template.style}"]`)?.click();
    }
    
    if (template.template) {
        window.designGenerator.currentTemplate = template.template;
        document.querySelector(`[data-template="${template.template}"]`)?.click();
    }
    
    if (template.content) {
        if (template.content.siteTitle) document.getElementById('siteTitle').value = template.content.siteTitle;
        if (template.content.siteSubtitle) document.getElementById('siteSubtitle').value = template.content.siteSubtitle;
        if (template.content.navLinks) document.getElementById('navLinks').value = template.content.navLinks;
        if (template.content.mainContent) document.getElementById('mainContent').value = template.content.mainContent;
    }
    
    if (template.styling) {
        if (template.styling.colorScheme) document.getElementById('colorScheme').value = template.styling.colorScheme;
        if (template.styling.fontFamily) document.getElementById('fontFamily').value = template.styling.fontFamily;
        if (template.styling.themeMode) {
            const themeRadio = document.querySelector(`input[name="themeMode"][value="${template.styling.themeMode}"]`);
            if (themeRadio) themeRadio.checked = true;
        }
    }
    
    if (template.components) {
        window.designGenerator.canvasComponents = template.components;
        window.designGenerator.renderCanvas();
    }
    
    // Update preview
    window.designGenerator.updatePreview();
    
    alert(`Template "${template.name}" loaded successfully!`);
}

function loadTemplateFile() {
    document.getElementById('templateFileInput').click();
}

function handleTemplateImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const templateData = JSON.parse(e.target.result);
            loadTemplateData(templateData);
        } catch (error) {
            alert('Invalid template file format');
        }
    };
    reader.readAsText(file);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    window.designGenerator = new DesignGenerator();
    initThemeSystem();
    initBrandColorTools();
    initTemplateMarketplace();
});