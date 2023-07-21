import React from 'react';

type SettingsButtonsPropsType = {
    callBack:()=>void
}

const SettingsButtons = (props: SettingsButtonsPropsType) => {

    const setToLocalStorage = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={setToLocalStorage}>SET</button>
        </div>
    );
};

export default SettingsButtons;