import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
    return (
        <div className={styles.body}>
            Добро пожаловать в Автоматизированную Систему Управления "Сатурн".<br /><br />
            Данная система предназначена для упрощения управления организацией и<br />
            повышения эффективности сотрудников, путем автоматизации рабочих процессов.<br /><br />
            Для начала работы выберите необходимый раздел в панели меню.
        </div>
    )
}

export default Welcome;