import s from './SettingsBlock.module.css'
import React, {ChangeEvent, useState} from 'react';
import {Button} from './Button';
import {DisplayValuesType} from '../App';

type SettingsPropsType = {
    setResult: (value: DisplayValuesType) => void
}

export const SettingsBlock = (props: SettingsPropsType) => {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [disable, setDisable] = useState(false)

    const setToLocalStorageHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        props.setResult(minValue)
    }

    const maxValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const minValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            props.setResult('Incorrect value')
            setDisable(true)
        } else {
            setMinValue(+e.currentTarget.value)
            props.setResult(`Enter values and press 'set'`)
            setDisable(false)
        }
    }

    return (
        <div className={s.settingsWrapper}>
            <div className={s.spanWrapper}>
                <span className={s.span}> Max value:</span>

                <input type="number"
                       className={s.input}
                       defaultValue={maxValue}
                       onChange={maxValueOnChangeHandler}
                />
                <br/>
                <span className={s.span}> Min value:</span>

                <input type="number"
                       className={s.input}
                       defaultValue={minValue}
                       onChange={minValueOnChangeHandler}
                />
                <br/>
            </div>
            <Button setToLocalStorage={setToLocalStorageHandler} disable={disable}/>
        </div>
    )
}