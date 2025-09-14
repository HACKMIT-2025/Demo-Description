// Neon API Client for Database Operations
// Using Neon's REST API with API key authentication
export class NeonAPIClient {
    constructor(apiKey) {
        this.config = {
            apiKey,
            baseUrl: 'https://console.neon.tech/api/v2'
        };
    }
    getHeaders() {
        return {
            'Authorization': `Bearer ${this.config.apiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }
    async makeRequest(endpoint, options = {}) {
        const url = `${this.config.baseUrl}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            headers: {
                ...this.getHeaders(),
                ...options.headers
            }
        });
        if (!response.ok) {
            throw new Error(`Neon API Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    // Get all projects
    async getProjects() {
        return this.makeRequest('/projects');
    }
    // Get project details
    async getProject(projectId) {
        return this.makeRequest(`/projects/${projectId}`);
    }
    // Get project databases
    async getDatabases(projectId) {
        return this.makeRequest(`/projects/${projectId}/databases`);
    }
    // Get project branches
    async getBranches(projectId) {
        return this.makeRequest(`/projects/${projectId}/branches`);
    }
    // Get project endpoints (connection strings)
    async getEndpoints(projectId) {
        return this.makeRequest(`/projects/${projectId}/endpoints`);
    }
    // Get connection URI for a specific endpoint
    async getConnectionURI(projectId, branchId) {
        try {
            const endpoints = await this.getEndpoints(projectId);
            const databases = await this.getDatabases(projectId);
            if (endpoints.endpoints.length === 0) {
                throw new Error('No endpoints found for this project');
            }
            // Find the main endpoint or use the first one
            const endpoint = branchId
                ? endpoints.endpoints.find(e => e.branch_id === branchId)
                : endpoints.endpoints[0];
            if (!endpoint) {
                throw new Error('No suitable endpoint found');
            }
            // Get the database name
            const database = databases.databases.find(db => db.name === endpoint.database_name) || databases.databases[0];
            if (!database) {
                throw new Error('No database found');
            }
            // Construct PostgreSQL connection URI
            // Note: This is a template - actual password would be needed
            const connectionURI = `postgresql://${database.owner_name}:[PASSWORD]@${endpoint.host}/${database.name}?sslmode=require`;
            return connectionURI;
        }
        catch (error) {
            throw new Error(`Failed to get connection URI: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    // Test API connectivity
    async testConnection() {
        try {
            await this.getProjects();
            return true;
        }
        catch (error) {
            console.error('Neon API connection failed:', error);
            return false;
        }
    }
}
// Utility function to initialize Neon API client
export function createNeonClient(apiKey) {
    const key = apiKey || process.env.DATABASE_URL || '';
    if (!key.startsWith('napi_')) {
        throw new Error('Invalid Neon API key format. Expected format: napi_...');
    }
    return new NeonAPIClient(key);
}
// Example usage and testing
export async function testNeonAPI() {
    try {
        console.log('🔗 Testing Neon API connection...');
        const client = createNeonClient();
        const isConnected = await client.testConnection();
        if (isConnected) {
            console.log('✅ Neon API connected successfully!');
            // Get projects
            const projects = await client.getProjects();
            console.log(`📁 Found ${projects.projects.length} project(s):`);
            for (const project of projects.projects) {
                console.log(`  - ${project.name} (${project.id})`);
                try {
                    // Get databases for this project
                    const databases = await client.getDatabases(project.id);
                    console.log(`    📊 Databases: ${databases.databases.map(db => db.name).join(', ')}`);
                    // Get connection template
                    const connectionTemplate = await client.getConnectionURI(project.id);
                    console.log(`    🔗 Connection Template: ${connectionTemplate}`);
                }
                catch (error) {
                    console.log(`    ⚠️  Could not fetch details: ${error instanceof Error ? error.message : 'Unknown error'}`);
                }
            }
        }
        else {
            console.log('❌ Neon API connection failed');
        }
    }
    catch (error) {
        console.error('❌ Test failed:', error instanceof Error ? error.message : 'Unknown error');
    }
}
