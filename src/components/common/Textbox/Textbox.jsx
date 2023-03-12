import React from "react";
import styles from "./Textbox.module.css";

const Textbox = (props) => {
    let type = props.isSecret ? "password" : "text";

    return (
        <input type={type} className={styles.textbox} />
    )
}

export default Textbox;