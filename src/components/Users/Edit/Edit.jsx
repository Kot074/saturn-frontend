import React, {useEffect} from "react";
import styles from "./Edit.module.css";
import * as r from "./EditReducer";
import {useNavigate, useParams} from "react-router-dom";
import SaturnButton from "../../Common/SaturnButton/SaturnButton";
import SaturnInput from "../../Common/SaturnInput/SaturnInput";
import SaturnSelect from "../../Common/SaturnSelect/SaturnSelect";
import useReducerWithThunk from "use-reducer-thunk";
import {initialization} from "./EditReducer";
import {DeleteOutlined} from "@ant-design/icons";
import {Popconfirm} from "antd";

const Edit = () => {
    const [state, dispatch] = useReducerWithThunk(r.reducer, r.state);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(initialization(params.userId));
    }, []);

    return (
            <div className={styles.body}>
                <div className={styles.header}>
                    <div>{`${state.currentUser.lastname ?? ''} ${state.currentUser.name ?? ''} ${state.currentUser.patronymic ?? ''}`} </div>
                    <div className={styles.buttons}>
                        <div>
                        {
                            state.currentUser.id &&
                            <Popconfirm
                                title={'Удаление пользователя'}
                                placement="bottomRight"
                                description={
                                    `Пользователь ${state.currentUser.lastname} ${state.currentUser.name} ${state.currentUser.patronymic} будет удален.`
                                }
                                onConfirm={() => {
                                    dispatch(r.deleteUserAction(navigate));
                                }}
                                okText={'Да'}
                                cancelText={'Нет'}
                            >
                                <SaturnButton
                                    icon={<DeleteOutlined />}
                                    style={{backgroundColor: "red"}}
                                />
                            </Popconfirm>
                        }
                        </div>
                        <div>
                        <SaturnButton
                            value='Сохранить'
                            onClick={() => {
                                dispatch(r.saveUserAction(navigate));
                            }} />
                        </div>
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
