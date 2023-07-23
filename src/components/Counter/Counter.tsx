import React, { useState } from "react";
import NumberDisplay from "./NumberDisplay/NumberDisplay";
import SettingsCounter from "./SettingsCounter/SettingsCounter";
import s from "./Button/Button.module.css";
import Button from "./Button/Button";


const Counter = () => {
  let [ inc, setInc ] = useState<number>(0);
  //--------------- Set Min Max Value ----------------------
  let [ maxValue, setMaxValue ] = useState<string>("")
  let [ minValue, setMinValue ] = useState<string>("")
  //---------------------- ERROR ---------------------------
  let [ error, setError ] = useState(false)
  let [ errorButton, setErrorButton ] = useState(false)
  //--------------- Initial Min Max NumberCallBack ---------
  let minValueCallback: number = +minValue;
  let maxValueCallback: number = +maxValue;

  //------------------Set value to state----------------------
  const getMaxValue = (value: string) => {
    setMaxValue(value)
    if (+value < 0) {
      setError(false)
      setErrorButton(true)
    } else if (+value < +minValue) {
      setErrorButton(true)
      setError(false)
    } else if (value === minValue) {
      setError(false)
    } else if (+value >= 0 && +minValue < 0) {
      setErrorButton(true)
      setError(false)
    } else if (minValue === "") {
      setErrorButton(true)
      setError(false)
    } else {
      setError(true)
      setErrorButton(true)
    }
  }
  const getMinValue = (value: string) => {
    setMinValue(value)
    if (+value < 0) {
      setErrorButton(true)
      setError(false)
    } else if (+value > +maxValue) {
      setErrorButton(true)
      setError(false)
    } else if (value === maxValue) {
      setError(false)
    } else if (+value >= 0 && +maxValue < 0) {
      setErrorButton(true)
      setError(false)
    } else if (maxValue === "") {
      setErrorButton(true)
      setError(false)
    } else {
      setErrorButton(true)
      setError(true)
    }
  }
  //-------- Button Click and set value on display ----------
  const buttonSetNumber = () => {
    setInc(minValueCallback)
    setError(false)
    setErrorButton(false)
    localStorage.setItem("counterValue", JSON.stringify(minValueCallback))
    let min = localStorage.getItem("counterValue")
    if (min) {
      setMinValue(min)
    }

  }
  //--------- Increment value on display -------------------
  const iteration = () => {
    minValueCallback++
    setInc(inc + 1)
  }
  //--------- Reset Value to default -----------------------
  const resetInc = () => {
    setInc(0)
  }

  return (
    <div>
      <NumberDisplay maxValue={ maxValueCallback } inc={ inc } error={ error } minValue={ minValueCallback }/>
      <div className={ s.buttons }>
        <Button name={ "INC" } callBack={ iteration } hide={ errorButton || inc >= +maxValue }/>
        <Button name={ "RESET" } callBack={ resetInc } hide={ errorButton }/>
      </div>
      <SettingsCounter error={ error } getMinValue={ getMinValue } getMaxValue={ getMaxValue }
                       callBack={ buttonSetNumber } setMaxValue={ maxValue } setMinValue={ minValue }/>
    </div>
  );
};


export default Counter;

