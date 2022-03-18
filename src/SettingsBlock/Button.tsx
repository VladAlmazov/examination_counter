import s from './SettingsBlock.module.css';

type ButtonPropsType = {
    setToLocalStorage: () => void
    disable: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div className={s.buttonWrapper}>
            <button disabled={props.disable} className={s.buttonItem} onClick={props.setToLocalStorage} >Set</button>
        </div>
    )
}