import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.container}>
            <img src="/SaturnLogo.png" alt='Logo'/>
        </div>
    )
}

export default Logo;