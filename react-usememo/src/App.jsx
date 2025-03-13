import { useState,useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [Input, setInput] = useState(0);
  function expensiveTask(num) {
    console.log("Inside exp.task");
    for (let index = 0; index < 1000000000; index++) {}
    return num * 2;
  }
  let doubleValue=useMemo(()=>expensiveTask(Input),[Input]);

  
  return (
    <div>
      <h2>Use Memo hook</h2>

      <button onClick={() => setCount(count + 1)}>Increament</button>
      <div>Count :{count}</div>
      <div>doubleValue :{doubleValue}</div>

      <input type="number" placeholder="Enter number" value={Input} onChange={(e)=>setInput(e.target.value)} />

    </div>
  );
}

export default App;
