// Get Full Neon Database Connection Details
import dotenv from 'dotenv';

dotenv.config();

async function getConnectionDetails() {
  const apiKey = process.env.DATABASE_URL;

  if (!apiKey || !apiKey.startsWith('napi_')) {
    console.error('❌ Invalid API key');
    return;
  }

  console.log('🔍 Fetching complete database details...');

  try {
    // Get projects
    const projectsResponse = await fetch('https://console.neon.tech/api/v2/projects', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!projectsResponse.ok) {
      throw new Error(`Failed to fetch projects: ${projectsResponse.status}`);
    }

    const projectsData = await projectsResponse.json();
    const project = projectsData.projects[0]; // Get first project

    console.log(`📁 Project: ${project.name} (${project.id})`);

    // Get databases for this project
    const databasesResponse = await fetch(`https://console.neon.tech/api/v2/projects/${project.id}/databases`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (databasesResponse.ok) {
      const databasesData = await databasesResponse.json();
      console.log('🗄️ Databases:');
      for (const db of databasesData.databases) {
        console.log(`  - ${db.name} (owner: ${db.owner_name})`);
      }
    }

    // Get branches
    const branchesResponse = await fetch(`https://console.neon.tech/api/v2/projects/${project.id}/branches`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (branchesResponse.ok) {
      const branchesData = await branchesResponse.json();
      console.log('🌳 Branches:');
      for (const branch of branchesData.branches) {
        console.log(`  - ${branch.name} (${branch.id})`);
      }
    }

    // Get endpoints
    const endpointsResponse = await fetch(`https://console.neon.tech/api/v2/projects/${project.id}/endpoints`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (endpointsResponse.ok) {
      const endpointsData = await endpointsResponse.json();
      console.log('📡 Endpoints:');

      for (const endpoint of endpointsData.endpoints) {
        console.log(`  - ID: ${endpoint.id}`);
        console.log(`    Host: ${endpoint.host}`);
        console.log(`    Branch: ${endpoint.branch_id}`);

        // Get connection URI for this endpoint
        const connectionResponse = await fetch(`https://console.neon.tech/api/v2/projects/${project.id}/connection_uris`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (connectionResponse.ok) {
          const connectionData = await connectionResponse.json();
          console.log('🔗 Connection URIs:');
          for (const [role, uri] of Object.entries(connectionData.connection_uris)) {
            console.log(`    ${role}: ${uri}`);
          }
        }
      }
    }

    console.log('\n✅ Connection details retrieved successfully!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

getConnectionDetails();