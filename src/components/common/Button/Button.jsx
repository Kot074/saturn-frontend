import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <input type="button" value={props.value ?? "Button"} className={styles.button}/>
    )
}

export default Button;