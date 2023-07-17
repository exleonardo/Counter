import React from "react";

type ButtonType = {
  name:string
  callBack:()=>void
  hide:boolean
}
const Button = (props:ButtonType) => {
  const {name,callBack,hide}= props

  return (

    <button onClick={callBack} disabled={!hide}>{name}</button>
  );
};

export default Button;