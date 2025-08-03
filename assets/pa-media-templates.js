// PA Media Group Themed Templates
class PAMediaTemplates {
    constructor() {
        this.brandColors = {
            primary: '#825FFF',       // Vibrant purple
            secondary: '#3D3677',     // Deep navy purple
            accent: '#6C5CE7',        // Medium purple
            text: '#000000',          // Black
            textSecondary: '#676767', // Medium grey
            background: '#FFFFFF',    // White
            surface: '#F8F9FA',       // Light grey
            gradient: 'linear-gradient(135deg, #825FFF 0%, #3D3677 100%)'
        };

        this.typography = {
            fontFamily: '"Greycliff CF", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            weights: {
                light: 300,
                regular: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
                extrabold: 800,
                black: 900
            }
        };

        this.templates = {
            website: this.generateWebsiteTemplates(),
            powerpoint: this.generatePowerPointTemplates(),
            teams: this.generateTeamsTemplates(),
            styleguide: this.generateStyleGuideTemplates(),
            social: this.generateSocialMediaTemplates(),
            print: this.generatePrintTemplates()
        };

        this.init();
    }

    init() {
        this.addPAMediaStyle();
        this.createTemplateInterface();
    }

    addPAMediaStyle() {
        // Add PA Media specific CSS to the page
        const style = document.createElement('style');
        style.textContent = `
            .pa-media-style {
                font-family: ${this.typography.fontFamily};
                color: ${this.brandColors.text};
            }
            
            .pa-brand-gradient {
                background: ${this.brandColors.gradient};
                color: white;
            }
            
            .pa-primary {
                background-color: ${this.brandColors.primary};
                color: white;
            }
            
            .pa-secondary {
                background-color: ${this.brandColors.secondary};
                color: white;
            }
            
            .pa-template-card {
                border: 2px solid #e5e7eb;
                border-radius: 12px;
                padding: 1.5rem;
                margin: 1rem 0;
                background: white;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .pa-template-card:hover {
                border-color: ${this.brandColors.primary};
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(130, 95, 255, 0.15);
            }
            
            .pa-template-preview {
                width: 100%;
                height: 200px;
                background: ${this.brandColors.surface};
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 1rem;
                position: relative;
                overflow: hidden;
            }
            
            .pa-template-title {
                font-weight: ${this.typography.weights.bold};
                color: ${this.brandColors.text};
                margin-bottom: 0.5rem;
                font-size: 1.1rem;
            }
            
            .pa-template-description {
                color: ${this.brandColors.textSecondary};
                font-size: 0.9rem;
                line-height: 1.4;
            }
            
            .pa-category-header {
                background: ${this.brandColors.gradient};
                color: white;
                padding: 1.5rem;
                border-radius: 12px;
                margin: 2rem 0 1rem 0;
                text-align: center;
            }
            
            .pa-category-title {
                font-size: 1.5rem;
                font-weight: ${this.typography.weights.bold};
                margin-bottom: 0.5rem;
            }
            
            .pa-category-subtitle {
                opacity: 0.9;
                font-size: 1rem;
            }
        `;
        document.head.appendChild(style);
    }

    generateWebsiteTemplates() {
        return [
            {
                id: 'pa-corporate-homepage',
                name: 'PA Media Corporate Homepage',
                description: 'Professional homepage design matching PA Media\'s brand identity with hero section and service highlights',
                category: 'Corporate',
                preview: this.generateWebsitePreview('corporate'),
                code: {
                    html: this.generateCorporateHTML(),
                    css: this.generateCorporateCSS()
                }
            },
            {
                id: 'pa-news-portal',
                name: 'News Portal Template',
                description: 'News and media portal with content grid, featured articles, and PA Media branding',
                category: 'News & Media',
                preview: this.generateWebsitePreview('news'),
                code: {
                    html: this.generateNewsHTML(),
                    css: this.generateNewsCSS()
                }
            },
            {
                id: 'pa-services-landing',
                name: 'Services Landing Page',
                description: 'Service-focused landing page with conversion optimisation and brand consistency',
                category: 'Services',
                preview: this.generateWebsitePreview('services'),
                code: {
                    html: this.generateServicesHTML(),
                    css: this.generateServicesCSS()
                }
            },
            {
                id: 'pa-about-page',
                name: 'About Us Template',
                description: 'Professional about page with team showcase and company values',
                category: 'About',
                preview: this.generateWebsitePreview('about'),
                code: {
                    html: this.generateAboutHTML(),
                    css: this.generateAboutCSS()
                }
            }
        ];
    }

    generatePowerPointTemplates() {
        return [
            {
                id: 'pa-presentation-master',
                name: 'PA Media Presentation Master',
                description: 'Complete PowerPoint template with title slides, content layouts, and brand elements',
                slides: ['Title Slide', 'Content Overview', 'Two Column', 'Image Focus', 'Data Visualization', 'Thank You'],
                preview: this.generatePowerPointPreview('master'),
                downloadUrl: '#',
                formats: ['PPTX', 'PDF']
            },
            {
                id: 'pa-executive-briefing',
                name: 'Executive Briefing Template',
                description: 'High-level executive presentation template with professional layouts and data charts',
                slides: ['Executive Summary', 'Key Metrics', 'Strategic Overview', 'Next Steps'],
                preview: this.generatePowerPointPreview('executive'),
                downloadUrl: '#',
                formats: ['PPTX', 'PDF']
            },
            {
                id: 'pa-client-proposal',
                name: 'Client Proposal Template',
                description: 'Professional proposal template for client presentations and service offerings',
                slides: ['Cover', 'Problem Statement', 'Solution Overview', 'Timeline', 'Investment'],
                preview: this.generatePowerPointPreview('proposal'),
                downloadUrl: '#',
                formats: ['PPTX', 'PDF']
            },
            {
                id: 'pa-training-materials',
                name: 'Training & Education Template',
                description: 'Educational presentation template for training sessions and workshops',
                slides: ['Course Overview', 'Learning Objectives', 'Content Modules', 'Activities', 'Assessment'],
                preview: this.generatePowerPointPreview('training'),
                downloadUrl: '#',
                formats: ['PPTX', 'PDF']
            }
        ];
    }

    generateTeamsTemplates() {
        return [
            {
                id: 'pa-teams-meeting-bg',
                name: 'PA Media Meeting Background',
                description: 'Professional Microsoft Teams background with subtle PA Media branding',
                dimensions: '1920x1080',
                preview: this.generateTeamsPreview('meeting'),
                downloadUrl: '#',
                formats: ['JPG', 'PNG']
            },
            {
                id: 'pa-teams-webinar-bg',
                name: 'Webinar Background',
                description: 'Branded background for webinars and large presentations',
                dimensions: '1920x1080',
                preview: this.generateTeamsPreview('webinar'),
                downloadUrl: '#',
                formats: ['JPG', 'PNG']
            },
            {
                id: 'pa-teams-casual-bg',
                name: 'Casual Meeting Background',
                description: 'Softer branded background for informal team meetings',
                dimensions: '1920x1080',
                preview: this.generateTeamsPreview('casual'),
                downloadUrl: '#',
                formats: ['JPG', 'PNG']
            },
            {
                id: 'pa-teams-branded-bg',
                name: 'Full Brand Background',
                description: 'Prominent PA Media branding for external client meetings',
                dimensions: '1920x1080',
                preview: this.generateTeamsPreview('branded'),
                downloadUrl: '#',
                formats: ['JPG', 'PNG']
            }
        ];
    }

    generateStyleGuideTemplates() {
        return [
            {
                id: 'pa-brand-guidelines',
                name: 'PA Media Brand Guidelines',
                description: 'Comprehensive brand guidelines document with logo usage, colours, and typography',
                sections: ['Logo Usage', 'Colour Palette', 'Typography', 'Imagery', 'Applications'],
                preview: this.generateStyleGuidePreview('guidelines'),
                downloadUrl: '#',
                formats: ['PDF', 'Figma', 'Sketch']
            },
            {
                id: 'pa-digital-styleguide',
                name: 'Digital Style Guide',
                description: 'Interactive style guide for digital applications and websites',
                sections: ['UI Components', 'Colour System', 'Typography Scale', 'Spacing', 'Iconography'],
                preview: this.generateStyleGuidePreview('digital'),
                downloadUrl: '#',
                formats: ['HTML', 'PDF', 'Figma']
            },
            {
                id: 'pa-print-standards',
                name: 'Print Standards Guide',
                description: 'Print-specific brand standards for marketing materials and publications',
                sections: ['Print Colours', 'Layout Grids', 'Typography', 'Paper Specifications', 'Finishing'],
                preview: this.generateStyleGuidePreview('print'),
                downloadUrl: '#',
                formats: ['PDF', 'InDesign']
            },
            {
                id: 'pa-presentation-standards',
                name: 'Presentation Standards',
                description: 'Guidelines for consistent presentation design across the organisation',
                sections: ['Slide Layouts', 'Content Hierarchy', 'Data Visualisation', 'Animation Guidelines'],
                preview: this.generateStyleGuidePreview('presentation'),
                downloadUrl: '#',
                formats: ['PDF', 'PowerPoint']
            }
        ];
    }

    generateSocialMediaTemplates() {
        return [
            {
                id: 'pa-linkedin-post',
                name: 'LinkedIn Post Templates',
                description: 'Professional LinkedIn post templates with PA Media branding',
                dimensions: '1200x1200',
                variations: ['Quote', 'Announcement', 'Article Share', 'Event Promotion'],
                preview: this.generateSocialPreview('linkedin'),
                downloadUrl: '#',
                formats: ['PNG', 'JPG', 'PSD']
            },
            {
                id: 'pa-twitter-header',
                name: 'Twitter Header Templates',
                description: 'Twitter header designs with brand consistency',
                dimensions: '1500x500',
                variations: ['Corporate', 'Event', 'Campaign', 'Seasonal'],
                preview: this.generateSocialPreview('twitter'),
                downloadUrl: '#',
                formats: ['PNG', 'JPG', 'PSD']
            },
            {
                id: 'pa-instagram-story',
                name: 'Instagram Story Templates',
                description: 'Branded Instagram story templates for announcements and content',
                dimensions: '1080x1920',
                variations: ['News Update', 'Behind Scenes', 'Quote', 'Event'],
                preview: this.generateSocialPreview('instagram'),
                downloadUrl: '#',
                formats: ['PNG', 'JPG', 'PSD']
            }
        ];
    }

    generatePrintTemplates() {
        return [
            {
                id: 'pa-business-card',
                name: 'Business Card Template',
                description: 'Professional business card design with PA Media branding',
                dimensions: '85x55mm',
                preview: this.generatePrintPreview('business-card'),
                downloadUrl: '#',
                formats: ['PDF', 'AI', 'InDesign']
            },
            {
                id: 'pa-letterhead',
                name: 'Letterhead Template',
                description: 'Official letterhead template for corporate communications',
                dimensions: 'A4',
                preview: this.generatePrintPreview('letterhead'),
                downloadUrl: '#',
                formats: ['PDF', 'AI', 'InDesign', 'Word']
            },
            {
                id: 'pa-brochure',
                name: 'Tri-fold Brochure Template',
                description: 'Marketing brochure template for services and company information',
                dimensions: 'A4 Tri-fold',
                preview: this.generatePrintPreview('brochure'),
                downloadUrl: '#',
                formats: ['PDF', 'AI', 'InDesign']
            },
            {
                id: 'pa-report-cover',
                name: 'Report Cover Template',
                description: 'Professional report cover design for annual reports and white papers',
                dimensions: 'A4',
                preview: this.generatePrintPreview('report'),
                downloadUrl: '#',
                formats: ['PDF', 'AI', 'InDesign']
            }
        ];
    }

    createTemplateInterface() {
        // Check if we're on the templates tab and add PA Media section
        const templatesTab = document.querySelector('[data-tab="templates"]');
        if (templatesTab) {
            this.addPAMediaSection(templatesTab);
        }
    }

    addPAMediaSection(container) {
        const paMediaSection = document.createElement('div');
        paMediaSection.innerHTML = `
            <div class="pa-category-header">
                <div class="pa-category-title">🎨 PA Media Group Templates</div>
                <div class="pa-category-subtitle">Professional branded templates based on PA Media's design system</div>
            </div>

            ${this.renderTemplateCategory('Website Templates', this.templates.website)}
            ${this.renderTemplateCategory('PowerPoint Templates', this.templates.powerpoint)}
            ${this.renderTemplateCategory('Microsoft Teams Backgrounds', this.templates.teams)}
            ${this.renderTemplateCategory('Style Guide Templates', this.templates.styleguide)}
            ${this.renderTemplateCategory('Social Media Templates', this.templates.social)}
            ${this.renderTemplateCategory('Print Templates', this.templates.print)}
            
            <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 12px; padding: 1.5rem; margin: 2rem 0;">
                <h4 style="color: #0369a1; margin-bottom: 1rem;">📋 Template Suite Features</h4>
                <ul style="color: #0369a1; margin: 0; padding-left: 1.5rem; font-size: 0.9rem; line-height: 1.6;">
                    <li><strong>Brand Consistency:</strong> All templates use PA Media's official colours (#825FFF, #3D3677)</li>
                    <li><strong>Typography:</strong> Greycliff CF font family with proper weight hierarchy</li>
                    <li><strong>Multiple Formats:</strong> Available in various formats for different applications</li>
                    <li><strong>Professional Quality:</strong> Print-ready and high-resolution digital assets</li>
                    <li><strong>Easy Customisation:</strong> Editable templates for different departments and use cases</li>
                    <li><strong>Brand Guidelines:</strong> Includes comprehensive style guides and usage instructions</li>
                </ul>
            </div>

            <div style="text-align: center; margin: 2rem 0;">
                <button class="btn-primary" onclick="downloadAllPATemplates()" style="margin-right: 1rem; padding: 1rem 2rem; font-size: 1rem;">
                    📦 Download Complete PA Media Template Suite
                </button>
                <button class="btn-secondary" onclick="previewPAStyleGuide()" style="padding: 1rem 2rem; font-size: 1rem;">
                    👀 Preview Brand Guidelines
                </button>
            </div>
        `;

        // Insert before existing template content
        const templateGrid = container.querySelector('#templateGrid');
        if (templateGrid) {
            templateGrid.parentNode.insertBefore(paMediaSection, templateGrid);
        } else {
            container.appendChild(paMediaSection);
        }
    }

    renderTemplateCategory(title, templates) {
        return `
            <div style="margin: 2rem 0;">
                <h3 style="color: ${this.brandColors.text}; margin-bottom: 1rem; font-size: 1.2rem; font-weight: ${this.typography.weights.bold};">${title}</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
                    ${templates.map(template => this.renderTemplateCard(template)).join('')}
                </div>
            </div>
        `;
    }

    renderTemplateCard(template) {
        return `
            <div class="pa-template-card" onclick="previewPATemplate('${template.id}')">
                <div class="pa-template-preview">
                    ${template.preview}
                </div>
                <div class="pa-template-title">${template.name}</div>
                <div class="pa-template-description">${template.description}</div>
                ${template.formats ? `
                    <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${template.formats.map(format => `
                            <span style="background: ${this.brandColors.surface}; color: ${this.brandColors.textSecondary}; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: ${this.typography.weights.medium};">
                                ${format}
                            </span>
                        `).join('')}
                    </div>
                ` : ''}
                ${template.slides ? `
                    <div style="margin-top: 0.5rem; color: ${this.brandColors.textSecondary}; font-size: 0.8rem;">
                        ${template.slides.length} slides included
                    </div>
                ` : ''}
                ${template.dimensions ? `
                    <div style="margin-top: 0.5rem; color: ${this.brandColors.textSecondary}; font-size: 0.8rem;">
                        ${template.dimensions}
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Preview generation methods
    generateWebsitePreview(type) {
        const previews = {
            corporate: `
                <div style="width: 100%; height: 100%; background: white; padding: 1rem; display: flex; flex-direction: column;">
                    <div style="height: 40px; background: ${this.brandColors.gradient}; border-radius: 4px; margin-bottom: 1rem;"></div>
                    <div style="flex: 1; background: ${this.brandColors.surface}; border-radius: 4px; position: relative;">
                        <div style="position: absolute; top: 1rem; left: 1rem; right: 1rem;">
                            <div style="height: 8px; background: ${this.brandColors.primary}; border-radius: 2px; margin-bottom: 0.5rem; width: 70%;"></div>
                            <div style="height: 4px; background: ${this.brandColors.textSecondary}; border-radius: 2px; margin-bottom: 0.25rem; width: 50%;"></div>
                            <div style="height: 4px; background: ${this.brandColors.textSecondary}; border-radius: 2px; width: 40%;"></div>
                        </div>
                    </div>
                </div>
            `,
            news: `
                <div style="width: 100%; height: 100%; background: white; padding: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                    <div style="background: ${this.brandColors.gradient}; border-radius: 4px;"></div>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div style="background: ${this.brandColors.surface}; border-radius: 4px; flex: 1;"></div>
                        <div style="background: ${this.brandColors.surface}; border-radius: 4px; flex: 1;"></div>
                    </div>
                </div>
            `,
            services: `
                <div style="width: 100%; height: 100%; background: white; padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                    <div style="height: 30%; background: ${this.brandColors.primary}; border-radius: 4px;"></div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem; flex: 1;">
                        <div style="background: ${this.brandColors.surface}; border-radius: 4px;"></div>
                        <div style="background: ${this.brandColors.surface}; border-radius: 4px;"></div>
                        <div style="background: ${this.brandColors.surface}; border-radius: 4px;"></div>
                    </div>
                </div>
            `,
            about: `
                <div style="width: 100%; height: 100%; background: white; padding: 1rem; display: flex; gap: 0.5rem;">
                    <div style="flex: 1; background: ${this.brandColors.surface}; border-radius: 4px;"></div>
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
                        <div style="height: 40%; background: ${this.brandColors.gradient}; border-radius: 4px;"></div>
                        <div style="flex: 1; background: ${this.brandColors.surface}; border-radius: 4px;"></div>
                    </div>
                </div>
            `
        };
        return previews[type] || previews.corporate;
    }

    generatePowerPointPreview(type) {
        return `
            <div style="width: 100%; height: 100%; background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="height: 20%; background: ${this.brandColors.gradient}; border-radius: 4px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center;">
                    <div style="color: white; font-weight: bold; font-size: 0.8rem;">PA MEDIA</div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.5rem; height: 70%;">
                    <div style="height: 8px; background: ${this.brandColors.primary}; border-radius: 2px; width: 80%;"></div>
                    <div style="height: 4px; background: ${this.brandColors.textSecondary}; border-radius: 2px; width: 60%;"></div>
                    <div style="height: 4px; background: ${this.brandColors.textSecondary}; border-radius: 2px; width: 70%;"></div>
                    <div style="flex: 1; background: ${this.brandColors.surface}; border-radius: 4px; margin-top: 0.5rem;"></div>
                </div>
            </div>
        `;
    }

    generateTeamsPreview(type) {
        const backgrounds = {
            meeting: this.brandColors.surface,
            webinar: this.brandColors.gradient,
            casual: `linear-gradient(135deg, ${this.brandColors.surface} 0%, ${this.brandColors.background} 100%)`,
            branded: this.brandColors.gradient
        };

        return `
            <div style="width: 100%; height: 100%; background: ${backgrounds[type]}; border-radius: 8px; position: relative; overflow: hidden;">
                <div style="position: absolute; bottom: 1rem; right: 1rem; background: rgba(255,255,255,0.9); padding: 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: bold; color: ${this.brandColors.primary};">
                    PA MEDIA
                </div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.1; font-size: 2rem; font-weight: bold; color: ${type === 'webinar' || type === 'branded' ? 'white' : this.brandColors.primary};">
                    1920×1080
                </div>
            </div>
        `;
    }

    generateStyleGuidePreview(type) {
        return `
            <div style="width: 100%; height: 100%; background: white; padding: 1rem; border-radius: 8px;">
                <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                    <div style="width: 20px; height: 20px; background: ${this.brandColors.primary}; border-radius: 50%;"></div>
                    <div style="width: 20px; height: 20px; background: ${this.brandColors.secondary}; border-radius: 50%;"></div>
                    <div style="width: 20px; height: 20px; background: ${this.brandColors.accent}; border-radius: 50%;"></div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <div style="height: 6px; background: ${this.brandColors.text}; width: 60%; margin-bottom: 0.25rem; border-radius: 2px;"></div>
                    <div style="height: 4px; background: ${this.brandColors.textSecondary}; width: 40%; border-radius: 2px;"></div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                    <div style="background: ${this.brandColors.surface}; border-radius: 4px; padding: 0.5rem;">
                        <div style="height: 3px; background: ${this.brandColors.primary}; width: 100%; margin-bottom: 0.25rem; border-radius: 1px;"></div>
                        <div style="height: 2px; background: ${this.brandColors.textSecondary}; width: 80%; border-radius: 1px;"></div>
                    </div>
                    <div style="background: ${this.brandColors.surface}; border-radius: 4px; padding: 0.5rem;">
                        <div style="height: 3px; background: ${this.brandColors.secondary}; width: 100%; margin-bottom: 0.25rem; border-radius: 1px;"></div>
                        <div style="height: 2px; background: ${this.brandColors.textSecondary}; width: 70%; border-radius: 1px;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    generateSocialPreview(platform) {
        const dimensions = {
            linkedin: '1:1',
            twitter: '3:1',
            instagram: '9:16'
        };

        return `
            <div style="width: 100%; height: 100%; background: ${this.brandColors.gradient}; border-radius: 8px; position: relative; display: flex; align-items: center; justify-content: center; color: white;">
                <div style="text-align: center;">
                    <div style="font-weight: bold; margin-bottom: 0.5rem;">${platform.toUpperCase()}</div>
                    <div style="font-size: 0.8rem; opacity: 0.8;">${dimensions[platform]}</div>
                </div>
                <div style="position: absolute; bottom: 0.5rem; right: 0.5rem; font-size: 0.6rem; opacity: 0.6;">
                    PA MEDIA
                </div>
            </div>
        `;
    }

    generatePrintPreview(type) {
        return `
            <div style="width: 100%; height: 100%; background: white; border: 2px solid ${this.brandColors.surface}; border-radius: 4px; padding: 1rem;">
                <div style="height: 15%; background: ${this.brandColors.gradient}; margin-bottom: 1rem; border-radius: 2px;"></div>
                <div style="display: flex; flex-direction: column; gap: 0.25rem;">
                    <div style="height: 4px; background: ${this.brandColors.text}; width: 80%; border-radius: 1px;"></div>
                    <div style="height: 3px; background: ${this.brandColors.textSecondary}; width: 60%; border-radius: 1px;"></div>
                    <div style="height: 3px; background: ${this.brandColors.textSecondary}; width: 70%; border-radius: 1px;"></div>
                </div>
                <div style="position: absolute; bottom: 0.5rem; right: 0.5rem; font-size: 0.6rem; color: ${this.brandColors.primary}; font-weight: bold;">
                    PA
                </div>
            </div>
        `;
    }

    // Code generation methods for website templates
    generateCorporateHTML() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PA Media Group - Professional Media Services</title>
    <link rel="stylesheet" href="pa-corporate.css">
</head>
<body class="pa-media-theme">
    <header class="hero-section">
        <nav class="navigation">
            <div class="nav-container">
                <div class="logo">
                    <strong>PA MEDIA</strong>
                </div>
                <ul class="nav-menu">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div class="hero-content">
            <h1>Professional Media Solutions</h1>
            <p>Delivering trusted news, content, and technology services to media organisations worldwide</p>
            <div class="cta-buttons">
                <button class="btn-primary">Our Services</button>
                <button class="btn-secondary">Learn More</button>
            </div>
        </div>
    </header>

    <section class="services-overview" id="services">
        <div class="container">
            <h2>Our Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <h3>News & Content</h3>
                    <p>Real-time news, sport, and entertainment content</p>
                </div>
                <div class="service-card">
                    <h3>Technology Solutions</h3>
                    <p>Cutting-edge media technology and platforms</p>
                </div>
                <div class="service-card">
                    <h3>Training & Support</h3>
                    <p>Professional development and technical support</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <strong>PA MEDIA GROUP</strong>
                    <p>Professional media services since 1868</p>
                </div>
                <div class="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`;
    }

    generateCorporateCSS() {
        return `/* PA Media Corporate Website Styles */
:root {
    --pa-primary: #825FFF;
    --pa-secondary: #3D3677;
    --pa-accent: #6C5CE7;
    --pa-text: #000000;
    --pa-text-secondary: #676767;
    --pa-background: #FFFFFF;
    --pa-surface: #F8F9FA;
    --pa-gradient: linear-gradient(135deg, #825FFF 0%, #3D3677 100%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body.pa-media-theme {
    font-family: "Greycliff CF", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.6;
    color: var(--pa-text);
    background: var(--pa-background);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Header & Navigation */
.hero-section {
    background: var(--pa-gradient);
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.navigation {
    padding: 1rem 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s;
}

.nav-menu a:hover {
    opacity: 0.8;
}

/* Hero Content */
.hero-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4rem 2rem;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.1;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    opacity: 0.9;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.btn-primary, .btn-secondary {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: white;
    color: var(--pa-primary);
}

.btn-primary:hover {
    background: var(--pa-surface);
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background: white;
    color: var(--pa-primary);
}

/* Services Section */
.services-overview {
    padding: 5rem 0;
    background: var(--pa-background);
}

.services-overview h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: var(--pa-text);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: var(--pa-surface);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid transparent;
}

.service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(130, 95, 255, 0.15);
    border-color: var(--pa-primary);
}

.service-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--pa-primary);
}

.service-card p {
    color: var(--pa-text-secondary);
    line-height: 1.6;
}

/* Footer */
.footer {
    background: var(--pa-secondary);
    color: white;
    padding: 3rem 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.footer-brand strong {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 0.5rem;
}

.footer-brand p {
    opacity: 0.8;
    font-size: 0.9rem;
}

.footer-links {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.footer-links a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    transition: opacity 0.3s;
}

.footer-links a:hover {
    opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-menu {
        gap: 1rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn-primary, .btn-secondary {
        width: 200px;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
    }
}`;
    }

    generateBrandGuidelines() {
        return {
            colors: this.brandColors,
            typography: this.typography,
            logoUsage: {
                primary: 'PA MEDIA',
                variations: ['PA MEDIA GROUP', 'PA', 'PA MEDIA'],
                clearSpace: '2x logo height',
                minimumSize: '24px height',
                backgrounds: ['White', 'Light grey', 'Branded purple']
            },
            spacing: {
                baseUnit: '8px',
                sections: '80px',
                elements: '24px',
                components: '16px'
            },
            imagery: {
                style: 'Professional, contemporary photography',
                treatment: 'High contrast, vibrant colours',
                subjects: 'Technology, people, modern environments'
            }
        };
    }
}

// Global functions for PA Media templates
function downloadAllPATemplates() {
    // Create comprehensive download package
    const templates = new PAMediaTemplates();
    
    // Show download modal
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
        <div style="background: white; border-radius: 16px; max-width: 600px; width: 90%; padding: 2rem;">
            <div style="text-align: center; margin-bottom: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                <h2 style="color: #825FFF; margin-bottom: 1rem;">PA Media Template Suite</h2>
                <p style="color: #676767;">Complete collection of branded templates</p>
            </div>
            
            <div style="background: #f8f9fa; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem;">
                <h3 style="color: #3D3677; margin-bottom: 1rem;">Package Contents:</h3>
                <ul style="color: #676767; line-height: 1.6; margin: 0; padding-left: 1.5rem;">
                    <li><strong>Website Templates:</strong> 4 responsive HTML/CSS templates</li>
                    <li><strong>PowerPoint Templates:</strong> 4 presentation masters (15+ slides)</li>
                    <li><strong>Teams Backgrounds:</strong> 4 HD backgrounds (1920×1080)</li>
                    <li><strong>Style Guides:</strong> Complete brand guidelines (PDF, Figma)</li>
                    <li><strong>Social Media:</strong> Templates for LinkedIn, Twitter, Instagram</li>
                    <li><strong>Print Materials:</strong> Business cards, letterhead, brochures</li>
                    <li><strong>Brand Assets:</strong> Logos, colour palettes, typography files</li>
                </ul>
            </div>
            
            <div style="background: #825FFF; color: white; border-radius: 8px; padding: 1rem; margin-bottom: 2rem; text-align: center;">
                <strong>Total Value: £2,500+ • Free with Design Generator Pro</strong>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="this.closest('.modal').remove()" style="padding: 0.75rem 1.5rem; background: #f3f4f6; color: #374151; border: none; border-radius: 6px; cursor: pointer;">
                    Cancel
                </button>
                <button onclick="startPATemplateDownload()" style="padding: 0.75rem 2rem; background: #825FFF; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                    Download Template Suite
                </button>
            </div>
        </div>
    `;

    modal.className = 'modal';
    document.body.appendChild(modal);
}

function startPATemplateDownload() {
    // Close modal and start download process
    document.querySelector('.modal').remove();
    
    // Show download progress
    const progressDiv = document.createElement('div');
    progressDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 1px solid #825FFF;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 10px 25px rgba(130, 95, 255, 0.15);
        z-index: 1000;
        max-width: 300px;
    `;
    
    progressDiv.innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📦</div>
            <strong style="color: #825FFF;">Preparing Template Suite...</strong>
        </div>
        <div style="background: #f3f4f6; border-radius: 4px; height: 8px; margin-bottom: 1rem;">
            <div id="downloadProgress" style="background: #825FFF; height: 100%; border-radius: 4px; width: 0%; transition: width 0.3s;"></div>
        </div>
        <div id="downloadStep" style="color: #676767; font-size: 0.9rem; text-align: center;">Generating templates...</div>
    `;
    
    document.body.appendChild(progressDiv);
    
    // Simulate download progress
    const steps = [
        'Generating website templates...',
        'Creating PowerPoint masters...',
        'Rendering Teams backgrounds...',
        'Compiling style guides...',
        'Processing social media templates...',
        'Finalising print materials...',
        'Creating download package...'
    ];
    
    let progress = 0;
    const progressBar = document.getElementById('downloadProgress');
    const stepText = document.getElementById('downloadStep');
    
    const interval = setInterval(() => {
        progress += 100 / steps.length;
        progressBar.style.width = `${Math.min(progress, 100)}%`;
        
        const currentStep = Math.floor(progress / (100 / steps.length));
        if (currentStep < steps.length) {
            stepText.textContent = steps[currentStep];
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progressDiv.innerHTML = `
                    <div style="text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                        <strong style="color: #059669;">Download Complete!</strong>
                        <p style="color: #676767; margin: 0.5rem 0; font-size: 0.9rem;">PA Media Template Suite ready</p>
                        <button onclick="this.parentElement.parentElement.remove()" style="background: #059669; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; margin-top: 0.5rem;">
                            Close
                        </button>
                    </div>
                `;
                
                // Trigger actual download (would be a real ZIP file in production)
                const link = document.createElement('a');
                link.href = 'data:text/plain;charset=utf-8,PA Media Group Template Suite - Complete branded template collection generated by Design Generator Pro';
                link.download = 'PA-Media-Template-Suite.txt';
                link.click();
            }, 1000);
        }
    }, 800);
}

function previewPATemplate(templateId) {
    const templates = new PAMediaTemplates();
    
    // Find the template
    let template = null;
    Object.values(templates.templates).forEach(category => {
        const found = category.find(t => t.id === templateId);
        if (found) template = found;
    });
    
    if (!template) return;
    
    // Show preview modal
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
        <div style="background: white; border-radius: 16px; max-width: 800px; width: 95%; max-height: 90vh; overflow-y: auto;">
            <div style="padding: 2rem; border-bottom: 1px solid #e5e7eb;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h2 style="color: #825FFF; margin: 0;">${template.name}</h2>
                    <button onclick="this.closest('.template-preview-modal').remove()" style="background: none; border: none; font-size: 1.5rem; color: #676767; cursor: pointer;">×</button>
                </div>
                <p style="color: #676767; margin: 0.5rem 0 0 0; font-size: 0.9rem;">${template.description}</p>
            </div>
            <div style="padding: 2rem;">
                <div style="background: #f8f9fa; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; min-height: 300px; display: flex; align-items: center; justify-content: center;">
                    ${template.preview}
                </div>
                
                ${template.code ? `
                    <div style="margin-bottom: 2rem;">
                        <h3 style="color: #3D3677; margin-bottom: 1rem;">Code Preview</h3>
                        <div style="background: #1f2937; color: #10b981; padding: 1rem; border-radius: 8px; font-family: 'SF Mono', Monaco, monospace; font-size: 0.8rem; max-height: 200px; overflow-y: auto;">
                            <pre style="margin: 0; white-space: pre-wrap;">${template.code.html ? template.code.html.substring(0, 500) + '...' : 'Template code available'}</pre>
                        </div>
                    </div>
                ` : ''}
                
                ${template.formats ? `
                    <div style="margin-bottom: 2rem;">
                        <h3 style="color: #3D3677; margin-bottom: 1rem;">Available Formats</h3>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            ${template.formats.map(format => `
                                <span style="background: #825FFF; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.9rem; font-weight: 500;">
                                    ${format}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div style="text-align: center;">
                    <button onclick="downloadPATemplate('${templateId}')" style="background: #825FFF; color: white; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; font-weight: 600; margin-right: 1rem;">
                        Download Template
                    </button>
                    <button onclick="this.closest('.template-preview-modal').remove()" style="background: #f3f4f6; color: #374151; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer;">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.className = 'template-preview-modal';
    document.body.appendChild(modal);
}

function downloadPATemplate(templateId) {
    // Simulate individual template download
    const link = document.createElement('a');
    link.href = `data:text/plain;charset=utf-8,PA Media Template: ${templateId}\n\nGenerated by Design Generator Pro\nThis would be the actual template file in production.`;
    link.download = `PA-Media-${templateId}.zip`;
    link.click();
}

function previewPAStyleGuide() {
    const templates = new PAMediaTemplates();
    const guidelines = templates.generateBrandGuidelines();
    
    // Show style guide modal
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
            <div style="background: linear-gradient(135deg, #825FFF 0%, #3D3677 100%); color: white; padding: 2rem; text-align: center;">
                <h1 style="margin: 0 0 0.5rem 0; font-size: 2rem;">PA Media Group</h1>
                <p style="margin: 0; opacity: 0.9;">Brand Guidelines & Style Guide</p>
            </div>
            
            <div style="padding: 2rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                    <div>
                        <h2 style="color: #3D3677; margin-bottom: 1rem;">Colour Palette</h2>
                        <div style="display: grid; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 60px; height: 60px; background: #825FFF; border-radius: 8px;"></div>
                                <div>
                                    <strong>#825FFF</strong><br>
                                    <span style="color: #676767;">Primary Purple</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 60px; height: 60px; background: #3D3677; border-radius: 8px;"></div>
                                <div>
                                    <strong>#3D3677</strong><br>
                                    <span style="color: #676767;">Deep Navy Purple</span>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 60px; height: 60px; background: #676767; border-radius: 8px;"></div>
                                <div>
                                    <strong>#676767</strong><br>
                                    <span style="color: #676767;">Medium Grey</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h2 style="color: #3D3677; margin-bottom: 1rem;">Typography</h2>
                        <div style="font-family: 'Greycliff CF', sans-serif;">
                            <div style="margin-bottom: 1rem;">
                                <div style="font-size: 2rem; font-weight: 800; color: #825FFF; margin-bottom: 0.25rem;">Greycliff CF</div>
                                <div style="color: #676767; font-size: 0.9rem;">Primary typeface for all applications</div>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.9rem;">
                                <div><strong>Light (300)</strong></div>
                                <div style="font-weight: 300;">Sample Text</div>
                                <div><strong>Regular (400)</strong></div>
                                <div style="font-weight: 400;">Sample Text</div>
                                <div><strong>Bold (700)</strong></div>
                                <div style="font-weight: 700;">Sample Text</div>
                                <div><strong>Black (900)</strong></div>
                                <div style="font-weight: 900;">Sample Text</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <h2 style="color: #3D3677; margin-bottom: 1rem;">Logo Usage</h2>
                    <div style="background: #f8f9fa; border-radius: 12px; padding: 2rem; text-align: center;">
                        <div style="font-size: 3rem; font-weight: 900; color: #825FFF; margin-bottom: 1rem; letter-spacing: 2px;">PA MEDIA</div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 2rem; text-align: left;">
                            <div>
                                <strong>Minimum Size:</strong> 24px height<br>
                                <strong>Clear Space:</strong> 2x logo height<br>
                                <strong>Variations:</strong> PA MEDIA GROUP, PA
                            </div>
                            <div>
                                <strong>Approved Backgrounds:</strong><br>
                                • White<br>
                                • Light grey (#F8F9FA)<br>
                                • Branded purple (#825FFF)
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button onclick="downloadPAStyleGuide()" style="background: #825FFF; color: white; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; font-weight: 600; margin-right: 1rem;">
                        Download Complete Style Guide
                    </button>
                    <button onclick="this.closest('.style-guide-modal').remove()" style="background: #f3f4f6; color: #374151; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer;">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.className = 'style-guide-modal';
    document.body.appendChild(modal);
}

function downloadPAStyleGuide() {
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,PA Media Group - Complete Brand Guidelines\n\nGenerated by Design Generator Pro\n\nThis comprehensive style guide includes:\n- Brand colours and usage\n- Typography specifications\n- Logo guidelines\n- Template applications\n- Digital and print standards';
    link.download = 'PA-Media-Brand-Guidelines.pdf';
    link.click();
}

// Initialize PA Media templates when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure other systems are loaded
    setTimeout(() => {
        window.paMediaTemplates = new PAMediaTemplates();
    }, 1000);
});