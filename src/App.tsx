import React, { useState } from "react";

import './App.css';
import Button from "./components/Button";

function App() {
  let [inc,setInc]= useState<number>(0)

  const iteration = ()=>{
    setInc(++inc)
  }
const resetInc = ()=>{
  setInc(0)
}

    return (
        <div>
              <div>{inc}</div>
            <Button name={"inc"} callBack={iteration}/>
            <Button name={"reset"} callBack={resetInc}/>
        </div>
    );
}

export default App;
