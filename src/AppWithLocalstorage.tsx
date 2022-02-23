import React, {useEffect, useState} from 'react';
import './App.css';
import styles from './AppWithLocalstorage.module.css'

export function AppWithLocalstorage() {

    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }

    // const clearLocalstorageHandler = () => {
    //     localStorage.clear()
    //     setValue(0)
    // }
    //
    // const removeItemFromLocalstorageHandler = () => {
    //     localStorage.removeItem('counterValue')
    // }

    return (
        <div className={styles.app}>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    )
}

