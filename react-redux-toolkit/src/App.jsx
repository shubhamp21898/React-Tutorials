import { useState } from "react";
import "./App.css";
import { decrement, increment,incrementByAmount,reset } from "./features/counter/counterSlice";
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const [amount,setAmount]=useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }
  function handleResetClick(){
    dispatch(reset())
  }
  function handleIncrementByAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div>
      <h1>Hello React Redux</h1>
      <div>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count : {count}</p>
        <button onClick={handleDecrementClick}>-</button><br/><br/>
        <button onClick={handleResetClick}>Reset</button><br/><br/>

        <div>
          <input type="number" value={amount} placeholder="Enter amount" onChange={(e)=>setAmount(e.target.value)}></input>
          <button onClick={handleIncrementByAmountClick}>Incr By amount</button>
        </div>
      </div>
    </div>
  );
}

export default App;
