import React from "react";
import styles from "./SaturnInput.module.css";
import {Input} from "antd";
import {MaskedInput} from "antd-mask-input";

const SaturnInput = (props) => {
    const onTextChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div>
            {
                props.isSecret &&
                <Input.Password
                    autoComplete={props.autoComplete ?? ''}
                    className={styles.textbox}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onTextChange}
                />
            }
            {
                !props.isSecret && props.mask &&
                        <MaskedInput mask={props.mask} placeholder={props.placeholder} className={styles.textbox} value={props.value} onChange={onTextChange} />
            }
            {
                !props.isSecret && !props.mask &&
                <Input
                    className={styles.textbox}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onTextChange}
                />
            }
        </div>

    )
}

export default SaturnInput;