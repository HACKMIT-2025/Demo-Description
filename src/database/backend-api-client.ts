// Backend API Client for Demo-Description
// Replaces direct Neon API calls with secure backend proxy

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

export interface Level {
  id: number;
  name: string;
  description?: string;
  difficulty: string;
  data: any;
  created_by: string;
  created_at: string;
}

export class BackendAPIClient {
  private backendUrl: string;

  constructor() {
    this.backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  }

  // Health check
  async isConnected(): Promise<boolean> {
    try {
      const response = await fetch(`${this.backendUrl}/`);
      const data = await response.json();
      return data.status === 'healthy';
    } catch (error) {
      console.error('Backend connection failed:', error);
      return false;
    }
  }

  // Database operations via backend proxy

  async executeQuery(query: string, params?: any[]): Promise<any> {
    try {
      const response = await fetch(`${this.backendUrl}/api/db/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          params,
          operation_type: this.getOperationType(query)
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || `Query failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Query execution failed:', error);
      throw error;
    }
  }

  private getOperationType(query: string): string {
    const lowerQuery = query.toLowerCase().trim();
    if (lowerQuery.startsWith('select')) return 'select';
    if (lowerQuery.startsWith('insert')) return 'insert';
    if (lowerQuery.startsWith('update')) return 'update';
    if (lowerQuery.startsWith('delete')) return 'delete';
    if (lowerQuery.startsWith('create')) return 'create';
    return 'select';
  }

  // Game management methods

  async saveLevel(name: string, data: any, difficulty: string = 'medium', description?: string): Promise<Level> {
    try {
      const response = await fetch(`${this.backendUrl}/api/db/save-level`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          difficulty,
          data,
          created_by: 'community'
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || `Failed to save level: ${response.status}`);
      }

      const result = await response.json();
      return result.level || result;
    } catch (error) {
      console.error('Error saving level:', error);
      throw error;
    }
  }

  async getLevels(difficulty?: string, limit: number = 50, offset: number = 0): Promise<Level[]> {
    try {
      const params = new URLSearchParams();
      if (difficulty) params.append('difficulty', difficulty);
      params.append('limit', limit.toString());
      params.append('offset', offset.toString());

      const response = await fetch(`${this.backendUrl}/api/db/levels?${params}`);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || `Failed to get levels: ${response.status}`);
      }

      const result = await response.json();
      return result.levels || [];
    } catch (error) {
      console.error('Error getting levels:', error);
      return [];
    }
  }

  async getLevel(id: number): Promise<Level | null> {
    try {
      const response = await fetch(`${this.backendUrl}/api/db/level/${id}`);

      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || `Failed to get level: ${response.status}`);
      }

      const result = await response.json();
      return result.level || null;
    } catch (error) {
      console.error('Error getting level:', error);
      return null;
    }
  }

  // Community features (using levels table for now)

  async getAllGames(): Promise<Game[]> {
    try {
      const levels = await this.getLevels();

      // Convert levels to games format for community display
      return levels.map((level, index) => ({
        id: level.id.toString(),
        title: level.name,
        description: level.description,
        game_url: `#level-${level.id}`, // Placeholder URL
        map_data_url: '', // Could store level data URL here
        thumbnail_url: '', // Could generate thumbnail from level data
        creator_name: level.created_by,
        likes_count: Math.floor(Math.random() * 100), // Mock data
        shares_count: Math.floor(Math.random() * 20),
        plays_count: Math.floor(Math.random() * 500),
        reposts_count: Math.floor(Math.random() * 10),
        tags: [level.difficulty, 'mario', 'platformer'],
        difficulty_level: level.difficulty as 'easy' | 'medium' | 'hard' | 'extreme',
        is_featured: index < 3, // First 3 are featured
        is_trending: index < 5, // First 5 are trending
        created_at: level.created_at
      }));
    } catch (error) {
      console.error('Error getting games:', error);
      return [];
    }
  }

  async getGamesByDifficulty(difficulty: 'easy' | 'medium' | 'hard' | 'extreme'): Promise<Game[]> {
    try {
      const levels = await this.getLevels(difficulty);
      const games = await this.getAllGames();
      return games.filter(game => game.difficulty_level === difficulty);
    } catch (error) {
      console.error('Error getting games by difficulty:', error);
      return [];
    }
  }

  async getFeaturedGames(): Promise<Game[]> {
    try {
      const games = await this.getAllGames();
      return games.filter(game => game.is_featured);
    } catch (error) {
      console.error('Error getting featured games:', error);
      return [];
    }
  }

  async getTrendingGames(): Promise<Game[]> {
    try {
      const games = await this.getAllGames();
      return games.filter(game => game.is_trending);
    } catch (error) {
      console.error('Error getting trending games:', error);
      return [];
    }
  }

  async getCommunityStats(): Promise<CommunityStats> {
    try {
      const games = await this.getAllGames();

      const uniqueCreators = new Set(games.map(game => game.creator_name)).size;
      const totalLikes = games.reduce((sum, game) => sum + game.likes_count, 0);
      const totalPlays = games.reduce((sum, game) => sum + game.plays_count, 0);

      return {
        total_games: games.length,
        total_creators: uniqueCreators,
        total_likes: totalLikes,
        total_plays: totalPlays
      };
    } catch (error) {
      console.error('Error getting community stats:', error);
      return {
        total_games: 0,
        total_creators: 0,
        total_likes: 0,
        total_plays: 0
      };
    }
  }

  // Search functionality
  async searchGames(query: string): Promise<Game[]> {
    try {
      const games = await this.getAllGames();
      const lowerQuery = query.toLowerCase();

      return games.filter(game =>
        game.title.toLowerCase().includes(lowerQuery) ||
        game.description?.toLowerCase().includes(lowerQuery) ||
        game.creator_name.toLowerCase().includes(lowerQuery) ||
        game.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    } catch (error) {
      console.error('Error searching games:', error);
      return [];
    }
  }

  // Utility method to update backend URL
  updateBackendUrl(url: string): void {
    this.backendUrl = url;
  }

  getBackendUrl(): string {
    return this.backendUrl;
  }
}

// Export singleton instance
export const backendAPIClient = new BackendAPIClient();