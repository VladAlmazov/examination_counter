import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Display} from './DisplayBlock/Display';
import {Buttons} from './DisplayBlock/Buttons';
import {SettingsBlock} from './SettingsBlock/SettingsBlock';

export type DisplayValuesType = number | string

function App() {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [disableSettingsButton, setDisableSettingsButton] = useState(false)
    const [disableIncButton, setDisableIncButton] = useState(true)
    const [disableResetButton, setDisableResetButton] = useState(true)
    const [value, setResult] = useState<DisplayValuesType>(startValue)

    useEffect(() => {
        let maxValue = localStorage.getItem('maxValue') || 'defaultValue'
        let startValue = localStorage.getItem('startValue') || 'defaultValue'
        if (maxValue && startValue) {
            let newMaxValue = JSON.parse(maxValue)
            let newStartValue = JSON.parse(startValue)
            setMaxValue(newMaxValue)
            setStartValue(newStartValue)
            setResult(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [maxValue, startValue])

    const incrementValue = () => {
        if (value !== maxValue && typeof value === 'number') {
            setResult(value + 1)
        }
        setDisableResetButton(false)
    }

    const resetValue = () => {
        setResult(startValue)
        setDisableResetButton(true)
    }

    return (
        <div className={s.appWrapper}>
            <div>
                <SettingsBlock setResult={setResult}
                               disable={disableSettingsButton}
                               setDisableSettingsButton={setDisableSettingsButton}
                               setMaxValue={setMaxValue}
                               setStartValue={setStartValue}
                               startValue={startValue}
                               maxValue={maxValue}
                               setDisableIncButton={setDisableIncButton}
                               setDisableResetButton={setDisableResetButton}
                />
            </div>
            <div className={s.commonWrapper}>
                <Display value={value} maxValue={maxValue}/>
                <Buttons
                    incrementValue={incrementValue}
                    resetValue={resetValue}
                    disabled={disableSettingsButton}
                    disableIncButton={disableIncButton}
                    disableResetButton={disableResetButton}
                    setDisableIncButton={setDisableIncButton}
                    setDisableResetButton={setDisableResetButton}
                    value={value}
                    maxValue={maxValue}
                />
            </div>
        </div>
    );
}

export default App;
