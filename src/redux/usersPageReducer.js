export const types = {
    INITIALIZATION: "INITIALIZATION",
    OPEN_USER_EDITOR: 'OPEN_USER_EDITOR',
}

export const getOpenUserEditorAction = (navigate, id = null) => ({type: types.OPEN_USER_EDITOR, navigate: navigate, id: id})
export const getInitializationAction = (users) => ({ type: types.INITIALIZATION, users: users });

let initialState = {
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
    isInit: false,
};

const usersPageReducer = (state = {...initialState}, action) => {
    switch (action.type){
        case types.INITIALIZATION:
                return {...state, users: [...action.users] ?? [], isInit: true };
        case types.OPEN_USER_EDITOR:
            let url = action.id ? `/users/edit?id=${action.id}` : `/users/edit`;
            action.navigate(url);
            return {...state};
        default:
            return {...state};
    }
}

export default usersPageReducer;