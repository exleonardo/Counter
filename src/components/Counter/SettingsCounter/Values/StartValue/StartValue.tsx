import React, { ChangeEvent } from "react";


type StartValue = {
  getMinValue:(value:string)=>void
  setValue:string
}
const StartValue = (props:StartValue) => {
  const {getMinValue,setValue}=props


  const onChangeInputValue =(e:ChangeEvent<HTMLInputElement>)=>{
    const value = e.currentTarget.value
    getMinValue(value)
  }

    return (
        <div>
            <div>Start value:</div>
            <input placeholder={"Enter positive number"} onChange={onChangeInputValue} value={setValue} type="number"/>
        </div>
    );
};

export default StartValue;