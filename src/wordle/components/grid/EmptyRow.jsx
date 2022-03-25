import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell } from './Cell'
import { useContext } from 'react'
import { GameContext } from '../../../context/gameState'
export const EmptyRow = () => {
  const { length, setLength } = useContext(GameContext)
  const emptyCells = Array.from(Array(Number(length)))
  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
