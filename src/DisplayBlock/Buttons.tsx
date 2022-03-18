import React, {MouseEvent} from 'react';
import s from './DisplayBlock.module.css';

type ButtonsPropsType = {
    disabledInc: boolean
    disabledRes: boolean
    incrementValue: (e: MouseEvent<HTMLButtonElement>) => void
    decrementValue: () => void
}

export function Buttons(props: ButtonsPropsType) {
    return (
        <div className={s.buttonWrapper}>

            <button className={s.buttonItem} onClick={props.incrementValue}
                    disabled={props.disabledInc}> Inc
            </button>
            <button className={s.buttonItem} onClick={props.decrementValue}
                    disabled={props.disabledRes}> Reset
            </button>

        </div>
    );
}
