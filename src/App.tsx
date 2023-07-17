import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";

function App() {

    let [counter, setCounter] = useState(0)

    return (
        <div className="App">
            <h1 className={'header'}>{counter}</h1>
            <Button/>
        </div>
    );
}

export default App;
