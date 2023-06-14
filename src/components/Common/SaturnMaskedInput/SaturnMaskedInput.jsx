import styles from "../SaturnMaskedInput/SaturnMaskedInput.module.css";
import InputMask from 'react-input-mask';
import {useEffect, useState} from "react";

const SaturnMaskedInput = (props) => {
    const [valueState, setValueState] = useState(props.value);
    useEffect(() => {
        setValueState(props.value)
    }, [props.value]);

    const onTextChange = (e) => {
        setValueState(e.currentTarget.value);
        props.onChange(e.currentTarget.value);
    }

    return (
        <InputMask
            {...props}
            className={styles.textbox}
            onChange={onTextChange}
            value={valueState}
        />
    )
}

export default SaturnMaskedInput;
