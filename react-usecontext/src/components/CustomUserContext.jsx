import React, { createContext, useState } from 'react'
import ChildA from './ChildA';
import "../assets/style.css"

// Step 1: Create Context
const UserContext=createContext();
const ThemeContext=createContext();

// Step 2: Wrap all the child inside a provider
// Step 3: Pass Value
//step 4 : Inside the consumer,consume the value

const CustomUserContext = () => {
    // const [user,setUser]=useState({name:"Shubh"});

    const [theme,setTheme]=useState('light');
  return (
    <div>
    <h1>User Context</h1>
    {/* <UserContext.Provider value={user}>
      <ChildA/>
    </UserContext.Provider> */}
    <ThemeContext.Provider value={{theme,setTheme}}> {/*Wrap*/}
    <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA/>
    </div>
    </ThemeContext.Provider>
    </div>
  )
}

export default CustomUserContext
// export {UserContext}
export {ThemeContext}
