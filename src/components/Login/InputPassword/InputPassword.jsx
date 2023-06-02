import React from "react";
import styles from './InputPassword.module.css';
import SaturnInput from "../../Common/SaturnInput/SaturnInput";

const InputPassword = () => {
    return (
        <div className={styles.container}>
            <label>Password:</label>
            <SaturnInput isSecret />
        </div>
    )
}

export default InputPassword;