import React, {useState} from 'react';
import SettingsButtons from "./SettingsButtons";


const SettingsCounter = () => {

    let [maxValue, setMaxValue] = useState(0)

    const callBack = () => {
        localStorage.setItem()
    }

    return (
        <div>
            <div>
                <p>Max value:</p>
                <input type="number"/>
            </div>
            <div>
                <p>Start value:</p>
                <input type="number"/>
            </div>
            <div>
                <SettingsButtons callBack={callBack}/>
            </div>
        </div>
    );
};

export default SettingsCounter;