import React from "react";
import styles from './Header.module.css';
import Logo from "./Logo/Logo";
import Text from "./Text/Text";
import CurrentUser from "./CurrentUser/CurrentUser";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Text />
            <CurrentUser />
        </header>
    );
}

export default Header;
