import React, { useCallback, useEffect, useRef, useState } from "react";

const ExpensiveComp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);
  const previousFunction = useRef(null);

  const expensiveTask = useCallback(() => {
    console.log("Inside exp.task");
    let result = 0;
    for (let index = 0; index < 1000000000; index++) {
      result += index;
    }
    return result;
  }, [count]);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveTask) {
        console.log("Fun not re-created");
      } else {
        console.log("Fun got re-created");
      }
    } else {
      previousFunction.current = expensiveTask;
    }
  }, [expensiveTask]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <div>Count :{count}</div>
      <p>Expensive Calcualtion :{expensiveTask()}</p>
      <input
        type="text"
        placeholder="Enter.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default ExpensiveComp;
