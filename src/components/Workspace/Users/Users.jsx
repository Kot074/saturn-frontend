import React from "react";
import styles from "./Users.module.css";
import Table from "../../common/Table/Table";
import {useNavigate} from "react-router-dom";
import Button from "../../common/Button/Button";

const Users = (props) => {
    if (!props.data.isInit) {
        props.onInitialization();
    }

    const navigate = useNavigate();
    const onCreateUser = () => {
        props.onCreateUser(navigate);
    }
    const onSelectUser  = (user) => {
        props.onSelectUser(navigate, user);
    }
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div>Пользователи</div>
                <div>
                    <Button value='Добавить' onClick={onCreateUser} />
                </div>
            </div>
            <div className={styles.content}>
                <Table settings={props.data.tableSettings} data={props.data.users} selectRow={onSelectUser}/>
            </div>
        </div>
    )
}

export default Users;