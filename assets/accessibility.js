// Accessibility Auditing System with WCAG Compliance
const AccessibilityAuditor = {
    // WCAG 2.1 Guidelines
    guidelines: {
        perceivable: {
            colorContrast: {
                level: 'AA',
                normalText: 4.5,
                largeText: 3.0,
                description: 'Text must have sufficient contrast against background'
            },
            altText: {
                level: 'A',
                description: 'Images must have alternative text descriptions'
            },
            headingStructure: {
                level: 'AA',
                description: 'Headings must follow logical hierarchy (h1, h2, h3...)'
            }
        },
        operable: {
            keyboardNavigation: {
                level: 'A',
                description: 'All interactive elements must be keyboard accessible'
            },
            focusVisible: {
                level: 'AA',
                description: 'Focus indicators must be clearly visible'
            },
            linkPurpose: {
                level: 'AA',
                description: 'Link text must clearly describe the destination'
            }
        },
        understandable: {
            language: {
                level: 'A',
                description: 'Page language must be specified'
            },
            readability: {
                level: 'AAA',
                description: 'Content should be readable and understandable'
            }
        },
        robust: {
            validHTML: {
                level: 'A',
                description: 'HTML must be valid and semantic'
            },
            ariaLabels: {
                level: 'AA',
                description: 'ARIA labels must be properly implemented'
            }
        }
    },

    // Audit a design/component for accessibility
    auditDesign: (htmlContent, designData) => {
        const issues = [];
        const suggestions = [];
        const score = { total: 0, passed: 0 };

        // Create temporary DOM for analysis
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        // Run accessibility checks
        issues.push(...AccessibilityAuditor.checkColorContrast(tempDiv, designData));
        issues.push(...AccessibilityAuditor.checkHeadingStructure(tempDiv));
        issues.push(...AccessibilityAuditor.checkImages(tempDiv));
        issues.push(...AccessibilityAuditor.checkLinks(tempDiv));
        issues.push(...AccessibilityAuditor.checkFocusElements(tempDiv));
        issues.push(...AccessibilityAuditor.checkAriaLabels(tempDiv));
        issues.push(...AccessibilityAuditor.checkSemanticHTML(tempDiv));

        // Generate suggestions
        suggestions.push(...AccessibilityAuditor.generateSuggestions(issues, designData));

        // Calculate score
        const totalChecks = 20; // Total number of accessibility checks
        const passedChecks = totalChecks - issues.filter(issue => issue.severity === 'error').length;
        score.total = totalChecks;
        score.passed = passedChecks;
        score.percentage = Math.round((passedChecks / totalChecks) * 100);

        return {
            score,
            issues,
            suggestions,
            compliance: AccessibilityAuditor.getComplianceLevel(score.percentage)
        };
    },

    // Check color contrast ratios
    checkColorContrast: (element, designData) => {
        const issues = [];
        const colors = designData.colors || {};

        // Check primary text contrast
        const primaryContrast = AccessibilityAuditor.calculateContrast(colors.text || '#000000', colors.background || '#ffffff');
        if (primaryContrast < 4.5) {
            issues.push({
                type: 'colorContrast',
                severity: 'error',
                message: `Primary text contrast ratio is ${primaryContrast.toFixed(2)}:1. Should be at least 4.5:1`,
                element: 'body text',
                suggestion: 'Use darker text color or lighter background color',
                wcag: 'AA'
            });
        }

        // Check secondary text contrast
        if (colors.secondary) {
            const secondaryContrast = AccessibilityAuditor.calculateContrast(colors.secondary, colors.background || '#ffffff');
            if (secondaryContrast < 4.5) {
                issues.push({
                    type: 'colorContrast',
                    severity: 'warning',
                    message: `Secondary text contrast ratio is ${secondaryContrast.toFixed(2)}:1. Should be at least 4.5:1`,
                    element: 'secondary text',
                    suggestion: 'Increase contrast for better readability',
                    wcag: 'AA'
                });
            }
        }

        return issues;
    },

    // Check heading structure
    checkHeadingStructure: (element) => {
        const issues = [];
        const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        if (headings.length === 0) {
            issues.push({
                type: 'headingStructure',
                severity: 'warning',
                message: 'No headings found. Use headings to structure content',
                suggestion: 'Add semantic headings (h1, h2, h3) to organize content',
                wcag: 'AA'
            });
            return issues;
        }

        let previousLevel = 0;
        let h1Count = 0;

        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            
            if (level === 1) h1Count++;
            
            // Check for skipped heading levels
            if (level > previousLevel + 1 && previousLevel !== 0) {
                issues.push({
                    type: 'headingStructure',
                    severity: 'warning',
                    message: `Heading level ${level} follows level ${previousLevel}. Avoid skipping heading levels`,
                    element: heading.tagName.toLowerCase(),
                    suggestion: 'Use consecutive heading levels (h1, h2, h3...)',
                    wcag: 'AA'
                });
            }

            previousLevel = level;
        });

        // Check for multiple h1s
        if (h1Count > 1) {
            issues.push({
                type: 'headingStructure',
                severity: 'warning',
                message: `Found ${h1Count} h1 elements. Typically only one h1 per page`,
                suggestion: 'Use only one h1 element per page',
                wcag: 'AA'
            });
        }

        return issues;
    },

    // Check images for alt text
    checkImages: (element) => {
        const issues = [];
        const images = element.querySelectorAll('img');

        images.forEach(img => {
            const alt = img.getAttribute('alt');
            const src = img.getAttribute('src');

            if (alt === null) {
                issues.push({
                    type: 'altText',
                    severity: 'error',
                    message: 'Image missing alt attribute',
                    element: `img[src="${src}"]`,
                    suggestion: 'Add descriptive alt text or alt="" for decorative images',
                    wcag: 'A'
                });
            } else if (alt.length === 0 && !img.hasAttribute('role')) {
                // Empty alt is okay for decorative images
            } else if (alt.length > 0 && alt.length < 5) {
                issues.push({
                    type: 'altText',
                    severity: 'warning',
                    message: 'Alt text is very short and may not be descriptive enough',
                    element: `img[alt="${alt}"]`,
                    suggestion: 'Provide more descriptive alt text that explains the image content',
                    wcag: 'A'
                });
            }
        });

        return issues;
    },

    // Check links for descriptive text
    checkLinks: (element) => {
        const issues = [];
        const links = element.querySelectorAll('a');

        links.forEach(link => {
            const text = link.textContent.trim();
            const href = link.getAttribute('href');

            if (!text) {
                issues.push({
                    type: 'linkPurpose',
                    severity: 'error',
                    message: 'Link has no text content',
                    element: `a[href="${href}"]`,
                    suggestion: 'Add descriptive text or aria-label to the link',
                    wcag: 'A'
                });
            } else if (['click here', 'read more', 'here', 'more'].includes(text.toLowerCase())) {
                issues.push({
                    type: 'linkPurpose',
                    severity: 'warning',
                    message: `Link text "${text}" is not descriptive`,
                    element: `a[href="${href}"]`,
                    suggestion: 'Use descriptive link text that explains the destination',
                    wcag: 'AA'
                });
            }
        });

        return issues;
    },

    // Check focus elements
    checkFocusElements: (element) => {
        const issues = [];
        const focusableElements = element.querySelectorAll('button, input, select, textarea, a[href]');

        if (focusableElements.length === 0) {
            return issues;
        }

        // Check if focus styles are defined (this is a simplified check)
        focusableElements.forEach(el => {
            const tagName = el.tagName.toLowerCase();
            
            // Check for disabled elements without proper indication
            if (el.hasAttribute('disabled') && !el.hasAttribute('aria-disabled')) {
                issues.push({
                    type: 'focusVisible',
                    severity: 'warning',
                    message: 'Disabled element should have aria-disabled attribute',
                    element: tagName,
                    suggestion: 'Add aria-disabled="true" to disabled elements',
                    wcag: 'AA'
                });
            }
        });

        return issues;
    },

    // Check ARIA labels and attributes
    checkAriaLabels: (element) => {
        const issues = [];

        // Check for elements with aria-labelledby pointing to non-existent elements
        const elementsWithLabelledBy = element.querySelectorAll('[aria-labelledby]');
        elementsWithLabelledBy.forEach(el => {
            const labelId = el.getAttribute('aria-labelledby');
            if (!element.querySelector(`#${labelId}`)) {
                issues.push({
                    type: 'ariaLabels',
                    severity: 'error',
                    message: `aria-labelledby references non-existent element with id="${labelId}"`,
                    element: el.tagName.toLowerCase(),
                    suggestion: 'Ensure aria-labelledby references an existing element',
                    wcag: 'AA'
                });
            }
        });

        // Check for form elements without labels
        const formElements = element.querySelectorAll('input:not([type="hidden"]), select, textarea');
        formElements.forEach(el => {
            const hasLabel = el.hasAttribute('aria-label') || 
                           el.hasAttribute('aria-labelledby') ||
                           element.querySelector(`label[for="${el.id}"]`);
            
            if (!hasLabel) {
                issues.push({
                    type: 'ariaLabels',
                    severity: 'error',
                    message: 'Form element missing accessible label',
                    element: `${el.tagName.toLowerCase()}[type="${el.type}"]`,
                    suggestion: 'Add aria-label, aria-labelledby, or associated label element',
                    wcag: 'A'
                });
            }
        });

        return issues;
    },

    // Check semantic HTML
    checkSemanticHTML: (element) => {
        const issues = [];

        // Check for proper semantic structure
        const hasMain = element.querySelector('main');
        const hasNav = element.querySelector('nav');
        const hasHeader = element.querySelector('header');

        if (!hasMain && element.children.length > 0) {
            issues.push({
                type: 'semanticHTML',
                severity: 'warning',
                message: 'Missing main element for primary content',
                suggestion: 'Wrap main content in <main> element',
                wcag: 'AA'
            });
        }

        // Check for generic div usage where semantic elements would be better
        const buttons = element.querySelectorAll('div[onclick], span[onclick]');
        if (buttons.length > 0) {
            issues.push({
                type: 'semanticHTML',
                severity: 'warning',
                message: `Found ${buttons.length} clickable div/span elements`,
                suggestion: 'Use <button> element for interactive actions',
                wcag: 'A'
            });
        }

        return issues;
    },

    // Calculate color contrast ratio
    calculateContrast: (color1, color2) => {
        const getLuminance = (color) => {
            const rgb = AccessibilityAuditor.hexToRgb(color);
            const rsRGB = rgb.r / 255;
            const gsRGB = rgb.g / 255;
            const bsRGB = rgb.b / 255;

            const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
            const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
            const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };

        const lum1 = getLuminance(color1);
        const lum2 = getLuminance(color2);
        const brightest = Math.max(lum1, lum2);
        const darkest = Math.min(lum1, lum2);

        return (brightest + 0.05) / (darkest + 0.05);
    },

    // Convert hex to RGB
    hexToRgb: (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    },

    // Generate improvement suggestions
    generateSuggestions: (issues, designData) => {
        const suggestions = [];

        // Color contrast improvements
        const contrastIssues = issues.filter(issue => issue.type === 'colorContrast');
        if (contrastIssues.length > 0) {
            suggestions.push({
                category: 'Color Accessibility',
                priority: 'high',
                title: 'Improve Color Contrast',
                description: 'Enhance text readability by adjusting color contrast ratios',
                actions: [
                    'Use darker text colors on light backgrounds',
                    'Consider adding text shadows or outlines for better visibility',
                    'Test colors with contrast checking tools'
                ]
            });
        }

        // Heading structure improvements
        const headingIssues = issues.filter(issue => issue.type === 'headingStructure');
        if (headingIssues.length > 0) {
            suggestions.push({
                category: 'Content Structure',
                priority: 'medium',
                title: 'Improve Heading Hierarchy',
                description: 'Create logical content structure with proper heading levels',
                actions: [
                    'Use only one h1 per page',
                    'Follow sequential heading order (h1, h2, h3...)',
                    'Make headings descriptive and meaningful'
                ]
            });
        }

        return suggestions;
    },

    // Get compliance level based on score
    getComplianceLevel: (percentage) => {
        if (percentage >= 95) return { level: 'AAA', description: 'Excellent accessibility' };
        if (percentage >= 85) return { level: 'AA', description: 'Good accessibility' };
        if (percentage >= 70) return { level: 'A', description: 'Basic accessibility' };
        return { level: 'Non-compliant', description: 'Needs improvement' };
    },

    // Generate accessibility fixes
    generateFixes: (htmlContent, issues) => {
        let fixedHTML = htmlContent;

        issues.forEach(issue => {
            switch (issue.type) {
                case 'altText':
                    // Add alt attributes to images
                    fixedHTML = fixedHTML.replace(/<img([^>]*?)(?<!alt=["'][^"']*?["'])>/gi, '<img$1 alt="Descriptive image">');
                    break;
                
                case 'linkPurpose':
                    // Improve generic link text
                    fixedHTML = fixedHTML.replace(/>click here</gi, '>Learn more about our services<');
                    fixedHTML = fixedHTML.replace(/>read more</gi, '>Read the full article<');
                    break;
                
                case 'semanticHTML':
                    // Replace divs with buttons where appropriate
                    fixedHTML = fixedHTML.replace(/<div([^>]*?)onclick/gi, '<button$1onclick');
                    break;
            }
        });

        return fixedHTML;
    }
};