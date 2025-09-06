// Deployment fixes for Railway and other cloud platforms
(function() {
    'use strict';
    
    console.log('🔧 Loading deployment fixes...');
    
    // Store original connection for restoration if needed
    let originalConnection = null;
    
    // Wait for BareMux to be available
    function waitForBareMux() {
        return new Promise((resolve) => {
            if (window.BareMux) {
                resolve();
                return;
            }
            
            let attempts = 0;
            const checkInterval = setInterval(() => {
                attempts++;
                if (window.BareMux) {
                    clearInterval(checkInterval);
                    resolve();
                } else if (attempts > 50) { // 5 second timeout
                    clearInterval(checkInterval);
                    console.error('BareMux not available after 5 seconds');
                    resolve();
                }
            }, 100);
        });
    }
    
    // Enhanced connection class for better reliability
    class EnhancedBareMuxConnection {
        constructor(workerUrl) {
            this.workerUrl = workerUrl;
            this.retryAttempts = 5;
            this.retryDelay = 1000;
            this.currentTransport = null;
            this.baseConnection = null;
            
            // Initialize base connection when BareMux is ready
            this.initPromise = this.init();
        }
        
        async init() {
            await waitForBareMux();
            if (window.BareMux) {
                this.baseConnection = new window.BareMux.BareMuxConnection(this.workerUrl);
            }
        }
        
        async getTransport() {
            await this.initPromise;
            if (this.baseConnection) {
                try {
                    return await this.baseConnection.getTransport();
                } catch (error) {
                    console.warn('getTransport failed:', error);
                    return null;
                }
            }
            return this.currentTransport;
        }
        
        async setTransport(transportUrl, config) {
            await this.initPromise;
            
            // Determine the correct WebSocket URL based on environment
            let wispUrl;
            const isRailway = location.hostname.includes('railway.app') || 
                             location.hostname.includes('up.railway.app');
            const isProduction = location.protocol === 'https:';
            
            if (isRailway || isProduction) {
                wispUrl = `wss://${location.host}/wisp/`;
                console.log('🚂 Using Railway/Production WebSocket URL:', wispUrl);
            } else {
                wispUrl = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/wisp/`;
                console.log('🏠 Using Development WebSocket URL:', wispUrl);
            }
            
            // Update config with correct URL
            const enhancedConfig = config ? config.map(c => ({
                ...c,
                wisp: wispUrl
            })) : [{ wisp: wispUrl }];
            
            // Try setting transport with retries
            let lastError = null;
            for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
                try {
                    console.log(`📡 Transport setup attempt ${attempt}/${this.retryAttempts}`);
                    
                    if (this.baseConnection) {
                        await this.baseConnection.setTransport(transportUrl, enhancedConfig);
                    }
                    
                    this.currentTransport = transportUrl;
                    console.log('✅ Transport configured successfully');
                    return;
                    
                } catch (error) {
                    lastError = error;
                    console.warn(`❌ Attempt ${attempt} failed:`, error.message);
                    
                    if (attempt < this.retryAttempts) {
                        const delay = this.retryDelay * attempt; // Exponential backoff
                        console.log(`⏳ Retrying in ${delay}ms...`);
                        await new Promise(resolve => setTimeout(resolve, delay));
                    }
                }
            }
            
            // If all attempts failed, throw descriptive error
            const errorMsg = `Failed to establish connection after ${this.retryAttempts} attempts. ` +
                           `Last error: ${lastError?.message || 'Unknown error'}. ` +
                           `This may be due to network restrictions or server issues.`;
            
            console.error('💥 All connection attempts failed:', errorMsg);
            throw new Error(errorMsg);
        }
    }
    
    // Override the connection after DOM loads
    document.addEventListener('DOMContentLoaded', async () => {
        console.log('🔄 Initializing enhanced connection...');
        
        try {
            // Store original if it exists
            if (window.connection) {
                originalConnection = window.connection;
            }
            
            // Replace with enhanced version
            window.connection = new EnhancedBareMuxConnection("/baremux/worker.js");
            
            console.log('✅ Enhanced connection initialized');
            
        } catch (error) {
            console.error('Failed to initialize enhanced connection:', error);
            
            // Fallback to original if enhancement fails
            if (originalConnection) {
                window.connection = originalConnection;
                console.log('📄 Restored original connection as fallback');
            }
        }
    });
    
    // Add global error handler for uncaught WebSocket errors
    window.addEventListener('error', (event) => {
        if (event.error && event.error.message && 
            (event.error.message.includes('WebSocket') || 
             event.error.message.includes('wisp') ||
             event.error.message.includes('MuxTaskEnded'))) {
            
            console.warn('🔧 WebSocket error detected, this may be due to network restrictions');
            
            // Dispatch custom event for error handling
            window.dispatchEvent(new CustomEvent('vortex-connection-error', {
                detail: { error: event.error, source: 'websocket' }
            }));
        }
    });
    
    // Add custom event listener for connection errors
    window.addEventListener('vortex-connection-error', (event) => {
        console.log('🛠️ Handling connection error:', event.detail);
        
        // Show user-friendly error message
        const errorContainer = document.getElementById('uv-error');
        const errorCodeContainer = document.getElementById('uv-error-code');
        
        if (errorContainer) {
            errorContainer.textContent = 'Connection failed. This may be due to network restrictions. Try refreshing the page or using a different network.';
            errorContainer.style.display = 'block';
        }
        
        if (errorCodeContainer) {
            errorCodeContainer.textContent = `Error: ${event.detail.error.message}`;
            errorCodeContainer.style.display = 'block';
        }
    });
    
    console.log('🚀 Deployment fixes loaded successfully');
    
})();
