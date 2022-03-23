const gameStateKey = 'gameState'
const highContrastKey = 'highContrast'

// type StoredGameState = {
//   guesses: string[]
//   solution: string
// }

export const saveGameStateToLocalStorage = (gameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const state = localStorage.getItem(gameStateKey)
    return state ? JSON.parse(state) : null
  }
}

const gameStatKey = 'gameStats'

// export type GameStats = {
//   winDistribution: number[]
//   gamesFailed: number
//   currentStreak: number
//   bestStreak: number
//   totalGames: number
//   successRate: number
// }

export const saveStatsToLocalStorage = (gameStats) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
  }
}

export const loadStatsFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const stats = localStorage.getItem(gameStatKey)
    return stats ? JSON.parse(stats) : null
  }
}

export const setStoredIsHighContrastMode = (isHighContrast) => {
  if (typeof window !== 'undefined') {
    if (isHighContrast) {
      localStorage.setItem(highContrastKey, '1')
    } else {
      localStorage.removeItem(highContrastKey)
    }
  }
}

export const getStoredIsHighContrastMode = () => {
  if (typeof window !== 'undefined') {
    const highContrast = localStorage.getItem(highContrastKey)
    return highContrast === '1'
  }
}
