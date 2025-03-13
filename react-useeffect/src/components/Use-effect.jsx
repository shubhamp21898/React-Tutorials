import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(0);
  const [total, setotal] = useState(1);
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickTotal() {
    setotal(total + 1);
  }
  //First ->side effect function
  //second ->clean-up function
  //third ->comma seperated dep list
  // useEffect(()=>{
  //     first Mountaining function
  //     return()=>{
  //         second//anmounted Cleanup function
  //     }
  // },[third]);

  //Variation: 1
  //Runs on every render
  // useEffect(()=>{
  //   alert("I will run on each render")
  // })
  //Variation: 2
  //that runs on only first render
  // useEffect(()=>{
  //   alert("I will run 1st render");
  // },[])

  //Variation: 3

  // useEffect(()=>{
  //   alert("I will run every time when count is updated");
  // },[count]);

  //variation 4
  //Multiple dependecies
  // useEffect(() => {
  //   alert("I will run every time when count/toatal is updated");
  // }, [count, total]);

//Variation 5
//is let's add a cleanup function
 useEffect(()=>{
      alert("Count is updated");
      return()=>{
          alert("Count is anmounted from UI");
      }
  },[count]);

  return (
    <div>
      <h1>Use effect Tuto</h1>
      <button onClick={handleClick}>click me</button>
      <br />
      Count is :{count}
      <div>
        <button onClick={handleClickTotal}>Update total</button>
        <br />
        total is :{total}
      </div>
    </div>
  );
};

export default Useeffect;
