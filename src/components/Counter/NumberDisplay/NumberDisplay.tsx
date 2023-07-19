import React from "react";

type NumberDisplayType = {
  inc:number
  maxValue:number;
}
const NumberDisplay = (props:NumberDisplayType) => {
  const {inc,maxValue}=props
  return (
    <div className={maxValue > inc ? 'Header' : "HeaderError"}><h1>{inc}</h1></div>
  );
};

export default NumberDisplay;