import React from "react";
import styles from "./Users.module.css";
import Table from "../../common/Table/Table";
import {useNavigate} from "react-router-dom";
import Button from "../../common/Button/Button";

const Users = (props) => {
    const navigate = useNavigate();
    const selectUser = (user) => {
        props.dispatch({type: 'OPEN_USER_EDITOR', navigate: navigate, id: user.id});
    };
    const createUser = () => {
        props.dispatch({type: 'OPEN_USER_EDITOR', navigate: navigate });
    }

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div>Пользователи</div>
                <div>
                    <Button value='Добавить' onClick={createUser} />
                </div>
            </div>
            <div className={styles.content}>
                <Table settings={props.data.tableSettings} data={props.data.data} selectRow={selectUser}/>
            </div>
        </div>
    )
}

export default Users;