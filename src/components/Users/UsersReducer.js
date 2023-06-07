import {UsersApi} from "../../Api/UsersApi";

export const types = {
    SET_USERS: 'SET_USERS',
    EDIT_USER: 'EDIT_USER'
}

export let state = {
    tableSettings: [
        {
            title: "ID",
            key: 'id',
            width: "50px"
        },
        {
            title: "Фамилия",
            key: 'lastname',
            width: ""
        },
        {
            title: "Имя",
            key: 'name',
            width: ""
        },
        {
            title: "Отчество",
            key: 'patronymic',
            width: ""
        },
        {
            title: "Email",
            key: 'email',
            width: ""
        },
        {
            title: "Телефон",
            key: 'phone',
            width: ""
        },
        {
            title: "Роль",
            key: 'role',
            width: ""
        },
    ],
    users: [],
    isFetching: false
}

export const setUsers = (users) => ({
    type: types.SET_USERS,
    users: users
})

export const editUser = (userId, navigate) => ({
    type: types.EDIT_USER,
    userId: userId,
    navigate: navigate
})

export const initialization = () => {
    return (dispatch) => {
        UsersApi.getUsers().then(
            (response) => {
                dispatch(setUsers(response.data));
            }
        )
    }
}

export const reducer = (state, action) => {
    switch (action.type){
        case types.SET_USERS:
            return {...state, users: action.users, isFetching: true}
        case types.EDIT_USER:
            let url = action.userId ? `/users/edit/${action.userId}` : `/users/edit`;
            action.navigate(url);
            return {...state, isFetching: false}
        default:
            return {...state}
    }
}
