import React from 'react'
import "../assets/Styles/Counter.css"
import { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);

  return (
    <div className='counter-container'>
      <p id='para'>You Have clicked {count} times</p>
      <button id='btnClick' onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter
