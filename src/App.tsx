import React, {useState} from "react";

import './App.css';
import Button from "./components/Button";

function App() {
    let [inc, setInc] = useState<number>(0)

    const iteration = () => {
        setInc(++inc)
    }
    const resetInc = () => {
        setInc(0)
    }
    return (
        <div className={"App"}>
            <div className={'Header'}><h1>{inc}</h1></div>
            <div className={'buttons'}>
                <Button name={"inc"} callBack={iteration}/>
                <Button name={"reset"} callBack={resetInc}/>
            </div>
        </div>
    );
}

export default App;
