// Advanced Content Extraction and Analysis
class ContentExtractor {
    constructor() {
        this.contentTypes = {
            HERO: 'hero',
            NAVIGATION: 'navigation',
            FEATURES: 'features',
            TESTIMONIAL: 'testimonial',
            PRICING: 'pricing',
            CONTACT: 'contact',
            FOOTER: 'footer',
            ABOUT: 'about',
            CONTENT: 'content'
        };
    }

    extractStructuredContent(doc, url) {
        const extractedSections = {
            hero: this.extractHeroSection(doc),
            navigation: this.extractNavigationItems(doc),
            features: this.extractFeatureSections(doc),
            testimonials: this.extractTestimonials(doc),
            pricing: this.extractPricingInfo(doc),
            contact: this.extractContactInfo(doc),
            about: this.extractAboutContent(doc),
            content: this.extractMainContent(doc),
            metadata: this.extractMetadata(doc, url)
        };

        return extractedSections;
    }

    extractHeroSection(doc) {
        const heroSelectors = [
            '.hero', '.banner', '.jumbotron', '.intro',
            'section[class*="hero"]', 'div[class*="banner"]',
            '.main-banner', '.hero-section', '.landing-banner'
        ];

        for (const selector of heroSelectors) {
            const heroElement = doc.querySelector(selector);
            if (heroElement) {
                return {
                    found: true,
                    title: this.extractTextFromSelectors(heroElement, ['h1', 'h2', '.title', '.hero-title']),
                    subtitle: this.extractTextFromSelectors(heroElement, ['p', '.subtitle', '.hero-subtitle', 'h3']),
                    cta: this.extractCallToAction(heroElement),
                    backgroundInfo: this.extractBackgroundInfo(heroElement)
                };
            }
        }

        // Fallback: look for prominent headings and nearby content
        const h1 = doc.querySelector('h1');
        if (h1) {
            const container = h1.closest('section, div, header') || h1.parentElement;
            return {
                found: true,
                title: h1.textContent.trim(),
                subtitle: this.findNearbyText(h1, ['p', 'h2', 'h3']),
                cta: this.extractCallToAction(container),
                backgroundInfo: null
            };
        }

        return { found: false };
    }

    extractNavigationItems(doc) {
        const navItems = [];
        const navSelectors = [
            'nav a', '.nav a', '.navbar a', '.menu a',
            '.navigation a', 'header a', '.header-nav a'
        ];

        const processedTexts = new Set();

        navSelectors.forEach(selector => {
            doc.querySelectorAll(selector).forEach(link => {
                const text = link.textContent.trim();
                const href = link.getAttribute('href') || '#';
                
                // Filter criteria
                if (text.length > 0 && 
                    text.length < 25 && 
                    !processedTexts.has(text.toLowerCase()) &&
                    !this.isEmailOrPhone(text) &&
                    !this.isUtilityLink(text)) {
                    
                    navItems.push({
                        text,
                        href,
                        isExternal: href.startsWith('http') && !href.includes(window.location?.hostname || ''),
                        category: this.categorizeNavItem(text)
                    });
                    
                    processedTexts.add(text.toLowerCase());
                }
            });
        });

        return navItems.slice(0, 10); // Limit to reasonable number
    }

    extractFeatureSections(doc) {
        const features = [];
        const featureSelectors = [
            '.feature', '.features', '.service', '.services',
            '.benefit', '.benefits', '.offering', '.offerings',
            '.capability', '.capabilities', '.solution', '.solutions'
        ];

        featureSelectors.forEach(selector => {
            doc.querySelectorAll(selector).forEach(element => {
                const feature = this.extractFeatureItem(element);
                if (feature && feature.title) {
                    features.push(feature);
                }
            });
        });

        // Fallback: look for card-like structures
        if (features.length === 0) {
            doc.querySelectorAll('.card, .box, .item, .column').forEach(element => {
                const feature = this.extractFeatureItem(element);
                if (feature && feature.title && feature.title.length < 50) {
                    features.push(feature);
                }
            });
        }

        return features.slice(0, 6); // Limit to 6 features
    }

    extractFeatureItem(element) {
        const title = this.extractTextFromSelectors(element, ['h1', 'h2', 'h3', 'h4', '.title', '.name']);
        const description = this.extractTextFromSelectors(element, ['p', '.description', '.desc', '.text']);
        const icon = this.extractIconInfo(element);

        if (title) {
            return {
                title: title.substring(0, 100),
                description: description ? description.substring(0, 250) : '',
                icon: icon,
                link: this.extractLinkFromElement(element)
            };
        }

        return null;
    }

    extractTestimonials(doc) {
        const testimonials = [];
        const testimonialSelectors = [
            '.testimonial', '.review', '.testimonials .item',
            '.customer-review', '.feedback', '.quote'
        ];

        testimonialSelectors.forEach(selector => {
            doc.querySelectorAll(selector).forEach(element => {
                const testimonial = this.extractTestimonialItem(element);
                if (testimonial && testimonial.content) {
                    testimonials.push(testimonial);
                }
            });
        });

        return testimonials.slice(0, 3); // Limit to 3 testimonials
    }

    extractTestimonialItem(element) {
        const content = this.extractTextFromSelectors(element, ['p', '.content', '.text', '.quote', 'blockquote']);
        const author = this.extractTextFromSelectors(element, ['.author', '.name', '.customer', 'cite']);
        const company = this.extractTextFromSelectors(element, ['.company', '.organization', '.title']);
        const rating = this.extractRating(element);

        if (content && content.length > 20) {
            return {
                content: content.substring(0, 300),
                author: author || 'Anonymous',
                company: company || '',
                rating: rating,
                avatar: this.extractImageSrc(element)
            };
        }

        return null;
    }

    extractPricingInfo(doc) {
        const pricingPlans = [];
        const pricingSelectors = [
            '.pricing', '.price', '.plan', '.package',
            '.pricing-card', '.pricing-table', '.price-box'
        ];

        pricingSelectors.forEach(selector => {
            doc.querySelectorAll(selector).forEach(element => {
                const plan = this.extractPricingPlan(element);
                if (plan && plan.price) {
                    pricingPlans.push(plan);
                }
            });
        });

        return pricingPlans.slice(0, 4); // Limit to 4 plans
    }

    extractPricingPlan(element) {
        const name = this.extractTextFromSelectors(element, ['h1', 'h2', 'h3', '.title', '.plan-name']);
        const price = this.extractPriceInfo(element);
        const features = this.extractListItems(element);

        if (price) {
            return {
                name: name || 'Plan',
                price: price,
                features: features.slice(0, 8), // Limit features
                popular: element.classList.contains('popular') || 
                        element.classList.contains('featured') ||
                        element.querySelector('.popular, .featured') !== null
            };
        }

        return null;
    }

    extractContactInfo(doc) {
        const contact = {
            email: this.extractContactDetail(doc, 'email'),
            phone: this.extractContactDetail(doc, 'phone'),
            address: this.extractContactDetail(doc, 'address'),
            social: this.extractSocialLinks(doc),
            form: this.extractContactForm(doc)
        };

        return contact;
    }

    extractAboutContent(doc) {
        const aboutSelectors = [
            '.about', '#about', '.about-us', '.company',
            'section[class*="about"]', '.bio', '.story'
        ];

        for (const selector of aboutSelectors) {
            const aboutElement = doc.querySelector(selector);
            if (aboutElement) {
                const content = aboutElement.textContent.trim();
                if (content.length > 100) {
                    return {
                        found: true,
                        content: content.substring(0, 500),
                        title: this.extractTextFromSelectors(aboutElement, ['h1', 'h2', 'h3']),
                        team: this.extractTeamMembers(aboutElement)
                    };
                }
            }
        }

        return { found: false };
    }

    extractMainContent(doc) {
        const contentSelectors = [
            'main', '.main', '#main', '.content',
            'article', '.article', '.post-content'
        ];

        const content = [];

        contentSelectors.forEach(selector => {
            const element = doc.querySelector(selector);
            if (element) {
                const text = this.cleanText(element.textContent);
                if (text.length > 50) {
                    content.push({
                        type: 'main',
                        text: text.substring(0, 800),
                        headings: this.extractHeadingsFromElement(element)
                    });
                }
            }
        });

        // Fallback: extract from paragraphs
        if (content.length === 0) {
            const paragraphs = doc.querySelectorAll('p');
            let combinedText = '';
            
            paragraphs.forEach((p, index) => {
                if (index < 5) { // First 5 paragraphs
                    const text = this.cleanText(p.textContent);
                    if (text.length > 30) {
                        combinedText += text + ' ';
                    }
                }
            });

            if (combinedText.length > 100) {
                content.push({
                    type: 'paragraphs',
                    text: combinedText.substring(0, 800),
                    headings: []
                });
            }
        }

        return content;
    }

    extractMetadata(doc, url) {
        return {
            title: this.extractTitle(doc),
            description: this.extractDescription(doc),
            keywords: this.extractKeywords(doc),
            author: this.extractAuthor(doc),
            siteName: this.extractSiteName(doc),
            url: url,
            lang: doc.documentElement.lang || 'en',
            viewport: this.extractViewport(doc),
            favicon: this.extractFavicon(doc, url)
        };
    }

    // Helper methods
    extractTextFromSelectors(element, selectors) {
        for (const selector of selectors) {
            const found = element.querySelector(selector);
            if (found && found.textContent.trim()) {
                return this.cleanText(found.textContent);
            }
        }
        return '';
    }

    extractCallToAction(element) {
        const ctaSelectors = ['button', '.btn', '.cta', 'a[class*="button"]', '.call-to-action'];
        
        for (const selector of ctaSelectors) {
            const cta = element.querySelector(selector);
            if (cta) {
                const text = cta.textContent.trim();
                if (text.length > 0 && text.length < 50) {
                    return {
                        text: text,
                        href: cta.getAttribute('href') || '#',
                        type: cta.tagName.toLowerCase()
                    };
                }
            }
        }
        
        return null;
    }

    extractBackgroundInfo(element) {
        const style = element.getAttribute('style') || '';
        const computedStyle = window.getComputedStyle ? window.getComputedStyle(element) : {};
        
        return {
            hasBackground: style.includes('background') || 
                          computedStyle.backgroundImage !== 'none',
            color: this.extractBackgroundColor(style, computedStyle)
        };
    }

    findNearbyText(element, selectors) {
        // Look for nearby elements that might be subtitles
        const siblings = [element.nextElementSibling, element.previousElementSibling];
        const parent = element.parentElement;
        
        for (const sibling of siblings) {
            if (sibling) {
                for (const selector of selectors) {
                    if (sibling.matches(selector)) {
                        const text = this.cleanText(sibling.textContent);
                        if (text.length > 10 && text.length < 200) {
                            return text;
                        }
                    }
                }
            }
        }
        
        // Look within parent
        if (parent) {
            for (const selector of selectors) {
                const found = parent.querySelector(selector);
                if (found && found !== element) {
                    const text = this.cleanText(found.textContent);
                    if (text.length > 10 && text.length < 200) {
                        return text;
                    }
                }
            }
        }
        
        return '';
    }

    isEmailOrPhone(text) {
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        return emailRegex.test(text) || phoneRegex.test(text);
    }

    isUtilityLink(text) {
        const utilityTerms = ['login', 'signup', 'register', 'search', 'cart', 'checkout', 'account'];
        return utilityTerms.some(term => text.toLowerCase().includes(term));
    }

    categorizeNavItem(text) {
        const categories = {
            home: ['home', 'index', 'main'],
            about: ['about', 'team', 'company', 'story'],
            services: ['services', 'products', 'solutions', 'offerings'],
            portfolio: ['portfolio', 'work', 'projects', 'gallery'],
            contact: ['contact', 'reach', 'connect', 'touch'],
            blog: ['blog', 'news', 'articles', 'insights']
        };

        const lowerText = text.toLowerCase();
        for (const [category, keywords] of Object.entries(categories)) {
            if (keywords.some(keyword => lowerText.includes(keyword))) {
                return category;
            }
        }

        return 'other';
    }

    extractIconInfo(element) {
        // Look for icon classes, images, or symbols
        const iconElement = element.querySelector('i, .icon, svg, img[class*="icon"]');
        if (iconElement) {
            return {
                type: iconElement.tagName.toLowerCase(),
                classes: iconElement.className,
                src: iconElement.getAttribute('src'),
                text: iconElement.textContent.trim()
            };
        }
        return null;
    }

    extractLinkFromElement(element) {
        const link = element.querySelector('a');
        return link ? link.getAttribute('href') : null;
    }

    extractRating(element) {
        // Look for star ratings or numeric ratings
        const ratingElements = element.querySelectorAll('.star, .rating, [class*="star"]');
        if (ratingElements.length > 0) {
            const filledStars = element.querySelectorAll('.star.filled, .star.active, [class*="star"][class*="filled"]');
            return filledStars.length || ratingElements.length;
        }
        
        // Look for numeric ratings
        const text = element.textContent;
        const numericRating = text.match(/(\d+(?:\.\d+)?)\s*\/\s*(\d+)/);
        if (numericRating) {
            return parseInt(numericRating[1]);
        }
        
        return null;
    }

    extractImageSrc(element) {
        const img = element.querySelector('img');
        return img ? img.getAttribute('src') : null;
    }

    extractPriceInfo(element) {
        const text = element.textContent;
        const priceRegex = /[\$£€¥]\s*\d+(?:[.,]\d{2})?|\d+(?:[.,]\d{2})?\s*[\$£€¥]/g;
        const matches = text.match(priceRegex);
        
        if (matches) {
            return matches[0].trim();
        }
        
        // Look for "free" pricing
        if (text.toLowerCase().includes('free')) {
            return 'Free';
        }
        
        return null;
    }

    extractListItems(element) {
        const items = [];
        const lists = element.querySelectorAll('ul, ol');
        
        lists.forEach(list => {
            const listItems = list.querySelectorAll('li');
            listItems.forEach(li => {
                const text = this.cleanText(li.textContent);
                if (text.length > 3 && text.length < 100) {
                    items.push(text);
                }
            });
        });
        
        return items;
    }

    extractContactDetail(doc, type) {
        const patterns = {
            email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
            phone: /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g,
            address: /\d+\s+[\w\s]+(street|st|avenue|ave|road|rd|drive|dr|lane|ln|way|blvd|boulevard)/gi
        };
        
        const text = doc.body.textContent;
        const matches = text.match(patterns[type]);
        
        return matches ? matches[0] : '';
    }

    extractSocialLinks(doc) {
        const socialPlatforms = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'github'];
        const socialLinks = [];
        
        socialPlatforms.forEach(platform => {
            const links = doc.querySelectorAll(`a[href*="${platform}"], a[class*="${platform}"]`);
            if (links.length > 0) {
                socialLinks.push({
                    platform: platform,
                    url: links[0].getAttribute('href')
                });
            }
        });
        
        return socialLinks;
    }

    extractContactForm(doc) {
        const forms = doc.querySelectorAll('form');
        const contactForms = [];
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea');
            const hasContactInputs = Array.from(inputs).some(input => {
                const name = input.getAttribute('name') || input.getAttribute('id') || '';
                return name.toLowerCase().includes('email') || 
                       name.toLowerCase().includes('message') ||
                       name.toLowerCase().includes('contact');
            });
            
            if (hasContactInputs) {
                contactForms.push({
                    action: form.getAttribute('action') || '',
                    method: form.getAttribute('method') || 'POST',
                    inputs: Array.from(inputs).map(input => ({
                        type: input.type,
                        name: input.getAttribute('name'),
                        placeholder: input.getAttribute('placeholder'),
                        required: input.hasAttribute('required')
                    }))
                });
            }
        });
        
        return contactForms[0] || null; // Return first contact form found
    }

    extractTeamMembers(element) {
        const teamMembers = [];
        const memberElements = element.querySelectorAll('.team-member, .member, .person, .staff');
        
        memberElements.forEach(member => {
            const name = this.extractTextFromSelectors(member, ['h3', 'h4', '.name', '.title']);
            const role = this.extractTextFromSelectors(member, ['.role', '.position', '.title', 'p']);
            const image = this.extractImageSrc(member);
            
            if (name) {
                teamMembers.push({
                    name: name.substring(0, 50),
                    role: role.substring(0, 100),
                    image: image
                });
            }
        });
        
        return teamMembers.slice(0, 6); // Limit to 6 team members
    }

    extractHeadingsFromElement(element) {
        const headings = [];
        const headingElements = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        headingElements.forEach(heading => {
            const text = this.cleanText(heading.textContent);
            if (text.length > 3) {
                headings.push({
                    level: heading.tagName.toLowerCase(),
                    text: text.substring(0, 100)
                });
            }
        });
        
        return headings;
    }

    extractTitle(doc) {
        return doc.title || 'Untitled';
    }

    extractDescription(doc) {
        const metaDesc = doc.querySelector('meta[name="description"]');
        return metaDesc ? metaDesc.getAttribute('content') : '';
    }

    extractKeywords(doc) {
        const metaKeywords = doc.querySelector('meta[name="keywords"]');
        return metaKeywords ? metaKeywords.getAttribute('content').split(',').map(k => k.trim()) : [];
    }

    extractAuthor(doc) {
        const metaAuthor = doc.querySelector('meta[name="author"]');
        return metaAuthor ? metaAuthor.getAttribute('content') : '';
    }

    extractSiteName(doc) {
        const ogSiteName = doc.querySelector('meta[property="og:site_name"]');
        return ogSiteName ? ogSiteName.getAttribute('content') : '';
    }

    extractViewport(doc) {
        const viewport = doc.querySelector('meta[name="viewport"]');
        return viewport ? viewport.getAttribute('content') : '';
    }

    extractFavicon(doc, baseUrl) {
        const favicon = doc.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
        if (favicon) {
            const href = favicon.getAttribute('href');
            return href.startsWith('http') ? href : new URL(href, baseUrl).href;
        }
        return '';
    }

    extractBackgroundColor(style, computedStyle) {
        if (style.includes('background-color')) {
            const match = style.match(/background-color:\s*([^;]+)/);
            return match ? match[1].trim() : '';
        }
        
        return computedStyle.backgroundColor || '';
    }

    cleanText(text) {
        return text.replace(/\s+/g, ' ').trim();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContentExtractor;
} else {
    window.ContentExtractor = ContentExtractor;
}