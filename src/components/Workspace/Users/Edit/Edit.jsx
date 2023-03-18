import React from "react";
import styles from "./Edit.module.css";
import Button from "../../../common/Button/Button";
import {useSearchParams} from "react-router-dom";

const Edit = (props) => {
    const [params] = useSearchParams();
    let userId = params.get('id');
    let currentUser = props.users.find( (user) => user.id == userId );

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div>{userId ? `${currentUser.lastname} ${currentUser.name} ${currentUser.patronymic}` : '[Новый]'} </div>
                <div>
                    <Button value='Сохранить' onClick={() => {console.log('User was saved!');}} />
                </div>
            </div>
            <div className={styles.content}>
                Редактирование пользователя
            </div>
        </div>
    )
}

export default Edit;