// Setup Neon Database for Community Playground
import dotenv from 'dotenv';
import { NeonDatabaseClient } from './compiled/neon-database-client.js';

dotenv.config();

async function setupDatabase() {
  console.log('🚀 Setting up Community Playground Database...\n');

  try {
    // Create database client
    const apiKey = process.env.DATABASE_URL;
    if (!apiKey || !apiKey.startsWith('napi_')) {
      throw new Error('Invalid Neon API key in DATABASE_URL');
    }

    const db = new NeonDatabaseClient(apiKey);

    // Test connection
    console.log('1. Testing database connection...');
    const isConnected = await db.testConnection();
    if (!isConnected) {
      throw new Error('Failed to connect to database');
    }
    console.log('✅ Connection successful\n');

    // Initialize tables
    console.log('2. Initializing database tables...');
    const tablesCreated = await db.initializeDatabase();
    if (!tablesCreated) {
      throw new Error('Failed to create database tables');
    }
    console.log('✅ Tables created successfully\n');

    // Insert sample data
    console.log('3. Inserting sample data...');
    const dataInserted = await db.insertSampleData();
    if (!dataInserted) {
      console.log('⚠️  Sample data might already exist (this is okay)');
    } else {
      console.log('✅ Sample data inserted successfully');
    }

    // Verify setup by getting stats
    console.log('\n4. Verifying setup...');
    const stats = await db.getCommunityStats();
    console.log('📊 Community Stats:');
    console.log(`  - Total Games: ${stats.total_games}`);
    console.log(`  - Total Creators: ${stats.total_creators}`);
    console.log(`  - Total Likes: ${stats.total_likes}`);
    console.log(`  - Total Plays: ${stats.total_plays}`);

    // Get sample games
    const games = await db.getGames({ limit: 3 });
    console.log(`\n🎮 Sample Games (${games.length}):`);
    for (const game of games) {
      console.log(`  - ${game.title} by ${game.creator_name}`);
      console.log(`    Likes: ${game.likes_count} | Plays: ${game.plays_count}`);
    }

    console.log('\n🎉 Database setup completed successfully!');
    console.log('\n📋 What you can do now:');
    console.log('1. Run the community playground: npm run dev');
    console.log('2. Visit http://localhost:5173/community.html');
    console.log('3. Test the social features (like, share, etc.)');
    console.log('4. Add your own games to the community!');

  } catch (error) {
    console.error('\n❌ Database setup failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure your Neon API key is correct in .env');
    console.log('2. Check that your Neon project has the right permissions');
    console.log('3. Verify the project ID and branch ID are correct');
  }
}

setupDatabase();