# CLAUDE.md

This file provides guidance to Claude Code when working with the Homepage Design Generator project.

## Project Overview

**Homepage Design Generator** is a comprehensive web application for creating professional, minimalist website designs with multi-page support and advanced customization options.

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

### Claude Code Integration Examples

```bash
# Example commands to use with Claude Code:

# Convert generated design to React components
"Convert the layout from hero-template.html into React components"

# Extract styling for existing project
"Use the color scheme and layout from sidebar-design.html for my Vue.js app"

# Create consistent multi-page site
"Base all pages on the style system from my-design-system.html"

# Framework-specific conversion
"Convert portfolio-template.html to Next.js components with Tailwind CSS"
```

### File Naming Conventions

- **Templates**: `{style}-{layout}-template.html` (e.g., `minimalist-hero-template.html`)
- **Style Systems**: `{project}-design-system.html` 
- **Multi-page**: `{project}-{page}-template.html` (e.g., `corporate-about-template.html`)

## Design Styles Available

### Minimalist Variations
- **Clean Corporate**: Professional business layouts
- **Artistic Portfolio**: Creative showcase designs  
- **Tech Startup**: Modern SaaS and tech company styles
- **Creative Agency**: Bold, creative service-focused layouts

### Modern Dashboard
- **Admin Panels**: Management interfaces with sidebar navigation
- **Analytics Dashboards**: Data visualization and metrics layouts
- **SaaS Interfaces**: Application-style designs with cards and components

### Additional Styles
- **E-commerce**: Product-focused layouts
- **Blog/Magazine**: Content-heavy reading experiences
- **Restaurant**: Food service and hospitality designs
- **Photography Portfolio**: Image-focused showcases

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

## Advanced Features

### Responsive Design
- All templates are mobile-first and responsive
- Breakpoint controls for custom mobile/tablet/desktop layouts
- Touch-friendly navigation and interactions

### Export Options
- **Complete Sites**: Multi-page website packages
- **Style Systems**: CSS variables and design tokens
- **Framework Code**: React, Vue, Angular component exports
- **Design Documentation**: Style guides and component libraries

### Template Library
- Save custom design configurations
- Load and modify existing templates
- Share design systems across projects

## Best Practices

1. **Start with Templates**: Use generated templates as foundation, then customize
2. **Maintain Consistency**: Use the same design system across all pages
3. **Mobile-First**: Always test responsive behavior
4. **Performance**: Optimize images and code for production use
5. **Accessibility**: Ensure proper contrast and semantic HTML

## File Structure

```
design-prompts/
├── index.html                    # Main design generator app
├── assets/                       # Shared assets and components
├── templates/                    # Generated template library
├── exports/                      # Downloaded designs
└── docs/                        # Documentation and examples
```

## Integration with Claude Code

When working with Claude Code, always:

1. **Include Reference Files**: Add generated templates to your project folder
2. **Be Specific**: Reference exact template names and desired modifications
3. **Specify Framework**: Mention target framework (React, Vue, plain HTML, etc.)
4. **Define Scope**: Clarify if you want layout only, full styling, or component structure

### Example Claude Code Requests

```bash
# Good examples:
"Convert the dashboard-admin-template.html to React components using TypeScript and Tailwind"

"Use the color scheme from minimalist-corporate-template.html but apply it to a blog layout"

"Create a landing page based on tech-startup-hero-template.html with custom content"

# Avoid vague requests:
"Make it look like the template"
"Use that design we made"
```

## Notes

- All generated designs include semantic HTML and proper accessibility attributes
- Templates are framework-agnostic and can be converted to any technology stack
- The design generator creates production-ready code with optimized CSS
- Mobile responsiveness is built into all templates automatically