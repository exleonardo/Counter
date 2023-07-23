import React from "react";
import s from "./NumberDisplay.module.css"


type NumberDisplayType = {
  inc: number
  maxValue: number;
  minValue: number
  error: boolean
}
const NumberDisplay = (props: NumberDisplayType) => {
  const {inc, error, maxValue, minValue} = props
  const messageDispay = () => {
    if (error) {
      return <div className={ s.Header }>Enter values and press SET</div>
    } else if (maxValue < 0 || minValue < 0 || ( maxValue === minValue )) {
      return <div className={ s.errorMessage }><h1>incorrect value</h1></div>
    } else if (maxValue < minValue || minValue > maxValue) {
      return <div className={ s.errorMessage }><h1>incorrect value</h1></div>
    } else {
      return <div className={ error ? s.HeaderError : s.Header }><h1>{ inc }</h1></div>
    }
  }

  return (
    <div>
      { messageDispay() }
    </div>
  );
};

export default NumberDisplay;