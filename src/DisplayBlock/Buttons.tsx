import React, {MouseEvent} from 'react';
import s from './DisplayBlock.module.css';
import {DisplayValuesType} from '../App';

type ButtonsPropsType = {
    incrementValue: (e: MouseEvent<HTMLButtonElement>) => void
    resetValue: () => void
    disabled: boolean
    disableIncButton: boolean
    disableResetButton: boolean
    value: DisplayValuesType
    maxValue: number
    setDisableIncButton: (disable: boolean) => void
    setDisableResetButton: (disable: boolean) => void
}

export function Buttons(props: ButtonsPropsType) {

    return (
        <div className={s.buttonWrapper}>
            <button className={s.buttonItem}
                    onClick={props.incrementValue}
                    disabled={ props.value >= props.maxValue || typeof props.value === 'string'}>
                Inc
            </button>
            <button className={s.buttonItem}
                    onClick={props.resetValue}
                    disabled={props.disableResetButton}>
                Reset
            </button>

        </div>
    );
}
