// Test Neon PostgreSQL Database Connection
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log('🔗 Connecting to Neon PostgreSQL...');
    await client.connect();
    console.log('✅ Database connected successfully!');

    // Test query
    const result = await client.query('SELECT version(), now() as current_time');
    console.log('📊 Database Info:');
    console.log('Version:', result.rows[0].version.substring(0, 50) + '...');
    console.log('Current Time:', result.rows[0].current_time);

    // Check if our tables exist
    const tablesQuery = `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE'
    `;

    const tables = await client.query(tablesQuery);
    console.log('📋 Existing Tables:');
    if (tables.rows.length > 0) {
      tables.rows.forEach(row => console.log('  -', row.table_name));
    } else {
      console.log('  No tables found. You need to run the schema.sql script.');
    }

  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('Error:', error.message);

    if (error.code === 'ENOTFOUND') {
      console.log('💡 Tip: Check your DATABASE_URL format');
    } else if (error.code === '28P01') {
      console.log('💡 Tip: Check your database credentials');
    }
  } finally {
    await client.end();
    console.log('🔌 Connection closed');
  }
}

testConnection();