// Simple Neon API Test
import dotenv from 'dotenv';

dotenv.config();

async function testNeonAPI() {
  const apiKey = process.env.DATABASE_URL;

  if (!apiKey) {
    console.error('❌ No DATABASE_URL found in environment variables');
    return;
  }

  if (!apiKey.startsWith('napi_')) {
    console.error('❌ Invalid API key format. Expected format: napi_...');
    console.log('🔑 Current value:', apiKey.substring(0, 20) + '...');
    return;
  }

  console.log('🔗 Testing Neon API connection...');
  console.log('🔑 API Key:', apiKey.substring(0, 15) + '...');

  try {
    const response = await fetch('https://console.neon.tech/api/v2/projects', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    console.log('📡 Response Status:', response.status);

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Neon API connected successfully!');
      console.log('📁 Projects found:', data.projects?.length || 0);

      if (data.projects && data.projects.length > 0) {
        for (const project of data.projects) {
          console.log(`  - Project: ${project.name} (${project.id})`);
          console.log(`    Region: ${project.region_id}`);
          console.log(`    Created: ${new Date(project.created_at).toLocaleDateString()}`);

          // Try to get connection details for this project
          try {
            const endpointsResponse = await fetch(`https://console.neon.tech/api/v2/projects/${project.id}/endpoints`, {
              headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
              }
            });

            if (endpointsResponse.ok) {
              const endpointsData = await endpointsResponse.json();
              console.log(`    🔗 Endpoints: ${endpointsData.endpoints?.length || 0}`);

              if (endpointsData.endpoints && endpointsData.endpoints.length > 0) {
                const endpoint = endpointsData.endpoints[0];
                console.log(`    📡 Host: ${endpoint.host}`);
                console.log(`    🗄️  Database: ${endpoint.database_name}`);

                // Get connection string template
                console.log('\n🔗 Connection String Template:');
                console.log(`postgresql://[username]:[password]@${endpoint.host}/${endpoint.database_name}?sslmode=require`);
                console.log('\n💡 To get the actual connection string:');
                console.log('1. Go to https://console.neon.tech/');
                console.log('2. Select your project');
                console.log('3. Go to "Connection Details" section');
                console.log('4. Copy the full connection string with password');
              }
            }
          } catch (error) {
            console.log(`    ⚠️  Could not fetch endpoint details: ${error.message}`);
          }
        }

        console.log('\n🎉 API Test Completed Successfully!');
        console.log('\n📋 Next Steps:');
        console.log('1. Get the full connection string from Neon Console');
        console.log('2. Update DATABASE_URL in .env with the connection string');
        console.log('3. Run the database schema setup');
      } else {
        console.log('📝 No projects found. Create a project in Neon Console first.');
      }
    } else {
      const errorText = await response.text();
      console.error('❌ API request failed:', response.status, response.statusText);
      console.error('Response:', errorText);

      if (response.status === 401) {
        console.log('💡 Tip: Check your API key is correct and has proper permissions');
      }
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

testNeonAPI();