import React, {useState} from 'react';
import s from './DisplayBlock/DisplayBlock.module.css';
import {Display} from './DisplayBlock/Display';
import {Buttons} from './DisplayBlock/Buttons';
import {SettingsBlock} from './SettingsBlock/SettingsBlock';
import style from './App.module.css'

export type DisplayValuesType = number | string


function App() {

    const [value, setResult] = useState<DisplayValuesType>(0)

    const incrementValue = () => {
        if (value !== 5 && typeof value === 'number') {
            setResult(value + 1)
        }
    }

    const decrementValue = () => {
        setResult(0)
    }

    return (
        <div className={style.appWrapper}>
            <div>
                <SettingsBlock setResult={setResult}/>
            </div>
            <div className={s.displayWrapper}>
                <Display value={value}/>
                <Buttons
                    incrementValue={incrementValue}
                    decrementValue={decrementValue}
                    disabledInc={value === 5}
                    disabledRes={value === 0}
                />
            </div>
        </div>
    );
}

export default App;
