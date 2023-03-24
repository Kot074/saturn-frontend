export const types = {
    INIT_NEW_USER: 'INIT_NEW_USER',
    SET_CURRENT_USER_FROM_URL: 'SET_CURRENT_USER_FROM_URL',
    CHANGE_CURRENT_USER_LASTNAME: 'CHANGE_CURRENT_USER_LASTNAME',
    CHANGE_CURRENT_USER_NAME: 'CHANGE_CURRENT_USER_NAME',
    CHANGE_CURRENT_USER_PATRONYMIC: 'CHANGE_CURRENT_USER_PATRONYMIC',
}

export const getInitNewUserAction = () => ({
    type: types.INIT_NEW_USER
})

export const getCurrentUserFromUrlAction = (currentId, users) => ({
    type: types.SET_CURRENT_USER_FROM_URL,
    currentId: currentId,
    users: users,
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

let initState = {
    id: 0,
    name: "",
    lastname: "",
    patronymic: "",
    email: "",
    phone: "",
    role: ""
};

const userEditReducer = (state = initState, action) => {
    switch (action.type){
        case types.INIT_NEW_USER:
            Object.assign(state, {id: 0, name: "", lastname: "", patronymic: "", email: "", phone: "", role: ""});
            return state;
        case types.SET_CURRENT_USER_FROM_URL:
            let currentUser = action.currentId ? action.users.find( (user) => user.id.toString() === action.currentId ) : null;
            Object.assign(state, currentUser);
            return state;
        case types.CHANGE_CURRENT_USER_LASTNAME:
            state.lastname = action.lastname;
            return state;
        case types.CHANGE_CURRENT_USER_NAME:
            state.name = action.name;
            return state;
        case types.CHANGE_CURRENT_USER_PATRONYMIC:
            state.patronymic = action.patronymic;
            return state;
        default:
            return state;
    }
}

export default userEditReducer;