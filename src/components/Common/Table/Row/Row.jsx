import React from "react";
import styles from "./Row.module.css";

const Row = (props) => {
    const onClick = () => {
        props.onClick(props.object);
    }

    return (
        <div className={styles.row} onClick={onClick}>
            {props.settings.map(opt => {
                return (
                    opt.width !== '' ?
                        <div className={styles.cell} style={{width: opt.width}}>{props.object[opt.key]}</div> :
                        <div className={styles.cell} style={{flex: 1}}>{props.object[opt.key]}</div>
                )
            })}
        </div>
    )
}

export default Row;