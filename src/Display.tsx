import React from 'react';
import './App.css';

export type InputPropsType = {
    value: number
}

export function Display(props: InputPropsType) {
    return (
        <div className="input-wrapper">
            <input className={props.value === 5 ? 'max-number' : 'input-item'} value={props.value}/>
        </div>
    );
}
