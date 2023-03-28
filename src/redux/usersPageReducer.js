export const types = {
    OPEN_USER_EDITOR: 'OPEN_USER_EDITOR',
}

export const getOpenUserEditorAction = (navigate, id = null) => ({type: types.OPEN_USER_EDITOR, navigate: navigate, id: id})

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
    data: [
        {
            id: 1,
            name: "Константин",
            lastname: "Шарыгин",
            patronymic: "Владимирович",
            email: "kot.074@mail.ru",
            phone: "8 (905) 485-16-58",
            role: "Administrator"
        },
        {
            id: 2,
            name: "Александр",
            lastname: "Сидоров",
            patronymic: "Михайлович",
            email: "a.sidorov@mail.ru",
            phone: "8 (555) 555-55-55",
            role: "Administrator"
        },
        {
            id: 3,
            name: "Петр",
            lastname: "Петров",
            patronymic: "Петрович",
            email: "p.petrov@mail.ru",
            phone: "8 (999) 000-00-00",
            role: "User"
        },
        {
            id: 4,
            name: "Иван",
            lastname: "Иванов",
            patronymic: "Иванович",
            email: "i.ivanov@mail.ru",
            phone: "8 (222) 222-22-22",
            role: "Guest"
        },
    ]
};

const usersPageReducer = (state = {...initialState}, action) => {
    switch (action.type){
        case types.OPEN_USER_EDITOR:
            let url = action.id ? `/users/edit?id=${action.id}` : `/users/edit`;
            action.navigate(url);
            return {...state};
        default:
            return {...state};
    }
}

export default usersPageReducer;