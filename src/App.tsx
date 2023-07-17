import React, { useState } from "react";

import './App.css';
import Button from "./components/Button";

function App() {

  let [inc,setInc]= useState<number>(0);
  let minValue = 0;
  let maxValue = 5;

  const iteration = ()=>{
    minValue++
    setInc(++inc)
  }
  const resetInc = ()=>{
  setInc(0)
}

  return (
    <div className={"App"}>
      <div className={maxValue>inc?'Header':"HeaderError"}><h1>{inc}</h1></div>
      <div className={'buttons'}>
        <Button name={"inc"} callBack={iteration} hide={maxValue>inc}/>
        <Button name={"reset"} callBack={resetInc}  hide={inc>minValue} />
      </div>
    </div>
  );
}
export default App;
