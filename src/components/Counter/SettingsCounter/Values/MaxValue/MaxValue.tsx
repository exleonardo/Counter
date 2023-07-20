import React, { ChangeEvent } from "react";
import s from "../StartValue/StartValue.module.css";

type MaxValueType = {
  getMaxValue:(value:string)=>void
  setMaxValue:string
}
const MaxValue = (props:MaxValueType) => {
const {getMaxValue,setMaxValue}=props

  const styleErrorInput = +setMaxValue<0?s.error:s.truth
  const onChangeInputValue =(e:ChangeEvent<HTMLInputElement>)=>{
    getMaxValue(e.currentTarget.value)
  }
    return (
        <div>
            <div>Max value:</div>
            <input className={styleErrorInput} onChange={onChangeInputValue} placeholder={"Get max number"} type="number" value={setMaxValue}/>
        </div>
    );
};

export default MaxValue;

