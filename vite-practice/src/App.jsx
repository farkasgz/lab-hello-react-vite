import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pictures from './components/pictures'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pictures />
    </div>
  )
}

export default App
