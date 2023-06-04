import React from "react";
import styles from "./SaturnInput.module.css";
import {Input} from "antd";

const SaturnInput = (props) => {
    const onTextChange = (event) => {
        props.onChange(event.target.value);
    }

    if (props.isSecret) {
        return (
            <Input.Password
                {...props}
                autoComplete={props.autoComplete ?? ''}
                className={styles.textbox}
                placeholder={props.placeholder}
                value={props.value}
                onChange={onTextChange}
            />
        );
    } else {
        return (
            <Input
                {...props}
                className={styles.textbox}
                placeholder={props.placeholder}
                value={props.value}
                onChange={onTextChange}
            />
        )
    }
}

export default SaturnInput;
