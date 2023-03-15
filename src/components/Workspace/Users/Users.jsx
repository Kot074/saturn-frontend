import React from "react";
import styles from "./Users.module.css";
import Table from "../../common/Table/Table";
import {useNavigate} from "react-router-dom";
import Button from "../../common/Button/Button";

const Users = (props) => {
    const navigate = useNavigate();
    const selectUser = (user) => {
        navigate(`/users/edit/${user.id}`);
    }

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div>Пользователи</div>
                <div>
                    <Button value='Добавить' />
                </div>
            </div>
            <div className={styles.content}>
                <Table settings={props.data.tableSettings} data={props.data.data} selectRow={selectUser}/>
            </div>
        </div>
    )
}

export default Users;