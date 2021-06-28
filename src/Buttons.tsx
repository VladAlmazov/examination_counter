import React from 'react';
import './App.css';

type ButtonsPropsType = {
    disabledInc: boolean
    disabledRes: boolean
    incrementValue: () => void
    decrementValue: () => void
}

export function Buttons(props: ButtonsPropsType) {
    return (
        <div className="button-wrapper">

            <button className="button-item" onClick={props.incrementValue}
                    disabled={props.disabledInc}> Inc
            </button>
            <button className="button-item" onClick={props.decrementValue}
                    disabled={props.disabledRes}> Reset
            </button>

        </div>
    );
}
