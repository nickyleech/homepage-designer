// Main Application Logic
class DesignGenerator {
    constructor() {
        this.currentStyle = 'minimalist';
        this.currentTemplate = 'hero';
        this.currentPage = 'home';
        this.currentDevice = 'desktop';
        this.init();
    }

    init() {
        this.bindEvents();
        this.updatePreview();
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
        // Update tab buttons
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.dataset.tab === tabName);
        });
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
        case 'vue':
            exportVueComponents();
            break;
        case 'css':
            exportCSSOnly();
            break;
        case 'zip':
            exportMultiPageZip();
            break;
        default:
            downloadHTML();
    }
}

function exportReactComponents() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    
    const componentCode = `import React from 'react';

const ${data.siteTitle.replace(/\s+/g, '')}Homepage = () => {
  return (
    <div>
      {/* Generated React component based on your design */}
      <h1>${data.siteTitle}</h1>
      <p>${data.siteSubtitle}</p>
      {/* Add your React component logic here */}
    </div>
  );
};

export default ${data.siteTitle.replace(/\s+/g, '')}Homepage;`;
    
    const blob = new Blob([componentCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-component.jsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function exportVueComponents() {
    const generator = window.designGenerator;
    const data = generator.getFormData();
    
    const componentCode = `<template>
  <div>
    <!-- Generated Vue component based on your design -->
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <!-- Add your Vue component template here -->
  </div>
</template>

<script>
export default {
  name: '${data.siteTitle.replace(/\s+/g, '')}Homepage',
  data() {
    return {
      title: '${data.siteTitle}',
      subtitle: '${data.siteSubtitle}'
    }
  }
}
</script>

<style scoped>
/* Add your component styles here */
</style>`;
    
    const blob = new Blob([componentCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.siteTitle.toLowerCase().replace(/\s+/g, '-')}-component.vue`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    window.designGenerator = new DesignGenerator();
});