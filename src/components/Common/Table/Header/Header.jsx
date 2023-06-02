import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={styles.container}>
            {
                props.settings.map((item) => {
                    return (
                        item.width !== '' ?
                            <div className={styles.cell} style={{width: item.width}}>{item.title}</div> :
                            <div className={styles.cell} style={{flex: 1}}>{item.title}</div>
                    )
                })
            }
        </div>
    )
}

export default Header;