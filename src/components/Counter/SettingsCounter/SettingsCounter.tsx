import React from "react";
import MaxValue from "./Values/MaxValue/MaxValue";
import StartValue from "./Values/StartValue/StartValue";
import Button from "../Button/Button";
import s from "./SettingsButtons/SettingsCounter.module.css"


type SettingsCounterType = {
  getMinValue: (value: string) => void;
  getMaxValue: (value: string) => void
  callBack: () => void;
  setMinValue: string
  setMaxValue: string
  error: boolean
}
const SettingsCounter = (props: SettingsCounterType) => {
  const {getMinValue, getMaxValue, callBack, setMinValue, setMaxValue, error} = props

  return (
    <div className={ s.settings }>
      <MaxValue getMaxValue={ getMaxValue } setMaxValue={ setMaxValue } setMinValue={ setMinValue }/>
      <StartValue getMinValue={ getMinValue } setMinValue={ setMinValue } setMaxValue={ setMaxValue }/>
      <Button name={ "SET" } callBack={ callBack } hide={ !error }/>
    </div>
  );
};

export default SettingsCounter;