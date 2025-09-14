// Test Neon Database Client with API
import dotenv from 'dotenv';
import { NeonDatabaseClient } from './compiled/neon-database-client.js';

dotenv.config();

async function testNeonDatabase() {
  console.log('🧪 Testing Neon Database API Client...\n');

  try {
    // Create client
    const dbClient = new NeonDatabaseClient(process.env.DATABASE_URL);

    console.log('1️⃣ Testing database connection...');
    const connected = await dbClient.testConnection();

    if (!connected) {
      console.log('❌ Database connection failed');
      return;
    }

    console.log('\n2️⃣ Initializing database schema...');
    const initialized = await dbClient.initializeDatabase();

    if (!initialized) {
      console.log('❌ Database initialization failed');
      return;
    }

    console.log('\n3️⃣ Inserting sample data...');
    const dataInserted = await dbClient.insertSampleData();

    if (!dataInserted) {
      console.log('❌ Sample data insertion failed');
      return;
    }

    console.log('\n4️⃣ Getting community stats...');
    const stats = await dbClient.getCommunityStats();
    console.log('📊 Community Stats:');
    console.log(`   Games: ${stats.total_games}`);
    console.log(`   Creators: ${stats.total_creators}`);
    console.log(`   Likes: ${stats.total_likes}`);
    console.log(`   Plays: ${stats.total_plays}`);

    console.log('\n5️⃣ Getting games (latest)...');
    const latestGames = await dbClient.getGames({ sort_by: 'latest', limit: 3 });
    console.log(`📋 Latest Games (${latestGames.length}):`);
    latestGames.forEach(game => {
      console.log(`   - ${game.title} by ${game.creator_name}`);
      console.log(`     Likes: ${game.likes_count}, Plays: ${game.plays_count}`);
      console.log(`     Map Data: ${game.map_data_url}`);
    });

    console.log('\n6️⃣ Getting featured games...');
    const featuredGames = await dbClient.getGames({ featured_only: true });
    console.log(`⭐ Featured Games (${featuredGames.length}):`);
    featuredGames.forEach(game => {
      console.log(`   - ${game.title} by ${game.creator_name}`);
    });

    console.log('\n7️⃣ Getting trending games...');
    const trendingGames = await dbClient.getGames({ trending_only: true });
    console.log(`🔥 Trending Games (${trendingGames.length}):`);
    trendingGames.forEach(game => {
      console.log(`   - ${game.title} by ${game.creator_name}`);
    });

    if (latestGames.length > 0) {
      const testGame = latestGames[0];

      console.log(`\n8️⃣ Testing game interactions (${testGame.title})...`);

      // Test liking
      const likeResult = await dbClient.likeGame(testGame.id);
      console.log(`👍 Like result: Success: ${likeResult.success}, Likes: ${likeResult.likes_count}`);

      // Test sharing
      const shareResult = await dbClient.shareGame(testGame.id);
      console.log(`📤 Share result: Success: ${shareResult.success}, Shares: ${shareResult.shares_count}`);
    }

    console.log('\n🎉 All tests completed successfully!');
    console.log('\n📋 Next Steps:');
    console.log('1. Update community.ts to use NeonDatabaseClient');
    console.log('2. Test community page with real database');
    console.log('3. Deploy to production');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

testNeonDatabase();