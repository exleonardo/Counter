import React from "react";

type ButtonType = {
  name:string
  callBack:()=>void
}
const Button = (props:ButtonType) => {
  const {name,callBack}= props

  return (

    <button onClick={callBack}>{name}</button>
  );
};

export default Button;