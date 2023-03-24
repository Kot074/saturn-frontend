import React from "react";
import styles from "./Edit.module.css";
import Button from "../../../common/Button/Button";
import {useSearchParams} from "react-router-dom";
import Textbox from "../../../common/Textbox/Textbox";
import {
    getChangeCurrentUserLastnameAction,
    getChangeCurrentUserNameAction, getChangeCurrentUserPatronymicAction,
    getCurrentUserFromUrlAction, getInitNewUserAction
} from "../../../../redux/userEditReducer";

const Edit = (props) => {
    const [params] = useSearchParams();
    const currentId = params.get('id');
    if (!currentId && props.currentUser.id !== 0) {
        props.dispatch(getInitNewUserAction());
    } else if (currentId && props.currentUser.id.toString() !== currentId){
        props.dispatch(getCurrentUserFromUrlAction(currentId, props.users))
    }

    const onChangeLastname = (text) => {
        props.dispatch(getChangeCurrentUserLastnameAction(text));
    }
    const onChangeName = (text) => {
        props.dispatch(getChangeCurrentUserNameAction(text));
    }
    const onChangePatronymic = (text) => {
        props.dispatch(getChangeCurrentUserPatronymicAction(text));
    }

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <div>{`${props.currentUser.lastname ?? ''} ${props.currentUser.name ?? ''} ${props.currentUser.patronymic ?? ''}`} </div>
                <div>
                    <Button value='Сохранить' onClick={() => {console.log('User was saved!');}} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div>
                        Фамилия:
                    </div>
                    <Textbox value={props.currentUser.lastname} onChange={onChangeLastname}/>
                </div>
                <div className={styles.item}>
                    <div>
                        Имя:
                    </div>
                    <Textbox value={ props.currentUser.name} onChange={onChangeName}/>
                </div>
                <div className={styles.item}>
                    <div>
                        Отчество:
                    </div>
                    <Textbox value={props.currentUser.patronymic} onChange={onChangePatronymic}/>
                </div>
            </div>
        </div>
    )
}

export default Edit;