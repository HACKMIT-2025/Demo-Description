// Test Neon API Connection
import dotenv from 'dotenv';
import { testNeonAPI } from './neon-api-client.js';

dotenv.config();

console.log('🚀 Testing Neon API Integration...');
console.log('API Key:', process.env.DATABASE_URL?.substring(0, 10) + '...');

testNeonAPI();