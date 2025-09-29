/**
 * Leaderboard Client - For Community Page
 */

export interface LeaderboardEntry {
  rank: number
  record_id: number
  level: {
    id: number
    name: string
    difficulty: string
  }
  player: {
    id: number
    nickname: string
    country_code?: string
  }
  performance: {
    completion_time_ms: number
    completion_time_formatted: string
    score: number
    deaths_count: number
    coins_collected: number
    is_perfect_run: boolean
  }
  played_at: string
}

export interface GlobalPlayer {
  rank: number
  player: {
    id: number
    nickname: string
    country_code?: string
  }
  statistics: {
    levels_completed: number
    total_best_score: number
    avg_best_time: number
    avg_best_time_formatted: string
    total_attempts: number
    perfect_runs_count: number
  }
}

export interface LevelStats {
  level: {
    id: number
    name: string
    difficulty: string
  }
  statistics: {
    total_attempts: number
    unique_players: number
    completion_rate: number
    average_time: {
      ms: number
      formatted: string
    }
    best_time: {
      ms: number
      formatted: string
    }
    best_score: number
    average_score: number
    average_deaths: number
    perfect_runs: {
      count: number
      percentage: number
    }
    average_coins_collected: number
  }
}

export class LeaderboardClient {
  private baseUrl: string

  constructor() {
    this.baseUrl = 'https://25hackmit--hackmit25-backend.modal.run'
  }

  /**
   * Get leaderboard for specified level
   */
  async getLevelLeaderboard(
    levelId: number,
    options: {
      sort_by?: 'time' | 'score'
      limit?: number
      offset?: number
      country_filter?: string
      perfect_runs_only?: boolean
    } = {}
  ): Promise<{
    success: boolean
    level_id: number
    sort_by: string
    total_count: number
    current_page_count: number
    leaderboard: LeaderboardEntry[]
    pagination: {
      limit: number
      offset: number
      has_more: boolean
    }
  }> {
    try {
      const params = new URLSearchParams()
      if (options.sort_by) params.append('sort_by', options.sort_by)
      if (options.limit) params.append('limit', options.limit.toString())
      if (options.offset) params.append('offset', options.offset.toString())
      if (options.country_filter) params.append('country_filter', options.country_filter)
      if (options.perfect_runs_only) params.append('perfect_runs_only', 'true')

      const response = await fetch(
        `${this.baseUrl}/leaderboard/levels/${levelId}?${params.toString()}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Failed to get leaderboard:', error)
      throw error
    }
  }

  /**
   * Get global leaderboard
   */
  async getGlobalLeaderboard(options: {
    sort_by?: 'score' | 'time' | 'levels'
    limit?: number
    offset?: number
  } = {}): Promise<{
    success: boolean
    sort_by: string
    global_leaderboard: GlobalPlayer[]
    pagination: {
      limit: number
      offset: number
    }
  }> {
    try {
      const params = new URLSearchParams()
      if (options.sort_by) params.append('sort_by', options.sort_by)
      if (options.limit) params.append('limit', options.limit.toString())
      if (options.offset) params.append('offset', options.offset.toString())

      const response = await fetch(
        `${this.baseUrl}/leaderboard/global?${params.toString()}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Failed to get global leaderboard:', error)
      throw error
    }
  }

  /**
   * Get level statistics
   */
  async getLevelStats(levelId: number): Promise<LevelStats> {
    try {
      const response = await fetch(`${this.baseUrl}/leaderboard/stats/level/${levelId}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Failed to get level stats:', error)
      throw error
    }
  }

  /**
   * Get all levels list (from existing API)
   */
  async getAllLevels(): Promise<Array<{id: number, name: string, difficulty: string}>> {
    try {
      const response = await fetch(`https://25hackmit--hackmit25-backend.modal.run/api/db/levels`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      
      if (result.success && result.levels) {
        return result.levels.map((level: any) => ({
          id: level.id,
          name: level.name || `Level ${level.id}`,
          difficulty: level.difficulty || 'medium'
        }))
      }
      
      return []
    } catch (error) {
      console.error('Failed to get levels list:', error)
      return []
    }
  }

  /**
   * Check leaderboard service status
   */
  async healthCheck(): Promise<{
    status: string
    service: string
    database: string
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/leaderboard/health`)

      if (!response.ok) {
        throw new Error('Service unavailable')
      }

      return await response.json()
    } catch (error) {
      console.error('Health check failed:', error)
      throw error
    }
  }
}