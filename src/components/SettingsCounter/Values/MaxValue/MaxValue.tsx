import React, {ChangeEvent, useState} from 'react';

const MaxValue = () => {

    let [maxValue, setMaxValue] = useState<string | number>(0)

    const addMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    return (
        <div>
            <div>Max value:</div>
            <input type="number" onChange={addMaxValue}/>
        </div>
    );
};

export default MaxValue;