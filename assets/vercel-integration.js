// Vercel Integration System for Design Generator Pro
class VercelIntegration {
    constructor() {
        this.connected = false;
        this.accessToken = localStorage.getItem('vercel-token');
        this.userInfo = null;
        this.deploymentStatus = null;
        this.init();
    }

    init() {
        this.checkConnection();
        this.bindEvents();
    }

    bindEvents() {
        // Connection buttons would be bound here
        // For demo purposes, we'll simulate the connection
    }

    async checkConnection() {
        if (this.accessToken) {
            // In a real implementation, this would verify the token with Vercel API
            this.connected = true;
            this.updateConnectionUI();
        }
    }

    async connectVercel() {
        // Simulate OAuth flow
        this.showConnectionProcess();
        
        // In real implementation, this would:
        // 1. Open OAuth popup
        // 2. Handle callback
        // 3. Store access token
        
        setTimeout(() => {
            this.simulateConnection();
        }, 2000);
    }

    showConnectionProcess() {
        const connectionDiv = document.getElementById('vercelConnection');
        if (connectionDiv) {
            connectionDiv.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
                    <h3 style="color: #374151; margin-bottom: 0.5rem;">Connecting to Vercel...</h3>
                    <p style="color: #6b7280; font-size: 0.9rem;">Please complete the authentication in the popup window</p>
                    <div style="margin: 1rem 0;">
                        <div style="background: #e5e7eb; border-radius: 4px; height: 6px; overflow: hidden;">
                            <div style="background: #3b82f6; height: 100%; width: 0%; animation: progressBar 2s ease-in-out;"></div>
                        </div>
                    </div>
                    <button class="btn-secondary" onclick="cancelVercelConnection()" style="margin-top: 1rem;">
                        Cancel
                    </button>
                </div>
            `;

            // Add progress animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes progressBar {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    simulateConnection() {
        // Simulate successful connection
        this.connected = true;
        this.accessToken = 'demo-token-' + Date.now();
        this.userInfo = {
            username: 'demo-user',
            email: 'user@example.com',
            name: 'Demo User'
        };

        localStorage.setItem('vercel-token', this.accessToken);
        localStorage.setItem('vercel-user', JSON.stringify(this.userInfo));

        this.updateConnectionUI();
    }

    updateConnectionUI() {
        const connectionDiv = document.getElementById('vercelConnection');
        if (!connectionDiv) return;

        if (this.connected) {
            connectionDiv.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">✅</div>
                    <h3 style="color: #059669; margin-bottom: 0.5rem;">Connected to Vercel</h3>
                    <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 1rem;">
                        Signed in as <strong>${this.userInfo?.username || 'Demo User'}</strong>
                    </p>
                    <div style="display: flex; gap: 0.5rem; justify-content: center;">
                        <button class="btn-secondary" onclick="refreshVercelConnection()" style="font-size: 0.8rem; padding: 0.5rem 1rem;">
                            🔄 Refresh
                        </button>
                        <button class="btn-secondary" onclick="disconnectVercel()" style="font-size: 0.8rem; padding: 0.5rem 1rem;">
                            🔌 Disconnect
                        </button>
                    </div>
                </div>
            `;
        }
    }

    disconnectVercel() {
        this.connected = false;
        this.accessToken = null;
        this.userInfo = null;

        localStorage.removeItem('vercel-token');
        localStorage.removeItem('vercel-user');

        // Reset UI
        const connectionDiv = document.getElementById('vercelConnection');
        if (connectionDiv) {
            connectionDiv.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: 1rem;">🔗</div>
                <h3 style="color: #374151; margin-bottom: 0.5rem;">Connect Your Vercel Account</h3>
                <p style="color: #6b7280; margin-bottom: 1.5rem; font-size: 0.9rem;">Securely connect to deploy your designs with one click</p>
                <button class="btn-primary" onclick="connectVercel()" style="margin-bottom: 1rem;">
                    Connect to Vercel
                </button>
                <div style="font-size: 0.8rem; color: #6b7280;">
                    <strong>Secure:</strong> We only request deployment permissions
                </div>
            `;
        }
    }

    async deployToVercel() {
        if (!this.connected) {
            this.showError('Please connect your Vercel account first.');
            return;
        }

        // Get deployment settings
        const settings = this.getDeploymentSettings();
        
        // Validate settings
        if (!this.validateSettings(settings)) {
            return;
        }

        // Start deployment process
        this.startDeploymentProcess(settings);
    }

    getDeploymentSettings() {
        return {
            projectName: document.getElementById('projectName')?.value || 'my-design-project',
            framework: document.getElementById('vercelFramework')?.value || 'nextjs',
            domain: document.getElementById('vercelDomain')?.value || '',
            environment: document.getElementById('environmentType')?.value || 'production',
            features: {
                analytics: document.getElementById('enableAnalytics')?.checked || false,
                imageOptimization: document.getElementById('optimizeImages')?.checked || false,
                edgeFunctions: document.getElementById('enableEdgeFunctions')?.checked || false,
                sitemap: document.getElementById('generateSitemap')?.checked || false,
                pwa: document.getElementById('enablePWA')?.checked || false
            }
        };
    }

    validateSettings(settings) {
        if (!settings.projectName || settings.projectName.trim() === '') {
            this.showError('Please enter a project name.');
            return false;
        }

        // Validate project name format
        if (!/^[a-z0-9-]+$/.test(settings.projectName)) {
            this.showError('Project name can only contain lowercase letters, numbers, and hyphens.');
            return false;
        }

        return true;
    }

    startDeploymentProcess(settings) {
        // Show deployment progress
        const progressDiv = document.getElementById('deploymentProgress');
        const successDiv = document.getElementById('deploymentSuccess');

        if (successDiv) successDiv.style.display = 'none';
        if (progressDiv) progressDiv.style.display = 'block';

        // Simulate deployment steps
        const steps = [
            { text: 'Preparing deployment...', duration: 1000 },
            { text: 'Generating project files...', duration: 2000 },
            { text: 'Optimising assets...', duration: 1500 },
            { text: 'Building application...', duration: 3000 },
            { text: 'Deploying to global CDN...', duration: 2000 },
            { text: 'Configuring domain...', duration: 1000 },
            { text: 'Finalising deployment...', duration: 1000 }
        ];

        this.runDeploymentSteps(steps, settings);
    }

    async runDeploymentSteps(steps, settings) {
        const progressBar = document.getElementById('deployProgress');
        const stepText = document.getElementById('deploymentStep');
        
        let totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);
        let elapsedTime = 0;

        for (let i = 0; i < steps.length; i++) {
            const step = steps[i];
            
            if (stepText) {
                stepText.textContent = step.text;
            }

            // Update progress bar
            if (progressBar) {
                const progress = ((elapsedTime + step.duration) / totalDuration) * 100;
                progressBar.style.width = `${progress}%`;
            }

            await new Promise(resolve => setTimeout(resolve, step.duration));
            elapsedTime += step.duration;
        }

        // Show success
        this.showDeploymentSuccess(settings);
    }

    showDeploymentSuccess(settings) {
        const progressDiv = document.getElementById('deploymentProgress');
        const successDiv = document.getElementById('deploymentSuccess');
        const urlDiv = document.getElementById('deploymentUrl');

        if (progressDiv) progressDiv.style.display = 'none';
        
        // Generate deployment URL
        const deploymentUrl = `https://${settings.projectName}-${Math.random().toString(36).substr(2, 8)}.vercel.app`;
        this.deploymentUrl = deploymentUrl;

        if (urlDiv) {
            urlDiv.textContent = deploymentUrl;
        }

        if (successDiv) {
            successDiv.style.display = 'block';
        }

        // Store deployment info
        const deploymentInfo = {
            url: deploymentUrl,
            projectName: settings.projectName,
            framework: settings.framework,
            deployedAt: new Date().toISOString(),
            settings: settings
        };

        let deployments = JSON.parse(localStorage.getItem('vercel-deployments') || '[]');
        deployments.unshift(deploymentInfo);
        deployments = deployments.slice(0, 10); // Keep only last 10
        localStorage.setItem('vercel-deployments', JSON.stringify(deployments));
    }

    previewDeployment() {
        // Get current design data
        const designData = this.getCurrentDesignData();
        
        // Create preview
        this.showDeploymentPreview(designData);
    }

    getCurrentDesignData() {
        // This would integrate with the main design generator
        return {
            style: document.querySelector('.style-option.active')?.dataset.style || 'minimalist',
            template: document.querySelector('.template-option.active')?.dataset.template || 'hero',
            title: document.getElementById('siteTitle')?.value || 'Your Brand',
            subtitle: document.getElementById('siteSubtitle')?.value || 'Creating beautiful experiences'
        };
    }

    showDeploymentPreview(designData) {
        // Create modal for preview
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
        `;

        modal.innerHTML = `
            <div style="background: white; border-radius: 16px; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto;">
                <div style="padding: 2rem; border-bottom: 1px solid #e5e7eb;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h2 style="color: #374151; margin: 0;">🚀 Deployment Preview</h2>
                        <button onclick="this.closest('.preview-modal').remove()" style="background: none; border: none; font-size: 1.5rem; color: #6b7280; cursor: pointer;">×</button>
                    </div>
                </div>
                <div style="padding: 2rem;">
                    <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem;">
                        <h3 style="color: #374151; margin-bottom: 1rem;">Deployment Configuration</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.9rem;">
                            <div><strong>Style:</strong> ${designData.style}</div>
                            <div><strong>Template:</strong> ${designData.template}</div>
                            <div><strong>Title:</strong> ${designData.title}</div>
                            <div><strong>Framework:</strong> ${document.getElementById('vercelFramework')?.value || 'Next.js'}</div>
                        </div>
                    </div>
                    <div style="background: #000; color: #10b981; padding: 1rem; border-radius: 8px; font-family: 'SF Mono', Monaco, monospace; font-size: 0.9rem; margin-bottom: 1.5rem;">
                        <div>$ vercel deploy --prod</div>
                        <div>✓ Project configured successfully</div>
                        <div>✓ Optimised for performance</div>
                        <div>✓ Ready for global deployment</div>
                    </div>
                    <div style="text-align: center;">
                        <button class="btn-primary" onclick="this.closest('.preview-modal').remove(); deployToVercel();" style="margin-right: 0.5rem;">
                            🚀 Deploy Now
                        </button>
                        <button class="btn-secondary" onclick="this.closest('.preview-modal').remove();">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        `;

        modal.className = 'preview-modal';
        document.body.appendChild(modal);
    }

    showError(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #991b1b;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            max-width: 300px;
            animation: slideInRight 0.5s ease;
        `;
        
        errorDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.2rem;">❌</span>
                <strong>Error</strong>
            </div>
            <p style="margin: 0; font-size: 0.9rem;">${message}</p>
        `;

        document.body.appendChild(errorDiv);

        // Remove after 5 seconds
        setTimeout(() => {
            errorDiv.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.remove();
                }
            }, 500);
        }, 5000);
    }
}

// Global functions for Vercel integration
function connectVercel() {
    if (window.vercelIntegration) {
        window.vercelIntegration.connectVercel();
    }
}

function disconnectVercel() {
    if (window.vercelIntegration) {
        window.vercelIntegration.disconnectVercel();
    }
}

function refreshVercelConnection() {
    if (window.vercelIntegration) {
        window.vercelIntegration.checkConnection();
    }
}

function cancelVercelConnection() {
    if (window.vercelIntegration) {
        window.vercelIntegration.disconnectVercel();
    }
}

function deployToVercel() {
    if (window.vercelIntegration) {
        window.vercelIntegration.deployToVercel();
    }
}

function previewDeployment() {
    if (window.vercelIntegration) {
        window.vercelIntegration.previewDeployment();
    }
}

function copyDeploymentUrl() {
    if (window.vercelIntegration && window.vercelIntegration.deploymentUrl) {
        navigator.clipboard.writeText(window.vercelIntegration.deploymentUrl);
        
        // Show success message
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✅ Copied!';
        btn.style.background = '#059669';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#6b7280';
        }, 2000);
    }
}

function openDeployment() {
    if (window.vercelIntegration && window.vercelIntegration.deploymentUrl) {
        window.open(window.vercelIntegration.deploymentUrl, '_blank');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.vercelIntegration = new VercelIntegration();
});