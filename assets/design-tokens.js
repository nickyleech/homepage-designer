// Advanced Design Token System
const DesignTokens = {
    // Core token categories
    categories: {
        colors: {
            name: 'Colors',
            description: 'Color palette and semantic color tokens',
            tokens: {}
        },
        typography: {
            name: 'Typography',
            description: 'Font families, sizes, weights, and line heights',
            tokens: {}
        },
        spacing: {
            name: 'Spacing',
            description: 'Padding, margin, and gap values',
            tokens: {}
        },
        sizing: {
            name: 'Sizing',
            description: 'Width, height, and dimension values',
            tokens: {}
        },
        borders: {
            name: 'Borders',
            description: 'Border radius, width, and style tokens',
            tokens: {}
        },
        shadows: {
            name: 'Shadows',
            description: 'Box shadow and elevation tokens',
            tokens: {}
        },
        animation: {
            name: 'Animation',
            description: 'Transition and animation timing tokens',
            tokens: {}
        },
        breakpoints: {
            name: 'Breakpoints',
            description: 'Responsive design breakpoint tokens',
            tokens: {}
        }
    },

    // Generate comprehensive design tokens
    generate: (style, colorScheme, fontFamily) => {
        const styleColors = DesignTemplates.styles[style]?.colors || DesignTemplates.styles.minimalist.colors;
        const schemeColors = DesignTemplates.colorSchemes[colorScheme] || DesignTemplates.colorSchemes.blue;
        const colors = { ...styleColors, ...schemeColors };
        const fonts = DesignTemplates.fonts[fontFamily] || DesignTemplates.fonts.sans;

        return {
            // Color tokens
            color: {
                primary: {
                    50: DesignTokens.generateColorScale(colors.primary)[0],
                    100: DesignTokens.generateColorScale(colors.primary)[1],
                    200: DesignTokens.generateColorScale(colors.primary)[2],
                    300: DesignTokens.generateColorScale(colors.primary)[3],
                    400: DesignTokens.generateColorScale(colors.primary)[4],
                    500: colors.primary,
                    600: DesignTokens.generateColorScale(colors.primary)[6],
                    700: DesignTokens.generateColorScale(colors.primary)[7],
                    800: DesignTokens.generateColorScale(colors.primary)[8],
                    900: DesignTokens.generateColorScale(colors.primary)[9]
                },
                secondary: {
                    50: DesignTokens.generateColorScale(colors.secondary)[0],
                    100: DesignTokens.generateColorScale(colors.secondary)[1],
                    200: DesignTokens.generateColorScale(colors.secondary)[2],
                    300: DesignTokens.generateColorScale(colors.secondary)[3],
                    400: DesignTokens.generateColorScale(colors.secondary)[4],
                    500: colors.secondary,
                    600: DesignTokens.generateColorScale(colors.secondary)[6],
                    700: DesignTokens.generateColorScale(colors.secondary)[7],
                    800: DesignTokens.generateColorScale(colors.secondary)[8],
                    900: DesignTokens.generateColorScale(colors.secondary)[9]
                },
                accent: {
                    50: DesignTokens.generateColorScale(colors.accent)[0],
                    100: DesignTokens.generateColorScale(colors.accent)[1],
                    200: DesignTokens.generateColorScale(colors.accent)[2],
                    300: DesignTokens.generateColorScale(colors.accent)[3],
                    400: DesignTokens.generateColorScale(colors.accent)[4],
                    500: colors.accent,
                    600: DesignTokens.generateColorScale(colors.accent)[6],
                    700: DesignTokens.generateColorScale(colors.accent)[7],
                    800: DesignTokens.generateColorScale(colors.accent)[8],
                    900: DesignTokens.generateColorScale(colors.accent)[9]
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717'
                },
                semantic: {
                    success: '#10b981',
                    warning: '#f59e0b',
                    error: '#ef4444',
                    info: '#3b82f6'
                }
            },

            // Typography tokens
            typography: {
                fontFamily: {
                    display: fonts.family,
                    body: fonts.family,
                    mono: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace"
                },
                fontSize: {
                    xs: '0.75rem',
                    sm: '0.875rem',
                    base: '1rem',
                    lg: '1.125rem',
                    xl: '1.25rem',
                    '2xl': '1.5rem',
                    '3xl': '1.875rem',
                    '4xl': '2.25rem',
                    '5xl': '3rem',
                    '6xl': '3.75rem',
                    '7xl': '4.5rem',
                    '8xl': '6rem',
                    '9xl': '8rem'
                },
                fontWeight: {
                    thin: '100',
                    extralight: '200',
                    light: '300',
                    normal: '400',
                    medium: '500',
                    semibold: '600',
                    bold: '700',
                    extrabold: '800',
                    black: '900'
                },
                lineHeight: {
                    tight: '1.25',
                    snug: '1.375',
                    normal: '1.5',
                    relaxed: '1.625',
                    loose: '2'
                },
                letterSpacing: {
                    tighter: '-0.05em',
                    tight: '-0.025em',
                    normal: '0em',
                    wide: '0.025em',
                    wider: '0.05em',
                    widest: '0.1em'
                }
            },

            // Spacing tokens
            spacing: {
                px: '1px',
                0: '0',
                0.5: '0.125rem',
                1: '0.25rem',
                1.5: '0.375rem',
                2: '0.5rem',
                2.5: '0.625rem',
                3: '0.75rem',
                3.5: '0.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
                11: '2.75rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
                32: '8rem',
                36: '9rem',
                40: '10rem',
                44: '11rem',
                48: '12rem',
                52: '13rem',
                56: '14rem',
                60: '15rem',
                64: '16rem',
                72: '18rem',
                80: '20rem',
                96: '24rem'
            },

            // Border radius tokens
            borderRadius: {
                none: '0',
                sm: '0.125rem',
                base: '0.25rem',
                md: '0.375rem',
                lg: '0.5rem',
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                full: '9999px'
            },

            // Shadow tokens
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                none: 'none'
            },

            // Animation tokens
            animation: {
                duration: {
                    instant: '0ms',
                    fast: '150ms',
                    normal: '300ms',
                    slow: '500ms',
                    slower: '1000ms'
                },
                ease: {
                    linear: 'linear',
                    in: 'cubic-bezier(0.4, 0, 1, 1)',
                    out: 'cubic-bezier(0, 0, 0.2, 1)',
                    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
                    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }
            },

            // Breakpoint tokens
            breakpoints: {
                xs: '475px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px'
            },

            // Z-index tokens
            zIndex: {
                auto: 'auto',
                0: '0',
                10: '10',
                20: '20',
                30: '30',
                40: '40',
                50: '50',
                dropdown: '1000',
                sticky: '1020',
                fixed: '1030',
                modal: '1040',
                popover: '1050',
                tooltip: '1060',
                toast: '1070'
            }
        };
    },

    // Generate color scale from base color
    generateColorScale: (baseColor) => {
        // Simple color scale generation - in a real implementation, you'd use a proper color library
        const hsl = DesignTokens.hexToHsl(baseColor);
        const scale = [];
        
        for (let i = 0; i < 10; i++) {
            const lightness = 95 - (i * 10);
            scale.push(DesignTokens.hslToHex(hsl.h, hsl.s, Math.max(5, lightness)));
        }
        
        return scale;
    },

    // Color utility functions
    hexToHsl: (hex) => {
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

        return { h: h * 360, s: s * 100, l: l * 100 };
    },

    hslToHex: (h, s, l) => {
        h = h / 360;
        s = s / 100;
        l = l / 100;

        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        let r, g, b;

        if (s === 0) {
            r = g = b = l;
        } else {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        const toHex = (c) => {
            const hex = Math.round(c * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    },

    // Export tokens in different formats
    exportFormats: {
        css: (tokens) => {
            let css = ':root {\n';
            
            const flattenTokens = (obj, prefix = '') => {
                Object.keys(obj).forEach(key => {
                    const value = obj[key];
                    const tokenName = prefix ? `${prefix}-${key}` : key;
                    
                    if (typeof value === 'object' && value !== null) {
                        flattenTokens(value, tokenName);
                    } else {
                        css += `  --${tokenName}: ${value};\n`;
                    }
                });
            };
            
            flattenTokens(tokens);
            css += '}\n';
            
            return css;
        },

        scss: (tokens) => {
            let scss = '';
            
            const flattenTokens = (obj, prefix = '') => {
                Object.keys(obj).forEach(key => {
                    const value = obj[key];
                    const tokenName = prefix ? `${prefix}-${key}` : key;
                    
                    if (typeof value === 'object' && value !== null) {
                        flattenTokens(value, tokenName);
                    } else {
                        scss += `$${tokenName}: ${value};\n`;
                    }
                });
            };
            
            flattenTokens(tokens);
            
            return scss;
        },

        js: (tokens) => {
            return `export const tokens = ${JSON.stringify(tokens, null, 2)};`;
        },

        tailwind: (tokens) => {
            const config = {
                theme: {
                    extend: {
                        colors: tokens.color,
                        fontFamily: tokens.typography.fontFamily,
                        fontSize: tokens.typography.fontSize,
                        fontWeight: tokens.typography.fontWeight,
                        lineHeight: tokens.typography.lineHeight,
                        letterSpacing: tokens.typography.letterSpacing,
                        spacing: tokens.spacing,
                        borderRadius: tokens.borderRadius,
                        boxShadow: tokens.boxShadow,
                        zIndex: tokens.zIndex,
                        screens: tokens.breakpoints
                    }
                }
            };
            
            return `module.exports = ${JSON.stringify(config, null, 2)};`;
        }
    }
};