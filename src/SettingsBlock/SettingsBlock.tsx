import s from './SettingsBlock.module.css'
import React, {ChangeEvent, useEffect} from 'react';
import {Button} from './Button';
import {DisplayValuesType} from '../App';
import styles from '../App.module.css'

type SettingsPropsType = {
    setResult: (value: DisplayValuesType) => void
    startValue: number
    setStartValue: (number: number) => void
    maxValue: number
    setMaxValue: (number: number) => void
    disable: boolean
    setDisableSettingsButton: (disable: boolean) => void
    setDisableIncButton: (disable: boolean) => void
    setDisableResetButton: (disable: boolean) => void
}

export const SettingsBlock = (props: SettingsPropsType) => {

    useEffect(() => {
        if (props.startValue === props.maxValue
            || props.maxValue < props.startValue
            || props.startValue < 0
            || props.maxValue < 0) {
            props.setResult('Incorrect value')
            props.setDisableSettingsButton(true)
            props.setDisableResetButton(true)
        }
    })

    const setToDisplayHandler = () => {
        props.setResult(props.startValue)
        props.setDisableIncButton(false)
        props.setDisableSettingsButton(true)
    }

    const maxValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.maxValue >= 0) {
            props.setMaxValue(+e.currentTarget.value)
            props.setResult(`Enter values and press 'set'`)
            props.setDisableSettingsButton(false)
            props.setDisableResetButton(true)
        } else {
            props.setMaxValue(+e.currentTarget.value)
            props.setResult('Incorrect value')
            props.setDisableSettingsButton(true)
            props.setDisableResetButton(true)
        }
    }
    const minValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.startValue >= -1) {
            props.setStartValue(+e.currentTarget.value)
            props.setResult(`Enter values and press 'set'`)
            props.setDisableSettingsButton(false)
            props.setDisableResetButton(true)
        } else {
            props.setStartValue(+e.currentTarget.value)
            props.setResult('Incorrect value')
            props.setDisableSettingsButton(true)
            props.setDisableResetButton(true)
        }
    }

    return (
        <div className={styles.commonWrapper}>
            <div className={s.spanWrapper}>
                <span className={s.span}> Max value:</span>

                <input type="number"
                       min={-1}
                       className={props.maxValue === -1 ? s.error : s.input}
                       value={props.maxValue}
                       onChange={maxValueOnChangeHandler}
                />
                <br/>
                <span className={s.span}> Start value:</span>

                <input type="number"
                       min={-1}
                       className={props.startValue === -1 ? s.error : s.input}
                       value={props.startValue}
                       onChange={minValueOnChangeHandler}
                />
                <br/>
            </div>
            <Button setToLocalStorage={setToDisplayHandler} disable={props.disable}/>
        </div>
    )
}