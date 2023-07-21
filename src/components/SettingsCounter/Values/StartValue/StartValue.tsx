import React, {ChangeEvent, useState} from 'react';

const StartValue = () => {

    let [startValue, setStartValue] = useState(0)

    const addStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('startValue', e.currentTarget.value)
    }


    return (
        <div>
            <div>Start value:</div>
            <input type="number" onChange={addStartValue}/>
        </div>
    );
};

export default StartValue;