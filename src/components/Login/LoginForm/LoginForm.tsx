import React from "react";
import SaturnInput from "../../Common/SaturnInput/SaturnInput";
import SaturnButton from "../../Common/SaturnButton/SaturnButton";
import {Checkbox, Form} from "antd";
import {setCurrentUser, UsersApi} from "../../../Api/UsersApi";
import {useNavigate} from "react-router-dom";
import styles from './LoginForm.module.css';
import {LoginModel} from "../../../models/LoginModel";

const LoginForm = () => {
    const navigate = useNavigate();
    const onSubmit = (data: LoginModel) => {
        const isPersistent: boolean = data.isPersistent;
        UsersApi.loginByEmail(data).then((response) => {
            setCurrentUser(response.data, isPersistent);
            navigate(-1);
        });
    }
    return (
        <Form
            name={'login'}
            onFinish={onSubmit}
            layout={'horizontal'}
            validateTrigger={'onSubmit'}
            labelAlign={'left'}
            labelCol={{
                style: {width: '100px'}
            }}
        >
            <div className={styles.row}>
                <Form.Item
                    label={'E-mail'}
                    name={'email'}
                    style={{width: '100%'}}
                >
                    <SaturnInput />
                </Form.Item>
            </div>
            <div className={styles.row}>
                <Form.Item
                    label={'Пароль'}
                    name={'password'}
                    style={{width: '100%'}}
                >
                    <SaturnInput is_secret={'true'}/>
                </Form.Item>
            </div>
            <div className={styles.row}>
                <Form.Item
                    wrapperCol={{
                        span: 2
                    }}
                    label={'Запомнить'}
                    name={'isPersistent'}
                    style={{width: '200px'}}
                    valuePropName={'checked'}
                >
                    <Checkbox />
                </Form.Item>
                <SaturnButton value={'Войти'} htmlType={'submit'}/>
            </div>

        </Form>
    )
}

export default LoginForm;
