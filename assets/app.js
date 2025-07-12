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
        this.init();
    }

    init() {
        this.bindEvents();
        this.initComponentLibrary();
        this.updatePreview();
    }

    initComponentLibrary() {
        this.renderComponentLibrary();
        this.setupDragAndDrop();
    }

    renderComponentLibrary() {
        const library = document.getElementById('componentLibrary');
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
        });

        // Component drag end
        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('component-card')) {
                e.target.style.opacity = '1';
            }
        });

        // Drop zone events
        const dropZone = document.getElementById('dropZone');
        const canvasArea = document.getElementById('canvasArea');
        
        if (dropZone && canvasArea) {
            [dropZone, canvasArea].forEach(area => {
                area.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    area.classList.add('drag-over');
                });

                area.addEventListener('dragleave', (e) => {
                    e.preventDefault();
                    area.classList.remove('drag-over');
                });

                area.addEventListener('drop', (e) => {
                    e.preventDefault();
                    area.classList.remove('drag-over');
                    
                    const componentId = e.dataTransfer.getData('text/plain');
                    if (componentId) {
                        this.addComponentToCanvas(componentId);
                    }
                });
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
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Style selection
        document.querySelectorAll('.style-option').forEach(option => {
            option.addEventListener('click', (e) => this.selectStyle(e.target.closest('.style-option').dataset.style));
        });

        // Template selection
        document.querySelectorAll('.template-option').forEach(option => {
            option.addEventListener('click', (e) => this.selectTemplate(e.target.dataset.template));
        });

        // Page selection
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectPage(e.target.dataset.page));
        });

        // Device selection
        document.querySelectorAll('.device-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectDevice(e.target.dataset.device));
        });

        // Form inputs
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', () => this.updatePreview());
        });

        // Checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => this.updatePreview());
        });
    }

    switchTab(tabName) {
        this.currentTab = tabName;
        
        // Update tab buttons
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.dataset.tab === tabName);
        });

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
        const pageTitle = document.getElementById('pageTitle');
        const pageContent = document.getElementById('pageContent');

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
        return {
            template: this.currentTemplate,
            style: this.currentStyle,
            page: this.currentPage,
            siteTitle: document.getElementById('siteTitle').value,
            siteSubtitle: document.getElementById('siteSubtitle').value,
            navLinks: document.getElementById('navLinks').value.split('\n').filter(link => link.trim()),
            mainContent: document.getElementById('mainContent').value,
            pageTitle: document.getElementById('pageTitle')?.value || '',
            pageContent: document.getElementById('pageContent')?.value || '',
            colorScheme: document.getElementById('colorScheme').value,
            fontFamily: document.getElementById('fontFamily').value,
            includeHero: document.getElementById('includeHero')?.checked || false,
            includeNav: document.getElementById('includeNav')?.checked || false,
            includeFooter: document.getElementById('includeFooter')?.checked || false,
            includeSidebar: document.getElementById('includeSidebar')?.checked || false
        };
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
                html = DesignTemplates.dashboardLayouts.admin.generate(data, data.style, colors);
            } else if (data.page !== 'home' && DesignTemplates.pageTemplates[data.page]) {
                // Use page-specific template
                html = DesignTemplates.pageTemplates[data.page].generate(data, data.style, colors);
            } else {
                // Use regular layout template
                const template = DesignTemplates.layouts[data.template];
                if (template) {
                    html = template.generate(data, data.style, colors);
                }
            }

            // Add responsive CSS
            html = this.addResponsiveStyles(html);

            document.getElementById('previewFrame').innerHTML = html;
        } catch (error) {
            console.error('Error generating preview:', error);
            document.getElementById('previewFrame').innerHTML = '<div style="padding: 2rem; text-align: center; color: #ef4444;">Error generating preview</div>';
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

function exportReactComponents() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    const colors = getColorsForData(data);
    const fonts = DesignTemplates.fonts[data.fontFamily] || DesignTemplates.fonts.sans;
    
    try {
        const exportData = ExportPipeline.generateExport(
            'react', 
            generator.canvasComponents, 
            data, 
            colors, 
            fonts,
            {
                minify: document.getElementById('minifyCode')?.checked || false,
                includeComments: document.getElementById('includeComments')?.checked || true
            }
        );
        
        // Create a ZIP file with all components
        createAndDownloadZip(exportData, `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-react-export`);
    } catch (error) {
        console.error('Export failed:', error);
        alert('Export failed. Please try again.');
    }
}

function exportVueComponents() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    const colors = getColorsForData(data);
    const fonts = DesignTemplates.fonts[data.fontFamily] || DesignTemplates.fonts.sans;
    
    try {
        const exportData = ExportPipeline.generateExport(
            'vue', 
            generator.canvasComponents, 
            data, 
            colors, 
            fonts,
            {
                minify: document.getElementById('minifyCode')?.checked || false,
                includeComments: document.getElementById('includeComments')?.checked || true
            }
        );
        
        createAndDownloadZip(exportData, `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-vue-export`);
    } catch (error) {
        console.error('Export failed:', error);
        alert('Export failed. Please try again.');
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
        let displayText = '';
        if (typeof content === 'object') {
            displayText = Object.entries(content).map(([key, value]) => `<strong>${key}:</strong> ${value}`).join('<br><br>');
        } else {
            displayText = content;
        }
        
        contentDiv.innerHTML = displayText;
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
    scoreDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem; color: ${auditResults.score.percentage >= 85 ? '#10b981' : auditResults.score.percentage >= 70 ? '#f59e0b' : '#ef4444'};">
            ${auditResults.score.percentage}%
        </div>
        <div style="font-weight: 600; color: #374151;">Accessibility Score</div>
        <div style="font-size: 0.875rem; color: #6b7280;">${auditResults.compliance.description}</div>
    `;
    
    // Display compliance level
    const complianceDiv = document.getElementById('complianceLevel');
    complianceDiv.innerHTML = `
        <div style="background: ${auditResults.compliance.level === 'AAA' ? '#d1fae5' : auditResults.compliance.level === 'AA' ? '#dbeafe' : '#fee2e2'}; 
                    border: 1px solid ${auditResults.compliance.level === 'AAA' ? '#10b981' : auditResults.compliance.level === 'AA' ? '#3b82f6' : '#ef4444'}; 
                    border-radius: 0.5rem; padding: 1rem; text-align: center;">
            <div style="font-size: 1.5rem; font-weight: bold; color: ${auditResults.compliance.level === 'AAA' ? '#065f46' : auditResults.compliance.level === 'AA' ? '#1e40af' : '#991b1b'};">
                WCAG ${auditResults.compliance.level}
            </div>
            <div style="color: ${auditResults.compliance.level === 'AAA' ? '#065f46' : auditResults.compliance.level === 'AA' ? '#1e40af' : '#991b1b'};">
                ${auditResults.compliance.description}
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
            issuesHTML += `
                <div style="background: #fef2f2; border-left: 4px solid ${severityColor}; padding: 1rem; margin-bottom: 1rem; border-radius: 0 0.5rem 0.5rem 0;">
                    <div style="font-weight: 600; color: ${severityColor}; margin-bottom: 0.5rem;">
                        ${issue.severity.toUpperCase()}: ${issue.type}
                    </div>
                    <div style="color: #374151; font-size: 0.9rem; margin-bottom: 0.5rem;">${issue.message}</div>
                    ${issue.element ? `<div style="color: #6b7280; font-size: 0.8rem; margin-bottom: 0.5rem;">Element: ${issue.element}</div>` : ''}
                    <div style="color: #059669; font-size: 0.85rem;">💡 ${issue.suggestion}</div>
                    <div style="color: #6b7280; font-size: 0.75rem; margin-top: 0.5rem;">WCAG ${issue.wcag} Level</div>
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
            suggestionsHTML += `
                <div style="background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
                    <h4 style="color: #0c4a6e; margin-bottom: 0.5rem;">${suggestion.title}</h4>
                    <p style="color: #0c4a6e; margin-bottom: 0.5rem; font-size: 0.9rem;">${suggestion.description}</p>
                    <ul style="color: #0c4a6e; font-size: 0.85rem; margin-left: 1.5rem;">
                        ${suggestion.actions.map(action => `<li>${action}</li>`).join('')}
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    window.designGenerator = new DesignGenerator();
});