// Community Playground - Main Application
// AI Game Creation Platform - Community Features
import './community.css';
import { backendAPIClient, type Game, type CommunityStats } from './database/backend-api-client';
import { LeaderboardClient } from './leaderboard-client';
import { communityAPI } from './database/client';

interface GameFilters {
  sort_by?: string;
  limit?: number;
  difficulty?: string;
  search?: string;
}

interface LeaderboardEntry {
  rank: number;
  level: {
    id: number;
    name: string;
    difficulty: string;
  };
  player: {
    nickname: string;
    country_code?: string;
  };
  performance: {
    completion_time_ms: number;
    completion_time_formatted: string;
    score: number;
    deaths_count: number;
    is_perfect_run: boolean;
  };
  played_at: string;
}

interface GlobalPlayer {
  rank: number;
  player: {
    nickname: string;
    country_code?: string;
  };
  statistics: {
    levels_completed: number;
    total_best_score: number;
    avg_best_time_formatted: string;
    perfect_runs_count: number;
  };
}

class CommunityApp {
  private currentFilters: GameFilters = { sort_by: 'latest', limit: 12 };
  private games: Game[] = [];
  private stats: CommunityStats | null = null;
  private isLoading = false;
  private searchTimeout: NodeJS.Timeout | null = null;
  private leaderboardClient: LeaderboardClient;
  private currentView: 'community' | 'leaderboard' = 'community';
  private leaderboardData: LeaderboardEntry[] = [];
  private globalLeaderboard: GlobalPlayer[] = [];
  private selectedLevelId: number | null = null;

  constructor() {
    this.leaderboardClient = new LeaderboardClient();
    this.init();
  }

  private async init() {
    this.render();
    await this.loadInitialData();
    this.attachEventListeners();
  }

  private async loadInitialData() {
    this.isLoading = true;
    this.updateLoadingState();

    try {
      // Check backend connection first
      const isConnected = await backendAPIClient.isConnected();
      if (!isConnected) {
        throw new Error('Backend API is not available');
      }

      // Load community stats and initial games in parallel
      const [statsResult, gamesResult] = await Promise.all([
        backendAPIClient.getCommunityStats(),
        backendAPIClient.getAllGames()
      ]);

      this.stats = statsResult;
      this.games = gamesResult;

      this.updateStats();
      this.updateGamesGrid();
      
      // Load level list for leaderboard
      await this.loadLevelsList();
      
      // Load initial global leaderboard
      await this.loadGlobalLeaderboard();
    } catch (error) {
      console.error('Failed to load community data:', error);
      this.showError('Failed to load community data. Please try again.');
    } finally {
      this.isLoading = false;
      this.updateLoadingState();
    }
  }

  private render() {
    const app = document.getElementById('community-app')!;
    app.innerHTML = `
      <!-- Navigation Bar -->
      <nav class="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center gap-4">
              <a href="/" class="text-xl font-bold cyberpunk-text">🎮 AI Game Creator</a>
              <span class="text-gray-400">•</span>
              <div class="flex items-center gap-4">
                <button id="nav-community" class="nav-tab active px-3 py-1 rounded-lg transition-all text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  🎮 Community
                </button>
                <button id="nav-leaderboard" class="nav-tab px-3 py-1 rounded-lg transition-all text-lg font-semibold text-gray-400 hover:text-white">
                  🏆 Leaderboards
                </button>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <a href="https://frontend-ui-alpha-one.vercel.app/" target="_blank" class="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform">
                🎨 Create Map
              </a>
              <button class="p-2 glass-card hover:bg-white/10 transition-colors rounded-lg">
                👤
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="pt-16 min-h-screen">
        <!-- Hero Section -->
        <section class="py-16 relative">
          <!-- Animated Background -->
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-br from-pink-500/15 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent opacity-30"
                 style="background-image: radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(52, 178, 152, 0.1) 1px, transparent 1px);
                        background-size: 50px 50px;"></div>
          </div>

          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-12" id="main-header">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">
                <span class="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-holographic" id="main-title">
                  🌟 Community Playground
                </span>
              </h1>
              <p class="text-xl text-gray-400 mb-8 max-w-3xl mx-auto" id="main-description">
                Discover, share, and remix amazing AI-generated game maps from our global community of creators
              </p>

              <!-- Community Stats -->
              <div id="community-stats" class="flex justify-center gap-6 text-sm flex-wrap">
                <div class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30">
                  <span class="text-pink-400">🎨</span>
                  <span class="text-pink-300" id="stat-games">Loading...</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30">
                  <span class="text-purple-400">👥</span>
                  <span class="text-purple-300" id="stat-creators">Loading...</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
                  <span class="text-cyan-400">❤️</span>
                  <span class="text-cyan-300" id="stat-likes">Loading...</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/30">
                  <span class="text-blue-400">🎮</span>
                  <span class="text-blue-300" id="stat-plays">Loading...</span>
                </div>
              </div>
            </div>

            <!-- Search and Filters - Community View -->
            <div class="mb-12" id="community-filters">
              <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                <!-- Search Bar -->
                <div class="relative flex-1 max-w-md">
                  <input
                    type="text"
                    id="search-input"
                    placeholder="Search maps, creators, tags..."
                    class="w-full px-4 py-3 pl-12 search-input rounded-xl text-white placeholder-gray-400 focus:outline-none"
                  />
                  <div class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                  <div id="search-suggestions" class="absolute top-full left-0 right-0 mt-2 hidden"></div>
                </div>

                <!-- Filter Tabs -->
                <div class="flex gap-2 flex-wrap">
                  <button class="filter-tab active px-4 py-2 rounded-lg transition-all" data-filter="latest">
                    🆕 Latest
                  </button>
                  <button class="filter-tab px-4 py-2 rounded-lg transition-all" data-filter="trending">
                    🔥 Trending
                  </button>
                  <button class="filter-tab px-4 py-2 rounded-lg transition-all" data-filter="most_liked">
                    ❤️ Most Liked
                  </button>
                  <button class="filter-tab px-4 py-2 rounded-lg transition-all" data-filter="most_played">
                    🎮 Most Played
                  </button>
                  <button class="filter-tab px-4 py-2 rounded-lg transition-all" data-filter="featured">
                    ⭐ Featured
                  </button>
                </div>
              </div>
            </div>

            <!-- Leaderboard Controls - Hidden initially -->
            <div class="mb-12 hidden" id="leaderboard-controls">
              <div class="flex flex-col gap-6">
                <!-- Level Selector -->
                <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div class="flex-1 max-w-md">
                    <label class="block text-sm font-medium text-gray-300 mb-2">Select Level</label>
                    <select id="level-selector" class="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500">
                      <option value="">Choose a level...</option>
                    </select>
                  </div>
                  
                  <div class="flex gap-2 flex-wrap">
                    <button id="global-leaderboard-btn" class="leaderboard-tab active px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition-transform">
                      🌍 Global Rankings
                    </button>
                    <button id="level-leaderboard-btn" class="leaderboard-tab px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors" disabled>
                      📊 Level Rankings
                    </button>
                  </div>
                </div>

                <!-- Leaderboard Sort Options -->
                <div class="flex gap-2 flex-wrap justify-center" id="leaderboard-sort">
                  <button class="sort-tab active px-3 py-1 bg-cyan-600/50 border border-cyan-500 rounded-lg text-sm transition-all" data-sort="time">
                    ⏱️ Best Time
                  </button>
                  <button class="sort-tab px-3 py-1 bg-gray-600/50 border border-gray-500 rounded-lg text-sm transition-all" data-sort="score">
                    🏆 High Score
                  </button>
                  <button class="sort-tab px-3 py-1 bg-gray-600/50 border border-gray-500 rounded-lg text-sm transition-all" data-sort="perfect">
                    ⭐ Perfect Runs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Community Games Grid Section -->
        <section class="pb-20" id="community-section">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Loading State -->
            <div id="loading-state" class="hidden text-center py-12">
              <div class="inline-flex items-center gap-3">
                <div class="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <span class="text-gray-400">Loading amazing maps...</span>
              </div>
            </div>

            <!-- Error State -->
            <div id="error-state" class="hidden text-center py-12">
              <div class="text-red-400 mb-4">⚠️ Something went wrong</div>
              <button id="retry-btn" class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                Try Again
              </button>
            </div>

            <!-- Games Grid -->
            <div id="games-grid" class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <!-- Game cards will be inserted here -->
            </div>

            <!-- Load More Button -->
            <div class="text-center mt-12">
              <button id="load-more-btn" class="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition-transform">
                Load More Maps
              </button>
            </div>
          </div>
        </section>

        <!-- Leaderboard Section - Hidden initially -->
        <section class="pb-20 hidden" id="leaderboard-section">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Loading State -->
            <div id="leaderboard-loading" class="hidden text-center py-12">
              <div class="inline-flex items-center gap-3">
                <div class="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <span class="text-gray-400">Loading leaderboard data...</span>
              </div>
            </div>

            <!-- Error State -->
            <div id="leaderboard-error" class="hidden text-center py-12">
              <div class="text-red-400 mb-4">⚠️ Failed to load leaderboard</div>
              <button id="leaderboard-retry" class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                Try Again
              </button>
            </div>

            <!-- Global Leaderboard -->
            <div id="global-leaderboard-content">
              <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  🌍 Global Player Rankings
                </h2>
                <p class="text-gray-400">Top players across all levels</p>
              </div>
              
              <div id="global-leaderboard-grid" class="space-y-4">
                <!-- Global leaderboard entries will be inserted here -->
              </div>
            </div>

            <!-- Level Leaderboard -->
            <div id="level-leaderboard-content" class="hidden">
              <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent" id="level-title">
                  📊 Level Rankings
                </h2>
                <p class="text-gray-400" id="level-description">Compete for the best times and scores</p>
              </div>

              <!-- Level Stats -->
              <div id="level-stats" class="grid md:grid-cols-4 gap-4 mb-8">
                <!-- Level statistics will be inserted here -->
              </div>
              
              <div id="level-leaderboard-grid" class="space-y-4">
                <!-- Level leaderboard entries will be inserted here -->
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="py-12 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <p class="text-gray-400">
              Built with ❤️ by the AI Game Creator community •
              <a href="/" class="text-cyan-400 hover:text-cyan-300 transition-colors">Back to Main Site</a>
            </p>
          </div>
        </div>
      </footer>

      <!-- Share Modal -->
      <div id="share-modal" class="fixed inset-0 z-50 hidden modal-overlay" style="background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px);">
        <div class="flex items-center justify-center min-h-screen p-4">
          <div class="modal-content bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 max-w-md w-full border border-gray-700">
            <div class="text-center mb-6">
              <h3 class="text-xl font-bold mb-2">Share This Amazing Map! 🚀</h3>
              <p class="text-gray-400 text-sm" id="share-game-title">Game Title</p>
            </div>

            <div class="space-y-3">
              <button class="share-option w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-3" data-platform="twitter">
                🐦 Share on Twitter
              </button>
              <button class="share-option w-full p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-3" data-platform="discord">
                💬 Share on Discord
              </button>
              <button class="share-option w-full p-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors flex items-center gap-3" data-platform="reddit">
                🤖 Share on Reddit
              </button>
              <button class="share-option w-full p-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-3" data-platform="copy">
                📋 Copy Link
              </button>
            </div>

            <button id="close-share-modal" class="w-full mt-4 p-2 text-gray-400 hover:text-white transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private updateStats() {
    if (!this.stats) return;

    const formatNumber = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
      return num.toString();
    };

    document.getElementById('stat-games')!.textContent = `${formatNumber(this.stats.total_games)} Maps Created`;
    document.getElementById('stat-creators')!.textContent = `${formatNumber(this.stats.total_creators)} Active Creators`;
    document.getElementById('stat-likes')!.textContent = `${formatNumber(this.stats.total_likes)} Total Likes`;
    document.getElementById('stat-plays')!.textContent = `${formatNumber(this.stats.total_plays)} Games Played`;
  }

  private updateGamesGrid() {
    const grid = document.getElementById('games-grid')!;
    grid.innerHTML = this.games.map(game => this.createGameCard(game)).join('');
    this.attachGameCardListeners();
  }

  private createGameCard(game: Game): string {
    const formatNumber = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
      return num.toString();
    };

    const getBadge = (game: Game) => {
      if (game.is_trending) return '<div class="absolute top-2 right-2 trending-badge text-white text-xs px-2 py-1 rounded-full font-bold">🔥 HOT</div>';
      if (game.is_featured) return '<div class="absolute top-2 right-2 featured-badge text-white text-xs px-2 py-1 rounded-full font-bold">⭐ FEATURED</div>';
      const hoursAgo = Math.floor((Date.now() - new Date(game.created_at).getTime()) / (1000 * 60 * 60));
      if (hoursAgo < 24) return '<div class="absolute top-2 right-2 new-badge text-white text-xs px-2 py-1 rounded-full font-bold">✨ NEW</div>';
      return '';
    };

    const getDifficultyColor = (difficulty: string) => {
      const colors = {
        easy: 'text-green-400',
        medium: 'text-yellow-400',
        hard: 'text-orange-400',
        extreme: 'text-red-400'
      };
      return colors[difficulty as keyof typeof colors] || 'text-gray-400';
    };

    return `
      <div class="community-card rounded-xl p-4 hover-lift group" data-game-id="${game.id}">
        <!-- Game Thumbnail -->
        <div class="relative overflow-hidden rounded-lg mb-4 map-thumbnail">
          ${game.thumbnail_url ? `
            <div class="aspect-square bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center border border-purple-500/30 relative">
              <img src="${game.thumbnail_url}"
                   alt="${game.title}"
                   class="w-full h-full object-cover"
                   loading="lazy"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="absolute inset-0 flex-col items-center justify-center hidden">
                <span class="text-4xl mb-2 block">${this.getGameEmoji(game.tags[0])}</span>
                <span class="text-sm text-purple-300">${game.title}</span>
              </div>
            </div>
          ` : `
            <div class="aspect-square bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center border border-purple-500/30">
              <div class="text-center">
                <span class="text-4xl mb-2 block">${this.getGameEmoji(game.tags[0])}</span>
                <span class="text-sm text-purple-300">${game.title}</span>
              </div>
            </div>
          `}
          ${getBadge(game)}

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button class="play-btn px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-bold hover:scale-105 transition-transform"
                    data-level-id="${game.id}">
              ▶️ PLAY NOW
            </button>
          </div>
        </div>

        <!-- Game Info -->
        <div class="space-y-3">
          <!-- Title and Difficulty -->
          <div class="flex items-start justify-between">
            <h3 class="font-bold text-lg leading-tight flex-1">${game.title}</h3>
            <span class="text-xs ${getDifficultyColor(game.difficulty_level)} ml-2 whitespace-nowrap">
              ${game.difficulty_level.toUpperCase()}
            </span>
          </div>

          <!-- Creator Info -->
          <div class="flex items-center gap-2">
            <div class="creator-avatar w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <span class="text-xs">${this.getCreatorEmoji(game.creator_name)}</span>
            </div>
            <div>
              <p class="font-semibold text-sm text-purple-300">@${game.creator_name.replace(' ', '').toLowerCase()}</p>
              <p class="text-xs text-gray-400">${this.formatTimeAgo(game.created_at)}</p>
            </div>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-300 line-clamp-2">
            ${game.description || 'An amazing AI-generated game world waiting to be explored!'}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1">
            ${game.tags.slice(0, 3).map(tag =>
              `<span class="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">#${tag}</span>`
            ).join('')}
            ${game.tags.length > 3 ? `<span class="text-xs text-gray-400">+${game.tags.length - 3} more</span>` : ''}
          </div>

          <!-- Social Actions -->
          <div class="flex items-center justify-between pt-3 border-t border-white/10">
            <div class="flex gap-4">
              <button class="social-btn like-btn flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors group"
                      data-game-id="${game.id}">
                <span class="text-lg group-hover:scale-125 transition-transform">❤️</span>
                <span class="text-sm font-semibold like-count">${formatNumber(game.likes_count)}</span>
              </button>
              <button class="social-btn repost-btn flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors group"
                      data-game-id="${game.id}">
                <span class="text-lg group-hover:scale-125 transition-transform">🔄</span>
                <span class="text-sm font-semibold repost-count">${formatNumber(game.reposts_count)}</span>
              </button>
              <button class="social-btn share-btn flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors group"
                      data-game-id="${game.id}" data-game-title="${game.title}">
                <span class="text-lg group-hover:scale-125 transition-transform">📤</span>
                <span class="text-sm font-semibold share-count">${formatNumber(game.shares_count)}</span>
              </button>
            </div>

            <!-- Play Count -->
            <div class="flex items-center gap-1 text-gray-400 text-sm">
              <span>🎮</span>
              <span>${formatNumber(game.plays_count)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private getGameEmoji(tag: string): string {
    const emojis: Record<string, string> = {
      fantasy: '🏰',
      cyberpunk: '🌆',
      forest: '🌲',
      desert: '🏜️',
      space: '🚀',
      underwater: '🌊',
      castle: '🏰',
      city: '🏙️',
      temple: '⚱️',
      racing: '🏎️',
      adventure: '🗺️',
      rpg: '⚔️',
      puzzle: '🧩',
      platform: '🎮'
    };
    return emojis[tag] || '🎮';
  }

  private getCreatorEmoji(name: string): string {
    const emojis = ['👑', '🤖', '🧚', '⚱️', '👨‍🚀', '🧜‍♀️', '🧙', '🦸', '🎨', '💎'];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return emojis[index % emojis.length];
  }

  private formatTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));

    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  }

  private updateLoadingState() {
    const loadingState = document.getElementById('loading-state')!;
    const gamesGrid = document.getElementById('games-grid')!;

    if (this.isLoading) {
      loadingState.classList.remove('hidden');
      gamesGrid.classList.add('opacity-50');
    } else {
      loadingState.classList.add('hidden');
      gamesGrid.classList.remove('opacity-50');
    }
  }

  private showError(message: string) {
    const errorState = document.getElementById('error-state')!;
    errorState.classList.remove('hidden');
    errorState.querySelector('div')!.textContent = `⚠️ ${message}`;
  }

  private async loadLevelsList() {
    try {
      const levels = await this.leaderboardClient.getAllLevels();
      const selector = document.getElementById('level-selector') as HTMLSelectElement;
      
      // Clear existing options except the first one
      selector.innerHTML = '<option value="">Choose a level...</option>';
      
      levels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.id.toString();
        option.textContent = `${level.name} (${level.difficulty})`;
        selector.appendChild(option);
      });
    } catch (error) {
      console.error('Failed to load levels list:', error);
    }
  }

  private async loadGlobalLeaderboard() {
    try {
      const result = await this.leaderboardClient.getGlobalLeaderboard({ limit: 50 });
      this.globalLeaderboard = result.global_leaderboard;
      this.updateGlobalLeaderboard();
    } catch (error) {
      console.error('Failed to load global leaderboard:', error);
    }
  }

  private async loadLevelLeaderboard(levelId: number, sortBy: 'time' | 'score' = 'time', perfectOnly: boolean = false) {
    this.selectedLevelId = levelId;
    
    try {
      const [leaderboardResult, statsResult] = await Promise.all([
        this.leaderboardClient.getLevelLeaderboard(levelId, { 
          sort_by: sortBy, 
          limit: 50,
          perfect_runs_only: perfectOnly
        }),
        this.leaderboardClient.getLevelStats(levelId)
      ]);
      
      this.leaderboardData = leaderboardResult.leaderboard;
      this.updateLevelLeaderboard(statsResult);
    } catch (error) {
      console.error('Failed to load level leaderboard:', error);
      this.showLeaderboardError('Failed to load level rankings');
    }
  }

  private switchView(view: 'community' | 'leaderboard') {
    this.currentView = view;
    
    // Update navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.remove('active');
      tab.classList.remove('bg-gradient-to-r', 'from-pink-400', 'to-purple-400', 'bg-clip-text', 'text-transparent');
      tab.classList.add('text-gray-400', 'hover:text-white');
    });
    
    const activeTab = document.getElementById(view === 'community' ? 'nav-community' : 'nav-leaderboard');
    if (activeTab) {
      activeTab.classList.add('active');
      activeTab.classList.remove('text-gray-400', 'hover:text-white');
      activeTab.classList.add('bg-gradient-to-r', 'from-pink-400', 'to-purple-400', 'bg-clip-text', 'text-transparent');
    }

    // Update content
    if (view === 'community') {
      document.getElementById('community-section')?.classList.remove('hidden');
      document.getElementById('leaderboard-section')?.classList.add('hidden');
      document.getElementById('community-filters')?.classList.remove('hidden');
      document.getElementById('leaderboard-controls')?.classList.add('hidden');
      
      // Update header
      document.getElementById('main-title')!.textContent = '🌟 Community Playground';
      document.getElementById('main-description')!.textContent = 'Discover, share, and remix amazing AI-generated game maps from our global community of creators';
    } else {
      document.getElementById('community-section')?.classList.add('hidden');
      document.getElementById('leaderboard-section')?.classList.remove('hidden');
      document.getElementById('community-filters')?.classList.add('hidden');
      document.getElementById('leaderboard-controls')?.classList.remove('hidden');
      
      // Update header
      document.getElementById('main-title')!.textContent = '🏆 Player Leaderboards';
      document.getElementById('main-description')!.textContent = 'Compete with players worldwide and climb the rankings in your favorite levels';
    }
  }

  private updateGlobalLeaderboard() {
    const grid = document.getElementById('global-leaderboard-grid')!;
    grid.innerHTML = this.globalLeaderboard.map(player => this.createGlobalPlayerCard(player)).join('');
  }

  private updateLevelLeaderboard(levelStats: any) {
    // Update level title and description
    document.getElementById('level-title')!.textContent = `📊 ${levelStats.level.name} Rankings`;
    document.getElementById('level-description')!.textContent = `${levelStats.level.difficulty.toUpperCase()} difficulty • ${levelStats.statistics.total_attempts} total attempts`;
    
    // Update level stats
    const statsContainer = document.getElementById('level-stats')!;
    statsContainer.innerHTML = `
      <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
        <div class="text-2xl font-bold text-cyan-400">${levelStats.statistics.unique_players}</div>
        <div class="text-sm text-gray-400">Players</div>
      </div>
      <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
        <div class="text-2xl font-bold text-green-400">${levelStats.statistics.best_time.formatted}</div>
        <div class="text-sm text-gray-400">Best Time</div>
      </div>
      <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
        <div class="text-2xl font-bold text-yellow-400">${levelStats.statistics.best_score}</div>
        <div class="text-sm text-gray-400">High Score</div>
      </div>
      <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
        <div class="text-2xl font-bold text-purple-400">${levelStats.statistics.perfect_runs.percentage}%</div>
        <div class="text-sm text-gray-400">Perfect Runs</div>
      </div>
    `;
    
    // Update leaderboard grid
    const grid = document.getElementById('level-leaderboard-grid')!;
    grid.innerHTML = this.leaderboardData.map(entry => this.createLeaderboardCard(entry)).join('');
  }

  private createGlobalPlayerCard(player: GlobalPlayer): string {
    const getRankIcon = (rank: number) => {
      if (rank === 1) return '🥇';
      if (rank === 2) return '🥈';
      if (rank === 3) return '🥉';
      return `#${rank}`;
    };

    const getRankColor = (rank: number) => {
      if (rank === 1) return 'border-yellow-500 bg-yellow-500/10';
      if (rank === 2) return 'border-gray-400 bg-gray-400/10';
      if (rank === 3) return 'border-orange-500 bg-orange-500/10';
      return 'border-gray-600 bg-gray-800/50';
    };

    return `
      <div class="flex items-center justify-between p-4 rounded-xl border transition-all hover:scale-[1.02] ${getRankColor(player.rank)}">
        <div class="flex items-center gap-4">
          <div class="text-2xl font-bold min-w-[60px] text-center">
            ${getRankIcon(player.rank)}
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center font-bold text-lg">
              ${player.player.nickname.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <div class="font-bold text-lg">${player.player.nickname}</div>
              <div class="text-sm text-gray-400 flex items-center gap-2">
                ${player.player.country_code ? `<span class="text-xs px-2 py-0.5 bg-gray-700 rounded">${player.player.country_code}</span>` : ''}
                <span>${player.statistics.levels_completed} levels completed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-3 gap-4 text-center">
          <div>
            <div class="text-lg font-bold text-yellow-400">${this.formatNumber(player.statistics.total_best_score)}</div>
            <div class="text-xs text-gray-400">Total Score</div>
          </div>
          <div>
            <div class="text-lg font-bold text-cyan-400">${player.statistics.avg_best_time_formatted}</div>
            <div class="text-xs text-gray-400">Avg Time</div>
          </div>
          <div>
            <div class="text-lg font-bold text-purple-400">${player.statistics.perfect_runs_count}</div>
            <div class="text-xs text-gray-400">Perfect Runs</div>
          </div>
        </div>
      </div>
    `;
  }

  private createLeaderboardCard(entry: LeaderboardEntry): string {
    const getRankIcon = (rank: number) => {
      if (rank === 1) return '🥇';
      if (rank === 2) return '🥈';
      if (rank === 3) return '🥉';
      return `#${rank}`;
    };

    const getRankColor = (rank: number) => {
      if (rank === 1) return 'border-yellow-500 bg-yellow-500/10';
      if (rank === 2) return 'border-gray-400 bg-gray-400/10';
      if (rank === 3) return 'border-orange-500 bg-orange-500/10';
      return 'border-gray-600 bg-gray-800/50';
    };

    return `
      <div class="flex items-center justify-between p-4 rounded-xl border transition-all hover:scale-[1.02] ${getRankColor(entry.rank)}">
        <div class="flex items-center gap-4">
          <div class="text-2xl font-bold min-w-[60px] text-center">
            ${getRankIcon(entry.rank)}
          </div>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
              ${entry.player.nickname.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <div class="font-bold text-lg flex items-center gap-2">
                ${entry.player.nickname}
                ${entry.performance.is_perfect_run ? '<span class="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-0.5 rounded-full font-bold">PERFECT</span>' : ''}
              </div>
              <div class="text-sm text-gray-400 flex items-center gap-2">
                ${entry.player.country_code ? `<span class="text-xs px-2 py-0.5 bg-gray-700 rounded">${entry.player.country_code}</span>` : ''}
                <span>${this.formatTimeAgo(entry.played_at)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-3 gap-4 text-center">
          <div>
            <div class="text-lg font-bold text-green-400">${entry.performance.completion_time_formatted}</div>
            <div class="text-xs text-gray-400">Time</div>
          </div>
          <div>
            <div class="text-lg font-bold text-yellow-400">${entry.performance.score}</div>
            <div class="text-xs text-gray-400">Score</div>
          </div>
          <div>
            <div class="text-lg font-bold text-red-400">${entry.performance.deaths_count}</div>
            <div class="text-xs text-gray-400">Deaths</div>
          </div>
        </div>
      </div>
    `;
  }

  private showLeaderboardError(message: string) {
    const errorState = document.getElementById('leaderboard-error')!;
    errorState.classList.remove('hidden');
    errorState.querySelector('div')!.textContent = `⚠️ ${message}`;
  }

  private updateLeaderboardLoading(loading: boolean) {
    const loadingState = document.getElementById('leaderboard-loading')!;
    const content = document.getElementById('leaderboard-section')!;

    if (loading) {
      loadingState.classList.remove('hidden');
      content.classList.add('opacity-50');
    } else {
      loadingState.classList.add('hidden');
      content.classList.remove('opacity-50');
    }
  }

  private async switchLeaderboardView(view: 'global' | 'level', levelId?: number) {
    // Update tab states
    document.querySelectorAll('.leaderboard-tab').forEach(tab => {
      tab.classList.remove('active', 'bg-gradient-to-r', 'from-purple-600', 'to-pink-600');
      tab.classList.add('bg-gray-700', 'hover:bg-gray-600');
    });

    if (view === 'global') {
      const globalBtn = document.getElementById('global-leaderboard-btn');
      globalBtn?.classList.add('active', 'bg-gradient-to-r', 'from-purple-600', 'to-pink-600');
      globalBtn?.classList.remove('bg-gray-700', 'hover:bg-gray-600');
      
      // Show global leaderboard
      document.getElementById('global-leaderboard-content')?.classList.remove('hidden');
      document.getElementById('level-leaderboard-content')?.classList.add('hidden');
    } else if (view === 'level' && levelId) {
      const levelBtn = document.getElementById('level-leaderboard-btn');
      levelBtn?.classList.add('active', 'bg-gradient-to-r', 'from-purple-600', 'to-pink-600');
      levelBtn?.classList.remove('bg-gray-700', 'hover:bg-gray-600');
      
      // Show level leaderboard
      document.getElementById('global-leaderboard-content')?.classList.add('hidden');
      document.getElementById('level-leaderboard-content')?.classList.remove('hidden');
      
      // Load level leaderboard data
      this.updateLeaderboardLoading(true);
      await this.loadLevelLeaderboard(levelId);
      this.updateLeaderboardLoading(false);
    }
  }

  private attachEventListeners() {
    // Navigation tabs
    document.getElementById('nav-community')!.addEventListener('click', () => {
      this.switchView('community');
    });

    document.getElementById('nav-leaderboard')!.addEventListener('click', () => {
      this.switchView('leaderboard');
    });

    // Level selector
    document.getElementById('level-selector')!.addEventListener('change', async (e) => {
      const target = e.target as HTMLSelectElement;
      const levelId = parseInt(target.value);
      
      if (levelId) {
        // Enable level leaderboard button
        const levelBtn = document.getElementById('level-leaderboard-btn') as HTMLButtonElement;
        levelBtn.disabled = false;
        levelBtn.classList.remove('bg-gray-700');
        levelBtn.classList.add('bg-gray-600', 'hover:bg-gray-500');
        
        // Switch to level leaderboard if not already on global
        const globalBtn = document.getElementById('global-leaderboard-btn');
        if (!globalBtn?.classList.contains('active')) {
          await this.switchLeaderboardView('level', levelId);
        }
      } else {
        // Disable level leaderboard button
        const levelBtn = document.getElementById('level-leaderboard-btn') as HTMLButtonElement;
        levelBtn.disabled = true;
        levelBtn.classList.add('bg-gray-700');
        levelBtn.classList.remove('bg-gray-600', 'hover:bg-gray-500');
      }
    });

    // Leaderboard view tabs
    document.getElementById('global-leaderboard-btn')!.addEventListener('click', () => {
      this.switchLeaderboardView('global');
    });

    document.getElementById('level-leaderboard-btn')!.addEventListener('click', () => {
      const levelId = parseInt((document.getElementById('level-selector') as HTMLSelectElement).value);
      if (levelId) {
        this.switchLeaderboardView('level', levelId);
      }
    });

    // Sort tabs
    document.querySelectorAll('.sort-tab').forEach(tab => {
      tab.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement;
        const sortType = target.dataset.sort as string;
        
        // Update active state
        document.querySelectorAll('.sort-tab').forEach(t => {
          t.classList.remove('active', 'bg-cyan-600/50', 'border-cyan-500');
          t.classList.add('bg-gray-600/50', 'border-gray-500');
        });
        target.classList.add('active', 'bg-cyan-600/50', 'border-cyan-500');
        target.classList.remove('bg-gray-600/50', 'border-gray-500');
        
        // Reload level leaderboard with new sort
        const levelId = this.selectedLevelId;
        if (levelId && document.getElementById('level-leaderboard-content')?.classList.contains('hidden') === false) {
          await this.loadLevelLeaderboard(
            levelId, 
            sortType === 'score' ? 'score' : 'time',
            sortType === 'perfect'
          );
        }
      });
    });

    // Leaderboard retry button
    document.getElementById('leaderboard-retry')!.addEventListener('click', async () => {
      document.getElementById('leaderboard-error')!.classList.add('hidden');
      
      if (document.getElementById('global-leaderboard-content')?.classList.contains('hidden') === false) {
        await this.loadGlobalLeaderboard();
      } else if (this.selectedLevelId) {
        await this.loadLevelLeaderboard(this.selectedLevelId);
      }
    });

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement;
        const filter = target.dataset.filter as string;

        // Update active state
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        target.classList.add('active');

        // Update filters and reload
        if (filter === 'featured') {
          this.currentFilters = { ...this.currentFilters, sort_by: 'latest', featured_only: true };
        } else if (filter === 'trending') {
          this.currentFilters = { ...this.currentFilters, sort_by: 'trending', trending_only: true };
        } else {
          this.currentFilters = {
            ...this.currentFilters,
            sort_by: filter as any,
            featured_only: undefined,
            trending_only: undefined
          };
        }

        await this.loadGames();
      });
    });

    // Search input
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    searchInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;

      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      this.searchTimeout = setTimeout(async () => {
        this.currentFilters.search = target.value.trim() || undefined;
        await this.loadGames();
      }, 300);
    });

    // Load more button
    document.getElementById('load-more-btn')!.addEventListener('click', async () => {
      const currentCount = this.games.length;
      this.currentFilters.offset = currentCount;

      const result = await communityAPI.getGames(this.currentFilters);
      this.games.push(...result.games);
      this.updateGamesGrid();
    });

    // Retry button
    document.getElementById('retry-btn')!.addEventListener('click', async () => {
      document.getElementById('error-state')!.classList.add('hidden');
      await this.loadInitialData();
    });

    // Share modal
    document.getElementById('close-share-modal')!.addEventListener('click', () => {
      this.closeShareModal();
    });

    document.getElementById('share-modal')!.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        this.closeShareModal();
      }
    });

    document.querySelectorAll('.share-option').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const platform = (e.currentTarget as HTMLElement).dataset.platform!;
        await this.handleShare(platform);
      });
    });
  }

  private attachGameCardListeners() {
    // Like buttons
    document.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const gameId = (e.currentTarget as HTMLElement).dataset.gameId!;
        await this.handleLike(gameId, e.currentTarget as HTMLElement);
      });
    });

    // Repost buttons
    document.querySelectorAll('.repost-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const gameId = (e.currentTarget as HTMLElement).dataset.gameId!;
        await this.handleRepost(gameId, e.currentTarget as HTMLElement);
      });
    });

    // Share buttons
    document.querySelectorAll('.share-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const gameId = (e.currentTarget as HTMLElement).dataset.gameId!;
        const gameTitle = (e.currentTarget as HTMLElement).dataset.gameTitle!;
        this.openShareModal(gameId, gameTitle);
      });
    });

    // Play buttons
    document.querySelectorAll('.play-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();

        const levelId = (e.currentTarget as HTMLElement).dataset.levelId;
        const gameId = (e.currentTarget as HTMLElement).closest('[data-game-id]') as HTMLElement;

        if (!levelId) {
          console.error('No level ID found!');
          return;
        }

        try {
          // Track play (optional, don't block on errors)
          if (gameId && gameId.dataset.gameId) {
            communityAPI.trackPlay(gameId.dataset.gameId).catch(err =>
              console.warn('Failed to track play:', err)
            );
          }

          // Open Mario frontend with level ID parameter and English language
          // Mario engine will auto-fetch game privacy status from backend API
          const gameBaseUrl = import.meta.env.VITE_GAME_BASE_URL || 'https://frontend-mario.vercel.app';
          const marioFrontendUrl = `${gameBaseUrl}/play?id=${encodeURIComponent(levelId)}&lang=en`;
          window.open(marioFrontendUrl, '_blank');
        } catch (error) {
          console.error('Error in play button handler:', error);
        }
      });
    });
  }

  private async loadGames() {
    this.isLoading = true;
    this.updateLoadingState();

    try {
      const result = await communityAPI.getGames(this.currentFilters);
      this.games = result.games;
      this.updateGamesGrid();
    } catch (error) {
      console.error('Failed to load games:', error);
      this.showError('Failed to load games. Please try again.');
    } finally {
      this.isLoading = false;
      this.updateLoadingState();
    }
  }

  private async handleLike(gameId: string, buttonElement: HTMLElement) {
    try {
      const isLiked = buttonElement.classList.contains('liked');

      if (isLiked) {
        const result = await communityAPI.unlikeGame(gameId);
        buttonElement.classList.remove('liked');
        buttonElement.querySelector('.like-count')!.textContent = this.formatNumber(result.likes_count);
      } else {
        const result = await communityAPI.likeGame(gameId);
        buttonElement.classList.add('liked');
        buttonElement.querySelector('.like-count')!.textContent = this.formatNumber(result.likes_count);
      }
    } catch (error) {
      console.error('Failed to toggle like:', error);
    }
  }

  private async handleRepost(gameId: string, buttonElement: HTMLElement) {
    try {
      const result = await communityAPI.repostGame(gameId);
      buttonElement.classList.add('reposted');
      buttonElement.querySelector('.repost-count')!.textContent = this.formatNumber(result.reposts_count);

      // Show success message
      const notification = document.createElement('div');
      notification.className = 'fixed top-20 right-4 z-50 bg-purple-600 text-white px-4 py-2 rounded-lg animate-bounce';
      notification.textContent = '🔄 Map forked! Create your remix';
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.remove();
      }, 3000);
    } catch (error) {
      console.error('Failed to repost:', error);
    }
  }

  private openShareModal(gameId: string, gameTitle: string) {
    const modal = document.getElementById('share-modal')!;
    document.getElementById('share-game-title')!.textContent = gameTitle;
    modal.classList.remove('hidden');
    modal.classList.add('show');
    modal.dataset.gameId = gameId;
  }

  private closeShareModal() {
    const modal = document.getElementById('share-modal')!;
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }

  private async handleShare(platform: string) {
    const modal = document.getElementById('share-modal')!;
    const gameId = modal.dataset.gameId!;
    const gameTitle = document.getElementById('share-game-title')!.textContent!;

    try {
      await communityAPI.shareGame(gameId, platform);

      const gameUrl = `https://community.ai-creator.com/play/${gameId}`;

      if (platform === 'copy') {
        await navigator.clipboard.writeText(gameUrl);
        this.showNotification('📋 Link copied to clipboard!');
      } else if (platform === 'twitter') {
        const text = `Check out this amazing AI-generated game: "${gameTitle}"`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(gameUrl)}`, '_blank');
      } else if (platform === 'discord') {
        await navigator.clipboard.writeText(`${gameTitle} - ${gameUrl}`);
        this.showNotification('📋 Discord message copied! Paste it in your server.');
      } else if (platform === 'reddit') {
        window.open(`https://reddit.com/submit?title=${encodeURIComponent(gameTitle)}&url=${encodeURIComponent(gameUrl)}`, '_blank');
      }

      this.closeShareModal();
    } catch (error) {
      console.error('Failed to share:', error);
      this.showNotification('❌ Failed to share. Please try again.');
    }
  }

  private showNotification(message: string) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 z-50 bg-cyan-600 text-white px-4 py-2 rounded-lg animate-bounce';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  private formatNumber(num: number): string {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  }
}

// Initialize the app
new CommunityApp();