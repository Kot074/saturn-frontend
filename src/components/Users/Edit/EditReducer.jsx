import {UsersApi} from "../../../Api/UsersApi";

export const types = {
    INITIALIZATION: "INITIALIZATION",

    SAVE_USER: "SAVE_USER",
    DELETE_USER: "DELETE_USER",

    CHANGE_AVATAR: "CHANGE_AVATAR"
}

// Action creators
const GetInitializationAction = (roles, user) => ({
    type: types.INITIALIZATION,
    roles: roles,
    user: user
})

export const getSaveUserAction = (user, userId, navigate) => ({
    type: types.SAVE_USER,
    user: user,
    userId: userId,
    navigate: navigate
})

export const getDeleteUserAction = (userId, navigate) => ({
    type: types.DELETE_USER,
    userId: userId,
    navigate: navigate
})

export const getChangeAvatarAction = (base64, form) => ({
    type: types.CHANGE_AVATAR,
    base64,
    form
})

// Thunks
export const initialization = (userId, form) => (dispatch) => {
    let roles = [];
    UsersApi.getRoles().then(response => {
        let data = response.data;
        roles = data.map(item => ({label: item, value: data.indexOf(item)}));
        if (userId) {
            UsersApi.getUserById(userId).then(response => {
                let user = {...response.data, avatar: response.data.avatar ?? '/unknownAvatar.jpeg'};
                dispatch(GetInitializationAction(roles, user));
                form.setFieldsValue(user);
            });
        } else {
            dispatch(GetInitializationAction(roles, state.user));
        }
    })
}

export let state = {
    user: {
        avatar: '',
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
    switch (action.type){
        case types.INITIALIZATION:
            return {...state, roles: [...action.roles], user: {...action.user}};
        case types.SAVE_USER:
            if(action.userId) {
                UsersApi.updateUser({...action.user, id: action.userId}).then(() => {
                    action.navigate('/users');
                });
            } else {
                UsersApi.createUser({...action.user, id: 0}).then(() => {
                    action.navigate('/users');
                });
            }
            return state;
        case types.DELETE_USER:
            UsersApi.deleteUser(action.userId).then(() => {
                action.navigate('/users');
            });
            return state;
        case types.CHANGE_AVATAR:
            action.form.setFieldValue('avatar', action.base64);
            return state;
        default:
            return state;
    }
}
