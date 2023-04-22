import React from "react";
import styles from './InputPassword.module.css';
import Textbox from "../../common/SaturnInput/SaturnInput";

const InputPassword = () => {
    return (
        <div className={styles.container}>
            <label>Password:</label>
            <Textbox isSecret />
        </div>
    )
}

export default InputPassword;