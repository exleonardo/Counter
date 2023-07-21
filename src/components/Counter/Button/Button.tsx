import React from "react";
import s from "./Button.module.css"

type ButtonType = {
    name: string
    callBack: () => void
    hide: boolean | string | number
}
const Button = (props: ButtonType) => {
    const {name, callBack, hide} = props

    const buttonSet = name === 'SET' ? s.set : s.btn

    return (
        <button className={buttonSet} onClick={callBack} disabled={!hide}>{name}</button>
    );
};

export default Button;