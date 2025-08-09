# CLAUDE.md

This file provides comprehensive guidance to Claude Code when working with the Homepage Design Generator Pro v3.0 project.

## Project Overview

**Homepage Design Generator Pro v3.0** is a comprehensive, enterprise-grade web application for creating professional website designs with advanced customisation options, AI-powered features, and seamless deployment integration. This enhanced version includes extensive template libraries, brand-specific templates, professional-grade export capabilities, comprehensive design transformation tools, and intelligent context-aware adaptation systems.

### Key Features v3.0

- **50+ Customisation Variables**: Technical architecture, performance optimisation, user experience, and deployment options
- **Context-Aware Design Adaptation**: Industry-specific, audience-targeted, and geographically-adapted design patterns
- **Application Transformation Engine**: Convert existing applications between design styles and frameworks
- **Progressive Enhancement System**: Incrementally improve existing applications whilst maintaining functionality
- **Beautiful Icon System**: SVG-based icons from Heroicons, Lucide, and Geist for Vercel compatibility
- **British English Interface**: Properly localised for UK/European users

## Development Commands

```bash
# Start the design generator
open index.html          # Open main app in browser
open homepage-design-generator.html  # Open legacy single-file version

# For future development
npm run dev              # Development server (when converted to Node.js app)
npm run build            # Build for production
npm run test             # Run tests
```

## How to Use Generated Designs in Claude Code Projects

### Integration Workflow

1. **Generate Design**: Use the design generator to create your desired layout and style
2. **Download Templates**: Export complete HTML files or style systems
3. **Reference in Claude Code**: Include the generated files in your project and reference them

### Comprehensive Claude Code Integration Examples

### New Application Creation
```bash
# Create a complete new application
"Create a comprehensive Next.js application using the tech-startup-template.html with TypeScript, Tailwind CSS, and Vercel optimisation. Include authentication with NextAuth.js, Prisma database integration, and WCAG AA accessibility compliance."

# Industry-specific applications
"Build a healthcare website based on the minimalist-hero-template.html with trust-focused design patterns, GDPR compliance, and professional blue colour scheme optimised for healthcare industry users."

# Multi-framework applications
"Generate both React and Vue versions of the creative-portfolio-template.html with identical functionality, shared design tokens, and component parity for cross-framework compatibility."
```

### Application Transformation
```bash
# Style transformation
"Transform my existing corporate website to use the creative-portfolio design style whilst preserving all functionality. Update colour scheme to Creative Purple, add micro-animations, and modernise the typography system."

# Framework migration
"Migrate my jQuery-based website to modern Next.js 14 using the dashboard-admin-template.html as the design foundation. Preserve all existing features whilst adding TypeScript, server-side rendering, and performance optimisations."

# Progressive enhancement
"Progressively enhance my existing React application by adding PWA capabilities, offline support, dark mode toggle, and upgrading the design system to match the tech-startup style with smooth animations."
```

### Advanced Customisation
```bash
# Comprehensive technical specifications
"Create a production-ready e-commerce platform using ecommerce-template.html with: 
- Next.js 14 with App Router and Server Components
- Stripe payment integration and inventory management
- Prisma + PostgreSQL database with optimised queries
- Advanced image optimisation with Cloudinary
- Redis caching for performance
- Comprehensive error boundaries and loading states
- WCAG AAA accessibility compliance
- Multi-language support for UK and EU markets
- GDPR-compliant cookie consent and data handling"

# Context-aware applications
"Build a B2B SaaS dashboard targeting financial industry users in the UK market. Use professional blue colour scheme, formal language tone, comprehensive trust elements, and British English localisation throughout. Include security headers, audit trails, and enterprise-grade authentication."
```

### File Naming Conventions

- **Templates**: `{style}-{layout}-template.html` (e.g., `minimalist-hero-template.html`)
- **Style Systems**: `{project}-design-system.html` 
- **Multi-page**: `{project}-{page}-template.html` (e.g., `corporate-about-template.html`)

## Design Styles Available (13 Total)

### Core Styles
- **Minimalist**: Clean, simple layouts with focus on whitespace
- **Dashboard**: Professional admin panels & SaaS interfaces
- **Corporate**: Traditional business designs with trust elements
- **Creative**: Artistic portfolio designs with bold visuals
- **Tech Startup**: Modern innovation-focused styling
- **E-commerce**: Product-focused conversion-optimised layouts

### Extended Styles (New in v2.0)
- **Blog/Magazine**: Content-heavy layouts with typography focus
- **Restaurant**: Food service designs with appetising imagery
- **Photography**: Image-centric layouts with gallery features
- **Real Estate**: Property showcase with professional presentation
- **Healthcare**: Medical professional designs with trust elements
- **Education**: Learning-focused layouts with course structure

### Brand-Specific Styles
- **PA Media**: Professional media brand template suite with:
  - Website templates (4 responsive designs)
  - PowerPoint presentations (15+ slide masters)
  - Microsoft Teams backgrounds (4 HD options)
  - Style guides and brand guidelines
  - Social media templates
  - Print materials (business cards, letterhead, brochures)

## Multi-Page Consistency

The generator creates consistent design systems across multiple page types:

- **Homepage**: Primary landing and hero sections
- **About**: Company/personal information layouts
- **Services**: Feature and service showcase pages
- **Portfolio**: Project and work display pages
- **Contact**: Contact forms and information pages
- **Blog**: Article listing and reading layouts

### Style Inheritance

When you generate a homepage design, the system automatically creates consistent styling for:
- Typography hierarchy
- Color schemes and branding
- Navigation patterns
- Layout grids and spacing
- Component styles

## Advanced Features v3.0

### 50+ Customisation Variables

#### Technical Architecture (15 options)
- **Rendering Strategy**: SSG, SSR, SPA, ISR, Hybrid
- **State Management**: Built-in, Zustand, Redux Toolkit, Jotai, Valtio
- **Data Fetching**: Fetch API, Axios, SWR, React Query, GraphQL
- **Authentication**: NextAuth.js, Clerk, Auth0, Firebase Auth, Custom
- **Database**: None, Prisma + PostgreSQL, MongoDB, Supabase, Firebase

#### Performance & Optimisation (10 options)
- **Image Optimisation**: Next.js Image, Cloudinary, Custom, None
- **Caching**: Default, Redis, Edge Caching, Memory Cache
- **Bundling**: Default, Webpack, Turbopack, Vite
- **Analytics**: None, Vercel Analytics, Google Analytics, Plausible
- **Monitoring**: None, Sentry, LogRocket, Datadog

#### User Experience (12 options)
- **Loading States**: Basic, Skeleton, Spinner, Custom
- **Error Handling**: Basic, Comprehensive, User-friendly, Technical
- **Accessibility**: WCAG AA, WCAG AAA, Custom, Basic
- **Internationalisation**: None, next-i18next, react-i18next, Custom
- **Dark Mode**: None, System, Toggle, Automatic
- **Animations**: None, Framer Motion, CSS Animations, GSAP

#### Development Experience (8 options)
- **TypeScript**: Strict, Moderate, Basic, None
- **Linting**: ESLint + Prettier, ESLint, Biome, None
- **Testing**: Jest + RTL, Vitest, Playwright, None
- **Documentation**: Storybook, Docusaurus, README, None

#### Context-Aware Adaptation
- **Industry Targeting**: Tech, Healthcare, Finance, Creative, E-commerce
- **Audience Segmentation**: B2B, B2C, Enterprise, Startup
- **Geographic Localisation**: UK, US, EU with appropriate formats
- **Business Model**: SaaS, E-commerce, Portfolio, Corporate

### Design Transformation Engine
- **Style Transitions**: Convert between any design styles whilst preserving functionality
- **Framework Migrations**: Migrate applications between React, Vue, Angular, vanilla JS
- **Progressive Enhancement**: Add modern features to existing applications
- **Component Modernisation**: Update component libraries and design systems

### Responsive Design
- Mobile-first approach with intelligent breakpoints
- Touch-friendly navigation and interactions
- Progressive enhancement for different device capabilities
- Advanced viewport handling for modern devices

### Export Options
- **Complete Applications**: Full-stack applications with database integration
- **Component Libraries**: Reusable component systems with Storybook
- **Design Tokens**: CSS variables, JSON tokens, and style dictionaries
- **Framework Exports**: React, Vue, Angular, Svelte component exports
- **Documentation Systems**: Comprehensive guides and API documentation

## Best Practices for Claude Code Integration

### 1. Application Creation Strategy
- **Start with Context**: Always specify industry, audience, and geographic context for optimal results
- **Use Comprehensive Specifications**: Leverage all 50+ customisation variables for production-ready applications
- **Template Foundation**: Begin with generated templates and enhance rather than starting from scratch
- **Progressive Development**: Build iteratively from basic functionality to advanced features

### 2. Design System Consistency
- **Unified Tokens**: Maintain consistent design tokens across all components and pages
- **Component Hierarchy**: Use atomic design principles (atoms, molecules, organisms)
- **Responsive Patterns**: Apply mobile-first responsive design patterns throughout
- **Accessibility Standards**: Ensure WCAG AA/AAA compliance from the start, not as an afterthought

### 3. Performance Optimisation
- **Image Optimisation**: Always use Next.js Image or equivalent optimisation systems
- **Bundle Management**: Implement code splitting and dynamic imports for large applications
- **Caching Strategy**: Apply appropriate caching at browser, CDN, and application levels
- **Core Web Vitals**: Monitor and optimise for Google's Core Web Vitals metrics

### 4. British English and Localisation
- **Language Consistency**: Use British spellings (colour, optimise, organisation, etc.)
- **Cultural Adaptation**: Apply UK/European design patterns and user expectations
- **Currency and Dates**: Use appropriate formats (DD/MM/YYYY, £, etc.)
- **Legal Compliance**: Include GDPR compliance features for European users

### 5. Transformation and Migration
- **Functional Preservation**: Always ensure existing functionality remains intact during transformations
- **Incremental Approach**: Implement changes progressively to reduce risk
- **Testing Strategy**: Comprehensive testing before, during, and after transformations
- **User Impact**: Minimise disruption to existing users during migrations

## File Structure

```
design-prompts/
├── index.html                    # Main design generator app
├── assets/                       # Shared assets and components
├── templates/                    # Generated template library
├── exports/                      # Downloaded designs
└── docs/                        # Documentation and examples
```

## Comprehensive Prompt Types

### 1. New Application Creation (`new-project`)
Creates complete applications from scratch with all specified features and optimisations.

**Best for**: Starting fresh projects, MVP development, proof-of-concepts
**Includes**: Full application structure, components, routing, styling, and deployment configuration

### 2. Application Transformation (`transform-existing`)  
Transforms existing applications to new design styles whilst preserving functionality.

**Best for**: Design refreshes, brand updates, style modernisation
**Includes**: Component mapping, style migration, functionality preservation

### 3. Framework Migration (`migration`)
Migrates applications between different frameworks and architectures.

**Best for**: Technology stack updates, performance improvements, modernisation
**Includes**: Framework conversion, architecture updates, dependency migration

### 4. Progressive Enhancement (`enhancement`)
Adds modern features and improvements to existing applications incrementally.

**Best for**: Gradual improvements, adding new capabilities, performance optimisation
**Includes**: Feature additions, performance upgrades, accessibility improvements

### 5. Component Library Generation (`component-library`)
Creates comprehensive component libraries and design systems.

**Best for**: Large teams, multi-project consistency, design system development
**Includes**: Reusable components, Storybook documentation, design tokens

### 6. Design System Creation (`design-system`)
Generates complete design systems with tokens, guidelines, and documentation.

**Best for**: Brand standardisation, team alignment, scalable design
**Includes**: Design tokens, usage guidelines, component specifications

## Integration with Claude Code v3.0

When working with Claude Code, always:

1. **Include Reference Files**: Add generated templates to your project folder
2. **Specify Context**: Include industry, audience, and geographic targeting
3. **Define Technical Requirements**: Use the 50+ customisation variables
4. **Specify Framework**: Mention target framework and architecture preferences
5. **Define Scope**: Clarify transformation type and desired outcomes

### Enhanced Claude Code Request Examples

```bash
# New Application Creation
"Create a comprehensive healthcare SaaS platform using minimalist-dashboard-template.html targeting B2B enterprise users in the UK market. Include NextAuth.js authentication, Prisma + PostgreSQL database, WCAG AAA accessibility, GDPR compliance, and British English localisation throughout."

# Application Transformation  
"Transform my existing e-commerce site from jQuery to Next.js 14 using the modern tech-startup design style. Preserve all checkout functionality, add Stripe payments, implement server-side rendering, and upgrade to a professional blue colour scheme with smooth animations."

# Progressive Enhancement
"Progressively enhance my React dashboard by adding dark mode toggle, PWA capabilities with offline support, real-time notifications, advanced caching with Redis, and comprehensive error boundaries with user-friendly messages."

# Industry-Specific Applications
"Build a financial services website targeting enterprise clients with corporate design style, maximum trust elements, formal language tone, comprehensive security headers, audit trails, and regulatory compliance features for UK financial sector."
```

## Technical Specifications v3.0

### Supported Frameworks and Technologies
- **Frontend**: React, Next.js, Vue, Nuxt, Angular, Svelte, SvelteKit
- **Styling**: Tailwind CSS, styled-components, CSS Modules, Emotion, vanilla CSS
- **State Management**: Zustand, Redux Toolkit, Jotai, Valtio, built-in React state
- **Databases**: Prisma + PostgreSQL, MongoDB, Supabase, Firebase, PlanetScale
- **Authentication**: NextAuth.js, Clerk, Auth0, Firebase Auth, Supabase Auth
- **Deployment**: Vercel, Netlify, AWS, Railway, DigitalOcean
- **Testing**: Jest + RTL, Vitest, Playwright, Cypress

### Performance Standards
- **Lighthouse Score**: Target 90+ across all metrics
- **Core Web Vitals**: All metrics in "Good" range
- **Bundle Size**: Optimised with code splitting and tree shaking
- **Image Optimisation**: WebP format with appropriate fallbacks
- **Accessibility**: WCAG AA minimum, AAA preferred

### British English Standards
- **Spelling**: colour, organisation, optimise, analyse, centre, etc.
- **Currency**: £ (GBP) formatting and calculations
- **Dates**: DD/MM/YYYY format throughout
- **Language Tone**: Professional British English appropriate for context
- **Legal**: GDPR compliance and UK data protection standards

## Version History

### v3.0.0 - Current
- **50+ Customisation Variables**: Comprehensive technical and contextual options
- **Application Transformation**: Complete redesign capabilities whilst preserving functionality  
- **Context-Aware Design**: Industry, audience, and geographic adaptation
- **Beautiful Icon System**: SVG-based icons from Heroicons, Lucide, and Geist
- **British English Interface**: Full localisation for UK/European markets
- **Progressive Enhancement**: Incremental application improvements
- **Framework Migration**: Multi-framework conversion capabilities

### v2.0.0 - Previous
- Enhanced template library with brand-specific templates
- Professional-grade export capabilities
- Multi-page consistency features

### v1.0.0 - Initial
- Basic template generation and Claude Code integration

## Support and Troubleshooting

### Common Issues
- **Template Not Loading**: Ensure all dependencies are installed and paths are correct
- **Style Conflicts**: Use CSS-in-JS or CSS Modules to avoid global style conflicts  
- **Performance Issues**: Implement code splitting and lazy loading for large applications
- **Accessibility Failures**: Run automated audits and manual testing with screen readers

### Best Practice Reminders
- Always test on multiple devices and browsers
- Validate HTML and run accessibility audits
- Optimise images and implement proper caching
- Use semantic HTML and proper ARIA attributes
- Test with real users, especially for accessibility compliance

---

*Generated with Homepage Design Generator Pro v3.0 - British English localised for professional development teams*