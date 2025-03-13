import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isLoggedIn,setLoggedIn]=useState(true);

  //Approach first
  // if(isLoggedIn){
  //   return (
  //     <div>
  //     <LogoutBtn/>
  //     </div>
  //   )
  // }
  // else{
  //   return (
  //     <div>
  //     <LoginBtn/>
  //     </div>
  //   )
  // }

  //Approach 2nd
  return (
    <div>
      {isLoggedIn?<LogoutBtn/>:<LoginBtn/>}
    </div>
  )
  
  //Approach 3rd
  //  return (
  //   <div>
  //     <h1>Welcome Everyone to react course</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>
  //   </div>
  // )
}

export default App
