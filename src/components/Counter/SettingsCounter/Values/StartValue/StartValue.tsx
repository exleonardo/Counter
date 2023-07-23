import React, { ChangeEvent } from "react";
import s from "./StartValue.module.css"


type StartValue = {
  getMinValue: (value: string) => void
  setMinValue: string;
  setMaxValue: string;
}
const StartValue = (props: StartValue) => {
  const {getMinValue, setMinValue, setMaxValue} = props
  const styleErrorInput = +setMinValue < 0 || +setMaxValue === +setMinValue || +setMinValue > +setMaxValue ? s.error : s.truth

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    getMinValue(value)
  }
  return (
    <div className={ s.startValue }>
      <div>START VALUE</div>
      <input className={ styleErrorInput } placeholder={ "Enter positive number" } onChange={ onChangeInputValue }
             value={ setMinValue } type="number"/>
    </div>
  );
};

export default StartValue;