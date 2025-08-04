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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Choose Your Plan</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">Select the perfect plan for your needs</p>
                    </header>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
                        ${['Basic', 'Professional', 'Enterprise'].map((plan, index) => `
                            <div style="background: ${colors.surface}; border: ${index === 1 ? `3px solid ${colors.primary}` : `1px solid ${colors.border}`}; border-radius: 1rem; padding: 2.5rem; text-align: center; position: relative; ${index === 1 ? `transform: scale(1.05); box-shadow: 0 20px 40px rgba(0,0,0,0.1);` : ''}">
                                ${index === 1 ? `<div style="position: absolute; top: -0.75rem; left: 50%; transform: translateX(-50%); background: ${colors.primary}; color: ${colors.background}; padding: 0.5rem 1.5rem; border-radius: 2rem; font-size: 0.9rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Most Popular</div>` : ''}
                                <h3 style="font-size: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${plan}</h3>
                                <div style="margin-bottom: 2rem;">
                                    <span style="font-size: 3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary};">$${[29, 59, 99][index]}</span>
                                    <span style="color: ${colors.secondary}; font-size: 1.1rem;">/month</span>
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0;">
                                    ${[
                                        ['5 Projects', '10GB Storage', 'Email Support'],
                                        ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'],
                                        ['Unlimited Everything', '1TB Storage', '24/7 Phone Support', 'Custom Integrations', 'Dedicated Manager']
                                    ][index].map(feature => `
                                        <li style="padding: 0.75rem 0; color: ${colors.text}; border-bottom: 1px solid ${colors.border}; display: flex; align-items: center;">
                                            <span style="color: ${colors.primary}; margin-right: 0.75rem; font-weight: bold;">✓</span>
                                            ${feature}       
                                        </li>
                                    `).join('')}
                                </ul>
                                <button style="width: 100%; background: ${index === 1 ? colors.primary : 'transparent'}; color: ${index === 1 ? colors.background : colors.primary}; border: 2px solid ${colors.primary}; padding: 1rem 2rem; border-radius: 0.5rem; font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer; transition: all 0.3s;">
                                    Get Started
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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">What Our Clients Say</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">Real feedback from real customers</p>
                    </header>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
                        ${[
                            { name: 'Sarah Johnson', role: 'CEO, TechCorp', text: 'Outstanding service and incredible results. The team exceeded all our expectations and delivered on time.' },
                            { name: 'Michael Chen', role: 'Designer, CreativeStudio', text: 'Professional, responsive, and innovative. Working with them was a game-changer for our business.' },
                            { name: 'Emily Rodriguez', role: 'Marketing Director', text: 'The attention to detail and quality of work is unmatched. Highly recommend to anyone looking for excellence.' }
                        ].map(testimonial => `
                            <div style="background: ${colors.surface}; padding: 2.5rem; border-radius: 1rem; border: 1px solid ${colors.border}; position: relative;">
                                <div style="color: ${colors.primary}; font-size: 3rem; line-height: 1; margin-bottom: 1rem; opacity: 0.3;">"</div>
                                <p style="color: ${colors.text}; font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem; font-style: italic;">${testimonial.text}</p>
                                <div style="display: flex; align-items: center;">
                                    <div style="width: 50px; height: 50px; background: ${colors.primary}; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                                        <span style="color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; font-size: 1.2rem;">${testimonial.name[0]}</span>
                                    </div>
                                    <div>
                                        <div style="font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin-bottom: 0.25rem;">${testimonial.name}</div>
                                        <div style="color: ${colors.secondary}; font-size: 0.9rem;">${testimonial.role}</div>
                                    </div>
                                </div>
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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Powerful Features</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">Everything you need to succeed</p>
                    </header>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        ${[
                            { icon: '🚀', title: 'Fast Performance', desc: 'Lightning-fast load times and optimized performance for the best user experience.' },
                            { icon: '🔒', title: 'Secure & Safe', desc: 'Enterprise-grade security with end-to-end encryption and data protection.' },
                            { icon: '📱', title: 'Mobile Ready', desc: 'Fully responsive design that works perfectly on all devices and screen sizes.' },
                            { icon: '🎨', title: 'Customizable', desc: 'Extensive customization options to match your brand and requirements.' },
                            { icon: '📊', title: 'Analytics', desc: 'Detailed insights and analytics to track performance and user engagement.' },
                            { icon: '🌐', title: 'Global CDN', desc: 'Worldwide content delivery network for fast loading anywhere in the world.' }
                        ].map(feature => `
                            <div style="background: ${colors.surface}; padding: 2.5rem; border-radius: 1rem; text-align: center; border: 1px solid ${colors.border}; transition: transform 0.3s;">
                                <div style="font-size: 3rem; margin-bottom: 1.5rem;">${feature.icon}</div>
                                <h3 style="font-size: 1.3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin-bottom: 1rem;">${feature.title}</h3>
                                <p style="color: ${colors.text}; line-height: 1.6;">${feature.desc}</p>
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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Compare Solutions</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">Choose the right option for your needs</p>
                    </header>
                    <div style="background: ${colors.surface}; border-radius: 1rem; overflow: hidden; border: 1px solid ${colors.border};">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead style="background: ${colors.primary}; color: ${colors.background};">
                                <tr>
                                    <th style="padding: 1.5rem; text-align: left; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Feature</th>
                                    <th style="padding: 1.5rem; text-align: center; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Basic</th>
                                    <th style="padding: 1.5rem; text-align: center; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Pro</th>
                                    <th style="padding: 1.5rem; text-align: center; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold};">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${[
                                    { feature: 'Storage Space', basic: '5GB', pro: '100GB', enterprise: '1TB' },
                                    { feature: 'Users', basic: '1', pro: '10', enterprise: 'Unlimited' },
                                    { feature: '24/7 Support', basic: '❌', pro: '✅', enterprise: '✅' },
                                    { feature: 'API Access', basic: '❌', pro: '✅', enterprise: '✅' },
                                    { feature: 'Custom Integrations', basic: '❌', pro: '❌', enterprise: '✅' },
                                    { feature: 'Advanced Analytics', basic: '❌', pro: '✅', enterprise: '✅' }
                                ].map((row, index) => `
                                    <tr style="border-bottom: 1px solid ${colors.border}; ${index % 2 === 0 ? `background: ${colors.background};` : ''}">
                                        <td style="padding: 1.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text};">${row.feature}</td>
                                        <td style="padding: 1.5rem; text-align: center; color: ${colors.text};">${row.basic}</td>
                                        <td style="padding: 1.5rem; text-align: center; color: ${colors.text};">${row.pro}</td>
                                        <td style="padding: 1.5rem; text-align: center; color: ${colors.text};">${row.enterprise}</td>
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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Our Impact</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">Numbers that speak for themselves</p>
                    </header>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem;">
                        ${[
                            { number: '10,000+', label: 'Happy Customers', icon: '😊' },
                            { number: '99.9%', label: 'Uptime', icon: '⚡' },
                            { number: '50+', label: 'Countries', icon: '🌍' },
                            { number: '24/7', label: 'Support', icon: '🛟' }
                        ].map(stat => `
                            <div style="text-align: center;">
                                <div style="font-size: 4rem; margin-bottom: 1rem;">${stat.icon}</div>
                                <div style="font-size: 3.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 0.5rem;">${stat.number}</div>
                                <div style="font-size: 1.3rem; color: ${colors.secondary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium};">${stat.label}</div>
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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 4rem 2rem;">
                <div style="background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary || colors.primary} 100%); color: ${colors.background}; padding: 4rem; border-radius: 2rem; text-align: center; max-width: 800px; width: 100%; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                    <h1 style="font-size: clamp(2.5rem, 4vw, 4rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; margin-bottom: 1.5rem; line-height: 1.2;">Ready to Get Started?</h1>
                    <p style="font-size: 1.3rem; margin-bottom: 3rem; opacity: 0.9; line-height: 1.6;">Join thousands of satisfied customers who have transformed their business with our solution.</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <button style="background: ${colors.background}; color: ${colors.primary}; border: none; padding: 1.25rem 2.5rem; border-radius: 0.75rem; font-size: 1.2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                            Start Free Trial
                        </button>
                        <button style="background: transparent; color: ${colors.background}; border: 2px solid ${colors.background}; padding: 1.25rem 2.5rem; border-radius: 0.75rem; font-size: 1.2rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer; transition: all 0.3s;">
                            Learn More
                        </button>
                    </div>
                    <p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.7;">No credit card required • Cancel anytime • 30-day money-back guarantee</p>
                </div>
            </div>
        `
    },

    gallery: {
        name: 'Image Gallery',
        generate: (data, style, colors) => `
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Our Gallery</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">A showcase of our best work</p>
                    </header>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                        ${Array.from({length: 9}, (_, i) => `
                            <div style="background: ${colors.surface}; border-radius: 1rem; overflow: hidden; border: 1px solid ${colors.border}; transition: transform 0.3s; aspect-ratio: 4/3;">
                                <div style="width: 100%; height: 70%; background: linear-gradient(135deg, ${colors.primary}20, ${colors.secondary || colors.primary}20); display: flex; align-items: center; justify-content: center; color: ${colors.primary}; font-size: 3rem;">
                                    📸
                                </div>
                                <div style="padding: 1.5rem;">
                                    <h3 style="font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin-bottom: 0.5rem;">Project ${i + 1}</h3>
                                    <p style="color: ${colors.secondary}; font-size: 0.9rem;">Beautiful design showcase</p>
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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 800px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Get In Touch</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    </header>
                    <div style="background: ${colors.surface}; padding: 3rem; border-radius: 1rem; border: 1px solid ${colors.border};">
                        <form style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text};">First Name</label>
                                    <input type="text" style="width: 100%; padding: 1rem; border: 2px solid ${colors.border}; border-radius: 0.5rem; font-size: 1rem; background: ${colors.background}; color: ${colors.text};" placeholder="Your first name">
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text};">Last Name</label>
                                    <input type="text" style="width: 100%; padding: 1rem; border: 2px solid ${colors.border}; border-radius: 0.5rem; font-size: 1rem; background: ${colors.background}; color: ${colors.text};" placeholder="Your last name">
                                </div>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text};">Email</label>
                                <input type="email" style="width: 100%; padding: 1rem; border: 2px solid ${colors.border}; border-radius: 0.5rem; font-size: 1rem; background: ${colors.background}; color: ${colors.text};" placeholder="your.email@example.com">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text};">Subject</label>
                                <input type="text" style="width: 100%; padding: 1rem; border: 2px solid ${colors.border}; border-radius: 0.5rem; font-size: 1rem; background: ${colors.background}; color: ${colors.text};" placeholder="What's this about?">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; color: ${colors.text};">Message</label>
                                <textarea style="width: 100%; padding: 1rem; border: 2px solid ${colors.border}; border-radius: 0.5rem; font-size: 1rem; background: ${colors.background}; color: ${colors.text}; min-height: 120px; resize: vertical;" placeholder="Tell us more..."></textarea>
                            </div>
                            <button type="submit" style="background: ${colors.primary}; color: ${colors.background}; border: none; padding: 1.25rem 2rem; border-radius: 0.5rem; font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; cursor: pointer; transition: all 0.3s;">
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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Meet Our Team</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">The talented people behind our success</p>
                    </header>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        ${[
                            { name: 'Sarah Johnson', role: 'CEO & Founder', bio: 'Visionary leader with 15+ years in tech.' },
                            { name: 'Michael Chen', role: 'Lead Developer', bio: 'Full-stack expert passionate about innovation.' },
                            { name: 'Emily Rodriguez', role: 'Design Director', bio: 'Creative mind focused on user experience.' },
                            { name: 'David Wilson', role: 'Marketing Head', bio: 'Growth strategist with proven results.' }
                        ].map(member => `
                            <div style="background: ${colors.surface}; padding: 2rem; border-radius: 1rem; text-align: center; border: 1px solid ${colors.border};">
                                <div style="width: 120px; height: 120px; background: ${colors.primary}; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: ${colors.background}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold};">
                                    ${member.name[0]}
                                </div>
                                <h3 style="font-size: 1.3rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary}; margin-bottom: 0.5rem;">${member.name}</h3>
                                <p style="color: ${colors.secondary}; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.medium}; margin-bottom: 1rem;">${member.role}</p>
                                <p style="color: ${colors.text}; line-height: 1.6; font-size: 0.95rem;">${member.bio}</p>
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
            <div style="font-family: ${DesignTemplates.fonts[data.fontFamily].family}; background: ${colors.background}; min-height: 100vh; padding: 4rem 2rem;">
                <div style="max-width: 800px; margin: 0 auto;">
                    <header style="text-align: center; margin-bottom: 4rem;">
                        <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">Frequently Asked Questions</h1>
                        <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto; line-height: 1.6;">Find answers to common questions</p>
                    </header>
                    <div style="space-y: 1rem;">
                        ${[
                            { q: 'How do I get started?', a: 'Simply sign up for an account and follow our onboarding process. We\'ll guide you through every step.' },
                            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.' },
                            { q: 'Is there a free trial?', a: 'Yes! We offer a 30-day free trial with full access to all features. No credit card required.' },
                            { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your subscription at any time from your account settings.' },
                            { q: 'Do you offer customer support?', a: '24/7 customer support is available via chat, email, and phone for all paid plans.' }
                        ].map((faq, index) => `
                            <div style="background: ${colors.surface}; border: 1px solid ${colors.border}; border-radius: 1rem; margin-bottom: 1rem; overflow: hidden;">
                                <button style="width: 100%; background: none; border: none; padding: 1.5rem; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 1.1rem; font-weight: ${DesignTemplates.fonts[data.fontFamily].weights.semibold}; color: ${colors.primary};">${faq.q}</span>
                                    <span style="color: ${colors.primary}; font-size: 1.5rem;">+</span>
                                </button>
                                <div style="padding: 0 1.5rem 1.5rem 1.5rem; color: ${colors.text}; line-height: 1.6;">
                                    ${faq.a}
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