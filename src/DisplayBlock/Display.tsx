import React from 'react';
import s from './DisplayBlock.module.css';

export type InputPropsType = {
    value: number | string
    maxValue: number
}

export function Display(props: InputPropsType) {
    return (
        <div className={s.inputWrapper}>
            <input className={props.value === props.maxValue ? s.maxNumber : s.inputItem} value={props.value}/>
        </div>
    );
}
