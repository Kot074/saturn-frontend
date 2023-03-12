import React from "react";
import styles from './ControlsPanel.module.css';
import Button from "../../common/Button/Button";

const ControlsPanel = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <Button value="Войти" />
        </div>
    )
}

export default ControlsPanel;