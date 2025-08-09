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
                primary: 'rgb(130, 95, 255)',
                secondary: 'rgb(61, 54, 119)',
                accent: '#6C5CE7',
                text: '#000000',
                background: '#ffffff',
                surface: '#f8f9fa',
                border: '#e5e7eb'
            }
        },
        patvmetadata: {
            name: 'PA TV Metadata',
            description: 'PA TV metadata branding',
            colors: {
                primary: 'rgb(130, 95, 255)',
                secondary: 'rgb(61, 54, 119)',
                accent: '#6C5CE7', 
                text: '#000000',
                background: '#ffffff',
                surface: '#f8f9fa',
                border: '#e5e7eb'
            }
        },
        blog: {
            name: 'Blog/Magazine',
            description: 'Editorial & content focused',
            colors: {
                primary: '#1e293b',
                secondary: '#475569',
                accent: '#0ea5e9',
                text: '#0f172a',
                background: '#ffffff',
                surface: '#f8fafc',
                border: '#cbd5e1'
            }
        },
        restaurant: {
            name: 'Restaurant',
            description: 'Food service & hospitality',
            colors: {
                primary: '#7c2d12',
                secondary: '#92400e',
                accent: '#f59e0b',
                text: '#1c1917',
                background: '#fefdf8',
                surface: '#ffffff',
                border: '#fed7aa'
            }
        },
        photography: {
            name: 'Photography',
            description: 'Visual portfolio showcase',
            colors: {
                primary: '#000000',
                secondary: '#374151',
                accent: '#ef4444',
                text: '#111827',
                background: '#ffffff',
                surface: '#f9fafb',
                border: '#d1d5db'
            }
        },
        realestate: {
            name: 'Real Estate',
            description: 'Property & investment focus',
            colors: {
                primary: '#0f766e',
                secondary: '#14b8a6',
                accent: '#f59e0b',
                text: '#1f2937',
                background: '#ffffff',
                surface: '#f0fdfa',
                border: '#99f6e4'
            }
        },
        healthcare: {
            name: 'Healthcare',
            description: 'Medical & wellness services',
            colors: {
                primary: '#065f46',
                secondary: '#047857',
                accent: '#06b6d4',
                text: '#1f2937',
                background: '#ffffff',
                surface: '#f0fdfa',
                border: '#a7f3d0'
            }
        },
        education: {
            name: 'Education',
            description: 'Learning & academic institutions',
            colors: {
                primary: '#c2410c',
                secondary: '#ea580c',
                accent: '#3b82f6',
                text: '#1f2937',
                background: '#ffffff',
                surface: '#fff7ed',
                border: '#fed7aa'
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
                    <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold;">HERO TEMPLATE</div>
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
                        <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold; margin-bottom: 1rem;">SIDEBAR TEMPLATE</div>
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
                    <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold; margin-bottom: 1rem;">GRID TEMPLATE</div>
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
        },

        timeline: {
            name: 'Timeline',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <div style="max-width: 800px; margin: 0 auto; padding: 3rem 2rem;">
                        <header style="text-align: center; margin-bottom: 4rem;">
                            <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.siteTitle}</h1>
                            <p style="font-size: 1.2rem; color: ${colors.secondary};">${data.siteSubtitle}</p>
                        </header>
                        <div style="position: relative;">
                            <div style="position: absolute; left: 50%; transform: translateX(-50%); width: 2px; height: 100%; background: ${colors.border}; z-index: 1;"></div>
                            ${data.navLinks.map((link, index) => `
                                <div style="position: relative; margin-bottom: 3rem; display: flex; ${index % 2 === 0 ? 'justify-content: flex-start' : 'justify-content: flex-end'};">
                                    <div style="width: 45%; background: ${colors.surface}; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1); position: relative;">
                                        <div style="position: absolute; top: 50%; ${index % 2 === 0 ? 'right: -10px' : 'left: -10px'}; transform: translateY(-50%); width: 20px; height: 20px; background: ${colors.primary}; border-radius: 50%; z-index: 2;"></div>
                                        <h3 style="color: ${colors.primary}; margin-bottom: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">${link}</h3>
                                        <p style="color: ${colors.text}; line-height: 1.6; margin: 0;">Timeline item content for ${link.toLowerCase()}. This represents a key milestone or event in the journey.</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: ${colors.surface}; border-radius: 0.5rem;">
                            <div style="color: ${colors.text}; line-height: 1.6;">${data.mainContent}</div>
                        </div>
                    </div>
                </div>
            `
        },

        magazine: {
            name: 'Magazine',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; margin-bottom: 3rem;">
                            <article style="background: ${colors.surface}; padding: 0; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                <div style="height: 300px; background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); display: flex; align-items: center; justify-content: center; color: ${colors.background};">
                                    <h1 style="font-size: clamp(2rem, 3vw, 2.8rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; text-align: center; margin: 0;">${data.siteTitle}</h1>
                                </div>
                                <div style="padding: 2rem;">
                                    <h2 style="color: ${colors.primary}; margin-bottom: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">${data.siteSubtitle}</h2>
                                    <div style="color: ${colors.text}; line-height: 1.7; font-size: 1.1rem;">${data.mainContent}</div>
                                </div>
                            </article>
                            <aside>
                                <h3 style="color: ${colors.primary}; margin-bottom: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; border-bottom: 2px solid ${colors.border}; padding-bottom: 0.5rem;">Latest Articles</h3>
                                ${data.navLinks.map(link => `
                                    <div style="background: ${colors.surface}; padding: 1.5rem; margin-bottom: 1rem; border-radius: 0.5rem; border-left: 4px solid ${colors.accent};">
                                        <h4 style="color: ${colors.primary}; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">${link}</h4>
                                        <p style="color: ${colors.text}; font-size: 0.9rem; line-height: 1.5; margin: 0;">Brief excerpt about ${link.toLowerCase()} article content.</p>
                                        <a href="#" style="color: ${colors.accent}; text-decoration: none; font-size: 0.85rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; display: inline-block; margin-top: 0.5rem;">Read more →</a>
                                    </div>
                                `).join('')}
                            </aside>
                        </div>
                    </div>
                </div>
            `
        },

        portfolio: {
            name: 'Portfolio',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                        <header style="text-align: center; margin-bottom: 4rem; padding: 3rem 0;">
                            <h1 style="font-size: clamp(3rem, 5vw, 4rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.light}; color: ${colors.primary}; margin-bottom: 1rem;">${data.siteTitle}</h1>
                            <p style="font-size: 1.3rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">${data.siteSubtitle}</p>
                        </header>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                            ${data.navLinks.map((link, index) => `
                                <div style="background: ${colors.surface}; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s; cursor: pointer;">
                                    <div style="height: 250px; background: linear-gradient(135deg, ${index % 2 === 0 ? colors.primary : colors.accent}, ${colors.secondary}); display: flex; align-items: center; justify-content: center; color: ${colors.background};">
                                        <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; text-align: center;">${link}</h3>
                                    </div>
                                    <div style="padding: 1.5rem;">
                                        <h4 style="color: ${colors.primary}; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">Project: ${link}</h4>
                                        <p style="color: ${colors.text}; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">Portfolio item showcasing ${link.toLowerCase()} work with detailed project information and results.</p>
                                        <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; font-size: 0.9rem;">View Project →</a>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div style="text-align: center; padding: 3rem; background: ${colors.surface}; border-radius: 0.5rem;">
                            <div style="color: ${colors.text}; line-height: 1.6; font-size: 1.1rem;">${data.mainContent}</div>
                        </div>
                    </div>
                </div>
            `
        },

        landing: {
            name: 'Landing',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
                    <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold;">LANDING TEMPLATE</div>
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <section style="text-align: center; padding: 5rem 2rem; background: linear-gradient(135deg, ${colors.surface}, ${colors.background});">
                        <div style="max-width: 800px; margin: 0 auto;">
                            <h1 style="font-size: clamp(3rem, 5vw, 4.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1.5rem; line-height: 1.1;">${data.siteTitle}</h1>
                            <p style="font-size: clamp(1.2rem, 2.5vw, 1.5rem); color: ${colors.secondary}; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">${data.siteSubtitle}</p>
                            <div style="margin-bottom: 3rem;">
                                <button style="background: ${colors.primary}; color: ${colors.background}; border: none; padding: 1.2rem 3rem; border-radius: 0.5rem; font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer; margin-right: 1rem; transition: all 0.3s;">Get Started Now</button>
                                <button style="background: transparent; color: ${colors.primary}; border: 2px solid ${colors.primary}; padding: 1.2rem 3rem; border-radius: 0.5rem; font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer; transition: all 0.3s;">Learn More</button>
                            </div>
                        </div>
                    </section>
                    <section style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                            ${data.navLinks.map(link => `
                                <div style="text-align: center; padding: 2rem; background: ${colors.surface}; border-radius: 0.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                    <div style="width: 60px; height: 60px; background: ${colors.accent}; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold};">${link[0]}</div>
                                    <h3 style="color: ${colors.primary}; margin-bottom: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">${link}</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6;">Feature description for ${link.toLowerCase()} with compelling benefits and value proposition.</p>
                                </div>
                            `).join('')}
                        </div>
                        <div style="text-align: center; margin-top: 4rem; padding: 3rem; background: ${colors.surface}; border-radius: 0.5rem;">
                            <div style="color: ${colors.text}; line-height: 1.6; font-size: 1.1rem;">${data.mainContent}</div>
                        </div>
                    </section>
                </div>
            `
        },

        dashboard: {
            name: 'Dashboard',
            generate: (data, style, colors) => `
                <div style="display: grid; grid-template-columns: 280px 1fr; grid-template-rows: 70px 1fr; height: 100vh; font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.surface};">
                    <div style="grid-column: 1 / -1; background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold;">DASHBOARD TEMPLATE</div>
                    <header style="grid-column: 1 / -1; background: ${colors.background}; border-bottom: 1px solid ${colors.border}; display: flex; align-items: center; justify-content: space-between; padding: 0 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                        <h1 style="font-size: 1.3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin: 0;">${data.siteTitle}</h1>
                        <div style="display: flex; align-items: center; gap: 1.5rem;">
                            <span style="font-size: 0.9rem; color: ${colors.text};">Welcome back, Admin</span>
                            <div style="width: 40px; height: 40px; background: ${colors.primary}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">A</div>
                        </div>
                    </header>
                    <nav style="background: ${colors.background}; border-right: 1px solid ${colors.border}; padding: 2rem 0; overflow-y: auto;">
                        <div style="padding: 0 1.5rem; margin-bottom: 2rem;">
                            <p style="font-size: 1rem; color: ${colors.secondary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin: 0;">${data.siteSubtitle}</p>
                        </div>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            ${data.navLinks.map((link, index) => `
                                <li style="margin-bottom: 0.5rem;">
                                    <a href="#" style="display: flex; align-items: center; padding: 1rem 1.5rem; color: ${index === 0 ? colors.primary : colors.text}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; transition: all 0.2s; background: ${index === 0 ? colors.surface : 'transparent'}; border-right: ${index === 0 ? '3px solid ' + colors.primary : '3px solid transparent'};">
                                        <span style="width: 24px; height: 24px; background: ${index === 0 ? colors.primary : colors.accent}; border-radius: 6px; margin-right: 1rem; opacity: 0.8; display: flex; align-items: center; justify-content: center; color: ${colors.background}; font-size: 0.8rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold};">${link[0]}</span>
                                        ${link}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </nav>
                    <main style="padding: 2rem; overflow-y: auto; background: ${colors.surface};">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                            <div style="background: ${colors.background}; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid ${colors.primary}; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                                <h3 style="color: ${colors.primary}; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Total Users</h3>
                                <p style="color: ${colors.text}; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; margin: 0;">12,847</p>
                            </div>
                            <div style="background: ${colors.background}; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid ${colors.accent}; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                                <h3 style="color: ${colors.accent}; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Revenue</h3>
                                <p style="color: ${colors.text}; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; margin: 0;">$48,392</p>
                            </div>
                            <div style="background: ${colors.background}; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid ${colors.secondary}; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                                <h3 style="color: ${colors.secondary}; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Growth</h3>
                                <p style="color: ${colors.text}; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; margin: 0;">+23.5%</p>
                            </div>
                        </div>
                        <div style="background: ${colors.background}; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <h2 style="color: ${colors.primary}; margin-bottom: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Dashboard Overview</h2>
                            <div style="color: ${colors.text}; line-height: 1.6;">${data.mainContent}</div>
                        </div>
                    </main>
                </div>
            `
        },

        blog: {
            name: 'Blog',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
                    <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold;">BLOG TEMPLATE</div>
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <div style="max-width: 1000px; margin: 0 auto; padding: 3rem 2rem;">
                        <header style="text-align: center; margin-bottom: 4rem; padding-bottom: 2rem; border-bottom: 1px solid ${colors.border};">
                            <h1 style="font-size: clamp(3rem, 5vw, 4rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.light}; color: ${colors.primary}; margin-bottom: 1rem; line-height: 1.2;">${data.siteTitle}</h1>
                            <p style="font-size: 1.3rem; color: ${colors.secondary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.normal};">${data.siteSubtitle}</p>
                        </header>
                        <article style="margin-bottom: 3rem;">
                            <div style="background: ${colors.surface}; padding: 3rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 2rem;">
                                <h2 style="color: ${colors.primary}; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; margin-bottom: 1rem; line-height: 1.3;">Featured Article</h2>
                                <div style="color: ${colors.text}; font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem;">${data.mainContent}</div>
                                <div style="display: flex; align-items: center; gap: 1rem; color: ${colors.secondary}; font-size: 0.9rem;">
                                    <span>By Admin</span>
                                    <span>•</span>
                                    <span>5 min read</span>
                                    <span>•</span>
                                    <span>Today</span>
                                </div>
                            </div>
                        </article>
                        <section>
                            <h3 style="color: ${colors.primary}; font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; margin-bottom: 2rem; padding-bottom: 0.5rem; border-bottom: 2px solid ${colors.border};">Recent Posts</h3>
                            <div style="display: grid; gap: 2rem;">
                                ${data.navLinks.map((link, index) => `
                                    <article style="display: grid; grid-template-columns: 200px 1fr; gap: 2rem; background: ${colors.surface}; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                        <div style="height: 120px; background: linear-gradient(135deg, ${colors.accent}, ${colors.secondary}); border-radius: 0.25rem; display: flex; align-items: center; justify-content: center; color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">${link}</div>
                                        <div>
                                            <h4 style="color: ${colors.primary}; font-size: 1.2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; margin-bottom: 0.5rem; line-height: 1.3;">Understanding ${link}</h4>
                                            <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1rem; font-size: 0.95rem;">Deep dive into ${link.toLowerCase()} with practical examples and expert insights for modern development.</p>
                                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                                <div style="color: ${colors.secondary}; font-size: 0.85rem;">
                                                    <span>3 days ago • 8 min read</span>
                                                </div>
                                                <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; font-size: 0.9rem;">Read more →</a>
                                            </div>
                                        </div>
                                    </article>
                                `).join('')}
                            </div>
                        </section>
                    </div>
                </div>
            `
        },

        ecommerce: {
            name: 'E-commerce',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
                    <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold;">ECOMMERCE TEMPLATE</div>
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
                        <header style="text-align: center; margin-bottom: 3rem; padding: 2rem 0;">
                            <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.siteTitle}</h1>
                            <p style="font-size: 1.2rem; color: ${colors.secondary}; margin-bottom: 2rem;">${data.siteSubtitle}</p>
                            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                                <select style="padding: 0.75rem 1rem; border: 1px solid ${colors.border}; border-radius: 0.375rem; background: ${colors.surface}; color: ${colors.text}; font-size: 0.9rem;">
                                    <option>All Categories</option>
                                    <option>Featured</option>
                                    <option>New Arrivals</option>
                                    <option>Best Sellers</option>
                                </select>
                                <select style="padding: 0.75rem 1rem; border: 1px solid ${colors.border}; border-radius: 0.375rem; background: ${colors.surface}; color: ${colors.text}; font-size: 0.9rem;">
                                    <option>Sort by Price</option>
                                    <option>Low to High</option>
                                    <option>High to Low</option>
                                </select>
                            </div>
                        </header>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                            ${data.navLinks.map((link, index) => `
                                <div style="background: ${colors.surface}; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.3s; cursor: pointer; position: relative;">
                                    <div style="position: absolute; top: 1rem; right: 1rem; background: ${colors.accent}; color: ${colors.background}; padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.8rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; z-index: 2;">${index % 2 === 0 ? 'Sale' : 'New'}</div>
                                    <div style="height: 220px; background: linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20); display: flex; align-items: center; justify-content: center; color: ${colors.primary}; border-bottom: 1px solid ${colors.border};">
                                        <h3 style="font-size: 1.2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; text-align: center;">${link}</h3>
                                    </div>
                                    <div style="padding: 1.5rem;">
                                        <h4 style="color: ${colors.primary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; margin-bottom: 0.5rem; font-size: 1.1rem;">${link} Product</h4>
                                        <p style="color: ${colors.text}; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">Premium quality ${link.toLowerCase()} with excellent features and competitive pricing.</p>
                                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                                            <div style="color: ${colors.primary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; font-size: 1.2rem;">$${(index + 1) * 29}.99</div>
                                            <div style="color: ${colors.secondary}; text-decoration: line-through; font-size: 0.9rem;">$${(index + 1) * 39}.99</div>
                                        </div>
                                        <button style="width: 100%; background: ${colors.primary}; color: ${colors.background}; border: none; padding: 0.75rem; border-radius: 0.375rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer; transition: background-color 0.3s;">Add to Cart</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div style="text-align: center; padding: 3rem; background: ${colors.surface}; border-radius: 0.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <h2 style="color: ${colors.primary}; font-size: 1.8rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; margin-bottom: 1rem;">About Our Store</h2>
                            <div style="color: ${colors.text}; line-height: 1.6; font-size: 1.1rem; max-width: 700px; margin: 0 auto;">${data.mainContent}</div>
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

    // Component templates for sidebar options
    pricing: {
        name: 'Pricing Table',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold; margin-bottom: 1rem; text-align: center;">PRICING TEMPLATE</div>
                <div style="max-width: 900px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Pricing Plans</h2>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
                        ${['Basic', 'Pro', 'Enterprise'].map((plan, index) => `
                            <div style="background: ${colors.surface}; border: ${index === 1 ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`}; border-radius: 0.5rem; padding: 2rem; text-align: center; position: relative;">
                                ${index === 1 ? `<div style="position: absolute; top: -0.5rem; left: 50%; transform: translateX(-50%); background: ${colors.primary}; color: ${colors.background}; padding: 0.25rem 1rem; border-radius: 1rem; font-size: 0.8rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Popular</div>` : ''}
                                <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.text}; margin-bottom: 0.5rem;">${plan}</h3>
                                <div style="margin-bottom: 1.5rem;">
                                    <span style="font-size: 2.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary};">$${[19, 49, 99][index]}</span>
                                    <span style="color: ${colors.secondary}; font-size: 0.9rem;">/mo</span>
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; text-align: left;">
                                    ${[
                                        ['Up to 5 projects', '5GB storage', 'Email support'],
                                        ['Unlimited projects', '50GB storage', 'Priority support', 'Advanced features'],
                                        ['Everything in Pro', '500GB storage', '24/7 phone support', 'Custom integrations']
                                    ][index].map(feature => `
                                        <li style="padding: 0.5rem 0; color: ${colors.text}; font-size: 0.9rem; display: flex; align-items: center;">
                                            <span style="color: ${colors.primary}; margin-right: 0.5rem;">✓</span>
                                            ${feature}
                                        </li>
                                    `).join('')}
                                </ul>
                                <button style="width: 100%; background: ${index === 1 ? colors.primary : 'transparent'}; color: ${index === 1 ? colors.background : colors.primary}; border: 1px solid ${colors.primary}; padding: 0.75rem; border-radius: 0.25rem; font-size: 0.9rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; cursor: pointer;">
                                    ${index === 1 ? 'Get Started' : 'Choose Plan'}
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    },

    testimonials: {
        name: 'Testimonials',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="max-width: 1000px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Customer Reviews</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        ${[
                            { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Exceptional quality and professional service. Highly recommend!' },
                            { name: 'Mike Chen', role: 'Designer', text: 'Amazing results that exceeded our expectations completely.' },
                            { name: 'Lisa Rodriguez', role: 'Marketing Manager', text: 'Outstanding work with great attention to detail and creativity.' }
                        ].map(testimonial => `
                            <div style="background: ${colors.surface}; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid ${colors.border};">
                                <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                                    <div style="width: 40px; height: 40px; background: ${colors.primary}; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem;">
                                        <span style="color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; font-size: 1rem;">${testimonial.name[0]}</span>
                                    </div>
                                    <div>
                                        <div style="font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.text}; font-size: 0.9rem;">${testimonial.name}</div>
                                        <div style="color: ${colors.secondary}; font-size: 0.8rem;">${testimonial.role}</div>
                                    </div>
                                </div>
                                <p style="color: ${colors.text}; font-size: 0.9rem; line-height: 1.5; margin: 0; font-style: italic;">"${testimonial.text}"</p>
                                <div style="color: ${colors.primary}; margin-top: 0.5rem; font-size: 0.8rem;">★★★★★</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    },

    features: {
        name: 'Features Grid',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="max-width: 1000px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Key Features</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                        ${[
                            { title: 'Fast Performance', desc: 'Lightning-fast load times and optimized performance.' },
                            { title: 'Secure & Safe', desc: 'Enterprise-grade security with data protection.' },
                            { title: 'Mobile Ready', desc: 'Fully responsive design for all devices.' },
                            { title: 'Easy to Use', desc: 'Intuitive interface with simple navigation.' },
                            { title: 'Analytics', desc: 'Detailed insights and performance tracking.' },
                            { title: 'Support', desc: '24/7 customer support and documentation.' }
                        ].map(feature => `
                            <div style="background: ${colors.surface}; padding: 1.5rem; border-radius: 0.5rem; border: 1px solid ${colors.border}; text-align: center;">
                                <div style="width: 50px; height: 50px; background: ${colors.primary}; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                    <span style="color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; font-size: 1.2rem;">✓</span>
                                </div>
                                <h3 style="font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.text}; margin-bottom: 0.5rem;">${feature.title}</h3>
                                <p style="color: ${colors.secondary}; font-size: 0.9rem; line-height: 1.4; margin: 0;">${feature.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    },

    comparison: {
        name: 'Comparison',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="max-width: 800px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Plan Comparison</h2>
                    <div style="background: ${colors.surface}; border-radius: 0.5rem; overflow: hidden; border: 1px solid ${colors.border};">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead style="background: ${colors.primary}; color: ${colors.background};">
                                <tr>
                                    <th style="padding: 1rem; text-align: left; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; font-size: 0.9rem;">Feature</th>
                                    <th style="padding: 1rem; text-align: center; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; font-size: 0.9rem;">Basic</th>
                                    <th style="padding: 1rem; text-align: center; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; font-size: 0.9rem;">Pro</th>
                                    <th style="padding: 1rem; text-align: center; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; font-size: 0.9rem;">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${[
                                    { feature: 'Storage', basic: '5GB', pro: '100GB', enterprise: '1TB' },
                                    { feature: 'Users', basic: '1', pro: '10', enterprise: 'Unlimited' },
                                    { feature: 'Support', basic: '❌', pro: '✅', enterprise: '✅' },
                                    { feature: 'API Access', basic: '❌', pro: '✅', enterprise: '✅' },
                                    { feature: 'Analytics', basic: '❌', pro: '✅', enterprise: '✅' }
                                ].map((row, index) => `
                                    <tr style="border-bottom: 1px solid ${colors.border}; ${index % 2 === 0 ? `background: ${colors.background};` : ''}">
                                        <td style="padding: 0.75rem 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text}; font-size: 0.9rem;">${row.feature}</td>
                                        <td style="padding: 0.75rem 1rem; text-align: center; color: ${colors.text}; font-size: 0.9rem;">${row.basic}</td>
                                        <td style="padding: 0.75rem 1rem; text-align: center; color: ${colors.text}; font-size: 0.9rem;">${row.pro}</td>
                                        <td style="padding: 0.75rem 1rem; text-align: center; color: ${colors.text}; font-size: 0.9rem;">${row.enterprise}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `
    },

    stats: {
        name: 'Statistics',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="max-width: 900px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Key Statistics</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
                        ${[
                            { number: '10,000+', label: 'Happy Customers' },
                            { number: '99.9%', label: 'Uptime' },
                            { number: '50+', label: 'Countries' },
                            { number: '24/7', label: 'Support' }
                        ].map(stat => `
                            <div style="text-align: center; background: ${colors.surface}; padding: 2rem 1rem; border-radius: 0.5rem; border: 1px solid ${colors.border};">
                                <div style="font-size: 2.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.5rem;">${stat.number}</div>
                                <div style="font-size: 1rem; color: ${colors.text}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">${stat.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    },

    cta: {
        name: 'Call-to-Action',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold; margin-bottom: 1rem; text-align: center;">CTA TEMPLATE</div>
                <div style="max-width: 600px; margin: 0 auto;">
                    <div style="background: ${colors.primary}; color: ${colors.background}; padding: 3rem 2rem; border-radius: 0.5rem; text-align: center;">
                        <h2 style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; margin-bottom: 1rem; line-height: 1.2;">Ready to Get Started?</h2>
                        <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.9; line-height: 1.5;">Join thousands of satisfied customers today.</p>
                        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                            <button style="background: ${colors.background}; color: ${colors.primary}; border: none; padding: 0.75rem 1.5rem; border-radius: 0.25rem; font-size: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer;">
                                Start Free Trial
                            </button>
                            <button style="background: transparent; color: ${colors.background}; border: 1px solid ${colors.background}; padding: 0.75rem 1.5rem; border-radius: 0.25rem; font-size: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer;">
                                Learn More
                            </button>
                        </div>
                        <p style="margin-top: 1.5rem; font-size: 0.8rem; opacity: 0.7;">No credit card required • 30-day guarantee</p>
                    </div>
                </div>
            </div>
        `
    },

    gallery: {
        name: 'Image Gallery',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="max-width: 1000px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Project Gallery</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        ${Array.from({length: 6}, (_, i) => `
                            <div style="background: ${colors.surface}; border-radius: 0.5rem; overflow: hidden; border: 1px solid ${colors.border}; aspect-ratio: 1;">
                                <div style="width: 100%; height: 100%; background: linear-gradient(135deg, ${colors.primary}15, ${colors.secondary || colors.primary}15); display: flex; align-items: center; justify-content: center; color: ${colors.primary}; font-size: 2rem;">
                                    IMG
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    },

    contact: {
        name: 'Contact Form',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold; margin-bottom: 1rem; text-align: center;">CONTACT TEMPLATE</div>
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Contact Us</h2>
                    <div style="background: ${colors.surface}; padding: 2rem; border-radius: 0.5rem; border: 1px solid ${colors.border};">
                        <form style="display: flex; flex-direction: column; gap: 1rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="display: block; margin-bottom: 0.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text}; font-size: 0.9rem;">First Name</label>
                                    <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 0.25rem; font-size: 0.9rem; background: ${colors.background}; color: ${colors.text};" placeholder="John">
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 0.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text}; font-size: 0.9rem;">Last Name</label>
                                    <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 0.25rem; font-size: 0.9rem; background: ${colors.background}; color: ${colors.text};" placeholder="Doe">
                                </div>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text}; font-size: 0.9rem;">Email</label>
                                <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 0.25rem; font-size: 0.9rem; background: ${colors.background}; color: ${colors.text};" placeholder="john@example.com">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text}; font-size: 0.9rem;">Message</label>
                                <textarea style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 0.25rem; font-size: 0.9rem; background: ${colors.background}; color: ${colors.text}; min-height: 80px; resize: vertical;" placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit" style="background: ${colors.primary}; color: ${colors.background}; border: none; padding: 0.75rem 1.5rem; border-radius: 0.25rem; font-size: 0.9rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer;">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `
    },

    team: {
        name: 'Team Members',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="background: ${colors.primary}; color: ${colors.background}; padding: 4px 8px; font-size: 10px; font-weight: bold; margin-bottom: 1rem; text-align: center;">TEAM TEMPLATE</div>
                <div style="max-width: 900px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Our Team</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                        ${[
                            { name: 'Sarah Johnson', role: 'CEO & Founder' },
                            { name: 'Michael Chen', role: 'Lead Developer' },
                            { name: 'Emily Rodriguez', role: 'Design Director' },
                            { name: 'David Wilson', role: 'Marketing Head' }
                        ].map(member => `
                            <div style="background: ${colors.surface}; padding: 1.5rem; border-radius: 0.5rem; text-align: center; border: 1px solid ${colors.border};">
                                <div style="width: 80px; height: 80px; background: ${colors.primary}; border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold};">
                                    ${member.name[0]}
                                </div>
                                <h3 style="font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.text}; margin-bottom: 0.25rem;">${member.name}</h3>
                                <p style="color: ${colors.secondary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; font-size: 0.9rem; margin: 0;">${member.role}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
    },

    faq: {
        name: 'FAQ Section',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; padding: 3rem 2rem;">
                <div style="max-width: 700px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">FAQ</h2>
                    <div>
                        ${[
                            { q: 'How do I get started?', a: 'Sign up for an account and follow the onboarding process.' },
                            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards and PayPal.' },
                            { q: 'Is there a free trial?', a: 'Yes! 30-day free trial with full access.' },
                            { q: 'Can I cancel anytime?', a: 'Yes, cancel anytime from your account settings.' }
                        ].map((faq, index) => `
                            <div style="background: ${colors.surface}; border: 1px solid ${colors.border}; border-radius: 0.5rem; margin-bottom: 1rem; overflow: hidden;">
                                <div style="padding: 1rem; border-bottom: 1px solid ${colors.border};">
                                    <div style="font-size: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.text}; margin-bottom: 0.5rem;">${faq.q}</div>
                                    <div style="font-size: 0.9rem; color: ${colors.secondary}; line-height: 1.4;">${faq.a}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `
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
    `,

    // Multi-page template system
    pages: {
        about: {
            name: 'About',
            description: 'Company and team information',
            generateContent: (data, colors) => `
                <section style="padding: 4rem 0; background: ${colors.background};">
                    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                        <div style="text-align: center; margin-bottom: 3rem;">
                            <h1 style="font-size: 3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">About ${data.siteTitle}</h1>
                            <p style="font-size: 1.25rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">Learn more about our story, mission, and the team behind our success.</p>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-bottom: 4rem;">
                            <div>
                                <h2 style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1.5rem;">Our Story</h2>
                                <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1rem;">Founded with a vision to make a difference, we've been dedicated to providing exceptional solutions that meet our clients' evolving needs.</p>
                                <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1rem;">Our journey began with a simple idea: to create products and services that truly matter. Today, we continue to innovate and push boundaries.</p>
                                <p style="color: ${colors.text}; line-height: 1.6;">We believe in building lasting relationships with our clients, partners, and community through transparency, quality, and exceptional service.</p>
                            </div>
                            <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border};">
                                <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Our Mission</h3>
                                <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">To empower businesses and individuals with innovative solutions that drive growth and success in an ever-changing world.</p>
                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                                    <div style="text-align: center; padding: 1rem;">
                                        <div style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.accent};">500+</div>
                                        <div style="color: ${colors.secondary}; font-size: 0.9rem;">Happy Clients</div>
                                    </div>
                                    <div style="text-align: center; padding: 1rem;">
                                        <div style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.accent};">5+</div>
                                        <div style="color: ${colors.secondary}; font-size: 0.9rem;">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style="text-align: center;">
                            <h2 style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 3rem;">Our Values</h2>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                                <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border};">
                                    <div style="width: 60px; height: 60px; background: ${colors.accent}; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;">
                                        <svg width="30" height="30" fill="white" viewBox="0 0 24 24"><path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/></svg>
                                    </div>
                                    <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Innovation</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6;">We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
                                </div>
                                <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border};">
                                    <div style="width: 60px; height: 60px; background: ${colors.accent}; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;">
                                        <svg width="30" height="30" fill="white" viewBox="0 0 24 24"><path d="M16 4C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8C4 5.79086 5.79086 4 8 4H16ZM8.5 8.5C8.22386 8.5 8 8.72386 8 9V15C8 15.2761 8.22386 15.5 8.5 15.5C8.77614 15.5 9 15.2761 9 15V9C9 8.72386 8.77614 8.5 8.5 8.5ZM12 8.5C11.7239 8.5 11.5 8.72386 11.5 9V15C11.5 15.2761 11.7239 15.5 11.5 15.5C11.7761 15.5 12 15.2761 12 15V9C12 8.72386 11.7761 8.5 12 8.5ZM15.5 8.5C15.2239 8.5 15 8.72386 15 9V15C15 15.2761 15.2239 15.5 15.5 15.5C15.7761 15.5 16 15.2761 16 15V9C16 8.72386 15.7761 8.5 15.5 8.5Z"/></svg>
                                    </div>
                                    <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Quality</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6;">Every project receives our full attention to detail and commitment to excellence.</p>
                                </div>
                                <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border};">
                                    <div style="width: 60px; height: 60px; background: ${colors.accent}; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;">
                                        <svg width="30" height="30" fill="white" viewBox="0 0 24 24"><path d="M12 1L15.09 8.26L23 9L17 14.74L18.18 22.5L12 19.77L5.82 22.5L7 14.74L1 9L8.91 8.26L12 1Z"/></svg>
                                    </div>
                                    <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Trust</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6;">Building long-term relationships through transparency, reliability, and exceptional service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `
        },

        services: {
            name: 'Services',
            description: 'Service offerings and capabilities',
            generateContent: (data, colors) => `
                <section style="padding: 4rem 0; background: ${colors.background};">
                    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                        <div style="text-align: center; margin-bottom: 4rem;">
                            <h1 style="font-size: 3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Our Services</h1>
                            <p style="font-size: 1.25rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">Comprehensive solutions designed to help your business grow and succeed in today's competitive landscape.</p>
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                            <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border}; position: relative; overflow: hidden;">
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: ${colors.accent};"></div>
                                <div style="width: 60px; height: 60px; background: ${colors.accent}; border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center;">
                                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24"><path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/></svg>
                                </div>
                                <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Consulting</h3>
                                <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">Strategic guidance and expert advice to help you navigate challenges and identify opportunities for growth.</p>
                                <ul style="color: ${colors.text}; line-height: 1.6; margin: 0; padding-left: 1.5rem;">
                                    <li>Business strategy development</li>
                                    <li>Market analysis and research</li>
                                    <li>Process optimisation</li>
                                    <li>Risk assessment and mitigation</li>
                                </ul>
                            </div>

                            <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border}; position: relative; overflow: hidden;">
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: ${colors.accent};"></div>
                                <div style="width: 60px; height: 60px; background: ${colors.accent}; border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center;">
                                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24"><path d="M14.2 6L15.8 3.5L19.3 5.1L17.7 7.6L19.3 10.1L15.8 11.7L14.2 9.2L12.6 11.7L9.1 10.1L10.7 7.6L9.1 5.1L12.6 3.5L14.2 6ZM11 14V22H13V16H15V22H17V14H11ZM7 14V16H3V14H7ZM7 18V20H3V18H7Z"/></svg>
                                </div>
                                <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Development</h3>
                                <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">Custom software solutions built to your exact specifications using the latest technologies and best practices.</p>
                                <ul style="color: ${colors.text}; line-height: 1.6; margin: 0; padding-left: 1.5rem;">
                                    <li>Web application development</li>
                                    <li>Mobile app development</li>
                                    <li>API design and integration</li>
                                    <li>Database design and optimisation</li>
                                </ul>
                            </div>

                            <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border}; position: relative; overflow: hidden;">
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: ${colors.accent};"></div>
                                <div style="width: 60px; height: 60px; background: ${colors.accent}; border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center;">
                                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V7.5C15 8.1 14.6 8.5 14 8.5S13 8.1 13 7.5V6.5L9 7V9C9 10.1 9.9 11 11 11V12.5H10V15H14V12.5H13V11C14.1 11 15 10.1 15 9ZM7.5 12C7.8 12 8 12.2 8 12.5S7.8 13 7.5 13 7 12.8 7 12.5 7.2 12 7.5 12ZM16.5 12C16.8 12 17 12.2 17 12.5S16.8 13 16.5 13 16 12.8 16 12.5 16.2 12 16.5 12Z"/></svg>
                                </div>
                                <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Support</h3>
                                <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">Ongoing maintenance and support to ensure your systems run smoothly and your business continues to thrive.</p>
                                <ul style="color: ${colors.text}; line-height: 1.6; margin: 0; padding-left: 1.5rem;">
                                    <li>24/7 technical support</li>
                                    <li>System monitoring and maintenance</li>
                                    <li>Regular updates and security patches</li>
                                    <li>Training and documentation</li>
                                </ul>
                            </div>
                        </div>

                        <div style="background: ${colors.surface}; padding: 3rem; border-radius: 12px; border: 1px solid ${colors.border}; text-align: center;">
                            <h2 style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Ready to Get Started?</h2>
                            <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 2rem; max-width: 500px; margin-left: auto; margin-right: auto;">Let's discuss your project and how we can help bring your vision to life with our expert solutions.</p>
                            <a href="#contact" style="background: ${colors.accent}; color: white; padding: 0.75rem 2rem; border-radius: 6px; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; display: inline-block; transition: all 0.3s;">Contact Us Today</a>
                        </div>
                    </div>
                </section>
            `
        },

        portfolio: {
            name: 'Portfolio',
            description: 'Project showcase and case studies',
            generateContent: (data, colors) => `
                <section style="padding: 4rem 0; background: ${colors.background};">
                    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                        <div style="text-align: center; margin-bottom: 4rem;">
                            <h1 style="font-size: 3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Our Portfolio</h1>
                            <p style="font-size: 1.25rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">Discover some of our recent projects and see how we've helped businesses achieve their goals.</p>
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
                            <div style="background: ${colors.surface}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border};">
                                <div style="height: 250px; background: linear-gradient(135deg, ${colors.accent}, ${colors.primary}); position: relative;">
                                    <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(255,255,255,0.9); padding: 0.5rem 1rem; border-radius: 6px;">
                                        <span style="color: ${colors.primary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; font-size: 0.9rem;">Web Application</span>
                                    </div>
                                </div>
                                <div style="padding: 2rem;">
                                    <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">E-commerce Platform</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">A comprehensive online store solution with advanced inventory management, payment processing, and customer analytics.</p>
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">React</span>
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Node.js</span>
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">PostgreSQL</span>
                                    </div>
                                    <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">View Case Study →</a>
                                </div>
                            </div>

                            <div style="background: ${colors.surface}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border};">
                                <div style="height: 250px; background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent}); position: relative;">
                                    <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(255,255,255,0.9); padding: 0.5rem 1rem; border-radius: 6px;">
                                        <span style="color: ${colors.primary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; font-size: 0.9rem;">Mobile App</span>
                                    </div>
                                </div>
                                <div style="padding: 2rem;">
                                    <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Fitness Tracking App</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">A comprehensive fitness application with workout planning, progress tracking, and social features for motivation.</p>
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">React Native</span>
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Firebase</span>
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Redux</span>
                                    </div>
                                    <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">View Case Study →</a>
                                </div>
                            </div>

                            <div style="background: ${colors.surface}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border};">
                                <div style="height: 250px; background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); position: relative;">
                                    <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(255,255,255,0.9); padding: 0.5rem 1rem; border-radius: 6px;">
                                        <span style="color: ${colors.primary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; font-size: 0.9rem;">Dashboard</span>
                                    </div>
                                </div>
                                <div style="padding: 2rem;">
                                    <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Analytics Dashboard</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">A comprehensive analytics platform with real-time data visualisation, custom reporting, and team collaboration features.</p>
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Vue.js</span>
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Python</span>
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">MongoDB</span>
                                    </div>
                                    <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">View Case Study →</a>
                                </div>
                            </div>

                            <div style="background: ${colors.surface}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border};">
                                <div style="height: 250px; background: linear-gradient(135deg, ${colors.accent}, ${colors.secondary}); position: relative;">
                                    <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(255,255,255,0.9); padding: 0.5rem 1rem; border-radius: 6px;">
                                        <span style="color: ${colors.primary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; font-size: 0.9rem;">Website</span>
                                    </div>
                                </div>
                                <div style="padding: 2rem;">
                                    <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Corporate Website</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">A professional corporate website with content management system, multi-language support, and SEO optimisation.</p>
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Next.js</span>
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Strapi</span>
                                        <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Tailwind</span>
                                    </div>
                                    <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">View Case Study →</a>
                                </div>
                            </div>
                        </div>

                        <div style="text-align: center;">
                            <h2 style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 2rem;">Let's Build Something Amazing Together</h2>
                            <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 2rem; max-width: 500px; margin-left: auto; margin-right: auto;">Ready to start your next project? We'd love to hear about your ideas and discuss how we can bring them to life.</p>
                            <a href="#contact" style="background: ${colors.accent}; color: white; padding: 1rem 2rem; border-radius: 6px; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin-right: 1rem; display: inline-block; transition: all 0.3s;">Start a Project</a>
                            <a href="#services" style="border: 2px solid ${colors.accent}; color: ${colors.accent}; padding: 0.875rem 2rem; border-radius: 6px; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; display: inline-block; transition: all 0.3s;">View Services</a>
                        </div>
                    </div>
                </section>
            `
        },

        blog: {
            name: 'Blog',
            description: 'Articles and insights',
            generateContent: (data, colors) => `
                <section style="padding: 4rem 0; background: ${colors.background};">
                    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                        <div style="text-align: center; margin-bottom: 4rem;">
                            <h1 style="font-size: 3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Our Blog</h1>
                            <p style="font-size: 1.25rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">Stay updated with the latest insights, tutorials, and industry trends from our team of experts.</p>
                        </div>

                        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; margin-bottom: 4rem;">
                            <div>
                                <article style="background: ${colors.surface}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border}; margin-bottom: 2rem;">
                                    <div style="height: 300px; background: linear-gradient(135deg, ${colors.accent}, ${colors.primary}); position: relative;">
                                        <div style="position: absolute; top: 1rem; left: 1rem;">
                                            <span style="background: rgba(255,255,255,0.9); color: ${colors.primary}; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.9rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">Featured</span>
                                        </div>
                                    </div>
                                    <div style="padding: 2rem;">
                                        <div style="display: flex; align-items: center; margin-bottom: 1rem; gap: 1rem;">
                                            <span style="color: ${colors.secondary}; font-size: 0.9rem;">March 15, 2024</span>
                                            <span style="color: ${colors.secondary};">•</span>
                                            <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Technology</span>
                                        </div>
                                        <h2 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">The Future of Web Development: Trends to Watch in 2024</h2>
                                        <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps and the evolution of frontend frameworks.</p>
                                        <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">Read More →</a>
                                    </div>
                                </article>

                                <div style="display: grid; gap: 2rem;">
                                    <article style="background: ${colors.surface}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border}; display: grid; grid-template-columns: 200px 1fr; gap: 0;">
                                        <div style="height: 150px; background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});"></div>
                                        <div style="padding: 1.5rem;">
                                            <div style="display: flex; align-items: center; margin-bottom: 0.75rem; gap: 1rem;">
                                                <span style="color: ${colors.secondary}; font-size: 0.9rem;">March 12, 2024</span>
                                                <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Design</span>
                                            </div>
                                            <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.75rem;">Designing for Accessibility: A Complete Guide</h3>
                                            <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1rem;">Learn how to create inclusive designs that work for everyone, including best practices for colour, typography, and interactive elements.</p>
                                            <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">Read More →</a>
                                        </div>
                                    </article>

                                    <article style="background: ${colors.surface}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border}; display: grid; grid-template-columns: 200px 1fr; gap: 0;">
                                        <div style="height: 150px; background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});"></div>
                                        <div style="padding: 1.5rem;">
                                            <div style="display: flex; align-items: center; margin-bottom: 0.75rem; gap: 1rem;">
                                                <span style="color: ${colors.secondary}; font-size: 0.9rem;">March 10, 2024</span>
                                                <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Business</span>
                                            </div>
                                            <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.75rem;">Digital Transformation: A Strategic Approach</h3>
                                            <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1rem;">Discover how businesses can successfully navigate digital transformation with the right strategy, tools, and mindset.</p>
                                            <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">Read More →</a>
                                        </div>
                                    </article>

                                    <article style="background: ${colors.surface}; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border}; display: grid; grid-template-columns: 200px 1fr; gap: 0;">
                                        <div style="height: 150px; background: linear-gradient(135deg, ${colors.accent}, ${colors.primary});"></div>
                                        <div style="padding: 1.5rem;">
                                            <div style="display: flex; align-items: center; margin-bottom: 0.75rem; gap: 1rem;">
                                                <span style="color: ${colors.secondary}; font-size: 0.9rem;">March 8, 2024</span>
                                                <span style="background: ${colors.border}; color: ${colors.text}; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.8rem;">Tutorial</span>
                                            </div>
                                            <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.75rem;">Building Scalable APIs with Node.js</h3>
                                            <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1rem;">A comprehensive guide to creating robust, scalable APIs using Node.js, Express, and modern development practices.</p>
                                            <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">Read More →</a>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <aside>
                                <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border}; margin-bottom: 2rem;">
                                    <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1.5rem;">Popular Posts</h3>
                                    <div style="space-y: 1rem;">
                                        <article style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid ${colors.border};">
                                            <h4 style="font-size: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.primary}; margin-bottom: 0.5rem;">5 Essential Tools for Modern Developers</h4>
                                            <p style="color: ${colors.secondary}; font-size: 0.9rem;">March 5, 2024</p>
                                        </article>
                                        <article style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid ${colors.border};">
                                            <h4 style="font-size: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.primary}; margin-bottom: 0.5rem;">CSS Grid vs Flexbox: When to Use Which</h4>
                                            <p style="color: ${colors.secondary}; font-size: 0.9rem;">March 2, 2024</p>
                                        </article>
                                        <article>
                                            <h4 style="font-size: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.primary}; margin-bottom: 0.5rem;">The Complete Guide to React Hooks</h4>
                                            <p style="color: ${colors.secondary}; font-size: 0.9rem;">February 28, 2024</p>
                                        </article>
                                    </div>
                                </div>

                                <div style="background: ${colors.surface}; padding: 2rem; border-radius: 12px; border: 1px solid ${colors.border};">
                                    <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Newsletter</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem;">Subscribe to our newsletter for the latest updates and insights.</p>
                                    <div style="margin-bottom: 1rem;">
                                        <input type="email" placeholder="Enter your email" style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 6px; font-size: 1rem; margin-bottom: 1rem;">
                                        <button style="width: 100%; background: ${colors.accent}; color: white; padding: 0.75rem; border: none; border-radius: 6px; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; cursor: pointer;">Subscribe</button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            `
        },

        contact: {
            name: 'Contact',
            description: 'Contact information and forms',
            generateContent: (data, colors) => `
                <section style="padding: 4rem 0; background: ${colors.background};">
                    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                        <div style="text-align: center; margin-bottom: 4rem;">
                            <h1 style="font-size: 3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Contact Us</h1>
                            <p style="font-size: 1.25rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">Get in touch with us today. We'd love to hear about your project and discuss how we can help.</p>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-bottom: 4rem;">
                            <div>
                                <h2 style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 2rem;">Send us a Message</h2>
                                
                                <form style="space-y: 1.5rem;">
                                    <div style="margin-bottom: 1.5rem;">
                                        <label style="display: block; color: ${colors.text}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin-bottom: 0.5rem;">Full Name</label>
                                        <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 6px; font-size: 1rem; background: ${colors.background};">
                                    </div>
                                    
                                    <div style="margin-bottom: 1.5rem;">
                                        <label style="display: block; color: ${colors.text}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin-bottom: 0.5rem;">Email Address</label>
                                        <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 6px; font-size: 1rem; background: ${colors.background};">
                                    </div>
                                    
                                    <div style="margin-bottom: 1.5rem;">
                                        <label style="display: block; color: ${colors.text}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin-bottom: 0.5rem;">Subject</label>
                                        <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 6px; font-size: 1rem; background: ${colors.background};">
                                    </div>
                                    
                                    <div style="margin-bottom: 2rem;">
                                        <label style="display: block; color: ${colors.text}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin-bottom: 0.5rem;">Message</label>
                                        <textarea rows="6" style="width: 100%; padding: 0.75rem; border: 1px solid ${colors.border}; border-radius: 6px; font-size: 1rem; background: ${colors.background}; resize: vertical;"></textarea>
                                    </div>
                                    
                                    <button type="submit" style="background: ${colors.accent}; color: white; padding: 1rem 2rem; border: none; border-radius: 6px; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; cursor: pointer; font-size: 1rem; transition: all 0.3s;">Send Message</button>
                                </form>
                            </div>

                            <div>
                                <h2 style="font-size: 2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 2rem;">Get in Touch</h2>
                                
                                <div style="space-y: 2rem;">
                                    <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 2rem;">
                                        <div style="width: 50px; height: 50px; background: ${colors.accent}; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.5rem;">Office Address</h3>
                                            <p style="color: ${colors.text}; line-height: 1.6;">123 Business Street<br>London, SW1A 1AA<br>United Kingdom</p>
                                        </div>
                                    </div>

                                    <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 2rem;">
                                        <div style="width: 50px; height: 50px; background: ${colors.accent}; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                                                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.5rem;">Phone</h3>
                                            <p style="color: ${colors.text}; line-height: 1.6;">+44 20 7123 4567<br>+44 20 7123 4568</p>
                                        </div>
                                    </div>

                                    <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 2rem;">
                                        <div style="width: 50px; height: 50px; background: ${colors.accent}; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.5rem;">Email</h3>
                                            <p style="color: ${colors.text}; line-height: 1.6;">hello@${data.siteTitle.toLowerCase().replace(/\s+/g, '')}.com<br>support@${data.siteTitle.toLowerCase().replace(/\s+/g, '')}.com</p>
                                        </div>
                                    </div>

                                    <div style="display: flex; align-items: start; gap: 1rem;">
                                        <div style="width: 50px; height: 50px; background: ${colors.accent}; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.5rem;">Business Hours</h3>
                                            <p style="color: ${colors.text}; line-height: 1.6;">Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday - Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div style="margin-top: 3rem; padding: 2rem; background: ${colors.surface}; border-radius: 12px; border: 1px solid ${colors.border};">
                                    <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Follow Us</h3>
                                    <div style="display: flex; gap: 1rem;">
                                        <a href="#" style="width: 40px; height: 40px; background: ${colors.accent}; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none;">
                                            <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M24 4.557C23.117 4.949 22.168 5.213 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.608C22.386 3.172 21.332 3.582 20.21 3.803C19.313 2.846 18.032 2.248 16.616 2.248C13.437 2.248 11.101 5.214 11.819 8.293C7.728 8.088 4.1 6.128 1.671 3.149C0.381 5.362 1.002 8.257 3.194 9.723C2.388 9.697 1.628 9.476 0.965 9.107C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.106C22.505 6.411 23.34 5.544 24 4.557Z"/></svg>
                                        </a>
                                        <a href="#" style="width: 40px; height: 40px; background: ${colors.accent}; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none;">
                                            <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/></svg>
                                        </a>
                                        <a href="#" style="width: 40px; height: 40px; background: ${colors.accent}; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none;">
                                            <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/></svg>
                                        </a>
                                        <a href="#" style="width: 40px; height: 40px; background: ${colors.accent}; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none;">
                                            <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987C.029 17.396 3.904 21.989 9.028 22.852V14.842H6.506V11.987H9.028V9.348C9.028 6.852 10.577 5.42 12.841 5.42C13.915 5.42 15.042 5.611 15.042 5.611V8.048H13.804C12.582 8.048 12.017 8.767 12.017 9.507V11.987H14.931L14.311 14.842H12.017V22.852C17.141 21.989 21.017 17.396 21.017 11.987C21.017 5.367 15.637.001 12.017.001Z"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            `
        }
    },

    // Enhanced navigation generator with mobile support
    generateNavigation: (data, colors, currentPage = 'home') => `
        <nav style="background: ${colors.background}; border-bottom: 1px solid ${colors.border}; position: sticky; top: 0; z-index: 100; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; height: 4rem;">
                    <!-- Logo/Brand -->
                    <div style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary};">
                        ${data.siteTitle}
                    </div>
                    
                    <!-- Desktop Navigation -->
                    <div class="desktop-nav" style="display: flex; align-items: center;">
                        <ul style="display: flex; list-style: none; gap: 2rem; margin: 0; padding: 0; align-items: center;">
                            ${data.navLinks.map(link => {
                                const linkId = link.toLowerCase().replace(/\s+/g, '-');
                                const isActive = currentPage === linkId || (currentPage === 'home' && link === 'Home');
                                return `<li>
                                    <a href="#${linkId}" 
                                       onclick="showPage('${linkId}')" 
                                       style="color: ${isActive ? colors.accent : colors.text}; 
                                              text-decoration: none; 
                                              font-weight: ${isActive ? DesignTemplates.fonts[data.fontFamily].weights.bold : DesignTemplates.fonts[data.fontFamily].weights.medium}; 
                                              transition: color 0.3s; 
                                              padding: 0.5rem 0; 
                                              border-bottom: ${isActive ? `2px solid ${colors.accent}` : '2px solid transparent'};">
                                        ${link}
                                    </a>
                                </li>`;
                            }).join('')}
                        </ul>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button class="mobile-menu-btn" 
                            onclick="toggleMobileMenu()"
                            style="display: none; background: none; border: none; cursor: pointer; padding: 0.5rem;">
                        <svg width="24" height="24" fill="${colors.text}" viewBox="0 0 24 24">
                            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Mobile Navigation -->
                <div class="mobile-nav" 
                     style="display: none; background: ${colors.surface}; border-top: 1px solid ${colors.border}; margin: 0 -2rem;">
                    <ul style="list-style: none; margin: 0; padding: 1rem 0;">
                        ${data.navLinks.map(link => {
                            const linkId = link.toLowerCase().replace(/\s+/g, '-');
                            const isActive = currentPage === linkId || (currentPage === 'home' && link === 'Home');
                            return `<li>
                                <a href="#${linkId}" 
                                   onclick="showPage('${linkId}'); toggleMobileMenu();" 
                                   style="display: block; 
                                          color: ${isActive ? colors.accent : colors.text}; 
                                          text-decoration: none; 
                                          font-weight: ${isActive ? DesignTemplates.fonts[data.fontFamily].weights.bold : DesignTemplates.fonts[data.fontFamily].weights.medium}; 
                                          padding: 0.75rem 2rem; 
                                          transition: background-color 0.3s; 
                                          background: ${isActive ? `${colors.accent}15` : 'transparent'};">
                                    ${link}
                                </a>
                            </li>`;
                        }).join('')}
                    </ul>
                </div>
            </div>
        </nav>
        
        <style>
            @media (max-width: 768px) {
                .desktop-nav { display: none !important; }
                .mobile-menu-btn { display: block !important; }
            }
            
            .mobile-nav.show {
                display: block !important;
            }
        </style>
    `,

    // Generate complete multi-page website
    generateMultiPageSite: (data, style, currentPage = 'home') => {
        const colors = DesignTemplates.styles[style].colors;
        const navigation = DesignTemplates.generateNavigation(data, colors, currentPage);
        
        // Get the current page content
        let mainContent = '';
        
        if (currentPage === 'home' || currentPage === 'homepage') {
            // Use the existing homepage template
            const template = data.template || 'hero';
            mainContent = DesignTemplates.templates[template] || DesignTemplates.templates.hero;
        } else if (DesignTemplates.pages[currentPage]) {
            mainContent = DesignTemplates.pages[currentPage].generateContent(data, colors);
        } else {
            // Default to homepage if page not found
            mainContent = DesignTemplates.templates.hero;
        }
        
        // Generate footer
        const footer = `
            <footer style="background: ${colors.surface}; border-top: 1px solid ${colors.border}; padding: 3rem 0;">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
                        <div>
                            <h3 style="font-size: 1.25rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.siteTitle}</h3>
                            <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1rem;">Building exceptional digital experiences that help businesses grow and succeed in today's competitive landscape.</p>
                            <div style="display: flex; gap: 1rem;">
                                <a href="#" style="color: ${colors.secondary}; transition: color 0.3s;">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557C23.117 4.949 22.168 5.213 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.608C22.386 3.172 21.332 3.582 20.21 3.803C19.313 2.846 18.032 2.248 16.616 2.248C13.437 2.248 11.101 5.214 11.819 8.293C7.728 8.088 4.1 6.128 1.671 3.149C0.381 5.362 1.002 8.257 3.194 9.723C2.388 9.697 1.628 9.476 0.965 9.107C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.106C22.505 6.411 23.34 5.544 24 4.557Z"/></svg>
                                </a>
                                <a href="#" style="color: ${colors.secondary}; transition: color 0.3s;">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/></svg>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 style="font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Quick Links</h4>
                            <ul style="list-style: none; margin: 0; padding: 0;">
                                ${data.navLinks.map(link => {
                                    const linkId = link.toLowerCase().replace(/\s+/g, '-');
                                    return `<li style="margin-bottom: 0.5rem;">
                                        <a href="#${linkId}" onclick="showPage('${linkId}')" style="color: ${colors.text}; text-decoration: none; transition: color 0.3s;">${link}</a>
                                    </li>`;
                                }).join('')}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 style="font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Contact Info</h4>
                            <div style="color: ${colors.text}; line-height: 1.6;">
                                <p style="margin-bottom: 0.5rem;">123 Business Street</p>
                                <p style="margin-bottom: 0.5rem;">London, SW1A 1AA</p>
                                <p style="margin-bottom: 0.5rem;">+44 20 7123 4567</p>
                                <p>hello@${data.siteTitle.toLowerCase().replace(/\s+/g, '')}.com</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="border-top: 1px solid ${colors.border}; padding-top: 2rem; text-align: center;">
                        <p style="color: ${colors.secondary}; margin: 0;">&copy; ${new Date().getFullYear()} ${data.siteTitle}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
        
        return `
            ${navigation}
            <main>
                ${mainContent}
            </main>
            ${footer}
            
            <script>
                // Page navigation functionality
                function showPage(pageId) {
                    // Update the current page and regenerate
                    window.currentPage = pageId;
                    updatePage();
                }
                
                function toggleMobileMenu() {
                    const mobileNav = document.querySelector('.mobile-nav');
                    mobileNav.classList.toggle('show');
                }
                
                // Close mobile menu when clicking outside
                document.addEventListener('click', function(e) {
                    if (!e.target.closest('nav') && document.querySelector('.mobile-nav.show')) {
                        toggleMobileMenu();
                    }
                });
                
                // Handle responsive navigation
                function handleResize() {
                    if (window.innerWidth > 768) {
                        document.querySelector('.mobile-nav').classList.remove('show');
                    }
                }
                
                window.addEventListener('resize', handleResize);
            </script>
        `;
    }
};