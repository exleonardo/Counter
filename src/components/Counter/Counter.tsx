import React, { useState } from "react";
import s from "./Buttons/Button/Button.module.css";
import Button from "./Buttons/Button/Button";
import Buttons from "./Buttons/Buttons";
import NumberDisplay from "./NumberDisplay/NumberDisplay";


const Counter = () => {
  let [inc, setInc] = useState<number>(0);
  let minValue = 0;
  let maxValue = 5;

  const iteration = () => {
    minValue++
    setInc(++inc)
  }
  const resetInc = () => {
    setInc(0)
  }

  return (
    <div>
      <NumberDisplay maxValue={maxValue} inc={inc} />
      <Buttons resetInc={resetInc}  iteration={iteration} maxValue={maxValue} inc={inc} minValue={minValue}  />
    </div>
  );
};

export default Counter;