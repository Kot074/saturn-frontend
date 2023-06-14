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
import {Form, Popconfirm} from "antd";
import {getCurrentUser} from "../../../Api/UsersApi";
import SaturnMaskedInput from "../../Common/SaturnMaskedInput/SaturnMaskedInput";

const Edit = () => {
    const [state, dispatch] = useReducerWithThunk(r.reducer, r.state);
    const params = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    let lastname = Form.useWatch('lastname', form);
    let name = Form.useWatch('name', form);
    let patronymic = Form.useWatch('patronymic', form);

    useEffect(() => {
        dispatch(initialization(params.userId, form));
    }, [params.userId]);

    const onSubmit = (user) => {
        dispatch(r.getSaveUserAction(user, params.userId, navigate))
    }

    const currentUser = getCurrentUser();

    return(
        <Form
            form={form}
            name={'user_edit'}
            onFinish={onSubmit}
            validateTrigger={'onSubmit'}
        >
            <div className={styles.header}>
                <div>{`${lastname ?? ''} ${name ?? ''} ${patronymic ?? ''}`} </div>
                <div className={styles.buttons}>
                    <div>
                        {
                            state.user.id && state.user.id !== currentUser.id && currentUser.role === "Administrator" &&
                            <Popconfirm
                                title={'Удаление пользователя'}
                                placement="bottomRight"
                                description={
                                    `Пользователь ${state.user.lastname} ${state.user.name} ${state.user.patronymic} будет удален.`
                                }
                                onConfirm={() => {
                                    dispatch(r.getDeleteUserAction(params.userId, navigate))
                                }}
                                okText={'Да'}
                                cancelText={'Нет'}
                            >
                                <SaturnButton
                                    icon={<DeleteOutlined/>}
                                    style={{backgroundColor: "red"}}
                                />
                            </Popconfirm>
                        }
                    </div>
                    <div>
                        <SaturnButton value='Сохранить' htmlType={'submit'}/>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <Form.Item
                    name={'lastname'}
                    rules={[{required: true, message: 'Поле "Фамилия" обязательно для заполнения.'}]}
                    label={'Фамилия'}
                    labelCol={{
                        xs: {span: 24},
                        sm: {span: 8}
                    }}
                    wrapperCol={{
                        xs: {span: 24},
                        sm: {span: 16}
                    }}
                >
                    <SaturnInput />
                </Form.Item>
                <Form.Item
                    name={'name'}
                    rules={[{required: true, message: 'Поле "Имя" обязательно для заполнения.'}]}
                    label={'Имя'}
                    labelCol={{
                        xs: {span: 24},
                        sm: {span: 8}
                    }}
                    wrapperCol={{
                        xs: {span: 24},
                        sm: {span: 16}
                    }}
                >
                    <SaturnInput />
                </Form.Item>
                <Form.Item
                    name={'patronymic'}
                    label={'Отчество'}
                    labelCol={{
                        xs: {span: 24},
                        sm: {span: 8}
                    }}
                    wrapperCol={{
                        xs: {span: 24},
                        sm: {span: 16}
                    }}
                >
                    <SaturnInput />
                </Form.Item>
                <Form.Item
                    name={'email'}
                    rules={[{required: true, message: 'Поле "Email" обязательно для заполнения.'}, {required: true, type: 'email', message: 'Введен некорректный адрес email.'}]}
                    label={'Email'}
                    labelCol={{
                        xs: {span: 24},
                        sm: {span: 8}
                    }}
                    wrapperCol={{
                        xs: {span: 24},
                        sm: {span: 16}
                    }}
                >
                    <SaturnInput />
                </Form.Item>
                <Form.Item
                    name={'phone'}
                    rules={[{required: true, message: 'Поле "Телефон" обязательно для заполнения.'}]}
                    label={'Телефон'}
                    labelCol={{
                        xs: {span: 24},
                        sm: {span: 8}
                    }}
                    wrapperCol={{
                        xs: {span: 24},
                        sm: {span: 16}
                    }}
                >
                    <SaturnMaskedInput
                        mask={'+7 (999) 999-99-99'}
                        onChange={(text) => form.setFieldValue('phone', text)}
                    />
                </Form.Item>
                <Form.Item
                    name={'role'}
                    rules={[{required: true, message: 'Поле "Роль" обязательно для заполнения.'}]}
                    label={'Роль'}
                    valuePropName={'selected_option'}
                    labelCol={{
                        xs: {span: 24},
                        sm: {span: 8}
                    }}
                    wrapperCol={{
                        xs: {span: 24},
                        sm: {span: 16}
                    }}
                >
                    <SaturnSelect
                        selected_option={state.user.role}
                        options={state.roles ?? []}
                        placeholder={'Выберите роль'}
                        disabled={state.user.id === currentUser.id || currentUser.role !== "Administrator"}
                        onSelect={(selectedItem)=>{
                            form.setFieldValue('role', selectedItem.label);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name={'password'}
                    label={'Пароль'}
                    rules={!params.userId && [{required: true, message: 'Поле "Пароль" обязательно для нового пользователя.'}]}
                    labelCol={{
                        xs: {span: 24},
                        sm: {span: 8}
                    }}
                    wrapperCol={{
                        xs: {span: 24},
                        sm: {span: 16}
                    }}
                >
                    <SaturnInput
                        is_secret="true"
                        autoComplete={'new-password'}
                    />
                </Form.Item>
            </div>
        </Form>
    )
}

export default Edit;
