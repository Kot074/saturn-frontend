import React from "react";
import styles from './Login.module.css';
import Logo from "./Logo/Logo";
import InputEmail from "./InputEmail/InputEmail";
import InputPassword from "./InputPassword/InputPassword";
import ControlsPanel from "./ControlsPanel/ControlsPanel";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Login}>
                <Logo />
                <InputEmail />
                <InputPassword />
                <ControlsPanel />
            </div>
        </div>
    )
}

export default Login;