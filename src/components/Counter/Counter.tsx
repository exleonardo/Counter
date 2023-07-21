import React, {useState} from "react";
import NumberDisplay from "./NumberDisplay/NumberDisplay";
import SettingsCounter from "./SettingsCounter/SettingsCounter";
import s from "./Button/Button.module.css";
import Button from "./Button/Button";


const Counter = () => {

    let [inc, setInc] = useState<number>(0);

    //--------------- Set Min Max Value ----------------------
    let [maxValue, setMaxValue] = useState<string>("")
    let [minValue, setMinValue] = useState<string>("")

    //---------------------- ERROR ---------------------------
    let [error, setError] = useState(false)

    //--------------- Initial Min Max NumberCallBack ---------
    let minValueCallback: number = +minValue;
    let maxValueCallback: number = +maxValue ? +maxValue : 0;// checking a value for empty

    //----------------- Check a negative value -----------------
    const checkNegativeValue = (value: string) => {
        if (+value < 0) {
            setError(true)
        } else {
            setError(false)
        }
    }

    //------------------Set value to state----------------------
    const getMaxValue = (value: string) => {
        setMaxValue(value)
        checkNegativeValue(value)
        if (value === minValue) {
            setError(true)
        }
    }
    const getMinValue = (value: string) => {
        setMinValue(value)
        checkNegativeValue(value)
        if (value === maxValue) {
            setError(true)
        }
    }

    //-------- Button Click and set value on display ----------
    const buttonSetNumber = () => {
        setInc(minValueCallback)
    }

    //--------- Increment value on display -------------------
    const iteration = () => {
        minValueCallback++
        setInc(++inc)
    }

    //--------- Reset Value to default -----------------------
    const resetInc = () => {
        setInc(0)
    }

    return (
        <div>
            <NumberDisplay maxValue={maxValueCallback} inc={inc} error={error}/>
            <div className={s.buttons}>
                <Button name={"INC"} callBack={iteration} hide={inc < maxValueCallback}/>
                <Button name={"RESET"} callBack={resetInc} hide={inc}/>
            </div>
            <SettingsCounter error={error} getMinValue={getMinValue} getMaxValue={getMaxValue}
                             callBack={buttonSetNumber} setMaxValue={maxValue} setMinValue={minValue}/>
        </div>
    );
};

export default Counter;

