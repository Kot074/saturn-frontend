import React from "react";
import styles from "./Table.module.css";
import Header from "./Header/Header";
import Row from "./Row/Row";

const Table = (props) => {
    const selectRow = (obj) => {
        props.selectRow(obj);
    }

    return (
        <div className={styles.table}>
            <Header settings={props.settings} />
            {
                props.data.map((item) =>
                    <Row object={item} settings={props.settings} onClick={selectRow}/>)
            }
        </div>
    )
}

export default Table;