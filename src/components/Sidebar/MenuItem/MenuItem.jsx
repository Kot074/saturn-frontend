import React from "react";
import styles from "./MenuItem.module.css";
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {
    return (
        <div className={styles.item}>
            <NavLink to={props.href} className={({isActive}) => isActive ? styles.active : '' }>{props.text}</NavLink>
        </div>
    )
}

export default MenuItem;