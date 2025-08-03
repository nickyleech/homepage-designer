// Design Templates and Styles
const DesignTemplates = {
    // Style configurations
    styles: {
        minimalist: {
            name: 'Minimalist',
            description: 'Clean, simple layouts',
            colors: {
                primary: '#2d3748',
                secondary: '#4a5568',
                accent: '#3182ce',
                text: '#1a202c',
                background: '#ffffff',
                surface: '#f7fafc',
                border: '#e2e8f0'
            }
        },
        dashboard: {
            name: 'Dashboard',
            description: 'Admin panels & SaaS',
            colors: {
                primary: '#1f2937',
                secondary: '#374151',
                accent: '#3b82f6',
                text: '#111827',
                background: '#f9fafb',
                surface: '#ffffff',
                border: '#d1d5db'
            }
        },
        corporate: {
            name: 'Corporate',
            description: 'Professional business',
            colors: {
                primary: '#1e3a8a',
                secondary: '#1e40af',
                accent: '#3b82f6',
                text: '#1f2937',
                background: '#ffffff',
                surface: '#f8fafc',
                border: '#e5e7eb'
            }
        },
        creative: {
            name: 'Creative',
            description: 'Artistic & portfolio',
            colors: {
                primary: '#7c3aed',
                secondary: '#8b5cf6',
                accent: '#a855f7',
                text: '#1f2937',
                background: '#fefefe',
                surface: '#faf5ff',
                border: '#e9d5ff'
            }
        },
        tech: {
            name: 'Tech Startup',
            description: 'Modern SaaS & apps',
            colors: {
                primary: '#059669',
                secondary: '#047857',
                accent: '#10b981',
                text: '#1f2937',
                background: '#ffffff',
                surface: '#f0fdf4',
                border: '#d1fae5'
            }
        },
        ecommerce: {
            name: 'E-commerce',
            description: 'Product focused',
            colors: {
                primary: '#dc2626',
                secondary: '#b91c1c',
                accent: '#ef4444',
                text: '#1f2937',
                background: '#ffffff',
                surface: '#fef2f2',
                border: '#fecaca'
            }
        },
        pamedia: {
            name: 'PA Media',
            description: 'Professional media brand',
            colors: {
                primary: '#825FFF',
                secondary: '#3D3677',
                accent: '#6C5CE7',
                text: '#000000',
                background: '#ffffff',
                surface: '#f8f9fa',
                border: '#e5e7eb'
            }
        }
    },

    // Color schemes
    colorSchemes: {
        blue: {
            primary: '#3182ce',
            secondary: '#4299e1',
            accent: '#63b3ed',
            text: '#2d3748',
            background: '#ffffff',
            surface: '#f7fafc',
            border: '#e2e8f0'
        },
        monochrome: {
            primary: '#2d3748',
            secondary: '#4a5568',
            accent: '#718096',
            text: '#1a202c',
            background: '#ffffff',
            surface: '#f7fafc',
            border: '#e2e8f0'
        },
        green: {
            primary: '#38a169',
            secondary: '#48bb78',
            accent: '#68d391',
            text: '#2d3748',
            background: '#ffffff',
            surface: '#f0fff4',
            border: '#c6f6d5'
        },
        purple: {
            primary: '#805ad5',
            secondary: '#9f7aea',
            accent: '#b794f6',
            text: '#2d3748',
            background: '#ffffff',
            surface: '#faf5ff',
            border: '#e9d8fd'
        },
        orange: {
            primary: '#dd6b20',
            secondary: '#ed8936',
            accent: '#f6ad55',
            text: '#2d3748',
            background: '#ffffff',
            surface: '#fffaf0',
            border: '#fed7aa'
        },
        dark: {
            primary: '#f7fafc',
            secondary: '#e2e8f0',
            accent: '#cbd5e0',
            text: '#ffffff',
            background: '#1a202c',
            surface: '#2d3748',
            border: '#4a5568'
        }
    },

    // Font configurations
    fonts: {
        sans: {
            family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
            weights: { light: 300, normal: 400, medium: 500, semibold: 600, bold: 700 }
        },
        serif: {
            family: "Georgia, 'Times New Roman', Times, serif",
            weights: { light: 300, normal: 400, medium: 500, semibold: 600, bold: 700 }
        },
        mono: {
            family: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
            weights: { light: 300, normal: 400, medium: 500, semibold: 600, bold: 700 }
        },
        display: {
            family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            weights: { light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, black: 900 }
        }
    },

    // Layout templates
    layouts: {
        hero: {
            name: 'Hero',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <header style="min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 2rem; background: linear-gradient(135deg, ${colors.primary}15, ${colors.surface});">
                        <div style="max-width: 800px;">
                            <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1.5rem; line-height: 1.1;">${data.siteTitle}</h1>
                            <p style="font-size: clamp(1.1rem, 2.5vw, 1.4rem); color: ${colors.secondary}; margin-bottom: 2.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.normal}; max-width: 600px; margin-left: auto; margin-right: auto;">${data.siteSubtitle}</p>
                            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                                <button style="background: ${colors.primary}; color: ${colors.background}; border: none; padding: 1rem 2rem; border-radius: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; cursor: pointer; transition: all 0.3s;">Get Started</button>
                                <button style="background: transparent; color: ${colors.primary}; border: 2px solid ${colors.primary}; padding: 1rem 2rem; border-radius: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; cursor: pointer; transition: all 0.3s;">Learn More</button>
                            </div>
                        </div>
                    </header>
                    <section style="padding: 5rem 2rem; max-width: 1200px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 3rem;">
                            <div style="font-size: 1.1rem; line-height: 1.7; color: ${colors.text}; max-width: 700px; margin: 0 auto;">
                                ${data.mainContent}
                            </div>
                        </div>
                    </section>
                </div>
            `
        },
        
        centered: {
            name: 'Centered',
            generate: (data, style, colors) => `
                <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background};">
                    <div style="text-align: center; max-width: 700px;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.light}; color: ${colors.primary}; margin-bottom: 1.5rem; line-height: 1.2;">${data.siteTitle}</h1>
                        <p style="font-size: clamp(1rem, 2vw, 1.3rem); color: ${colors.secondary}; margin-bottom: 2.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.normal};">${data.siteSubtitle}</p>
                        <nav style="margin-bottom: 3rem;">
                            ${data.navLinks.map(link => `<a href="#" style="color: ${colors.text}; text-decoration: none; margin: 0 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; transition: color 0.3s; padding: 0.5rem 0; border-bottom: 2px solid transparent;">${link}</a>`).join('')}
                        </nav>
                        <div style="font-size: 1rem; line-height: 1.6; color: ${colors.text}; max-width: 500px; margin: 0 auto;">
                            ${data.mainContent}
                        </div>
                    </div>
                </div>
            `
        },

        sidebar: {
            name: 'Sidebar',
            generate: (data, style, colors) => `
                <div style="display: grid; grid-template-columns: 280px 1fr; min-height: 100vh; font-family: ${DesignTemplates.fonts[data.fontFamily].family};">
                    <nav style="background: ${colors.surface}; padding: 2rem; border-right: 1px solid ${colors.border};">
                        <h2 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin-bottom: 2rem;">${data.siteTitle}</h2>
                        <ul style="list-style: none; padding: 0;">
                            ${data.navLinks.map(link => `<li style="margin-bottom: 1rem;"><a href="#" style="color: ${colors.text}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.normal}; transition: color 0.3s; display: block; padding: 0.5rem 0;">${link}</a></li>`).join('')}
                        </ul>
                    </nav>
                    <main style="padding: 3rem; background: ${colors.background};">
                        <h1 style="font-size: clamp(2rem, 3vw, 2.8rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.light}; color: ${colors.primary}; margin-bottom: 1rem;">${data.siteSubtitle}</h1>
                        <div style="font-size: 1.1rem; line-height: 1.6; color: ${colors.text}; max-width: 700px;">
                            ${data.mainContent}
                        </div>
                    </main>
                </div>
            `
        },

        grid: {
            name: 'Grid',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; padding: 2rem; background: ${colors.surface}; min-height: 100vh;">
                    <header style="text-align: center; margin-bottom: 3rem; padding: 2rem 0;">
                        <h1 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin-bottom: 0.5rem;">${data.siteTitle}</h1>
                        <p style="font-size: clamp(1rem, 2vw, 1.2rem); color: ${colors.secondary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.normal};">${data.siteSubtitle}</p>
                    </header>
                    <nav style="text-align: center; margin-bottom: 3rem;">
                        ${data.navLinks.map(link => `<a href="#" style="color: ${colors.text}; text-decoration: none; margin: 0 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; transition: color 0.3s; padding: 0.75rem 1.5rem; border-radius: 0.5rem; background: ${colors.background}; display: inline-block; margin-bottom: 0.5rem;">${link}</a>`).join('')}
                    </nav>
                    <main style="max-width: 1200px; margin: 0 auto;">
                        <div style="background: ${colors.background}; padding: 3rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                            <div style="font-size: 1rem; line-height: 1.6; color: ${colors.text};">
                                ${data.mainContent}
                            </div>
                        </div>
                    </main>
                </div>
            `
        },

        split: {
            name: 'Split',
            generate: (data, style, colors) => `
                <div style="display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; font-family: ${DesignTemplates.fonts[data.fontFamily].family};">
                    <div style="background: ${colors.primary}; color: ${colors.background}; padding: 3rem; display: flex; align-items: center; justify-content: center;">
                        <div style="max-width: 400px; text-align: center;">
                            <h1 style="font-size: clamp(2rem, 3vw, 2.8rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; margin-bottom: 1.5rem; line-height: 1.2;">${data.siteTitle}</h1>
                            <p style="font-size: 1.1rem; opacity: 0.9; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.normal};">${data.siteSubtitle}</p>
                        </div>
                    </div>
                    <div style="background: ${colors.background}; padding: 3rem; display: flex; flex-direction: column; justify-content: center;">
                        <nav style="margin-bottom: 2rem;">
                            ${data.navLinks.map(link => `<a href="#" style="color: ${colors.text}; text-decoration: none; display: block; margin-bottom: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; transition: color 0.3s;">${link}</a>`).join('')}
                        </nav>
                        <div style="font-size: 1rem; line-height: 1.6; color: ${colors.text};">
                            ${data.mainContent}
                        </div>
                    </div>
                </div>
            `
        }
    },

    // Dashboard specific templates
    dashboardLayouts: {
        admin: {
            name: 'Admin Panel',
            generate: (data, style, colors) => `
                <div style="display: grid; grid-template-columns: 250px 1fr; grid-template-rows: 60px 1fr; height: 100vh; font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.surface};">
                    <!-- Header -->
                    <header style="grid-column: 1 / -1; background: ${colors.background}; border-bottom: 1px solid ${colors.border}; display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem;">
                        <h1 style="font-size: 1.2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin: 0;">${data.siteTitle}</h1>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <span style="font-size: 0.9rem; color: ${colors.text};">Admin</span>
                            <div style="width: 32px; height: 32px; background: ${colors.primary}; border-radius: 50%;"></div>
                        </div>
                    </header>
                    
                    <!-- Sidebar -->
                    <nav style="background: ${colors.background}; border-right: 1px solid ${colors.border}; padding: 1.5rem 0;">
                        <div style="padding: 0 1.5rem; margin-bottom: 2rem;">
                            <p style="font-size: 0.9rem; color: ${colors.secondary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin: 0;">${data.siteSubtitle}</p>
                        </div>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            ${data.navLinks.map(link => `
                                <li>
                                    <a href="#" style="display: flex; align-items: center; padding: 0.75rem 1.5rem; color: ${colors.text}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.normal}; transition: background-color 0.2s;">
                                        <span style="width: 20px; height: 20px; background: ${colors.accent}; border-radius: 4px; margin-right: 1rem; opacity: 0.7;"></span>
                                        ${link}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </nav>
                    
                    <!-- Main Content -->
                    <main style="padding: 2rem; overflow-y: auto;">
                        <div style="margin-bottom: 2rem;">
                            <h2 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin-bottom: 0.5rem;">Dashboard</h2>
                            <p style="color: ${colors.secondary}; font-size: 0.9rem;">Welcome to your admin panel</p>
                        </div>
                        
                        <!-- Stats Cards -->
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                            ${['Users', 'Revenue', 'Orders', 'Performance'].map(stat => `
                                <div style="background: ${colors.background}; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid ${colors.border};">
                                    <h3 style="font-size: 0.9rem; color: ${colors.secondary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin-bottom: 0.5rem;">${stat}</h3>
                                    <p style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin: 0;">1,234</p>
                                </div>
                            `).join('')}
                        </div>
                        
                        <!-- Content Area -->
                        <div style="background: ${colors.background}; padding: 2rem; border-radius: 0.5rem; border: 1px solid ${colors.border};">
                            <div style="font-size: 1rem; line-height: 1.6; color: ${colors.text};">
                                ${data.mainContent}
                            </div>
                        </div>
                    </main>
                </div>
            `
        }
    },

    // Page-specific templates
    pageTemplates: {
        about: {
            name: 'About Page',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background};">
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 2rem;">
                        <header style="text-align: center; margin-bottom: 4rem;">
                            <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">About ${data.siteTitle}</h1>
                            <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">${data.siteSubtitle}</p>
                        </header>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
                            <div>
                                <div style="font-size: 1.1rem; line-height: 1.7; color: ${colors.text};">
                                    ${data.pageContent || data.mainContent}
                                </div>
                            </div>
                            <div style="background: ${colors.surface}; height: 300px; border-radius: 1rem; display: flex; align-items: center; justify-content: center; color: ${colors.secondary};">
                                [Team Photo]
                            </div>
                        </div>
                    </main>
                </div>
            `
        },
        services: {
            name: 'Services Page',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background};">
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <main style="max-width: 1200px; margin: 0 auto; padding: 4rem 2rem;">
                        <header style="text-align: center; margin-bottom: 4rem;">
                            <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Our Services</h1>
                            <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">${data.siteSubtitle}</p>
                        </header>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                            ${['Consulting', 'Development', 'Design', 'Support'].map(service => `
                                <div style="background: ${colors.surface}; padding: 2rem; border-radius: 1rem; text-align: center; border: 1px solid ${colors.border};">
                                    <div style="width: 60px; height: 60px; background: ${colors.primary}; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;">
                                        <span style="color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold};">${service[0]}</span>
                                    </div>
                                    <h3 style="font-size: 1.3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin-bottom: 1rem;">${service}</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6;">Professional ${service.toLowerCase()} services tailored to your needs.</p>
                                </div>
                            `).join('')}
                        </div>
                    </main>
                </div>
            `
        }
    },

    // Utility function to generate navigation
    generateNavigation: (data, colors) => `
        <nav style="background: ${colors.background}; border-bottom: 1px solid ${colors.border}; padding: 1rem 0; position: sticky; top: 0; z-index: 100;">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center;">
                <div style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary};">${data.siteTitle}</div>
                <ul style="display: flex; list-style: none; gap: 2rem; margin: 0; padding: 0;">
                    ${data.navLinks.map(link => `<li><a href="#" style="color: ${colors.text}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; transition: color 0.3s;">${link}</a></li>`).join('')}
                </ul>
            </div>
        </nav>
    `
};