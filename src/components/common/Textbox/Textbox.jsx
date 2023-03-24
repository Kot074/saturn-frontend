import React from "react";
import styles from "./Textbox.module.css";

const Textbox = (props) => {
    let type = props.isSecret ? "password" : "text";
    const onTextChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <input type={type} className={styles.textbox} value={props.value} onChange={onTextChange} />
    )
}

export default Textbox;