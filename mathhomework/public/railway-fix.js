// Railway-specific connection fixes
// Add this to the beginning of index.js to fix the Wisp connection issues

// Override the original connection logic with Railway-aware version
const originalBareMuxConnection = BareMux.BareMuxConnection;

class RailwayAwareBareMuxConnection extends originalBareMuxConnection {
    constructor(workerUrl) {
        super(workerUrl);
        this.retryAttempts = 3;
        this.retryDelay = 1000;
    }

    async setTransport(transportUrl, config) {
        // Build wisp URL with proper protocol detection for Railway
        let wispUrl;
        if (location.hostname.includes("railway.app") || location.hostname.includes("up.railway.app")) {
            // Force WSS for Railway deployment
            wispUrl = "wss://" + location.host + "/wisp/";
        } else {
            // Standard protocol detection for local development
            wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";
        }

        // Update config with correct wisp URL
        const updatedConfig = config.map(c => ({
            ...c,
            wisp: wispUrl
        }));

        let lastError;
        for (let attempt = 0; attempt < this.retryAttempts; attempt++) {
            try {
                console.log(`Setting transport attempt ${attempt + 1}/${this.retryAttempts} with URL: ${wispUrl}`);
                await super.setTransport(transportUrl, updatedConfig);
                console.log("✅ Transport set successfully");
                return;
            } catch (error) {
                lastError = error;
                console.warn(`Transport setup attempt ${attempt + 1} failed:`, error.message);
                
                if (attempt < this.retryAttempts - 1) {
                    console.log(`Retrying in ${this.retryDelay}ms...`);
                    await new Promise(resolve => setTimeout(resolve, this.retryDelay));
                }
            }
        }

        console.error("All transport setup attempts failed");
        throw new Error(`Failed to establish proxy connection after ${this.retryAttempts} attempts. Last error: ${lastError.message}`);
    }
}

// Replace the global connection with the Railway-aware version
if (typeof window !== 'undefined' && window.BareMux) {
    window.connection = new RailwayAwareBareMuxConnection("/baremux/worker.js");
}
