import React, { useState } from "react";
import NumberDisplay from "./NumberDisplay/NumberDisplay";
import SettingsCounter from "./SettingsCounter/SettingsCounter";
import s from "./Button/Button.module.css";
import Button from "./Button/Button";

type CounterType = {}
const Counter = (props:CounterType) => {
  let [inc, setInc] = useState<number>(0);
  //--------------- Set Min Max Value ----------------------
  let [maxValue,setMaxValue]=useState<string>("")
  let [minValue,setMinValue]=useState<string>("")
  //--------------- Initial Min Max NumberCallBack ---------
  let minValueCallback:number = +minValue;
  let maxValueCallback:number = +maxValue;
  //------------------Set value to state----------------------

  const getMaxValue = (value:string)=>{
    setMaxValue(value)
  }
  const getMinValue =  (value:string)=>{
    setMinValue(value)
  }
  //-------- Button Click and set value on display ----------
  const buttonSetNumber = ()=>{
    setInc(minValueCallback)
  }
  //--------- Increment value on display -------------------
  const iteration = () => {
    minValueCallback++
    setInc(++inc)
  }
  //--------- Reset Value to default -----------------------
  const resetInc = () => {
    setInc(0)
  }

  return (
    <div>
      <NumberDisplay maxValue={maxValueCallback} inc={inc} />
      <div className={s.buttons}>
        <Button name={"inc"} callBack={iteration} hide={inc<maxValueCallback}/>
        <Button name={"reset"} callBack={resetInc} hide={inc}/>
      </div>
      <SettingsCounter getMinValue={getMinValue} getMaxValue={getMaxValue} callBack={buttonSetNumber} setMaxValue={maxValue} setMinValue={minValue}/>
    </div>
  );
};

export default Counter;