// Advanced Neon Database Client for Community Playground
// Uses Neon's REST API for database operations

export interface Game {
  id: string;
  title: string;
  description?: string;
  game_url: string;
  map_data_url?: string;
  thumbnail_url?: string;
  creator_name: string;
  likes_count: number;
  shares_count: number;
  plays_count: number;
  reposts_count: number;
  tags: string[];
  difficulty_level: 'easy' | 'medium' | 'hard' | 'extreme';
  is_featured: boolean;
  is_trending: boolean;
  created_at: string;
}

export interface CommunityStats {
  total_games: number;
  total_creators: number;
  total_likes: number;
  total_plays: number;
}

interface NeonQueryResult {
  results: Array<{
    command: string;
    rowCount: number;
    rows: any[];
  }>;
}

export class NeonDatabaseClient {
  private apiKey: string;
  private projectId: string;
  private branchId: string;
  private baseUrl: string = 'https://console.neon.tech/api/v2';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    // For now, we'll use hardcoded values from our successful test
    this.projectId = 'dawn-tree-08588350';
    this.branchId = 'br-dark-waterfall-ae1s5lrf'; // development branch
  }

  private async executeQuery(query: string, params: any[] = []): Promise<NeonQueryResult> {
    const response = await fetch(`${this.baseUrl}/projects/${this.projectId}/branches/${this.branchId}/sql`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query,
        params
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Database query failed: ${response.status} - ${error}`);
    }

    return response.json();
  }

  // Initialize database tables
  async initializeDatabase(): Promise<boolean> {
    try {
      const createTablesQuery = `
        -- Enable UUID extension
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

        -- Create games table
        CREATE TABLE IF NOT EXISTS games (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          title VARCHAR(200) NOT NULL,
          description TEXT,
          game_url TEXT NOT NULL UNIQUE,
          map_data_url TEXT,
          thumbnail_url TEXT,
          creator_name VARCHAR(100) NOT NULL,
          likes_count INTEGER DEFAULT 0,
          shares_count INTEGER DEFAULT 0,
          plays_count INTEGER DEFAULT 0,
          reposts_count INTEGER DEFAULT 0,
          tags TEXT[] DEFAULT '{}',
          difficulty_level VARCHAR(20) DEFAULT 'medium',
          is_featured BOOLEAN DEFAULT FALSE,
          is_trending BOOLEAN DEFAULT FALSE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );

        -- Create indexes
        CREATE INDEX IF NOT EXISTS idx_games_created_at ON games(created_at DESC);
        CREATE INDEX IF NOT EXISTS idx_games_likes_count ON games(likes_count DESC);
        CREATE INDEX IF NOT EXISTS idx_games_is_trending ON games(is_trending) WHERE is_trending = TRUE;
        CREATE INDEX IF NOT EXISTS idx_games_is_featured ON games(is_featured) WHERE is_featured = TRUE;
      `;

      const result = await this.executeQuery(createTablesQuery);
      console.log('✅ Database tables created successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize database:', error);
      return false;
    }
  }

  // Insert sample data
  async insertSampleData(): Promise<boolean> {
    try {
      const insertQuery = `
        INSERT INTO games (title, description, game_url, map_data_url, thumbnail_url, creator_name, likes_count, shares_count, plays_count, reposts_count, tags, difficulty_level, is_featured, is_trending) VALUES
        ('Fantasy Castle Realm', 'Epic fantasy castle with multiple towers, secret passages, and dragon lairs. Perfect for RPG adventures!', 'https://game.ai-creator.com/castle-123', 'https://cdn.ai-creator.com/maps/castle-realm.json', '/thumbnails/castle.jpg', 'Dragon Master', 1234, 347, 5678, 89, ARRAY['fantasy', 'castle', 'rpg', 'adventure'], 'medium', TRUE, TRUE),
        ('Neon Cyber City', 'Futuristic cyberpunk city with neon lights, flying cars, and high-tech obstacles. Race through the digital matrix!', 'https://game.ai-creator.com/cyber-456', 'https://cdn.ai-creator.com/maps/cyber-city.json', '/thumbnails/cyber.jpg', 'Cyber Creator', 856, 234, 3421, 67, ARRAY['cyberpunk', 'city', 'racing', 'futuristic'], 'hard', FALSE, FALSE),
        ('Enchanted Forest', 'Mystical forest filled with magical creatures, hidden treasures, and ancient trees that tell stories.', 'https://game.ai-creator.com/forest-789', 'https://cdn.ai-creator.com/maps/enchanted-forest.json', '/thumbnails/forest.jpg', 'Nature Wizard', 2134, 456, 7890, 123, ARRAY['fantasy', 'forest', 'magic', 'exploration'], 'easy', TRUE, FALSE),
        ('Ancient Desert Temple', 'Mysterious desert temple with deadly traps, hidden chambers, and ancient Egyptian puzzles to solve.', 'https://game.ai-creator.com/temple-012', 'https://cdn.ai-creator.com/maps/desert-temple.json', '/thumbnails/temple.jpg', 'Pharaoh Builder', 743, 189, 4567, 45, ARRAY['desert', 'temple', 'puzzle', 'adventure'], 'extreme', FALSE, FALSE),
        ('Orbital Space Station', 'Zero-gravity space station with multiple modules, airlocks, and spectacular views of distant planets.', 'https://game.ai-creator.com/space-345', 'https://cdn.ai-creator.com/maps/space-adventure.json', '/thumbnails/space.jpg', 'Space Explorer', 934, 267, 3456, 78, ARRAY['space', 'sci-fi', 'exploration', 'zero-gravity'], 'medium', FALSE, FALSE),
        ('Atlantis City', 'Breathtaking underwater city with coral structures, sea creatures, and ancient underwater civilization.', 'https://game.ai-creator.com/atlantis-678', 'https://cdn.ai-creator.com/maps/underwater-paradise.json', '/thumbnails/atlantis.jpg', 'Ocean Builder', 1567, 312, 6789, 95, ARRAY['underwater', 'atlantis', 'exploration', 'adventure'], 'medium', FALSE, FALSE)
        ON CONFLICT (game_url) DO NOTHING;
      `;

      const result = await this.executeQuery(insertQuery);
      console.log('✅ Sample data inserted successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to insert sample data:', error);
      return false;
    }
  }

  // Get all games with filtering
  async getGames(filters: {
    sort_by?: 'latest' | 'popular' | 'trending' | 'most_liked';
    featured_only?: boolean;
    trending_only?: boolean;
    limit?: number;
    offset?: number;
  } = {}): Promise<Game[]> {
    try {
      let query = 'SELECT * FROM games WHERE 1=1';
      const params: any[] = [];
      let paramIndex = 1;

      if (filters.featured_only) {
        query += ' AND is_featured = TRUE';
      }

      if (filters.trending_only) {
        query += ' AND is_trending = TRUE';
      }

      // Add sorting
      switch (filters.sort_by) {
        case 'latest':
          query += ' ORDER BY created_at DESC';
          break;
        case 'popular':
        case 'most_liked':
          query += ' ORDER BY likes_count DESC';
          break;
        case 'trending':
          query += ' ORDER BY is_trending DESC, likes_count DESC';
          break;
        default:
          query += ' ORDER BY created_at DESC';
      }

      // Add pagination
      if (filters.limit) {
        query += ` LIMIT $${paramIndex++}`;
        params.push(filters.limit);
      }

      if (filters.offset) {
        query += ` OFFSET $${paramIndex++}`;
        params.push(filters.offset);
      }

      const result = await this.executeQuery(query, params);
      return result.results[0]?.rows || [];
    } catch (error) {
      console.error('Failed to get games:', error);
      return [];
    }
  }

  // Get community stats
  async getCommunityStats(): Promise<CommunityStats> {
    try {
      const query = `
        SELECT
          COUNT(*) as total_games,
          COUNT(DISTINCT creator_name) as total_creators,
          SUM(likes_count) as total_likes,
          SUM(plays_count) as total_plays
        FROM games;
      `;

      const result = await this.executeQuery(query);
      const stats = result.results[0]?.rows[0];

      return {
        total_games: parseInt(stats?.total_games) || 0,
        total_creators: parseInt(stats?.total_creators) || 0,
        total_likes: parseInt(stats?.total_likes) || 0,
        total_plays: parseInt(stats?.total_plays) || 0
      };
    } catch (error) {
      console.error('Failed to get community stats:', error);
      return {
        total_games: 0,
        total_creators: 0,
        total_likes: 0,
        total_plays: 0
      };
    }
  }

  // Like a game
  async likeGame(gameId: string): Promise<{ success: boolean; likes_count: number }> {
    try {
      const query = `
        UPDATE games
        SET likes_count = likes_count + 1
        WHERE id = $1
        RETURNING likes_count;
      `;

      const result = await this.executeQuery(query, [gameId]);
      const likes_count = result.results[0]?.rows[0]?.likes_count || 0;

      return { success: true, likes_count };
    } catch (error) {
      console.error('Failed to like game:', error);
      return { success: false, likes_count: 0 };
    }
  }

  // Share a game
  async shareGame(gameId: string): Promise<{ success: boolean; shares_count: number }> {
    try {
      const query = `
        UPDATE games
        SET shares_count = shares_count + 1
        WHERE id = $1
        RETURNING shares_count;
      `;

      const result = await this.executeQuery(query, [gameId]);
      const shares_count = result.results[0]?.rows[0]?.shares_count || 0;

      return { success: true, shares_count };
    } catch (error) {
      console.error('Failed to share game:', error);
      return { success: false, shares_count: 0 };
    }
  }

  // Test connection
  async testConnection(): Promise<boolean> {
    try {
      const result = await this.executeQuery('SELECT NOW() as current_time, version() as db_version');
      console.log('✅ Database connection successful');
      console.log('Current time:', result.results[0]?.rows[0]?.current_time);
      return true;
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      return false;
    }
  }
}

// Create and export a singleton instance
export function createNeonDatabaseClient(): NeonDatabaseClient {
  const apiKey = process.env.DATABASE_URL || '';
  if (!apiKey.startsWith('napi_')) {
    throw new Error('Invalid Neon API key');
  }
  return new NeonDatabaseClient(apiKey);
}