import { useContext } from 'react'
import { GameContext } from '../context/gameState'

export default function Range() {
  const { length, setLength } = useContext(GameContext)

  return (
    <div className="my-3 w-80 bg-slate-200 p-4 rounded-md font-bold">
      <div className="center h-full text-center ">World Length : {length}</div>
      <div className="h-full">
        <label htmlFor="wordLength" className="hidden"></label>
        <input
          value={length}
          onChange={(e) => setLength(e.target.value)}
          id="wordLength"
          type="range"
          step={1}
          min={4}
          max={11}
          name="price"
          className="w-full h-2 bg-slate-600 appearance-none rounded-md focus:outline-none"
        />
      </div>
    </div>
  )
}
