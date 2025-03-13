import React, { useContext } from 'react'
import { ThemeContext } from './CustomUserContext'

const ChildC = () => {
    // const user=useContext(UserContext);
    const {theme,setTheme}=useContext(ThemeContext);
    function toggleTheme(){
        if(theme==='light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }
  return (
    <div>
    <button onClick={toggleTheme}>
        Change theme
    </button>
    </div>
  )
}

export default ChildC
