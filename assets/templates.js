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
        },

        masonry: {
            name: 'Masonry',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <div style="padding: 2rem; max-width: 1200px; margin: 0 auto;">
                        <header style="text-align: center; margin-bottom: 3rem;">
                            <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.siteTitle}</h1>
                            <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">${data.siteSubtitle}</p>
                        </header>
                        <div style="columns: 3; column-gap: 2rem; column-fill: balance;">
                            <div style="background: ${colors.surface}; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem; break-inside: avoid; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                <h3 style="color: ${colors.primary}; margin-bottom: 1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Featured Content</h3>
                                <div style="color: ${colors.text}; line-height: 1.6;">${data.mainContent}</div>
                            </div>
                            ${data.navLinks.map((link, index) => `
                                <div style="background: ${colors.surface}; padding: 1.5rem; margin-bottom: 2rem; border-radius: 0.5rem; break-inside: avoid; box-shadow: 0 2px 4px rgba(0,0,0,0.1); height: ${120 + (index % 3) * 60}px;">
                                    <h4 style="color: ${colors.primary}; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">${link}</h4>
                                    <p style="color: ${colors.text}; font-size: 0.9rem; line-height: 1.5;">Sample content for ${link.toLowerCase()} section with varying heights to create masonry effect.</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `
        },

        fullscreen: {
            name: 'Full-Screen',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}); color: ${colors.background}; min-height: 100vh; display: flex; flex-direction: column;">
                    <nav style="position: absolute; top: 0; left: 0; right: 0; z-index: 100; padding: 2rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold};">${data.siteTitle}</div>
                            <div style="display: flex; gap: 2rem;">
                                ${data.navLinks.map(link => `<a href="#" style="color: rgba(255,255,255,0.9); text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; transition: color 0.3s;">${link}</a>`).join('')}
                            </div>
                        </div>
                    </nav>
                    <main style="flex: 1; display: flex; align-items: center; justify-content: center; text-align: center; padding: 4rem 2rem;">
                        <div style="max-width: 800px;">
                            <h1 style="font-size: clamp(3rem, 6vw, 5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.light}; margin-bottom: 2rem; line-height: 1.1;">${data.siteSubtitle}</h1>
                            <div style="font-size: 1.2rem; line-height: 1.7; opacity: 0.9; max-width: 600px; margin: 0 auto;">${data.mainContent}</div>
                        </div>
                    </main>
                    <div style="text-align: center; padding: 2rem; opacity: 0.7;">
                        <p style="margin: 0; font-size: 0.9rem;">Scroll to explore more</p>
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

        'dashboard-pro': {
            name: 'Dashboard Pro',
            generate: (data, style, colors) => `
                <div style="display: grid; grid-template-columns: 280px 1fr; grid-template-rows: 70px 1fr; height: 100vh; font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.surface};">
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

        'blog-modern': {
            name: 'Blog Modern',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
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

        cards: {
            name: 'Card-Based',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.surface}; min-height: 100vh;">
                    ${DesignTemplates.generateNavigation(data, colors)}
                    <div style="max-width: 1200px; margin: 0 auto; padding: 3rem 2rem;">
                        <header style="text-align: center; margin-bottom: 4rem;">
                            <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.siteTitle}</h1>
                            <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">${data.siteSubtitle}</p>
                        </header>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                            ${data.navLinks.map((link, index) => `
                                <div style="background: ${colors.background}; border-radius: 1rem; padding: 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;">
                                    <div style="height: 180px; background: linear-gradient(135deg, ${index % 3 === 0 ? colors.primary : index % 3 === 1 ? colors.accent : colors.secondary}, ${colors.secondary}); display: flex; align-items: center; justify-content: center; color: ${colors.background}; position: relative;">
                                        <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; text-align: center; z-index: 2;">${link}</h3>
                                        <div style="position: absolute; top: 1rem; right: 1rem; width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold};">${index + 1}</div>
                                    </div>
                                    <div style="padding: 2rem;">
                                        <h4 style="color: ${colors.primary}; font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; margin-bottom: 1rem;">Explore ${link}</h4>
                                        <p style="color: ${colors.text}; line-height: 1.6; margin-bottom: 1.5rem; font-size: 0.95rem;">Discover comprehensive information about ${link.toLowerCase()} with detailed guides and resources.</p>
                                        <div style="display: flex; align-items: center; justify-content: space-between;">
                                            <a href="#" style="color: ${colors.accent}; text-decoration: none; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; font-size: 0.9rem;">Learn more →</a>
                                            <div style="color: ${colors.secondary}; font-size: 0.8rem;">Updated recently</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div style="background: ${colors.background}; padding: 3rem; border-radius: 1rem; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <h2 style="color: ${colors.primary}; font-size: 1.8rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; margin-bottom: 1.5rem;">About This Collection</h2>
                            <div style="color: ${colors.text}; line-height: 1.6; font-size: 1.1rem; max-width: 700px; margin: 0 auto;">${data.mainContent}</div>
                        </div>
                    </div>
                </div>
            `
        },

        'ecommerce-grid': {
            name: 'E-commerce Grid',
            generate: (data, style, colors) => `
                <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh;">
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
    `
};