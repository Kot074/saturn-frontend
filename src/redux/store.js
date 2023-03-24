import userEditReducer from "./userEditReducer";
import usersPageReducer from "./usersPageReducer";

let store = {
    _state: {
        workspace: {
            users: {
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
                ],
                currentUser: {}
            }
        }
    },
    getState(){
        return this._state;
    },
    _listener(){},
    setListener(listener){
        this._listener = listener;
    },
    dispatch(action) {
        this._state.workspace.users =  userEditReducer(this._state.workspace.users, action);
        this._state.workspace.users =  usersPageReducer(this._state.workspace.users, action);

        this._listener();
    }
};

export default store;