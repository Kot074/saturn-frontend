import React, {useEffect} from "react";
import styles from "./Edit.module.css";
import * as r from "./EditReducer";
import ImgCrop from 'antd-img-crop';
import {useNavigate, useParams} from "react-router-dom";
import SaturnButton from "../../Common/SaturnButton/SaturnButton";
import SaturnInput from "../../Common/SaturnInput/SaturnInput";
import SaturnSelect from "../../Common/SaturnSelect/SaturnSelect";
import useReducerWithThunk from "use-reducer-thunk";
import {initialization} from "./EditReducer";
import {DeleteOutlined} from "@ant-design/icons";
import {Form, Popconfirm, Upload} from "antd";
import {getCurrentUser} from "../../../Api/UsersApi";
import SaturnMaskedInput from "../../Common/SaturnMaskedInput/SaturnMaskedInput";

const Edit = () => {
    const [state, dispatch] = useReducerWithThunk(r.reducer, r.state);
    const params = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const emptyAvatar = '/unknownAvatar.jpeg';

    let lastname = Form.useWatch('lastname', form);
    let name = Form.useWatch('name', form);
    let patronymic = Form.useWatch('patronymic', form);

    useEffect(() => {
        dispatch(initialization(params.userId, form));
    }, [params.userId]);

    const onSubmit = (user) => {
        if (user.avatar === emptyAvatar) {
            user.avatar = null;
        }
        dispatch(r.getSaveUserAction(user, params.userId, navigate))
    }

    const onChangeAvatar = async (fileObj) => {
        let src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            }
            reader.readAsDataURL(fileObj);
        })

        form.setFieldValue('avatar', src);
    }

    const currentUser = getCurrentUser();

    return (
        <Form
            form={form}
            name={'user_edit'}
            onFinish={onSubmit}
            validateTrigger={'onSubmit'}
            labelAlign={'left'}
            labelCol={{
                style: {width: '100px'}
            }}
            wrapperCol={{
                offset: 1
            }}
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
                <div className={styles.main}>
                    <div className={styles.avatar}>
                        <ImgCrop rotationSlider onModalOk={(file) => {onChangeAvatar(file)}}>
                            <Upload showUploadList={false}
                                    customRequest={() => {}}
                            >
                                <Form.Item
                                    name={'avatar'}
                                    valuePropName={'src'}
                                    initialValue={emptyAvatar}
                                    wrapperCol={{}}
                                >
                                    <img alt={'Avatar'} />
                                </Form.Item>
                            </Upload>
                        </ImgCrop>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.item}>
                            <Form.Item
                                name={'lastname'}
                                rules={[{required: true, message: 'Поле "Фамилия" обязательно для заполнения.'}]}
                                label={'Фамилия'}
                            >
                                <SaturnInput/>
                            </Form.Item>
                        </div>
                        <div className={styles.item}>
                            <Form.Item
                                name={'name'}
                                rules={[{required: true, message: 'Поле "Имя" обязательно для заполнения.'}]}
                                label={'Имя'}
                            >
                                <SaturnInput/>
                            </Form.Item>
                        </div>
                        <div className={styles.item}>
                            <Form.Item
                                name={'patronymic'}
                                label={'Отчество'}
                            >
                                <SaturnInput/>
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.item}>
                        <Form.Item
                            name={'email'}
                            rules={[{required: true, message: 'Поле "Email" обязательно для заполнения.'}, {
                                required: true,
                                type: 'email',
                                message: 'Введен некорректный адрес email.'
                            }]}
                            label={'Email'}
                        >
                            <SaturnInput/>
                        </Form.Item>
                    </div>
                    <div className={styles.item}>
                        <Form.Item
                            name={'phone'}
                            rules={[{required: true, message: 'Поле "Телефон" обязательно для заполнения.'}]}
                            label={'Телефон'}
                        >
                            <SaturnMaskedInput
                                mask={'+7 (999) 999-99-99'}
                                onChange={(text) => form.setFieldValue('phone', text)}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className={styles.additional}>
                    <div className={styles.item}>
                        <Form.Item
                            name={'role'}
                            rules={[{required: true, message: 'Поле "Роль" обязательно для заполнения.'}]}
                            label={'Роль'}
                            valuePropName={'selected_option'}
                        >
                            <SaturnSelect
                                selected_option={state.user.role}
                                options={state.roles ?? []}
                                placeholder={'Выберите роль'}
                                disabled={state.user.id === currentUser.id || currentUser.role !== "Administrator"}
                                onSelect={(selectedItem) => {
                                    form.setFieldValue('role', selectedItem.label);
                                }}
                            />
                        </Form.Item>
                    </div>
                    <div className={styles.item}>
                        <Form.Item
                            name={'password'}
                            label={!params.userId ? 'Пароль' : 'Новый пароль'}
                            rules={!params.userId && [{
                                required: true,
                                message: 'Поле "Пароль" обязательно для нового пользователя.'
                            }]}
                        >
                            <SaturnInput
                                is_secret="true"
                                autoComplete={'new-password'}
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default Edit;
