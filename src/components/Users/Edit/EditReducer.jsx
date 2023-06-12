import {UsersApi} from "../../../Api/UsersApi";

export const types = {
    INITIALIZATION: "INITIALIZATION"
}

const GetInitializationAction = (roles, user) => ({
    type: types.INITIALIZATION,
    roles: roles,
    user: user
})

export const initialization = (userId, form) => (dispatch) => {
    let roles = [];
    UsersApi.getRoles().then(response => {
        let data = response.data;
        roles = data.map(item => ({label: item, value: data.indexOf(item)}));
        UsersApi.getUserById(userId).then(response => {
            dispatch(GetInitializationAction(roles, response.data));
            form.setFieldsValue(response.data);
        })
    })
}

export let state = {
    user: {
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
        default:
            return state;
    }
}
