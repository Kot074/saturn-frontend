import React from "react";
import styles from './InputEmail.module.css';
import Textbox from "../../common/Textbox/Textbox";

const InputEmail = () => {
    return (
        <div className={styles.container}>
            <label>Email:</label>
            <Textbox />
        </div>
    )
}

export default InputEmail;