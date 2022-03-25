import { createContext, useState, useEffect } from 'react'
import { getWordOfDay } from '../wordle/lib/words'
export const GameContext = createContext()

export default function GameContextProvider({ children }) {
  const [length, setLength] = useState(0)
  const [solution, setSolution] = useState('')
  const [guesses, setGuesses] = useState([])
  //First Load side effects
  useEffect(() => {
    setLength(Number(window.localStorage.getItem('length')) || 5)
    const { solution } = getWordOfDay()
    setSolution(solution)
  }, [])
  // End First Load side effects

  // Word length
  useEffect(() => {
    if (length) {
      window.localStorage.setItem('length', length)
      const { solution } = getWordOfDay()
      setSolution(solution)
    }
  }, [length])
  // End Word length

  return (
    <GameContext.Provider value={{ length, setLength, solution, guesses }}>
      {children}
    </GameContext.Provider>
  )
}
