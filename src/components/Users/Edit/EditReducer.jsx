import {UsersApi} from "../../../Api/UsersApi";

export const types = {
    SET_USER: 'SET_USER',
    SET_ROLES: 'SET_ROLES',

    CHANGE_LASTNAME: 'CHANGE_LASTNAME',
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_PATRONYMIC: 'CHANGE_PATRONYMIC',

    CHANGE_EMAIL: 'CHANGE_EMAIL',
    CHANGE_PHONE: 'CHANGE_PHONE',
    CHANGE_ROLE: 'CHANGE_ROLE',

    CHANGE_PASSWORD: 'CHANGE_PASSWORD',

    SAVE_USER: 'SAVE_USER',
}

export const setUserAction = (user) => ({
    type: types.SET_USER,
    user: user
});
export const setRolesAction = (roles) => ({
    type: types.SET_ROLES,
    roles: roles
});
export const changeLastnameAction = (lastname) => ({
    type: types.CHANGE_LASTNAME,
    lastname: lastname
});
export const changeNameAction = (name) => ({
    type: types.CHANGE_NAME,
    name: name
});
export const changePatronymicAction = (patronymic) => ({
    type: types.CHANGE_PATRONYMIC,
    patronymic: patronymic
});
export const changeEmailAction = (email) => ({
    type: types.CHANGE_EMAIL,
    email: email
});
export const changePhoneAction = (phone) => ({
    type: types.CHANGE_PHONE,
    phone: phone
});
export const changeRoleAction = (role) => ({
    type: types.CHANGE_ROLE,
    role: role
});
export const changePasswordAction = (password) => ({
    type: types.CHANGE_PASSWORD,
    password: password
});
export const saveUserAction = (user, navigate) => ({
    type: types.SAVE_USER,
    user: user,
    navigate: navigate,
});

export let state = {
    currentUser: {
        lastname: '',
        name: '',
        patronymic: '',
        email: '',
        phone: '',
        role: ''
    },
    roles: []
};

export const reducer = (state, action) => {
    let currentUser;
    switch (action.type){
        case types.SET_USER:
            currentUser = {...state.currentUser}
            return {...state, currentUser: {...action.user}}
        case types.SET_ROLES:
            const updatedRoles = action.roles.map((item, index) => ({label:item, value: index}));
            return {...state, roles: updatedRoles};
        case types.CHANGE_LASTNAME:
            currentUser = {...state.currentUser};
            currentUser.lastname = action.lastname;
            return {...state, currentUser: {...currentUser}};
        case types.CHANGE_NAME:
            currentUser = {...state.currentUser};
            currentUser.name = action.name;
            return {...state, currentUser: {...currentUser}};
        case types.CHANGE_PATRONYMIC:
            currentUser = {...state.currentUser};
            currentUser.patronymic = action.patronymic;
            return {...state, currentUser: {...currentUser}};
        case types.CHANGE_EMAIL:
            currentUser = {...state.currentUser};
            currentUser.email = action.email;
            return {...state, currentUser: {...currentUser}};
        case types.CHANGE_PHONE:
            currentUser = {...state.currentUser};
            currentUser.phone = action.phone;
            return {...state, currentUser: {...currentUser}};
        case types.CHANGE_ROLE:
            currentUser = {...state.currentUser};
            currentUser.role = action.role;
            return {...state, currentUser: {...currentUser}};
        case types.CHANGE_PASSWORD:
            currentUser = {...state.currentUser};
            currentUser.password = action.password;
            return {...state, currentUser: {...currentUser}};
        case types.SAVE_USER:
            UsersApi.saveUser(action.user).then(() => {});
            action.navigate('/users');
            return {...state};
        default:
            return {...state};
    }
}