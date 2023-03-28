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

const userEditReducer = (state = {...initState}, action) => {
    switch (action.type){
        case types.INIT_NEW_USER:
            return {...initState};
        case types.SET_CURRENT_USER_FROM_URL:
            let currentUser = action.currentId ? action.users.find( (user) => user.id.toString() === action.currentId ) : null;
            return {...currentUser};
        case types.CHANGE_CURRENT_USER_LASTNAME:
            return {...state, lastname: action.lastname};
        case types.CHANGE_CURRENT_USER_NAME:
            return {...state, name: action.name};
        case types.CHANGE_CURRENT_USER_PATRONYMIC:
            return {...state, patronymic: action.patronymic};
        default:
            return {...state};
    }
}

export default userEditReducer;