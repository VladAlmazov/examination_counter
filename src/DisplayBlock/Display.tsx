import React from 'react';
import s from './DisplayBlock.module.css';

export type InputPropsType = {
    value: number | string
}

export function Display(props: InputPropsType) {
    return (
        <div className={s.inputWrapper}>
            <input className={props.value === 5 ? s.maxNumber : s.inputItem} value={props.value}/>
        </div>
    );
}
