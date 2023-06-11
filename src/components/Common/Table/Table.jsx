import React from "react";
import styles from "./Table.module.css";
import Header from "./Header/Header";
import Row from "./Row/Row";

const Table = (props) => {
    const selectRow = (obj) => {
        props.selectRow(obj);
    }
    let counter = 0;

    return (
        <div className={styles.table}>
            <Header settings={props.settings} />
            {
                props.data.map((item) =>
                    <Row key={counter++} object={item} settings={props.settings} onClick={selectRow}/>)
            }
        </div>
    )
}

export default Table;
