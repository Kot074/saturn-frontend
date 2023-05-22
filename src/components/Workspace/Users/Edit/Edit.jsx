import React, {useEffect, useReducer} from "react";
import styles from "./Edit.module.css";
import * as r from "./EditReducer";
import {useNavigate, useParams} from "react-router-dom";
import SaturnButton from "../../../common/SaturnButton/SaturnButton";
import {getRoles, getUserById} from "../../../../redux/api";
import SaturnInput from "../../../common/SaturnInput/SaturnInput";
import SaturnSelect from "../../../common/SaturnSelect/SaturnSelect";

const Edit = () => {
    const [state, dispatch] = useReducer(r.reducer, null, () => r.state);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getRoles().then((roleResponse) => {
            const roles = roleResponse.data;
            dispatch(r.setRolesAction(roles));

            if (params.userId) {
                getUserById(params.userId).then((userResponse) => {
                    dispatch(r.setUserAction(userResponse.data));
                })
            }
        })
    }, [params.userId]);

    return (
            <div className={styles.body}>
                <div className={styles.header}>
                    <div>{`${state.currentUser.lastname ?? ''} ${state.currentUser.name ?? ''} ${state.currentUser.patronymic ?? ''}`} </div>
                    <div>
                        <SaturnButton
                            value='Сохранить'
                            onClick={() => {
                                dispatch(r.saveUserAction(state.currentUser, navigate));
                            }} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <div>
                            Фамилия:
                        </div>
                        <SaturnInput value={state.currentUser.lastname} onChange={(text) => {dispatch(r.changeLastnameAction(text))}}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Имя:
                        </div>
                        <SaturnInput value={ state.currentUser.name} onChange={(text) => {dispatch(r.changeNameAction(text))}}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Отчество:
                        </div>
                        <SaturnInput value={state.currentUser.patronymic} onChange={(text) => {dispatch(r.changePatronymicAction(text))}}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Email:
                        </div>
                        <SaturnInput value={state.currentUser.email} onChange={(text) => {dispatch(r.changeEmailAction(text))}}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Телефон:
                        </div>
                        {/*
                            TODO: Необходимо исправить данное поле, чтобы вводить номер телефона по маске.
                            На текущий момент, при использовании antd-mask-input поле очищалось, при вводе данных
                            в другие поля.
                        */}
                        <SaturnInput
                            value={state.currentUser.phone}
                            placeholder={'Введите номер телефона'}
                            onChange={(text) => {dispatch(r.changePhoneAction(text))}}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Роль:
                        </div>
                        <SaturnSelect
                            selectedOption={state.currentUser.role}
                            options={state.roles ?? []}
                            placeHolder={'Выберите роль'}
                            onSelect={(selected) => {dispatch(r.changeRoleAction(selected.label))}}/>
                    </div>
                    <div className={styles.item}>
                        <div>
                            Пароль:
                        </div>
                        <SaturnInput
                            isSecret
                            autoComplete={'new-password'}
                            value={state.currentUser.password}
                            onChange={(text) => {dispatch(r.changePasswordAction(text))}}/>
                    </div>
                </div>
            </div>
    )
}

export default Edit;