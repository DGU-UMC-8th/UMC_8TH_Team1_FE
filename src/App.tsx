import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTeam from './pages/CreateTeam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateTeam/>
    </>
  )
}

export default App
