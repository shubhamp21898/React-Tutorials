import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Buttons from './components/Buttons'

function App() {
  const [count, setCount] = useState(0);

function handleClick(){
  setCount(count+1);
}
  return (
      <div>
        <Card name="Shubham Pardeshi">
          <h1>Best Web Dev course</h1>
          <p>Trying to be consistent in this</p>
          <p> Will COmplete the course soon</p>
        </Card>
        <p>--------------------------------</p>
        <Buttons text="Click me" handleClick={handleClick} >
          <h1>{count}</h1>
        </Buttons>
      </div>
  )
}

export default App
