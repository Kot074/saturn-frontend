import React from "react";
import styles from './Header.module.css';
import Logo from "./Logo/Logo";
import Text from "./Text/Text";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Text />
        </header>
    );
}

export default Header;