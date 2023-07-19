import React, {useState} from "react";
import './App.css';
import Button from "./components/Counter/Buttons/Button/Button";
import s from "./components/Counter/Buttons/Button/Button.module.css"
import Counter from "./components/Counter/Counter";

function App() {

    return (
        <div className={"App"}>
            <Counter/>
        </div>
    );
}

export default App;
