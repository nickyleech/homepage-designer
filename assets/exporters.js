// Advanced Export Pipeline with Framework-Specific Templates
const ExportPipeline = {
    // Framework templates
    frameworks: {
        nextjs: {
            name: 'Next.js',
            extension: '.tsx',
            template: (components, metadata) => `
import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface HomeProps {
  title?: string;
  description?: string;
}

export default function Home({ 
  title = "${metadata.title}",
  description = "${metadata.description}" 
}: HomeProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        ${components}
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "${metadata.title}",
      description: "${metadata.description}"
    }
  };
}
            `,
            cssTemplate: (tokens) => `
/* Generated Design Tokens */
:root {
  ${Object.entries(tokens).map(([key, value]) => `--${key}: ${value};`).join('\n  ')}
}

.main {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: var(--font-family);
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Component Styles */
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary-color)15, var(--surface-color));
}

.navbar {
  background: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 5rem 2rem;
}

.feature-card {
  background: var(--surface-color);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
  }
}
            `
        },

        nuxtjs: {
            name: 'Nuxt.js',
            extension: '.vue',
            template: (components, metadata) => `
<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
    </Head>
    <main class="main">
      ${components}
    </main>
  </div>
</template>

<script setup>
interface HomeProps {
  title?: string;
  description?: string;
}

const { title = "${metadata.title}", description = "${metadata.description}" } = defineProps<HomeProps>();

// SEO
useHead({
  title: title,
  meta: [
    { name: 'description', content: description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
});
</script>

<style scoped>
.main {
  min-height: 100vh;
  font-family: var(--font-family);
  color: var(--text-color);
  background-color: var(--background-color);
}
</style>
            `
        },

        react: {
            name: 'React',
            extension: '.tsx',
            template: (components, metadata) => `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';

interface HomeProps {
  title?: string;
  description?: string;
}

const Home: React.FC<HomeProps> = ({ 
  title = "${metadata.title}",
  description = "${metadata.description}" 
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main className="home-main">
        ${components}
      </main>
    </>
  );
};

export default Home;
            `
        },

        vue: {
            name: 'Vue.js',
            extension: '.vue',
            template: (components, metadata) => `
<template>
  <div>
    <div v-if="$route.meta?.title">
      <title>{{ title }}</title>
      <meta name="description" :content="description">
    </div>
    <main class="home-main">
      ${components}
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  props: {
    title: {
      type: String,
      default: '${metadata.title}'
    },
    description: {
      type: String,
      default: '${metadata.description}'
    }
  }
});
</script>

<style scoped>
.home-main {
  min-height: 100vh;
  font-family: var(--font-family);
  color: var(--text-color);
  background-color: var(--background-color);
}
</style>
            `
        },

        svelte: {
            name: 'Svelte',
            extension: '.svelte',
            template: (components, metadata) => `
<script>
  export let title = "${metadata.title}";
  export let description = "${metadata.description}";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main class="home-main">
  ${components}
</main>

<style>
  .home-main {
    min-height: 100vh;
    font-family: var(--font-family);
    color: var(--text-color);
    background-color: var(--background-color);
  }
</style>
            `
        }
    },

    // Component converters for frameworks
    componentConverters: {
        react: {
            hero: (props) => `
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">{props.title || "${props.title}"}</h1>
            <p className="hero-subtitle">{props.subtitle || "${props.subtitle}"}</p>
            <div className="hero-actions">
              <button className="btn-primary">{props.primaryAction || "${props.primaryAction}"}</button>
              <button className="btn-secondary">{props.secondaryAction || "${props.secondaryAction}"}</button>
            </div>
          </div>
        </section>
            `,
            navbar: (props) => `
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">{props.logo || "${props.logo}"}</div>
            <ul className="navbar-menu">
              {${JSON.stringify(props.menuItems || [])}.map((item, index) => (
                <li key={index}>
                  <a href="#" className="navbar-link">{item}</a>
                </li>
              ))}
            </ul>
            <button className="navbar-cta">{props.ctaText || "${props.ctaText}"}</button>
          </div>
        </nav>
            `,
            featureGrid: (props) => `
        <section className="feature-grid-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{props.title || "${props.title}"}</h2>
              <p className="section-subtitle">{props.subtitle || "${props.subtitle}"}</p>
            </div>
            <div className="feature-grid">
              {${JSON.stringify(props.features || [])}.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
            `
        },

        vue: {
            hero: (props) => `
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">{{ title || "${props.title}" }}</h1>
        <p class="hero-subtitle">{{ subtitle || "${props.subtitle}" }}</p>
        <div class="hero-actions">
          <button class="btn-primary">{{ primaryAction || "${props.primaryAction}" }}</button>
          <button class="btn-secondary">{{ secondaryAction || "${props.secondaryAction}" }}</button>
        </div>
      </div>
    </section>
            `,
            navbar: (props) => `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">{{ logo || "${props.logo}" }}</div>
        <ul class="navbar-menu">
          <li v-for="(item, index) in menuItems" :key="index">
            <a href="#" class="navbar-link">{{ item }}</a>
          </li>
        </ul>
        <button class="navbar-cta">{{ ctaText || "${props.ctaText}" }}</button>
      </div>
    </nav>
            `
        }
    },

    // Design token generator
    generateDesignTokens: (data, colors, fonts) => {
        return {
            'primary-color': colors.primary,
            'secondary-color': colors.secondary,
            'accent-color': colors.accent,
            'text-color': colors.text,
            'background-color': colors.background,
            'surface-color': colors.surface,
            'border-color': colors.border,
            'font-family': fonts.family,
            'font-weight-light': fonts.weights.light,
            'font-weight-normal': fonts.weights.normal,
            'font-weight-medium': fonts.weights.medium,
            'font-weight-semibold': fonts.weights.semibold,
            'font-weight-bold': fonts.weights.bold,
            'spacing-xs': '0.25rem',
            'spacing-sm': '0.5rem',
            'spacing-md': '1rem',
            'spacing-lg': '1.5rem',
            'spacing-xl': '2rem',
            'spacing-2xl': '3rem',
            'border-radius-sm': '0.25rem',
            'border-radius-md': '0.5rem',
            'border-radius-lg': '1rem',
            'border-radius-xl': '1.5rem',
            'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            'breakpoint-sm': '640px',
            'breakpoint-md': '768px',
            'breakpoint-lg': '1024px',
            'breakpoint-xl': '1280px'
        };
    },

    // Performance optimization
    optimizeCode: (code, options = {}) => {
        let optimized = code;

        if (options.minify) {
            // Remove unnecessary whitespace
            optimized = optimized.replace(/\s+/g, ' ').trim();
            // Remove comments
            optimized = optimized.replace(/\/\*[\s\S]*?\*\//g, '');
            optimized = optimized.replace(/\/\/.*$/gm, '');
        }

        if (options.removeComments) {
            optimized = optimized.replace(/\/\*[\s\S]*?\*\//g, '');
            optimized = optimized.replace(/\/\/.*$/gm, '');
        }

        return optimized;
    },

    // Generate multi-page export package
    generateMultiPageExport: (framework, data, style, options = {}) => {
        const metadata = {
            title: data.siteTitle || 'Multi-Page Website',
            description: data.siteSubtitle || 'Generated multi-page website',
            author: 'Design Generator Pro',
            timestamp: new Date().toISOString()
        };

        const colors = DesignTemplates.styles[style].colors;
        const files = [];

        // Generate each page
        const pages = ['home', 'about', 'services', 'portfolio', 'blog', 'contact'];
        
        pages.forEach(page => {
            const html = DesignTemplates.generateMultiPageSite(data, style, page);
            const filename = page === 'home' ? 'index.html' : `${page}.html`;
            
            files.push({
                filename,
                content: html,
                path: filename
            });
        });

        // Generate shared CSS file for consistency
        const sharedCSS = `
/* Shared styles for multi-page website */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: ${DesignTemplates.fonts[data.fontFamily || 'inter'].family}, sans-serif;
    line-height: 1.6;
    color: ${colors.text};
    background: ${colors.background};
}

/* Responsive Grid Fixes */
@media (max-width: 768px) {
    .grid-2-cols { grid-template-columns: 1fr !important; }
    .grid-3-cols { grid-template-columns: 1fr !important; }
    .grid-4-cols { grid-template-columns: repeat(2, 1fr) !important; }
}

@media (max-width: 480px) {
    .grid-4-cols { grid-template-columns: 1fr !important; }
    
    /* Mobile spacing adjustments */
    section { padding: 2rem 0 !important; }
    .container { padding: 0 1rem !important; }
    
    /* Mobile typography */
    h1 { font-size: 2rem !important; }
    h2 { font-size: 1.5rem !important; }
    h3 { font-size: 1.25rem !important; }
}

/* Print styles */
@media print {
    nav, footer { display: none; }
    body { font-size: 12pt; }
    a[href]:after { content: " (" attr(href) ")"; }
}
        `;

        files.push({
            filename: 'styles.css',
            content: sharedCSS,
            path: 'styles.css'
        });

        // Generate README for the multi-page site
        const readme = `# ${data.siteTitle || 'Multi-Page Website'}

Generated by Homepage Design Generator Pro v3.0

## Overview
This is a complete multi-page website with consistent navigation and design across all pages.

## Pages Included
- **Homepage** (index.html) - Main landing page
- **About** (about.html) - Company/personal information  
- **Services** (services.html) - Service offerings
- **Portfolio** (portfolio.html) - Project showcase
- **Blog** (blog.html) - Articles and insights
- **Contact** (contact.html) - Contact information and forms

## Design System
- **Style**: ${DesignTemplates.styles[style].name}
- **Typography**: ${DesignTemplates.fonts[data.fontFamily || 'inter'].name}
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px
- **Accessibility**: WCAG AA compliant with semantic HTML

## Deployment
Simply upload all files to your web server. The site is ready for deployment on:
- Vercel
- Netlify  
- GitHub Pages
- Any static hosting service

## Claude Code Integration
To further develop this site with Claude Code:

\`\`\`bash
"Enhance my multi-page website using the ${DesignTemplates.styles[style].name} style. Add interactive features, improve performance, and integrate with modern frameworks like Next.js or React."
\`\`\`

Generated on: ${new Date().toLocaleDateString()}
        `;

        files.push({
            filename: 'README.md',
            content: readme,
            path: 'README.md'
        });

        return {
            files,
            metadata,
            framework: 'html',
            type: 'multi-page'
        };
    },

    // Generate complete export package
    generateExport: (framework, canvasComponents, data, colors, fonts, options = {}) => {
        const metadata = {
            title: data.siteTitle || 'Homepage',
            description: data.siteSubtitle || 'Generated homepage',
            author: 'Design Generator Pro',
            timestamp: new Date().toISOString()
        };

        const designTokens = ExportPipeline.generateDesignTokens(data, colors, fonts);
        const frameworkConfig = ExportPipeline.frameworks[framework];
        
        if (!frameworkConfig) {
            throw new Error(`Framework ${framework} not supported`);
        }

        // Convert components to framework-specific code
        let componentCode = '';
        const converter = ExportPipeline.componentConverters[framework] || ExportPipeline.componentConverters.react;
        
        canvasComponents.forEach(component => {
            if (converter[component.type]) {
                componentCode += converter[component.type](component.props);
            }
        });

        // Generate main template
        const mainTemplate = frameworkConfig.template(componentCode, metadata);
        
        // Generate CSS if available
        let cssCode = '';
        if (frameworkConfig.cssTemplate) {
            cssCode = frameworkConfig.cssTemplate(designTokens);
        }

        // Optimize code if requested
        if (options.minify) {
            mainTemplate = ExportPipeline.optimizeCode(mainTemplate, { minify: true });
            cssCode = ExportPipeline.optimizeCode(cssCode, { minify: true });
        }

        return {
            main: {
                filename: `Home${frameworkConfig.extension}`,
                content: mainTemplate
            },
            styles: {
                filename: framework === 'nextjs' ? 'Home.module.css' : 'Home.css',
                content: cssCode
            },
            tokens: {
                filename: 'design-tokens.json',
                content: JSON.stringify(designTokens, null, 2)
            },
            package: {
                filename: 'package.json',
                content: JSON.stringify(ExportPipeline.generatePackageJson(framework, metadata), null, 2)
            },
            readme: {
                filename: 'README.md',
                content: ExportPipeline.generateReadme(framework, metadata)
            }
        };
    },

    // Generate package.json for frameworks
    generatePackageJson: (framework, metadata) => {
        const basePackage = {
            name: metadata.title.toLowerCase().replace(/\s+/g, '-'),
            version: '1.0.0',
            description: metadata.description,
            private: true,
            author: metadata.author,
            license: 'MIT'
        };

        const dependencies = {
            nextjs: {
                scripts: {
                    dev: 'next dev',
                    build: 'next build',
                    start: 'next start',
                    lint: 'next lint'
                },
                dependencies: {
                    next: '^14.0.0',
                    react: '^18.0.0',
                    'react-dom': '^18.0.0'
                },
                devDependencies: {
                    '@types/node': '^20.0.0',
                    '@types/react': '^18.0.0',
                    '@types/react-dom': '^18.0.0',
                    eslint: '^8.0.0',
                    'eslint-config-next': '^14.0.0',
                    typescript: '^5.0.0'
                }
            },
            react: {
                scripts: {
                    start: 'react-scripts start',
                    build: 'react-scripts build',
                    test: 'react-scripts test',
                    eject: 'react-scripts eject'
                },
                dependencies: {
                    react: '^18.0.0',
                    'react-dom': '^18.0.0',
                    'react-helmet-async': '^2.0.0',
                    'react-scripts': '^5.0.0'
                },
                devDependencies: {
                    '@types/node': '^20.0.0',
                    '@types/react': '^18.0.0',
                    '@types/react-dom': '^18.0.0',
                    typescript: '^5.0.0'
                }
            },
            vue: {
                scripts: {
                    serve: 'vue-cli-service serve',
                    build: 'vue-cli-service build',
                    lint: 'vue-cli-service lint'
                },
                dependencies: {
                    vue: '^3.0.0',
                    'vue-router': '^4.0.0'
                },
                devDependencies: {
                    '@vue/cli-service': '^5.0.0',
                    '@vue/compiler-sfc': '^3.0.0',
                    typescript: '^5.0.0'
                }
            }
        };

        return { ...basePackage, ...dependencies[framework] };
    },

    // Generate README documentation
    generateReadme: (framework, metadata) => {
        return `# ${metadata.title}

${metadata.description}

## Generated with Design Generator Pro

This project was created using the Design Generator Pro component library system.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### Development

\`\`\`bash
npm run ${framework === 'nextjs' ? 'dev' : framework === 'react' ? 'start' : 'serve'}
\`\`\`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

## Framework: ${ExportPipeline.frameworks[framework]?.name}

This project uses ${ExportPipeline.frameworks[framework]?.name} for the frontend framework.

## Design System

The project includes a complete design system with:
- Design tokens (see design-tokens.json)
- Responsive components
- Consistent styling
- Accessibility features

## Generated: ${metadata.timestamp}

Created with [Design Generator Pro](https://github.com/nickyleech/homepage-designer)
        `;
    }
};