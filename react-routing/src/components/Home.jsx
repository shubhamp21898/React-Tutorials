import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    //Navigation for page redirect
    const navigate=useNavigate();
    function handleClick(){
        navigate('/about');
    }
  return (
    <div>
      <button onClick={handleClick}>Move to about page</button>
    </div>
  )
}

export default Home
