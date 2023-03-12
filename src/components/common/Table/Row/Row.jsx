import React from "react";
import styles from "./Row.module.css";

const Row = (props) => {
    const onClick = () => {
        props.onClick(props.object);
    }

    return (
        <div className={styles.row} onClick={onClick}>
            {Object.keys(props.object).map(key => {
                let index = Object.keys(props.object).indexOf(key);
                let width = props.settings[index].width;

                return (
                    width !== '' ?
                        <div className={styles.cell} style={{width: width}}>{props.object[key]}</div> :
                        <div className={styles.cell} style={{flex: 1}}>{props.object[key]}</div>
                )
            })}
        </div>
    )
}

export default Row;