import React, { ChangeEvent } from "react";

type MaxValueType = {
  getMaxValue:(value:string)=>void
  setMaxValue:string
}
const MaxValue = (props:MaxValueType) => {
const {getMaxValue,setMaxValue}=props

  const onChangeInputValue =(e:ChangeEvent<HTMLInputElement>)=>{
    getMaxValue(e.currentTarget.value)
  }
    return (
        <div>
            <div>Max value:</div>
            <input onChange={onChangeInputValue} placeholder={"Get max number"} type="number" value={setMaxValue}/>
        </div>
    );
};

export default MaxValue;

