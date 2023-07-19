import React from "react";
import './App.css';
import Counter from "./components/Counter/Counter";
import SettingsCounter from "./components/SettingsCounter/SettingsCounter";

function App() {

    return (
        <div className={"App"}>
            <Counter/>
            <SettingsCounter/>
        </div>
    );
}

export default App;
