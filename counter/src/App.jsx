import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addVal = () => setCount(prev => prev + 1)
  const remVal = () => setCount(prev => prev - 1)

  return (
    <div>
      <h2 className="text-gray-700">counter val: {count}</h2>
      <button
        className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        onClick={addVal}
      >
        increment
      </button>
      <button
        className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        onClick={remVal}
      >
        decrement
      </button>
    </div>
  )
}

export default App
