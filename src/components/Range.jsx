import { useState } from 'react'
import { useEffect } from 'react'

export default function Range() {
  const [value, setValue] = useState(5)
  useEffect(() => {
    localStorage.setItem('length', value)
  }, [value])

  return (
    <div className="my-3 w-80 bg-slate-200 p-4 rounded-md font-bold">
      <div className="center h-full text-center ">World Length : {value}</div>
      <div className="h-full">
        <label htmlFor="wordLength" className="hidden"></label>
        <input
          onChange={(e) => setValue(e.target.value)}
          id="wordLength"
          type="range"
          step={1}
          min={4}
          max={11}
          name="price"
          className="w-full h-2 bg-slate-600 appearance-none rounded-md"
        />
      </div>
    </div>
  )
}
