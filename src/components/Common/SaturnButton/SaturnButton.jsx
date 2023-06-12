import React from "react";
import styles from "./SaturnButton.module.css";
import {Button} from "antd";

const SaturnButton = (props) => {
    return (
        <Button {...props} className={styles.button} onClick={props.onClick}>{props.value}</Button>
    )
}

export default SaturnButton;
