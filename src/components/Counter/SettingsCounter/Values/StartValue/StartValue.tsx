import React, { ChangeEvent } from "react";
import s from "./StartValue.module.css"


type StartValue = {
  getMinValue: (value: string) => void
  setValue: string;
  setMaxValue: string;
}
const StartValue = (props: StartValue) => {
  const {getMinValue, setValue, setMaxValue} = props
  const styleErrorInput = +setValue < 0 || +setMaxValue === +setValue || +setValue > +setMaxValue ? s.error : s.truth

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    getMinValue(value)
  }
  return (
    <div className={ s.startValue }>
      <div>START VALUE</div>
      <input className={ styleErrorInput } placeholder={ "Enter positive number" } onChange={ onChangeInputValue }
             value={ setValue } type="number"/>
    </div>
  );
};

export default StartValue;