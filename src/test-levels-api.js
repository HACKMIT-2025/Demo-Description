// Test the levels API integration
async function testLevelsAPI() {
  console.log('🧪 Testing Levels API Integration...\n');

  try {
    // Test direct API call
    console.log('1️⃣ Testing direct API call...');
    const response = await fetch('https://25hackmit--image-recognition-api-fastapi-app.modal.run/api/levels');

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('📊 API Response Structure:');
    console.log(`   Status: ${response.status}`);
    console.log(`   Has levels: ${!!data.levels}`);
    console.log(`   Levels count: ${data.levels?.length || 0}`);

    if (data.levels && data.levels.length > 0) {
      console.log('\n📋 First few levels:');
      data.levels.slice(0, 3).forEach((level, index) => {
        console.log(`   Level ${index + 1}:`);
        console.log(`     ID: ${level.id}`);
        console.log(`     Name: ${level.name || level.title || 'Unnamed'}`);
        console.log(`     Data URL: ${level.data_url}`);
        console.log(`     Description: ${level.description || 'No description'}`);
      });

      // Test each level's data_url
      console.log('\n2️⃣ Testing JSON URLs...');
      for (let i = 0; i < Math.min(3, data.levels.length); i++) {
        const level = data.levels[i];
        if (level.data_url) {
          try {
            const jsonResponse = await fetch(level.data_url);
            console.log(`   ✅ Level ${level.id} JSON: ${jsonResponse.status} ${jsonResponse.ok ? 'OK' : 'Error'}`);

            if (jsonResponse.ok) {
              const jsonData = await jsonResponse.json();
              console.log(`      JSON keys: ${Object.keys(jsonData).join(', ')}`);
            }
          } catch (error) {
            console.log(`   ❌ Level ${level.id} JSON: ${error.message}`);
          }
        }
      }

      // Test Mario frontend URLs
      console.log('\n3️⃣ Testing Mario frontend URL format...');
      data.levels.slice(0, 2).forEach(level => {
        const marioUrl = `http://frontend-mario.vercel.app/play?json=${encodeURIComponent(level.data_url)}`;
        console.log(`   Level ${level.id}: ${marioUrl}`);
      });

      console.log('\n🎉 API test completed successfully!');
      console.log(`\n📈 Summary:`);
      console.log(`   - Total levels available: ${data.levels.length}`);
      console.log(`   - API is working correctly`);
      console.log(`   - Ready for community page integration`);
    } else {
      console.log('⚠️ No levels found in API response');
    }

  } catch (error) {
    console.error('❌ Test failed:', error);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('   - Check if the API endpoint is accessible');
    console.log('   - Verify the API response format');
    console.log('   - Ensure network connectivity');
  }
}

// Run the test
testLevelsAPI();