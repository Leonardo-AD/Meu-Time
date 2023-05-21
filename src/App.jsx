import { useState } from 'react'
import { Home } from './components'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Home />
    </div>  
  )
}