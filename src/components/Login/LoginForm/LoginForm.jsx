import React from "react";
import SaturnInput from "../../Common/SaturnInput/SaturnInput";
import SaturnButton from "../../Common/SaturnButton/SaturnButton";
import {Checkbox, Form} from "antd";
import {setCurrentUser, UsersApi} from "../../../Api/UsersApi";
import {useNavigate} from "react-router-dom";
import styles from './LoginForm.module.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const isPersistant = data !== null ? data.remember : false;
        UsersApi.loginByEmail(data).then((response) => {
            setCurrentUser(response.data, isPersistant);
            navigate(-1);
        });
    }
    return (
        <Form
            name={'login'}
            onFinish={onSubmit}
            layout={'horizontal'}
        >
            <div className={styles.row}>
                <Form.Item
                    wrapperCol={{
                        offset: 1,
                        span: 16
                    }}
                    label={'E-mail'}
                    name={'email'}
                >
                    <SaturnInput />
                </Form.Item>
            </div>
            <div className={styles.row}>
                <Form.Item
                    wrapperCol={{
                        span: 16
                    }}
                    label={'Пароль'}
                    name={'password'}
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
                    name={'remember'}
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
