import React from "react";
import s from "./Button.module.css"

type ButtonType = {
    name: string
    callBack: () => void
    hide: boolean
}
const Button = (props: ButtonType) => {
    const {name, callBack, hide} = props

    return (
        <button className={s.btn} onClick={callBack} disabled={!hide}>{name}</button>
    );
};

export default Button;