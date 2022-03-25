import { GameContext } from '../../../context/gameState'
import { useState, useEffect, useContext } from 'react'
import { Grid } from '../../../wordle/components/grid/Grid'
import { Keyboard } from '../../../wordle/components/keyboard/Keyboard'
import Auth from '../../../layouts/Admin'
import {
  MAX_WORD_LENGTH,
  MAX_CHALLENGES,
  REVEAL_TIME_MS,
} from '../../../wordle/constants/settings'
import {
  isWordInWordList,
  isWinningWord,
  getWordOfDay,
  findFirstUnusedReveal,
  unicodeLength,
} from '../../../wordle/lib/words'
import { addStatsForCompletedGame, loadStats } from '../../../wordle/lib/stats'
import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
  setStoredIsHighContrastMode,
  getStoredIsHighContrastMode,
} from '../../../wordle/lib/localStorage'
import { default as GraphemeSplitter } from 'grapheme-splitter'

import GameContextProvider from '../../../context/gameState'

//

function Home() {
  const { solution } = useContext(GameContext)
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [currentRowClass, setCurrentRowClass] = useState('')
  const [isGameLost, setIsGameLost] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const [guesses, setGuesses] = useState(() => {
    const loaded = loadGameStateFromLocalStorage()
    if (loaded?.solution !== solution) {
      return []
    }
    const gameWasWon = loaded.guesses.includes(solution)
    if (gameWasWon) {
      setIsGameWon(true)
    }
    if (loaded.guesses.length === MAX_CHALLENGES && !gameWasWon) {
      setIsGameLost(true)
    }
    return loaded.guesses
  })

  // HARD MODE

  const clearCurrentRowClass = () => {
    setCurrentRowClass('')
  }

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, solution })
  }, [guesses, solution])

  const onChar = (value) => {
    if (
      unicodeLength(`${currentGuess}${value}`) <= solution.length &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setCurrentGuess(`${currentGuess}${value}`)
    }
  }

  const onDelete = () => {
    setCurrentGuess(
      new GraphemeSplitter().splitGraphemes(currentGuess).slice(0, -1).join('')
    )
  }

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return
    }
    if (!(unicodeLength(currentGuess) === solution.length)) {
      setCurrentRowClass('jiggle')
      return
    }

    if (!isWordInWordList(currentGuess)) {
      setCurrentRowClass('jiggle')
      return
    }

    // enforce hard mode - all guesses must contain all previously revealed letters

    setIsRevealing(true)
    // turn this back off after all
    // chars have been revealed
    setTimeout(() => {
      setIsRevealing(false)
    }, REVEAL_TIME_MS * solution.length)

    const winningWord = currentGuess === solution

    if (
      unicodeLength(currentGuess) === solution.length &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')
      if (winningWord) {
        return setIsGameWon(true)
      }

      if (guesses.length === MAX_CHALLENGES - 1) {
        setIsGameLost(true)
      }
    }
  }

  return (
    <Auth>
      <div className="pt-2 px-1 pb-8 md:max-w-7xl w-full mx-auto sm:px-6 lg:px-8 flex flex-col grow">
        <div className="pb-6 grow">
          <Grid
            guesses={guesses}
            currentGuess={currentGuess}
            isRevealing={isRevealing}
            currentRowClassName={currentRowClass}
          />
        </div>
        <Keyboard
          onChar={onChar}
          onDelete={onDelete}
          onEnter={onEnter}
          guesses={guesses}
          isRevealing={isRevealing}
        />
      </div>
    </Auth>
  )
}

export default function ContextWrapper() {
  return (
    <GameContextProvider>
      <Home />
    </GameContextProvider>
  )
}
