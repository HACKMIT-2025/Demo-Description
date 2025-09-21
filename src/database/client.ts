// Neon PostgreSQL Database Client for Community Playground
// Integration with AI Game Creation Platform

export interface User {
  auth0_id: string; // Primary key - Auth0 user identifier
  username: string;
  display_name: string;
  email?: string; // Optional - Auth0 may not always provide email
  avatar_url?: string;
  bio?: string;
  social_links?: Record<string, string>;
  is_verified: boolean;
  total_likes_received: number;
  total_maps_created: number;

  // Auth0 specific fields
  auth0_provider?: string; // 'auth0', 'google-oauth2', 'github', 'discord', etc.
  auth0_nickname?: string;
  auth0_picture?: string; // Auth0 profile picture URL
  last_login?: string;
  login_count?: number;

  created_at: string;
  updated_at: string;

  // Legacy ID field for compatibility (can be same as auth0_id)
  id?: string;
}

export interface Game {
  id: string;
  title: string;
  description?: string;
  game_url: string;
  map_data_url?: string;
  thumbnail_url?: string;
  screenshot_urls?: string[];
  creator_id: string;
  creator_name: string;
  creator?: User;
  likes_count: number;
  shares_count: number;
  plays_count: number;
  reposts_count: number;
  views_count: number;
  difficulty_level: 'easy' | 'medium' | 'hard' | 'extreme';
  estimated_play_time?: number;
  tags: string[];
  ai_models_used?: Record<string, any>;
  generation_time?: number;
  processing_stats?: Record<string, any>;
  is_public: boolean;
  is_featured: boolean;
  is_trending: boolean;
  featured_until?: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  user_has_liked?: boolean;
  user_has_shared?: boolean;
  user_has_reposted?: boolean;
}

export interface GameFilters {
  sort_by?: 'latest' | 'popular' | 'trending' | 'most_liked' | 'most_played';
  tags?: string[];
  difficulty?: string[];
  creator?: string;
  search?: string;
  limit?: number;
  offset?: number;
  featured_only?: boolean;
  trending_only?: boolean;
}

export interface CommunityStats {
  total_games: number;
  total_creators: number;
  total_likes: number;
  total_plays: number;
  trending_games: Game[];
  featured_games: Game[];
  top_creators: User[];
}

// Levels API Client - fetches data from our backend database
class CommunityAPIClient {
  private backendUrl: string = 'https://25hackmit--hackmit25-backend.modal.run';
  private levelsApiUrl: string = `${this.backendUrl}/api/db/levels`;

  // Convert level data to Game format
  private convertLevelToGame(level: any, index: number): Game {
    // Create some variety in the mock data
    const creators = ['Level Creator', 'Map Builder', 'Game Designer', 'AI Architect', 'World Maker'];
    const difficulties: Array<'easy' | 'medium' | 'hard' | 'extreme'> = ['easy', 'medium', 'hard', 'extreme'];
    const tagSets = [
      ['adventure', 'exploration', 'classic'],
      ['puzzle', 'strategic', 'challenging'],
      ['action', 'fast-paced', 'dynamic'],
      ['platformer', 'retro', 'nostalgic'],
      ['maze', 'complex', 'brain-teaser']
    ];

    return {
      id: level.id || `level-${index}`,
      title: level.name || level.title || `Level ${level.id || index + 1}`,
      description: level.description || `An exciting level generated from hand-drawn sketches. Challenge yourself with unique obstacles and creative gameplay!`,
      game_url: `https://game.ai-creator.com/level-${level.id || index}`,
      map_data_url: level.data ? `data:application/json;base64,${btoa(JSON.stringify(level.data))}` : undefined, // Embed level data as data URL
      thumbnail_url: level.thumbnail_url || `/thumbnails/level-${index % 6}.jpg`,
      screenshot_urls: level.screenshot_urls || [],
      creator_id: `creator-${index % creators.length}`,
      creator_name: creators[index % creators.length],
      creator: undefined,
      likes_count: Math.floor(Math.random() * 2000) + 100,
      shares_count: Math.floor(Math.random() * 500) + 20,
      plays_count: Math.floor(Math.random() * 5000) + 200,
      reposts_count: Math.floor(Math.random() * 200) + 10,
      views_count: Math.floor(Math.random() * 10000) + 500,
      difficulty_level: difficulties[index % difficulties.length],
      estimated_play_time: Math.floor(Math.random() * 20) + 5,
      tags: tagSets[index % tagSets.length],
      ai_models_used: { vision: 'OpenCV', processing: 'Custom Algorithm' },
      generation_time: Math.floor(Math.random() * 30) + 5,
      processing_stats: { accuracy: '95%', objects_detected: Math.floor(Math.random() * 20) + 5 },
      is_public: true,
      is_featured: Math.random() > 0.7,
      is_trending: Math.random() > 0.8,
      featured_until: undefined,
      created_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      user_has_liked: false,
      user_has_shared: false,
      user_has_reposted: false
    };
  }

  // Mock data for demonstration with Auth0 format (keeping for user stats)
  private mockUsers: User[] = [
    {
      auth0_id: 'auth0|648a1234567890abcdef1234',
      id: 'auth0|648a1234567890abcdef1234', // Legacy compatibility
      username: 'dragonmaster_ai',
      display_name: 'Dragon Master',
      email: 'dragon@example.com',
      avatar_url: '/avatars/dragon.jpg',
      bio: 'Fantasy game creator specializing in medieval worlds 🏰',
      is_verified: true,
      total_likes_received: 5432,
      total_maps_created: 12,
      auth0_provider: 'auth0',
      auth0_nickname: 'dragonmaster',
      auth0_picture: 'https://s.gravatar.com/avatar/dragon.jpg',
      last_login: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      login_count: 47,
      created_at: new Date('2024-01-15').toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      auth0_id: 'google-oauth2|648b5678901234efghij5678',
      id: 'google-oauth2|648b5678901234efghij5678',
      username: 'cyberpunk2077',
      display_name: 'Cyber Creator',
      email: 'cyber@gmail.com',
      avatar_url: '/avatars/cyber.jpg',
      bio: 'Futuristic cityscapes and neon-lit adventures 🌆',
      is_verified: true,
      total_likes_received: 3421,
      total_maps_created: 8,
      auth0_provider: 'google-oauth2',
      auth0_nickname: 'cyber.creator',
      auth0_picture: 'https://lh3.googleusercontent.com/cyber.jpg',
      last_login: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
      login_count: 23,
      created_at: new Date('2024-02-01').toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      auth0_id: 'github|648c9012345678klmnop9012',
      id: 'github|648c9012345678klmnop9012',
      username: 'naturewizard',
      display_name: 'Nature Wizard',
      email: undefined, // GitHub user didn't share email
      avatar_url: '/avatars/nature.jpg',
      bio: 'Bringing magical forests to life 🌲✨',
      is_verified: false,
      total_likes_received: 8901,
      total_maps_created: 15,
      auth0_provider: 'github',
      auth0_nickname: 'naturewizard',
      auth0_picture: 'https://avatars.githubusercontent.com/nature',
      last_login: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
      login_count: 91,
      created_at: new Date('2024-01-20').toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];

  // Cache for API data
  private levelsCache: Game[] = [];
  private cacheExpiry: number = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  // Simulate network delay
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Fetch levels from API
  private async fetchLevelsFromAPI(): Promise<Game[]> {
    try {
      console.log('🔍 Fetching levels from API...');
      const response = await fetch(this.levelsApiUrl);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      console.log('📊 API Response:', data);

      if (!data.levels || !Array.isArray(data.levels)) {
        console.warn('⚠️ No levels found in API response, using empty array');
        return [];
      }

      // Convert backend levels to Game format
      const games = data.levels.map((level: any, index: number) => this.convertLevelToGame(level, index));

      // Cache the results
      this.levelsCache = games;
      this.cacheExpiry = Date.now() + this.CACHE_DURATION;

      console.log(`✅ Successfully loaded ${games.length} levels from API`);
      return games;
    } catch (error) {
      console.error('❌ Failed to fetch levels from API:', error);
      // Return empty array on error
      return [];
    }
  }

  // Get levels with caching
  private async getLevels(): Promise<Game[]> {
    // Check if cache is still valid
    if (this.levelsCache.length > 0 && Date.now() < this.cacheExpiry) {
      console.log('📋 Using cached levels data');
      return this.levelsCache;
    }

    // Fetch fresh data from API
    return await this.fetchLevelsFromAPI();
  }

  // Get community stats
  async getCommunityStats(): Promise<CommunityStats> {
    await this.delay(300);

    const games = await this.getLevels();

    return {
      total_games: games.length,
      total_creators: new Set(games.map(g => g.creator_name)).size,
      total_likes: games.reduce((sum, g) => sum + g.likes_count, 0),
      total_plays: games.reduce((sum, g) => sum + g.plays_count, 0),
      trending_games: games.filter(g => g.is_trending).slice(0, 3),
      featured_games: games.filter(g => g.is_featured).slice(0, 6),
      top_creators: this.mockUsers.slice(0, 5),
    };
  }

  // Get games with filters
  async getGames(filters: GameFilters = {}): Promise<{ games: Game[], total: number }> {
    await this.delay(500);

    let games = await this.getLevels();

    // Apply filters
    if (filters.featured_only) {
      games = games.filter(g => g.is_featured);
    }

    if (filters.trending_only) {
      games = games.filter(g => g.is_trending);
    }

    if (filters.tags && filters.tags.length > 0) {
      games = games.filter(g =>
        filters.tags!.some(tag => g.tags.includes(tag))
      );
    }

    if (filters.difficulty && filters.difficulty.length > 0) {
      games = games.filter(g =>
        filters.difficulty!.includes(g.difficulty_level)
      );
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      games = games.filter(g =>
        g.title.toLowerCase().includes(searchTerm) ||
        g.description?.toLowerCase().includes(searchTerm) ||
        g.creator_name.toLowerCase().includes(searchTerm) ||
        g.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (filters.creator) {
      games = games.filter(g => g.creator_name === filters.creator);
    }

    // Apply sorting
    switch (filters.sort_by) {
      case 'latest':
        games.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'popular':
      case 'most_played':
        games.sort((a, b) => b.plays_count - a.plays_count);
        break;
      case 'most_liked':
        games.sort((a, b) => b.likes_count - a.likes_count);
        break;
      case 'trending':
        games.sort((a, b) => {
          if (a.is_trending && !b.is_trending) return -1;
          if (!a.is_trending && b.is_trending) return 1;
          return b.likes_count - a.likes_count;
        });
        break;
      default:
        games.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    // Apply pagination
    const total = games.length;
    const offset = filters.offset || 0;
    const limit = filters.limit || 20;
    games = games.slice(offset, offset + limit);

    // Attach creator info
    games = games.map(game => ({
      ...game,
      creator: this.mockUsers.find(u => u.id === game.creator_id)
    }));

    return { games, total };
  }

  // Get single game
  async getGame(id: string): Promise<Game | null> {
    await this.delay(200);

    const games = await this.getLevels();
    const game = games.find(g => g.id === id);
    if (!game) return null;

    return {
      ...game,
      creator: this.mockUsers.find(u => u.id === game.creator_id)
    };
  }

  // Like a game
  async likeGame(gameId: string): Promise<{ success: boolean, likes_count: number }> {
    await this.delay(300);

    const game = this.levelsCache.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.likes_count += 1;
    return { success: true, likes_count: game.likes_count };
  }

  // Unlike a game
  async unlikeGame(gameId: string): Promise<{ success: boolean, likes_count: number }> {
    await this.delay(300);

    const game = this.levelsCache.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.likes_count = Math.max(0, game.likes_count - 1);
    return { success: true, likes_count: game.likes_count };
  }

  // Share a game
  async shareGame(gameId: string, platform: string): Promise<{ success: boolean, shares_count: number }> {
    await this.delay(300);

    const game = this.levelsCache.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.shares_count += 1;
    return { success: true, shares_count: game.shares_count };
  }

  // Repost/remix a game
  async repostGame(gameId: string): Promise<{ success: boolean, reposts_count: number }> {
    await this.delay(300);

    const game = this.levelsCache.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.reposts_count += 1;
    return { success: true, reposts_count: game.reposts_count };
  }

  // Track game play
  async trackPlay(gameId: string): Promise<{ success: boolean }> {
    await this.delay(100);

    const game = this.levelsCache.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.plays_count += 1;
    game.views_count += 1;
    return { success: true };
  }

  // Search suggestions
  async getSearchSuggestions(query: string): Promise<string[]> {
    await this.delay(200);

    const suggestions = [
      'fantasy castle',
      'cyberpunk city',
      'space station',
      'underwater world',
      'medieval kingdom',
      'futuristic racing',
      'magical forest',
      'desert temple',
      'pirate ship',
      'haunted mansion'
    ];

    return suggestions
      .filter(s => s.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
  }

  // Get popular tags
  async getPopularTags(): Promise<{ tag: string, count: number }[]> {
    await this.delay(200);

    return [
      { tag: 'fantasy', count: 456 },
      { tag: 'adventure', count: 321 },
      { tag: 'cyberpunk', count: 234 },
      { tag: 'exploration', count: 198 },
      { tag: 'rpg', count: 156 },
      { tag: 'racing', count: 134 },
      { tag: 'puzzle', count: 98 },
      { tag: 'space', count: 87 },
      { tag: 'magic', count: 76 },
      { tag: 'castle', count: 65 }
    ];
  }
}

export const communityAPI = new CommunityAPIClient();