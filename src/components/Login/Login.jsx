import React from "react";
import styles from './Login.module.css';
import Logo from "./Logo/Logo";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Login}>
                <Logo />
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;