import React from "react";
import styles from './Sidebar.module.css';
import Title from "./Title/Title";
import MenuItem from "./MenuItem/MenuItem";

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <Title />
            <MenuItem text='Пользователи' href='/users' />
            <MenuItem text='Новости' href='/news' />
            <MenuItem text='Клиенты' href='/clients' />
            <MenuItem text='Мероприятия' href='/events' />
            <MenuItem text='Инструменты' href='/tools' />
            <MenuItem text='Поддержка' href='/support' />
        </nav>
    )
}

export default Sidebar;