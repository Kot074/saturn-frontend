import React from 'react';
import styles from './CurrentUser.module.css'
import {forgotingCurrentUser, getCurrentUser} from "../../../Api/UsersApi";
import {useNavigate} from "react-router-dom";

const CurrentUser = () => {
    const currentUser = getCurrentUser();
    const navigate = useNavigate();

    const onExit = () => {
        forgotingCurrentUser();
        navigate(0);
    }
    const toProfile = () => {
        navigate(`/users/edit/${currentUser.id}`);
    }

    if (currentUser.token === '') {
        return <></>
    }

    return (
        <div className={styles.block}>
            <div className={styles.avatar}>
                <img alt={'avatar'} src={'/unknownAvatar.jpeg'}/>
            </div>
            <div className={styles.user}>
                <span onClick={toProfile}>{currentUser.shortName ?? ''}</span>
            </div>
            <div className={styles.logout}>
                <span onClick={onExit}>Выйти</span>
            </div>
        </div>
    )
}

export default CurrentUser;
