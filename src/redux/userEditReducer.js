import {saveUser} from "./api";

export const types = {
    INIT_NEW_USER: 'INIT_NEW_USER',
    SET_CURRENT_USER: 'SET_CURRENT_USER_FROM_URL',
    CHANGE_CURRENT_USER_LASTNAME: 'CHANGE_CURRENT_USER_LASTNAME',
    CHANGE_CURRENT_USER_NAME: 'CHANGE_CURRENT_USER_NAME',
    CHANGE_CURRENT_USER_PATRONYMIC: 'CHANGE_CURRENT_USER_PATRONYMIC',
    CHANGE_CURRENT_USER_PHONE: 'CHANGE_CURRENT_USER_PHONE',
    CHANGE_CURRENT_USER_EMAIL: 'CHANGE_CURRENT_USER_EMAIL',
    CHANGE_CURRENT_USER_PASSWORD: 'CHANGE_CURRENT_USER_PASSWORD',
    CHANGE_CURRENT_USER_ROLE: 'CHANGE_CURRENT_USER_ROLE',
    SAVE_CURRENT_USER: 'SAVE_CURRENT_USER',
}

export const getInitNewUserAction = (roles) => ({
    type: types.INIT_NEW_USER,
    roles: roles
})

export const getSetCurrentUserAction = (roles, user) => ({
    type: types.SET_CURRENT_USER,
    user: user,
    roles: roles
})

export const getChangeCurrentUserLastnameAction = (lastname) => ({
    type: types.CHANGE_CURRENT_USER_LASTNAME,
    lastname: lastname
})
export const getChangeCurrentUserNameAction = (name) => ({
    type: types.CHANGE_CURRENT_USER_NAME,
    name: name
})
export const getChangeCurrentUserPatronymicAction = (patronymic) => ({
    type: types.CHANGE_CURRENT_USER_PATRONYMIC,
    patronymic: patronymic
})

export const getChangeCurrentUserPhoneAction = (phone) => ({
    type: types.CHANGE_CURRENT_USER_PHONE,
    phone: phone
})

export const getChangeCurrentUserEmailAction = (email) => ({
    type: types.CHANGE_CURRENT_USER_EMAIL,
    email: email
})

export const getChangeCurrentUserPasswordAction = (password) => ({
    type: types.CHANGE_CURRENT_USER_PASSWORD,
    password: password
})

export const getChangeRoleAction = (item) => ({
    type: types.CHANGE_CURRENT_USER_ROLE,
    item: item
})

export const getSaveAction = () => ({
    type: types.SAVE_CURRENT_USER
})

let initState = {
    currentUser: {
        id: 0,
        name: "",
        lastname: "",
        patronymic: "",
        email: "",
        phone: "",
        role: '',
        password: ""
    },
    roles: []
};

const userEditReducer = (state = {...initState}, action) => {
    let currentUser = {...initState.currentUser};
    switch (action.type){
        case types.INIT_NEW_USER:
            return {...initState, roles: [...action.roles]};
        case types.SET_CURRENT_USER:
            return {...state, currentUser: {...action.user}, roles: [...action.roles]};
        case types.CHANGE_CURRENT_USER_LASTNAME:
            currentUser = {...state.currentUser, lastname: action.lastname};
            return {...state, currentUser: currentUser};
        case types.CHANGE_CURRENT_USER_NAME:
            currentUser = {...state.currentUser, name: action.name};
            return {...state, currentUser: currentUser};
        case types.CHANGE_CURRENT_USER_PATRONYMIC:
            currentUser = {...state.currentUser, patronymic: action.patronymic};
            return {...state, currentUser: currentUser};
        case types.CHANGE_CURRENT_USER_PHONE:
            currentUser = {...state.currentUser, phone: action.phone};
            return {...state, currentUser: currentUser};
        case types.CHANGE_CURRENT_USER_EMAIL:
            currentUser = {...state.currentUser, email: action.email};
            return {...state, currentUser: currentUser};
        case types.CHANGE_CURRENT_USER_PASSWORD:
            currentUser = {...state.currentUser, password: action.password};
            return {...state, currentUser: currentUser};
        case types.CHANGE_CURRENT_USER_ROLE:
            currentUser = {...state.currentUser, role: action.item.label}
            return {...state, currentUser: currentUser};
        case types.SAVE_CURRENT_USER:
            saveUser(state.currentUser).then(() => {
                window.location = `/users`;
            });
            return {...state}
        default:
            return {...state};
    }
}

export default userEditReducer;