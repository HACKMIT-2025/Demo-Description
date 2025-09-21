// Test the levels API integration
async function testLevelsAPI() {
  console.log('🧪 Testing Levels API Integration...\n');

  try {
    // Test our backend API call
    console.log('1️⃣ Testing backend API call...');
    const backendUrl = process.env.VITE_BACKEND_URL || 'https://25hackmit--hackmit25-backend.modal.run';
    const response = await fetch(`${backendUrl}/api/db/levels`);

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
        console.log(`     Data: ${level.data ? 'Available' : 'No data'}`);
        console.log(`     Description: ${level.description || 'No description'}`);
        console.log(`     Created: ${level.created_at || 'Unknown'}`);
      });

      // Test level data structure
      console.log('\n2️⃣ Testing Level Data Structure...');
      for (let i = 0; i < Math.min(3, data.levels.length); i++) {
        const level = data.levels[i];
        if (level.data) {
          try {
            console.log(`   ✅ Level ${level.id} Data: Available`);
            const levelData = typeof level.data === 'string' ? JSON.parse(level.data) : level.data;
            console.log(`      Data keys: ${Object.keys(levelData).join(', ')}`);
          } catch (error) {
            console.log(`   ❌ Level ${level.id} Data: ${error.message}`);
          }
        } else {
          console.log(`   ⚠️ Level ${level.id}: No data available`);
        }
      }

      // Test individual level retrieval
      console.log('\n3️⃣ Testing Individual Level Retrieval...');
      const firstLevel = data.levels[0];
      if (firstLevel) {
        try {
          const levelResponse = await fetch(`${backendUrl}/api/db/level/${firstLevel.id}`);
          console.log(`   ✅ Level ${firstLevel.id} fetch: ${levelResponse.status} ${levelResponse.ok ? 'OK' : 'Error'}`);
        } catch (error) {
          console.log(`   ❌ Level ${firstLevel.id} fetch: ${error.message}`);
        }
      }

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