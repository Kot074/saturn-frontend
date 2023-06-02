import React, {useEffect} from "react";
import styles from "./Users.module.css";
import Table from "../Common/Table/Table";
import {useNavigate} from "react-router-dom";
import SaturnButton from "../Common/SaturnButton/SaturnButton";
import * as r from './UsersReducer';
import useReducerWithThunk from "use-reducer-thunk";
import {initialization} from "./UsersReducer";

const Users = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducerWithThunk(r.reducer, r.state);
    useEffect(() => {
        dispatch(initialization());
    }, [state])

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div>Пользователи</div>
                <div>
                    <SaturnButton value='Добавить' onClick={() => {dispatch(r.editUser(null, navigate))}} />
                </div>
            </div>
            <div className={styles.content}>
                <Table settings={state.tableSettings} data={state.users} selectRow={(user) => {dispatch(r.editUser(user.id, navigate))}}/>
            </div>
        </div>
    )
}

export default Users;