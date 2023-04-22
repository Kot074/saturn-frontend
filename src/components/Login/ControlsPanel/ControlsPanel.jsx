import React from "react";
import styles from './ControlsPanel.module.css';
import SaturnButton from "../../common/SaturnButton/SaturnButton";

const ControlsPanel = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <SaturnButton value="Войти" />
        </div>
    )
}

export default ControlsPanel;