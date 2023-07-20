import React from 'react';
import MaxValue from "./Values/MaxValue/MaxValue";
import StartValue from "./Values/StartValue/StartValue";
import Button from "../Button/Button";

type SettingsCounterType ={
    getMinValue:(value:string)=>void;
    getMaxValue:(value:string)=>void
    callBack:()=>void;
    setMinValue:string
    setMaxValue:string
}
const SettingsCounter = (props:SettingsCounterType) => {
const {getMinValue,getMaxValue,callBack,setMinValue,setMaxValue} = props

    return (
        <div>
            <MaxValue getMaxValue={getMaxValue} setMaxValue={setMaxValue} />
            <StartValue getMinValue={getMinValue} setValue={setMinValue} />
            <Button name={"SET"} callBack={callBack} hide={setMinValue}/>
        </div>
    );
};

export default SettingsCounter;