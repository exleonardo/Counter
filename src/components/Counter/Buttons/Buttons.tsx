import React from "react";
import s from "./Button/Button.module.css";
import Button from "./Button/Button";

type ButtonType = {
    resetInc: () => void
    iteration: () => void
    maxValue: number;
    inc: number
    minValue: number
}
const Buttons = (props: ButtonType) => {
    const {resetInc, iteration, maxValue, inc, minValue} = props


    return (
        <div className={s.buttons}>
            <Button name={"inc"} callBack={iteration} hide={maxValue > inc}/>
            <Button name={"reset"} callBack={resetInc} hide={inc > minValue}/>
        </div>
    );
};

export default Buttons;