// Professional Component Library System
const ComponentLibrary = {
    // Component categories
    categories: {
        headers: {
            name: 'Headers',
            icon: '📄',
            components: ['hero', 'navbar', 'announcement']
        },
        content: {
            name: 'Content',
            icon: '📝',
            components: ['textBlock', 'imageText', 'testimonial']
        },
        features: {
            name: 'Features',
            icon: '✨',
            components: ['featureGrid', 'pricing', 'stats']
        },
        forms: {
            name: 'Forms',
            icon: '📋',
            components: ['contact', 'newsletter', 'search']
        },
        footers: {
            name: 'Footers',
            icon: '🦶',
            components: ['footer', 'cta', 'social']
        }
    },

    // Component definitions
    components: {
        // Header Components
        hero: {
            name: 'Hero Section',
            category: 'headers',
            description: 'Large header with title, subtitle, and call-to-action',
            preview: '🎯',
            generate: (data, colors, fonts) => `
                <section class="hero-component" style="background: linear-gradient(135deg, ${colors.primary}15, ${colors.surface}); min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 4rem 2rem;">
                    <div style="max-width: 800px;">
                        <h1 class="hero-title" style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: ${fonts.weights.bold}; color: ${colors.primary}; margin-bottom: 1.5rem; line-height: 1.1;">${data.title || 'Your Amazing Headline'}</h1>
                        <p class="hero-subtitle" style="font-size: clamp(1.1rem, 2.5vw, 1.4rem); color: ${colors.secondary}; margin-bottom: 2.5rem; font-weight: ${fonts.weights.normal}; max-width: 600px; margin-left: auto; margin-right: auto;">${data.subtitle || 'Compelling subtitle that explains your value proposition'}</p>
                        <div class="hero-actions" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                            <button class="btn-primary" style="background: ${colors.primary}; color: ${colors.background}; border: none; padding: 1rem 2rem; border-radius: 0.5rem; font-weight: ${fonts.weights.medium}; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">${data.primaryAction || 'Get Started'}</button>
                            <button class="btn-secondary" style="background: transparent; color: ${colors.primary}; border: 2px solid ${colors.primary}; padding: 1rem 2rem; border-radius: 0.5rem; font-weight: ${fonts.weights.medium}; cursor: pointer; transition: all 0.3s;">${data.secondaryAction || 'Learn More'}</button>
                        </div>
                    </div>
                </section>
            `,
            props: {
                title: { type: 'text', default: 'Your Amazing Headline' },
                subtitle: { type: 'textarea', default: 'Compelling subtitle that explains your value proposition' },
                primaryAction: { type: 'text', default: 'Get Started' },
                secondaryAction: { type: 'text', default: 'Learn More' }
            }
        },

        navbar: {
            name: 'Navigation Bar',
            category: 'headers',
            description: 'Responsive navigation with logo and menu items',
            preview: '🧭',
            generate: (data, colors, fonts) => `
                <nav class="navbar-component" style="background: ${colors.background}; border-bottom: 1px solid ${colors.border}; padding: 1rem 0; position: sticky; top: 0; z-index: 100; backdrop-filter: blur(10px); background: ${colors.background}cc;">
                    <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center;">
                        <div class="navbar-logo" style="font-size: 1.5rem; font-weight: ${fonts.weights.bold}; color: ${colors.primary};">${data.logo || 'Logo'}</div>
                        <ul class="navbar-menu" style="display: flex; list-style: none; gap: 2rem; margin: 0; padding: 0;">
                            ${(data.menuItems || ['Home', 'About', 'Services', 'Contact']).map(item => `
                                <li><a href="#" class="navbar-link" style="color: ${colors.text}; text-decoration: none; font-weight: ${fonts.weights.medium}; transition: color 0.3s; position: relative;">${item}</a></li>
                            `).join('')}
                        </ul>
                        <button class="navbar-cta" style="background: ${colors.primary}; color: ${colors.background}; border: none; padding: 0.5rem 1.5rem; border-radius: 0.375rem; font-weight: ${fonts.weights.medium}; cursor: pointer; transition: all 0.3s;">${data.ctaText || 'Get Started'}</button>
                    </div>
                </nav>
            `,
            props: {
                logo: { type: 'text', default: 'Logo' },
                menuItems: { type: 'array', default: ['Home', 'About', 'Services', 'Contact'] },
                ctaText: { type: 'text', default: 'Get Started' }
            }
        },

        // Content Components
        featureGrid: {
            name: 'Feature Grid',
            category: 'features',
            description: 'Grid of features with icons and descriptions',
            preview: '🔲',
            generate: (data, colors, fonts) => `
                <section class="feature-grid-component" style="padding: 5rem 2rem; background: ${colors.surface};">
                    <div style="max-width: 1200px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 4rem;">
                            <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: ${fonts.weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.title || 'Key Features'}</h2>
                            <p style="font-size: 1.2rem; color: ${colors.secondary}; max-width: 600px; margin: 0 auto;">${data.subtitle || 'Discover what makes us different'}</p>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                            ${(data.features || [
                                { icon: '🚀', title: 'Fast Performance', description: 'Lightning-fast loading times and optimal performance across all devices.' },
                                { icon: '🔒', title: 'Secure & Reliable', description: 'Enterprise-grade security with 99.9% uptime guarantee.' },
                                { icon: '🎨', title: 'Beautiful Design', description: 'Stunning, modern designs that convert visitors into customers.' },
                                { icon: '📱', title: 'Mobile Ready', description: 'Fully responsive designs that look perfect on any device.' }
                            ]).map(feature => `
                                <div class="feature-card" style="background: ${colors.background}; padding: 2rem; border-radius: 1rem; text-align: center; border: 1px solid ${colors.border}; transition: transform 0.3s, box-shadow 0.3s;">
                                    <div style="font-size: 3rem; margin-bottom: 1rem;">${feature.icon}</div>
                                    <h3 style="font-size: 1.3rem; font-weight: ${fonts.weights.semibold}; color: ${colors.primary}; margin-bottom: 1rem;">${feature.title}</h3>
                                    <p style="color: ${colors.text}; line-height: 1.6;">${feature.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `,
            props: {
                title: { type: 'text', default: 'Key Features' },
                subtitle: { type: 'text', default: 'Discover what makes us different' },
                features: { type: 'array', default: [] }
            }
        },

        pricing: {
            name: 'Pricing Table',
            category: 'features',
            description: 'Professional pricing table with multiple tiers',
            preview: '💰',
            generate: (data, colors, fonts) => `
                <section class="pricing-component" style="padding: 5rem 2rem; background: ${colors.background};">
                    <div style="max-width: 1000px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 4rem;">
                            <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: ${fonts.weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.title || 'Simple Pricing'}</h2>
                            <p style="font-size: 1.2rem; color: ${colors.secondary};">${data.subtitle || 'Choose the plan that works for you'}</p>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                            ${(data.plans || [
                                { name: 'Starter', price: '$9', period: '/month', features: ['5 Projects', '10GB Storage', 'Email Support'] },
                                { name: 'Professional', price: '$29', period: '/month', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'], popular: true },
                                { name: 'Enterprise', price: '$99', period: '/month', features: ['Everything in Pro', 'Custom Integrations', 'Dedicated Support', 'SLA Guarantee'] }
                            ]).map(plan => `
                                <div class="pricing-card" style="background: ${colors.surface}; padding: 2rem; border-radius: 1rem; text-align: center; border: ${plan.popular ? `2px solid ${colors.primary}` : `1px solid ${colors.border}`}; position: relative; transition: transform 0.3s;">
                                    ${plan.popular ? `<div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: ${colors.primary}; color: ${colors.background}; padding: 0.5rem 1rem; border-radius: 1rem; font-size: 0.8rem; font-weight: ${fonts.weights.semibold};">Most Popular</div>` : ''}
                                    <h3 style="font-size: 1.5rem; font-weight: ${fonts.weights.semibold}; color: ${colors.primary}; margin-bottom: 1rem;">${plan.name}</h3>
                                    <div style="margin-bottom: 2rem;">
                                        <span style="font-size: 3rem; font-weight: ${fonts.weights.bold}; color: ${colors.primary};">${plan.price}</span>
                                        <span style="color: ${colors.secondary}; font-size: 1rem;">${plan.period}</span>
                                    </div>
                                    <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                                        ${plan.features.map(feature => `
                                            <li style="padding: 0.5rem 0; color: ${colors.text}; border-bottom: 1px solid ${colors.border};">✓ ${feature}</li>
                                        `).join('')}
                                    </ul>
                                    <button style="background: ${plan.popular ? colors.primary : 'transparent'}; color: ${plan.popular ? colors.background : colors.primary}; border: 2px solid ${colors.primary}; padding: 1rem 2rem; border-radius: 0.5rem; font-weight: ${fonts.weights.medium}; cursor: pointer; transition: all 0.3s; width: 100%;">Choose ${plan.name}</button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `,
            props: {
                title: { type: 'text', default: 'Simple Pricing' },
                subtitle: { type: 'text', default: 'Choose the plan that works for you' },
                plans: { type: 'array', default: [] }
            }
        },

        testimonial: {
            name: 'Testimonial',
            category: 'content',
            description: 'Customer testimonial with photo and details',
            preview: '💬',
            generate: (data, colors, fonts) => `
                <section class="testimonial-component" style="padding: 4rem 2rem; background: ${colors.surface};">
                    <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                        <div style="font-size: 4rem; color: ${colors.primary}; margin-bottom: 2rem;">"</div>
                        <blockquote style="font-size: 1.5rem; line-height: 1.6; color: ${colors.text}; margin-bottom: 2rem; font-style: italic;">
                            ${data.quote || 'This product has completely transformed how we work. The results speak for themselves.'}
                        </blockquote>
                        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
                            <div style="width: 60px; height: 60px; background: ${colors.primary}; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: ${colors.background}; font-weight: ${fonts.weights.bold}; font-size: 1.5rem;">
                                ${(data.name || 'John Doe')[0]}
                            </div>
                            <div style="text-align: left;">
                                <div style="font-weight: ${fonts.weights.semibold}; color: ${colors.primary};">${data.name || 'John Doe'}</div>
                                <div style="color: ${colors.secondary}; font-size: 0.9rem;">${data.title || 'CEO, Company Name'}</div>
                            </div>
                        </div>
                    </div>
                </section>
            `,
            props: {
                quote: { type: 'textarea', default: 'This product has completely transformed how we work. The results speak for themselves.' },
                name: { type: 'text', default: 'John Doe' },
                title: { type: 'text', default: 'CEO, Company Name' }
            }
        },

        contact: {
            name: 'Contact Form',
            category: 'forms',
            description: 'Professional contact form with validation',
            preview: '📧',
            generate: (data, colors, fonts) => `
                <section class="contact-component" style="padding: 5rem 2rem; background: ${colors.background};">
                    <div style="max-width: 600px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 3rem;">
                            <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: ${fonts.weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.title || 'Get In Touch'}</h2>
                            <p style="font-size: 1.1rem; color: ${colors.secondary};">${data.subtitle || 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'}</p>
                        </div>
                        <form style="display: grid; gap: 1.5rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <input type="text" placeholder="First Name" required style="padding: 1rem; border: 1px solid ${colors.border}; border-radius: 0.5rem; font-family: inherit; font-size: 1rem; transition: border-color 0.3s;">
                                <input type="text" placeholder="Last Name" required style="padding: 1rem; border: 1px solid ${colors.border}; border-radius: 0.5rem; font-family: inherit; font-size: 1rem; transition: border-color 0.3s;">
                            </div>
                            <input type="email" placeholder="Email Address" required style="padding: 1rem; border: 1px solid ${colors.border}; border-radius: 0.5rem; font-family: inherit; font-size: 1rem; transition: border-color 0.3s;">
                            <input type="text" placeholder="Subject" style="padding: 1rem; border: 1px solid ${colors.border}; border-radius: 0.5rem; font-family: inherit; font-size: 1rem; transition: border-color 0.3s;">
                            <textarea placeholder="Your Message" rows="5" required style="padding: 1rem; border: 1px solid ${colors.border}; border-radius: 0.5rem; font-family: inherit; font-size: 1rem; resize: vertical; transition: border-color 0.3s;"></textarea>
                            <button type="submit" style="background: ${colors.primary}; color: ${colors.background}; border: none; padding: 1rem 2rem; border-radius: 0.5rem; font-weight: ${fonts.weights.medium}; cursor: pointer; transition: all 0.3s; font-size: 1rem;">Send Message</button>
                        </form>
                    </div>
                </section>
            `,
            props: {
                title: { type: 'text', default: 'Get In Touch' },
                subtitle: { type: 'textarea', default: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.' }
            }
        },

        footer: {
            name: 'Footer',
            category: 'footers',
            description: 'Complete footer with links and social media',
            preview: '🦶',
            generate: (data, colors, fonts) => `
                <footer class="footer-component" style="background: ${colors.surface}; border-top: 1px solid ${colors.border}; padding: 3rem 2rem 2rem;">
                    <div style="max-width: 1200px; margin: 0 auto;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
                            <div>
                                <div style="font-size: 1.5rem; font-weight: ${fonts.weights.bold}; color: ${colors.primary}; margin-bottom: 1rem;">${data.companyName || 'Company Name'}</div>
                                <p style="color: ${colors.secondary}; line-height: 1.6; margin-bottom: 1rem;">${data.description || 'Creating amazing digital experiences for businesses worldwide.'}</p>
                                <div style="display: flex; gap: 1rem;">
                                    ${['Twitter', 'LinkedIn', 'GitHub'].map(social => `
                                        <a href="#" style="width: 40px; height: 40px; background: ${colors.primary}; color: ${colors.background}; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: transform 0.3s;">${social[0]}</a>
                                    `).join('')}
                                </div>
                            </div>
                            ${(data.sections || [
                                { title: 'Product', links: ['Features', 'Pricing', 'Updates', 'Beta'] },
                                { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
                                { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Status'] }
                            ]).map(section => `
                                <div>
                                    <h3 style="font-weight: ${fonts.weights.semibold}; color: ${colors.primary}; margin-bottom: 1rem; font-size: 1.1rem;">${section.title}</h3>
                                    <ul style="list-style: none; padding: 0;">
                                        ${section.links.map(link => `
                                            <li style="margin-bottom: 0.5rem;"><a href="#" style="color: ${colors.secondary}; text-decoration: none; transition: color 0.3s;">${link}</a></li>
                                        `).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                        <div style="border-top: 1px solid ${colors.border}; padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                            <p style="color: ${colors.secondary}; font-size: 0.9rem;">© ${new Date().getFullYear()} ${data.companyName || 'Company Name'}. All rights reserved.</p>
                            <div style="display: flex; gap: 2rem;">
                                <a href="#" style="color: ${colors.secondary}; text-decoration: none; font-size: 0.9rem; transition: color 0.3s;">Privacy Policy</a>
                                <a href="#" style="color: ${colors.secondary}; text-decoration: none; font-size: 0.9rem; transition: color 0.3s;">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </footer>
            `,
            props: {
                companyName: { type: 'text', default: 'Company Name' },
                description: { type: 'textarea', default: 'Creating amazing digital experiences for businesses worldwide.' },
                sections: { type: 'array', default: [] }
            }
        }
    },

    // Component rendering utilities
    renderComponent: function(componentName, data, colors, fonts) {
        const component = this.components[componentName];
        if (!component) return '';
        
        return component.generate(data, colors, fonts);
    },

    // Get component by category
    getComponentsByCategory: function(category) {
        return Object.keys(this.components).filter(key => 
            this.components[key].category === category
        ).map(key => ({
            id: key,
            ...this.components[key]
        }));
    },

    // Generate component preview
    generatePreview: function(componentName) {
        const component = this.components[componentName];
        if (!component) return '';
        
        return `
            <div class="component-preview" style="border: 2px dashed #e5e7eb; padding: 1rem; border-radius: 0.5rem; text-align: center; cursor: pointer; transition: all 0.3s;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">${component.preview}</div>
                <div style="font-weight: 600; margin-bottom: 0.25rem;">${component.name}</div>
                <div style="font-size: 0.8rem; color: #6b7280;">${component.description}</div>
            </div>
        `;
    }
};