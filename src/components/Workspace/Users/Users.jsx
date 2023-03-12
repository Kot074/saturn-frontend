import React from "react";
import styles from "./Users.module.css";
import Table from "../../common/Table/Table";
import {useNavigate} from "react-router-dom";

const Users = () => {
    let users = [
        {
            id: 1,
            name: "Константин",
            lastname: "Шарыгин",
            patronymic: "Владимирович",
            email: "kot.074@mail.ru",
            phone: "8 (905) 485-16-58",
            role: "Administrator"
        },
        {
            id: 2,
            name: "Александр",
            lastname: "Сидоров",
            patronymic: "Михайлович",
            email: "a.sidorov@mail.ru",
            phone: "8 (555) 555-55-55",
            role: "Administrator"
        },
        {
            id: 3,
            name: "Петр",
            lastname: "Петров",
            patronymic: "Петрович",
            email: "p.petrov@mail.ru",
            phone: "8 (999) 000-00-00",
            role: "User"
        },
        {
            id: 4,
            name: "Иван",
            lastname: "Иванов",
            patronymic: "Иванович",
            email: "i.ivanov@mail.ru",
            phone: "8 (222) 222-22-22",
            role: "Guest"
        },
    ]
    let headerSettings = [
        {
            title: "ID",
            width: "50px"
        },
        {
            title: "Фамилия",
            width: ""
        },
        {
            title: "Имя",
            width: ""
        },
        {
            title: "Отчество",
            width: ""
        },
        {
            title: "Email",
            width: ""
        },
        {
            title: "Телефон",
            width: ""
        },
        {
            title: "Роль",
            width: ""
        },
    ]

    const navigate = useNavigate();
    const selectUser = (user) => {
        navigate(`/users/edit/${user.id}`);
    }

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                Пользователи
            </div>
            <div className={styles.content}>
                <Table settings={headerSettings} data={users} selectRow={selectUser}/>
            </div>
        </div>
    )
}

export default Users;