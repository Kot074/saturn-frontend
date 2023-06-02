import styles from "../SaturnMaskedInput/SaturnMaskedInput.module.css";
import MaskedInput from "react-text-mask/dist/reactTextMask";
import SaturnInput from "../SaturnInput/SaturnInput";

const SaturnMaskedInput = (props) => {
    const onTextChange = (text) => {
        props.onChange(text);
    }

    return (
        <MaskedInput
            mask={props.mask}
            className={styles.textbox}
            placeholder={props.placeholder}

            value={props.value}

            onChange={(e) => {
                onTextChange(e.target.value)
            }} >
            <SaturnInput {...props}/>
        </MaskedInput>
    )
}

export default SaturnMaskedInput;