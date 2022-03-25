import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'
import { useContext } from 'react'
import { GameContext } from '../../../context/gameState'
// type Props = {
//   guess: string
//   className: string
// }

export const CurrentRow = ({ guess, className }) => {
  const { length, setLength } = useContext(GameContext)
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(length - splitGuess.length))
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
