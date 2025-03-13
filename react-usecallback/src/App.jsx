import { useCallback, useState } from "react";
import "./App.css";
import ChildComponents from "./components/ChildComponents";
import ExpensiveComp from "./components/ExpensiveComp";

function App() {
  const [count, setCount] = useState(0);


  const handleClick=useCallback(()=>{
    setCount(count + 1);
  },[]);

  return (
    <div>
      {/* <div>Count : {count}</div><br/>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div><br/>
      <div>
        <ChildComponents 
          buttonName="Click me"
          handleClick={handleClick}
        />
      </div> */}
      <ExpensiveComp/>
    </div>
  );
}

export default App;
