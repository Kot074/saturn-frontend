import React from "react";
import styles from './Logo.module.css';
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <NavLink to='/'><img src='SaturnLogo.png' alt='Logo' /></NavLink>
        </div>
    )
}

export default Logo;