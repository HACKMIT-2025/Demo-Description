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

// Mock API Client (In production, this would connect to actual Neon PostgreSQL)
class CommunityAPIClient {
  private baseUrl: string = '/api/community';

  // Mock data for demonstration with Auth0 format
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

  private mockGames: Game[] = [
    {
      id: 'game-1',
      title: 'Fantasy Castle Realm',
      description: 'Epic fantasy castle with multiple towers, secret passages, and dragon lairs. Perfect for RPG adventures!',
      game_url: 'https://game.ai-creator.com/castle-123',
      map_data_url: 'https://cdn.ai-creator.com/maps/castle-realm.json',
      thumbnail_url: '/thumbnails/castle.jpg',
      creator_id: 'auth0|648a1234567890abcdef1234',
      creator_name: 'Dragon Master',
      likes_count: 1234,
      shares_count: 347,
      plays_count: 5678,
      reposts_count: 89,
      views_count: 12450,
      difficulty_level: 'medium',
      estimated_play_time: 15,
      tags: ['fantasy', 'castle', 'rpg', 'adventure'],
      is_public: true,
      is_featured: true,
      is_trending: true,
      created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      updated_at: new Date().toISOString(),
      published_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'game-2',
      title: 'Neon Cyber City',
      description: 'Futuristic cyberpunk city with neon lights, flying cars, and high-tech obstacles. Race through the digital matrix!',
      game_url: 'https://game.ai-creator.com/cyber-456',
      map_data_url: 'https://cdn.ai-creator.com/maps/cyber-city.json',
      thumbnail_url: '/thumbnails/cyber.jpg',
      creator_id: 'google-oauth2|648b5678901234efghij5678',
      creator_name: 'Cyber Creator',
      likes_count: 856,
      shares_count: 234,
      plays_count: 3421,
      reposts_count: 67,
      views_count: 8934,
      difficulty_level: 'hard',
      estimated_play_time: 12,
      tags: ['cyberpunk', 'city', 'racing', 'futuristic'],
      is_public: true,
      is_featured: false,
      is_trending: false,
      created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
      updated_at: new Date().toISOString(),
      published_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'game-3',
      title: 'Enchanted Forest',
      description: 'Mystical forest filled with magical creatures, hidden treasures, and ancient trees that tell stories.',
      game_url: 'https://game.ai-creator.com/forest-789',
      map_data_url: 'https://cdn.ai-creator.com/maps/enchanted-forest.json',
      thumbnail_url: '/thumbnails/forest.jpg',
      creator_id: 'github|648c9012345678klmnop9012',
      creator_name: 'Nature Wizard',
      likes_count: 2134,
      shares_count: 456,
      plays_count: 7890,
      reposts_count: 123,
      views_count: 15678,
      difficulty_level: 'easy',
      estimated_play_time: 10,
      tags: ['fantasy', 'forest', 'magic', 'exploration'],
      is_public: true,
      is_featured: true,
      is_trending: false,
      created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      updated_at: new Date().toISOString(),
      published_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'game-4',
      title: 'Space Adventure',
      description: 'Explore distant planets and navigate through asteroid fields in this epic space adventure!',
      game_url: 'https://game.ai-creator.com/space-adventure',
      map_data_url: 'https://cdn.ai-creator.com/maps/space-adventure.json',
      thumbnail_url: '/thumbnails/space.jpg',
      creator_id: 'auth0|648a1234567890abcdef1234',
      creator_name: 'Dragon Master',
      likes_count: 892,
      shares_count: 167,
      plays_count: 3245,
      reposts_count: 45,
      views_count: 7834,
      difficulty_level: 'hard',
      estimated_play_time: 18,
      tags: ['space', 'adventure', 'sci-fi', 'exploration'],
      is_public: true,
      is_featured: false,
      is_trending: true,
      created_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'game-5',
      title: 'Desert Temple Quest',
      description: 'Ancient temple filled with mysteries, traps, and hidden treasures waiting to be discovered.',
      game_url: 'https://game.ai-creator.com/desert-temple',
      map_data_url: 'https://cdn.ai-creator.com/maps/desert-temple.json',
      thumbnail_url: '/thumbnails/temple.jpg',
      creator_id: 'google-oauth2|648b5678901234efghij5678',
      creator_name: 'Cyber Creator',
      likes_count: 654,
      shares_count: 98,
      plays_count: 2176,
      reposts_count: 23,
      views_count: 4567,
      difficulty_level: 'extreme',
      estimated_play_time: 25,
      tags: ['desert', 'temple', 'puzzle', 'adventure'],
      is_public: true,
      is_featured: false,
      is_trending: false,
      created_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'game-6',
      title: 'Underwater Paradise',
      description: 'Swim through beautiful coral reefs and discover hidden underwater caves and marine life.',
      game_url: 'https://game.ai-creator.com/underwater-paradise',
      map_data_url: 'https://cdn.ai-creator.com/maps/underwater-paradise.json',
      thumbnail_url: '/thumbnails/underwater.jpg',
      creator_id: 'github|648c9012345678klmnop9012',
      creator_name: 'Nature Wizard',
      likes_count: 1456,
      shares_count: 289,
      plays_count: 4321,
      reposts_count: 67,
      views_count: 9876,
      difficulty_level: 'medium',
      estimated_play_time: 14,
      tags: ['underwater', 'exploration', 'nature', 'peaceful'],
      is_public: true,
      is_featured: true,
      is_trending: false,
      created_at: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date(Date.now() - 16 * 60 * 60 * 1000).toISOString(),
    }
  ];

  // Simulate network delay
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get community stats
  async getCommunityStats(): Promise<CommunityStats> {
    await this.delay(300);

    return {
      total_games: 2847,
      total_creators: 1203,
      total_likes: 15247,
      total_plays: 89234,
      trending_games: this.mockGames.filter(g => g.is_trending).slice(0, 3),
      featured_games: this.mockGames.filter(g => g.is_featured).slice(0, 6),
      top_creators: this.mockUsers.slice(0, 5),
    };
  }

  // Get games with filters
  async getGames(filters: GameFilters = {}): Promise<{ games: Game[], total: number }> {
    await this.delay(500);

    let games = [...this.mockGames];

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

    const game = this.mockGames.find(g => g.id === id);
    if (!game) return null;

    return {
      ...game,
      creator: this.mockUsers.find(u => u.id === game.creator_id)
    };
  }

  // Like a game
  async likeGame(gameId: string): Promise<{ success: boolean, likes_count: number }> {
    await this.delay(300);

    const game = this.mockGames.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.likes_count += 1;
    return { success: true, likes_count: game.likes_count };
  }

  // Unlike a game
  async unlikeGame(gameId: string): Promise<{ success: boolean, likes_count: number }> {
    await this.delay(300);

    const game = this.mockGames.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.likes_count = Math.max(0, game.likes_count - 1);
    return { success: true, likes_count: game.likes_count };
  }

  // Share a game
  async shareGame(gameId: string, platform: string): Promise<{ success: boolean, shares_count: number }> {
    await this.delay(300);

    const game = this.mockGames.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.shares_count += 1;
    return { success: true, shares_count: game.shares_count };
  }

  // Repost/remix a game
  async repostGame(gameId: string): Promise<{ success: boolean, reposts_count: number }> {
    await this.delay(300);

    const game = this.mockGames.find(g => g.id === gameId);
    if (!game) throw new Error('Game not found');

    game.reposts_count += 1;
    return { success: true, reposts_count: game.reposts_count };
  }

  // Track game play
  async trackPlay(gameId: string): Promise<{ success: boolean }> {
    await this.delay(100);

    const game = this.mockGames.find(g => g.id === gameId);
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