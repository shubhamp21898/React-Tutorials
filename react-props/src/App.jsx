import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="Name one" desc="Desc one"/>
      <UserCard name="Name two" desc="Desc two"/>
      <UserCard name="Name three" desc="Desc three"/>
    </div>
  )
}

export default App
