import React from "react";
import SaturnInput from "../../Common/SaturnInput/SaturnInput";
import SaturnButton from "../../Common/SaturnButton/SaturnButton";
import {Form} from "antd";
import {setToken, UsersApi} from "../../../Api/UsersApi";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const onSubmit = (data) => {
        UsersApi.loginByEmail(data).then((response) => {
            setToken(response.data.token);
            navigate(-1);
        });
    }
    return (
        <Form
            name={'login'}
            labelCol={{span: 6}}
            wrapperCol={{span: 16}}
            onFinish={onSubmit}
        >
            <Form.Item
                wrapperCol={{
                    offset: 2
                }}
                label={'E-mail'}
                name={'email'}
            >
                <SaturnInput />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 2
                }}
                label={'Пароль'}
                name={'password'}
            >
                <SaturnInput isSecret/>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16
                }}
            >
                <SaturnButton value={'Войти'} htmlType={'submit'}/>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;
