import React from "react";
import s from "./NumberDisplay.module.css"
type NumberDisplayType = {
  inc:number
  maxValue:number;
  error:boolean
}
const NumberDisplay = (props:NumberDisplayType) => {
  const {inc,maxValue,error}=props
 const styleError = `${s.error} ${s.HeaderError}`
  return (
    <div>
      {error?<div className={styleError}>Incorrect value!</div>: <div className={ maxValue > inc ? s.Header : s.HeaderError }><h1>{ inc }</h1></div>}
    </div>
  );
};

export default NumberDisplay;