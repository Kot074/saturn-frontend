import React from "react";
import styles from "./Edit.module.css";
import Button from "../../../common/Button/Button";
import Textbox from "../../../common/Textbox/Textbox";
import {useSearchParams} from "react-router-dom";
import Select from "../../../common/Select/Select";

const Edit = (props) => {
    const [params] = useSearchParams();
    const currentId = params.get('id');
    props.initialize(currentId, props.currentUser);

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
                    <Textbox value={props.currentUser.lastname} onChange={props.onChangeLastname}/>
                </div>
                <div className={styles.item}>
                    <div>
                        Имя:
                    </div>
                    <Textbox value={ props.currentUser.name} onChange={props.onChangeName}/>
                </div>
                <div className={styles.item}>
                    <div>
                        Отчество:
                    </div>
                    <Textbox value={props.currentUser.patronymic} onChange={props.onChangePatronymic}/>
                </div>
                <div className={styles.item}>
                    <div>
                        Роль:
                    </div>
                    <Select />
                </div>
            </div>
        </div>
    )
}

export default Edit;