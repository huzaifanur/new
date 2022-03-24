import { createContext, useState } from 'react'

export const GameContext = createContext()

import React from 'react'

export default function GameContextProvider({ children }) {
  const [length, setLength] = useState(4)
  return (
    <GameContext.Provider value={{ length, setLength }}>
      {children}
    </GameContext.Provider>
  )
}
