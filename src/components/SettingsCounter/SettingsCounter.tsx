import React from 'react';
import SettingsButtons from "./SettingsButtons/SettingsButtons";
import MaxValue from "./Values/MaxValue/MaxValue";
import StartValue from "./Values/StartValue/StartValue";


const SettingsCounter = () => {

    const callBack = () => {
        // localStorage.setItem()
    }

    return (
        <div>
            <MaxValue/>
            <StartValue/>
            <SettingsButtons callBack={callBack}/>
        </div>
    );
};

export default SettingsCounter;