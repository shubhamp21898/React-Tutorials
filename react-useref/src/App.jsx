import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  function handleIncrement() {
    val.current = val.current + 1;
    console.log("Value of val :", val.current);
    setCount(count + 1);
  }
  useEffect(() => {
    console.log("rendered");
  });

  let btnRef = useRef();
  function chnageColor() {
    btnRef.current.style.backgroundColor = "red";
  }
  const [time, setTime] = useState(0);
let timerRef=useRef(null);
  function startTimer() {
    timerRef.current=setInterval(() => {
      setTime(time=>time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  return (
    <div style={{gap:5,margin:2,}}>
      {/* <h1>use Ref Hook tutorials</h1>
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={chnageColor}>Change color</button>
      <div>count :{count}</div> */}

      {/* Stopwatch */}
      <h1>StopWatch:{time} seconds</h1>
      <button onClick={startTimer} >Start </button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
