// Advanced Style Analysis and Design Pattern Recognition
class StyleAnalyzer {
    constructor() {
        this.designPatterns = {
            minimalist: {
                indicators: ['clean', 'simple', 'minimal', 'whitespace', 'typography'],
                colorPalette: 'monochromatic',
                characteristics: ['simple layouts', 'lots of whitespace', 'minimal colors', 'clean typography']
            },
            dashboard: {
                indicators: ['cards', 'metrics', 'data', 'charts', 'sidebar', 'admin'],
                colorPalette: 'professional',
                characteristics: ['card layouts', 'data visualization', 'sidebar navigation', 'metrics display']
            },
            corporate: {
                indicators: ['business', 'professional', 'company', 'services', 'solutions'],
                colorPalette: 'conservative',
                characteristics: ['professional imagery', 'structured layouts', 'trust indicators', 'service sections']
            },
            creative: {
                indicators: ['creative', 'artistic', 'design', 'portfolio', 'gallery'],
                colorPalette: 'vibrant',
                characteristics: ['artistic layouts', 'creative typography', 'image-heavy', 'unique designs']
            },
            tech: {
                indicators: ['technology', 'software', 'app', 'platform', 'innovation'],
                colorPalette: 'modern',
                characteristics: ['modern gradients', 'tech imagery', 'feature highlights', 'product demos']
            },
            ecommerce: {
                indicators: ['shop', 'buy', 'product', 'cart', 'price', 'store'],
                colorPalette: 'conversion',
                characteristics: ['product grids', 'pricing tables', 'call-to-actions', 'shopping features']
            }
        };

        this.colorSchemes = {
            monochromatic: ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff'],
            professional: ['#1f2937', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
            conservative: ['#1e40af', '#374151', '#6b7280', '#9ca3af', '#e5e7eb'],
            vibrant: ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444'],
            modern: ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'],
            conversion: ['#059669', '#dc2626', '#f59e0b', '#3b82f6', '#6b7280']
        };
    }

    analyzeDesignStyle(doc, htmlContent, extractedData) {
        const analysis = {
            detectedStyle: 'minimalist',
            confidence: 0.5,
            characteristics: [],
            colorAnalysis: this.analyzeColorUsage(extractedData.colors),
            layoutAnalysis: this.analyzeLayoutPatterns(doc, extractedData.layout),
            typographyAnalysis: this.analyzeTypography(doc, extractedData.fonts),
            componentAnalysis: this.analyzeComponents(doc),
            modernityScore: this.calculateModernityScore(doc, htmlContent),
            recommendations: []
        };

        // Analyze each design pattern
        const styleScores = {};
        Object.keys(this.designPatterns).forEach(style => {
            styleScores[style] = this.calculateStyleScore(style, doc, htmlContent, extractedData);
        });

        // Find the highest scoring style
        const topStyle = Object.entries(styleScores).reduce((a, b) => 
            styleScores[a[0]] > styleScores[b[0]] ? a : b
        );

        analysis.detectedStyle = topStyle[0];
        analysis.confidence = Math.min(topStyle[1], 0.95);
        analysis.characteristics = this.getStyleCharacteristics(topStyle[0], doc, extractedData);
        analysis.recommendations = this.generateRecommendations(analysis, extractedData);

        // Add alternative styles
        analysis.alternativeStyles = Object.entries(styleScores)
            .filter(([style, score]) => style !== topStyle[0] && score > 0.3)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 2)
            .map(([style, score]) => ({ style, confidence: score }));

        return analysis;
    }

    calculateStyleScore(style, doc, htmlContent, extractedData) {
        const pattern = this.designPatterns[style];
        let score = 0;
        const factors = [];

        // Content analysis
        const contentText = (extractedData.content || [])
            .map(c => c.text)
            .join(' ')
            .toLowerCase();
        
        const titleText = (extractedData.title || '').toLowerCase();
        const descText = (extractedData.description || '').toLowerCase();
        const allText = `${contentText} ${titleText} ${descText}`;

        // Check for style indicators in content
        pattern.indicators.forEach(indicator => {
            if (allText.includes(indicator)) {
                score += 0.15;
                factors.push(`Content mentions: ${indicator}`);
            }
        });

        // Layout analysis
        const layoutScore = this.analyzeLayoutForStyle(style, doc, extractedData.layout);
        score += layoutScore.score;
        factors.push(...layoutScore.factors);

        // Color analysis
        const colorScore = this.analyzeColorsForStyle(style, extractedData.colors);
        score += colorScore.score;
        factors.push(...colorScore.factors);

        // Component analysis
        const componentScore = this.analyzeComponentsForStyle(style, doc);
        score += componentScore.score;
        factors.push(...componentScore.factors);

        // Typography analysis
        const typographyScore = this.analyzeTypographyForStyle(style, extractedData.fonts);
        score += typographyScore.score;
        factors.push(...typographyScore.factors);

        // Store factors for debugging
        this.lastAnalysisFactors = this.lastAnalysisFactors || {};
        this.lastAnalysisFactors[style] = factors;

        return Math.min(score, 1.0);
    }

    analyzeLayoutForStyle(style, doc, layout) {
        let score = 0;
        const factors = [];

        switch (style) {
            case 'minimalist':
                if (layout.structure === 'centered') {
                    score += 0.2;
                    factors.push('Centered layout');
                }
                if (!layout.hasSidebar) {
                    score += 0.1;
                    factors.push('No sidebar');
                }
                if (doc.querySelectorAll('*').length < 100) {
                    score += 0.1;
                    factors.push('Simple DOM structure');
                }
                break;

            case 'dashboard':
                if (layout.hasSidebar) {
                    score += 0.2;
                    factors.push('Has sidebar');
                }
                if (doc.querySelectorAll('.card, .widget, .panel').length > 3) {
                    score += 0.2;
                    factors.push('Multiple cards/widgets');
                }
                break;

            case 'corporate':
                if (layout.hasHeader && layout.hasFooter) {
                    score += 0.15;
                    factors.push('Standard header/footer');
                }
                if (layout.structure === 'hero') {
                    score += 0.1;
                    factors.push('Hero layout');
                }
                break;

            case 'creative':
                if (layout.structure === 'grid') {
                    score += 0.15;
                    factors.push('Grid layout');
                }
                if (doc.querySelectorAll('img').length > 5) {
                    score += 0.1;
                    factors.push('Image-heavy');
                }
                break;

            case 'tech':
                if (layout.hasHero) {
                    score += 0.15;
                    factors.push('Hero section');
                }
                if (doc.querySelectorAll('.feature, .benefit').length > 2) {
                    score += 0.1;
                    factors.push('Feature sections');
                }
                break;

            case 'ecommerce':
                if (doc.querySelectorAll('.product, .item, .card').length > 4) {
                    score += 0.2;
                    factors.push('Product grid');
                }
                if (doc.querySelector('.price, .cart, .buy')) {
                    score += 0.15;
                    factors.push('Commerce elements');
                }
                break;
        }

        return { score, factors };
    }

    analyzeColorsForStyle(style, colors) {
        let score = 0;
        const factors = [];

        if (!colors || colors.length === 0) {
            return { score: 0, factors: ['No colors to analyze'] };
        }

        const schemeColors = this.colorSchemes[this.designPatterns[style].colorPalette] || [];
        const colorAnalysis = this.analyzeColorPalette(colors);

        switch (style) {
            case 'minimalist':
                if (colorAnalysis.isMonochromatic) {
                    score += 0.2;
                    factors.push('Monochromatic palette');
                }
                if (colors.length <= 3) {
                    score += 0.1;
                    factors.push('Limited color palette');
                }
                break;

            case 'dashboard':
                if (this.hasBlues(colors)) {
                    score += 0.15;
                    factors.push('Professional blues');
                }
                if (colorAnalysis.hasNeutrals) {
                    score += 0.1;
                    factors.push('Neutral base colors');
                }
                break;

            case 'corporate':
                if (this.hasConservativeColors(colors)) {
                    score += 0.2;
                    factors.push('Conservative color scheme');
                }
                break;

            case 'creative':
                if (colorAnalysis.isVibrant) {
                    score += 0.2;
                    factors.push('Vibrant colors');
                }
                if (colors.length > 4) {
                    score += 0.1;
                    factors.push('Rich color palette');
                }
                break;

            case 'tech':
                if (this.hasModernColors(colors)) {
                    score += 0.15;
                    factors.push('Modern tech colors');
                }
                if (this.hasGradientColors(colors)) {
                    score += 0.1;
                    factors.push('Gradient-friendly colors');
                }
                break;

            case 'ecommerce':
                if (this.hasConversionColors(colors)) {
                    score += 0.15;
                    factors.push('Conversion-optimized colors');
                }
                break;
        }

        return { score, factors };
    }

    analyzeComponentsForStyle(style, doc) {
        let score = 0;
        const factors = [];

        const components = {
            cards: doc.querySelectorAll('.card, .box, .panel').length,
            buttons: doc.querySelectorAll('button, .btn, .button').length,
            forms: doc.querySelectorAll('form').length,
            nav: doc.querySelectorAll('nav, .nav, .navbar').length,
            hero: doc.querySelectorAll('.hero, .banner, .jumbotron').length,
            testimonials: doc.querySelectorAll('.testimonial, .review').length,
            pricing: doc.querySelectorAll('.pricing, .price').length,
            features: doc.querySelectorAll('.feature, .benefit').length
        };

        switch (style) {
            case 'minimalist':
                if (components.cards <= 2) {
                    score += 0.1;
                    factors.push('Minimal components');
                }
                break;

            case 'dashboard':
                if (components.cards >= 4) {
                    score += 0.2;
                    factors.push('Dashboard cards');
                }
                break;

            case 'corporate':
                if (components.testimonials > 0) {
                    score += 0.1;
                    factors.push('Has testimonials');
                }
                if (components.features > 2) {
                    score += 0.1;
                    factors.push('Feature sections');
                }
                break;

            case 'creative':
                if (components.hero > 0) {
                    score += 0.1;
                    factors.push('Creative hero section');
                }
                break;

            case 'tech':
                if (components.features > 2) {
                    score += 0.15;
                    factors.push('Tech features');
                }
                break;

            case 'ecommerce':
                if (components.pricing > 0) {
                    score += 0.2;
                    factors.push('Pricing components');
                }
                break;
        }

        return { score, factors };
    }

    analyzeTypographyForStyle(style, fonts) {
        let score = 0;
        const factors = [];

        if (!fonts || fonts.length === 0) {
            return { score: 0, factors: ['No fonts to analyze'] };
        }

        const fontText = fonts.join(' ').toLowerCase();

        switch (style) {
            case 'minimalist':
                if (fontText.includes('sans') || fontText.includes('system')) {
                    score += 0.1;
                    factors.push('Clean sans-serif fonts');
                }
                break;

            case 'corporate':
                if (fontText.includes('serif') || fontText.includes('times')) {
                    score += 0.1;
                    factors.push('Professional serif fonts');
                }
                break;

            case 'creative':
                if (fontText.includes('display') || fontText.includes('custom')) {
                    score += 0.1;
                    factors.push('Creative typography');
                }
                break;

            case 'tech':
                if (fontText.includes('mono') || fontText.includes('code')) {
                    score += 0.1;
                    factors.push('Tech-style monospace');
                }
                break;
        }

        return { score, factors };
    }

    analyzeColorUsage(colors) {
        if (!colors || colors.length === 0) {
            return {
                dominantColors: [],
                isMonochromatic: false,
                isVibrant: false,
                hasNeutrals: false,
                brightness: 'medium'
            };
        }

        return {
            dominantColors: colors.slice(0, 3),
            isMonochromatic: this.isMonochromaticPalette(colors),
            isVibrant: this.isVibrantPalette(colors),
            hasNeutrals: this.hasNeutralColors(colors),
            brightness: this.calculateBrightness(colors)
        };
    }

    analyzeLayoutPatterns(doc, layout) {
        return {
            structure: layout.structure,
            complexity: this.calculateLayoutComplexity(doc),
            responsiveIndicators: this.findResponsiveIndicators(doc),
            modernPatterns: this.findModernLayoutPatterns(doc)
        };
    }

    analyzeTypography(doc, fonts) {
        return {
            fontFamilies: fonts || [],
            headingHierarchy: this.analyzeHeadingHierarchy(doc),
            textDensity: this.calculateTextDensity(doc),
            readabilityScore: this.calculateReadabilityScore(doc)
        };
    }

    analyzeComponents(doc) {
        return {
            interactiveElements: doc.querySelectorAll('button, input, select, textarea').length,
            mediaElements: doc.querySelectorAll('img, video, svg').length,
            navigationComplexity: this.calculateNavComplexity(doc),
            formComplexity: this.calculateFormComplexity(doc)
        };
    }

    calculateModernityScore(doc, htmlContent) {
        let score = 0;

        // Check for modern CSS features
        if (htmlContent.includes('flexbox') || htmlContent.includes('grid')) score += 0.2;
        if (htmlContent.includes('transition') || htmlContent.includes('animation')) score += 0.2;
        if (htmlContent.includes('border-radius')) score += 0.1;
        if (htmlContent.includes('box-shadow')) score += 0.1;
        if (htmlContent.includes('gradient')) score += 0.15;

        // Check for modern HTML
        if (doc.querySelector('main, article, section, aside, header, footer, nav')) score += 0.15;
        if (doc.querySelector('[data-*]')) score += 0.1;

        return Math.min(score, 1.0);
    }

    generateRecommendations(analysis, extractedData) {
        const recommendations = [];

        // Color recommendations
        if (analysis.colorAnalysis.dominantColors.length < 2) {
            recommendations.push({
                type: 'color',
                priority: 'medium',
                message: 'Consider adding accent colors to create visual hierarchy',
                action: 'Add 1-2 complementary colors to your palette'
            });
        }

        // Layout recommendations
        if (analysis.layoutAnalysis.complexity < 0.3) {
            recommendations.push({
                type: 'layout',
                priority: 'low',
                message: 'Layout could benefit from more visual structure',
                action: 'Consider adding sections or cards to organize content'
            });
        }

        // Typography recommendations
        if (analysis.typographyAnalysis.headingHierarchy < 3) {
            recommendations.push({
                type: 'typography',
                priority: 'high',
                message: 'Improve content hierarchy with more heading levels',
                action: 'Add h2, h3 headings to structure your content'
            });
        }

        // Modernity recommendations
        if (analysis.modernityScore < 0.5) {
            recommendations.push({
                type: 'design',
                priority: 'medium',
                message: 'Design could be modernized with contemporary patterns',
                action: 'Add subtle animations, improved spacing, and modern components'
            });
        }

        return recommendations;
    }

    getStyleCharacteristics(style, doc, extractedData) {
        const baseCharacteristics = this.designPatterns[style].characteristics;
        const observedCharacteristics = [];

        // Add observed characteristics based on analysis
        if (extractedData.colors && extractedData.colors.length > 0) {
            observedCharacteristics.push(`${extractedData.colors.length} color palette`);
        }

        if (extractedData.layout.hasHero) {
            observedCharacteristics.push('hero section layout');
        }

        if (doc.querySelectorAll('img').length > 3) {
            observedCharacteristics.push('image-rich content');
        }

        return [...baseCharacteristics, ...observedCharacteristics];
    }

    // Helper methods for color analysis
    isMonochromaticPalette(colors) {
        if (colors.length <= 2) return true;
        
        // Check if colors are variations of the same hue
        const hues = colors.map(color => this.getHue(color));
        const uniqueHues = [...new Set(hues)];
        return uniqueHues.length <= 2;
    }

    isVibrantPalette(colors) {
        return colors.some(color => {
            const saturation = this.getSaturation(color);
            return saturation > 0.6;
        });
    }

    hasNeutralColors(colors) {
        return colors.some(color => {
            const saturation = this.getSaturation(color);
            return saturation < 0.2;
        });
    }

    hasBlues(colors) {
        return colors.some(color => {
            const hue = this.getHue(color);
            return hue >= 200 && hue <= 250;
        });
    }

    hasConservativeColors(colors) {
        return colors.some(color => {
            const hue = this.getHue(color);
            return (hue >= 200 && hue <= 250) || this.getSaturation(color) < 0.4;
        });
    }

    hasModernColors(colors) {
        return colors.some(color => {
            const hue = this.getHue(color);
            return (hue >= 250 && hue <= 300) || (hue >= 180 && hue <= 220);
        });
    }

    hasGradientColors(colors) {
        // Check if colors would work well in gradients (similar hues)
        if (colors.length < 2) return false;
        
        const hues = colors.map(color => this.getHue(color));
        return hues.some((hue, i) => {
            return hues.some((otherHue, j) => {
                return i !== j && Math.abs(hue - otherHue) < 60;
            });
        });
    }

    hasConversionColors(colors) {
        return colors.some(color => {
            const hue = this.getHue(color);
            // Green or orange (good for CTAs)
            return (hue >= 90 && hue <= 140) || (hue >= 20 && hue <= 50);
        });
    }

    calculateBrightness(colors) {
        const brightness = colors.reduce((sum, color) => {
            return sum + this.getLightness(color);
        }, 0) / colors.length;

        if (brightness > 0.7) return 'light';
        if (brightness < 0.3) return 'dark';
        return 'medium';
    }

    // Color utility methods
    hexToHsl(hex) {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h * 360, s, l];
    }

    getHue(color) {
        if (color.startsWith('#')) {
            return this.hexToHsl(color)[0];
        }
        return 0;
    }

    getSaturation(color) {
        if (color.startsWith('#')) {
            return this.hexToHsl(color)[1];
        }
        return 0;
    }

    getLightness(color) {
        if (color.startsWith('#')) {
            return this.hexToHsl(color)[2];
        }
        return 0.5;
    }

    // Layout analysis helpers
    calculateLayoutComplexity(doc) {
        const elements = doc.querySelectorAll('*').length;
        const sections = doc.querySelectorAll('section, article, aside, div').length;
        return Math.min(sections / elements, 1.0);
    }

    findResponsiveIndicators(doc) {
        const viewport = doc.querySelector('meta[name="viewport"]');
        const mediaQueries = doc.querySelector('style')?.textContent?.includes('@media') || false;
        return {
            hasViewport: !!viewport,
            hasMediaQueries: mediaQueries
        };
    }

    findModernLayoutPatterns(doc) {
        return {
            hasFlexbox: !!doc.querySelector('[style*="flex"]'),
            hasGrid: !!doc.querySelector('[style*="grid"]'),
            hasCards: doc.querySelectorAll('.card, .box').length > 0,
            hasSidebar: !!doc.querySelector('.sidebar, aside')
        };
    }

    analyzeHeadingHierarchy(doc) {
        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const levels = new Set();
        headings.forEach(h => levels.add(h.tagName.toLowerCase()));
        return levels.size;
    }

    calculateTextDensity(doc) {
        const textLength = doc.body.textContent.length;
        const elements = doc.querySelectorAll('*').length;
        return textLength / elements;
    }

    calculateReadabilityScore(doc) {
        // Simple readability based on paragraph length and structure
        const paragraphs = doc.querySelectorAll('p');
        let score = 0;
        
        paragraphs.forEach(p => {
            const words = p.textContent.split(' ').length;
            if (words >= 10 && words <= 30) score += 0.1;
        });
        
        return Math.min(score, 1.0);
    }

    calculateNavComplexity(doc) {
        const navLinks = doc.querySelectorAll('nav a, .nav a').length;
        return Math.min(navLinks / 10, 1.0);
    }

    calculateFormComplexity(doc) {
        const formElements = doc.querySelectorAll('input, select, textarea').length;
        return Math.min(formElements / 10, 1.0);
    }

    // Public method to get detailed analysis
    getDetailedAnalysis(style, doc, extractedData) {
        const factors = this.lastAnalysisFactors?.[style] || [];
        return {
            style: style,
            confidence: this.calculateStyleScore(style, doc, '', extractedData),
            factors: factors,
            colorScheme: this.colorSchemes[this.designPatterns[style].colorPalette],
            characteristics: this.designPatterns[style].characteristics
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StyleAnalyzer;
} else {
    window.StyleAnalyzer = StyleAnalyzer;
}