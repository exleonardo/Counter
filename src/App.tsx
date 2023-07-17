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
        <div>
              <div>{inc}</div>
            <Button name={"inc"} callBack={iteration} hide={maxValue>inc}/>
            <Button name={"reset"} callBack={resetInc} hide={inc>minValue}  />
        </div>
    );
}

export default App;
