import React, {useState} from 'react';
import './App.css';
import {Display} from './Display';
import {Buttons} from './Buttons';

function App() {

    const [value, setResult] = useState<number>(0)

    const incrementValue = () => {
        if (value !== 5) {
            setResult(value + 1)
        }
    }

    const decrementValue = () => {
        setResult(0)
    }

    return (
        <div className="wrapper">
            <Display value={value}/>
            <Buttons
                incrementValue={incrementValue}
                decrementValue={decrementValue}
                disabledInc={value === 5}
                disabledRes={value === 0}
            />
        </div>
    );
}

export default App;
