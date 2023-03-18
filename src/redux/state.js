let store = {
    _state: {
        workspace: {
            users: {
                tableSettings: [
                    {
                        title: "ID",
                        width: "50px"
                    },
                    {
                        title: "Фамилия",
                        width: ""
                    },
                    {
                        title: "Имя",
                        width: ""
                    },
                    {
                        title: "Отчество",
                        width: ""
                    },
                    {
                        title: "Email",
                        width: ""
                    },
                    {
                        title: "Телефон",
                        width: ""
                    },
                    {
                        title: "Роль",
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
            }
        }
    },
    dispatch(action) {
        if (action.type === 'GET_STATE') {
            return this._state;
        } else if (action.type === 'OPEN_USER_EDITOR'){
            let url = action.id ? `/users/edit?id=${action.id}` : `/users/edit`;
            action.navigate(url);
        }
    }
};

export default store;