import axios from "axios";

export const setCurrentUser = (currentUser) => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export const getCurrentUser = () => {
    const userData = sessionStorage.getItem('currentUser');

    if (userData === null)
        return {token: ''};

    return JSON.parse(userData);
}

const instance = axios.create({
    baseURL:  'http://localhost:7400/api/users/',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
});

export class UsersApi {
    static getRoles() {
        return instance.get('getRoles', {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static getUsers() {
        return instance.get('getall', {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static getUserById(id) {
        return instance.get(`get?id=${id}`, {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static saveUser(user) {
        let method = user.id > 0 ? 'update' : 'create';
        return instance.post(method, user, {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static loginByEmail(loginData) {
        return instance.post("loginByEmail", loginData);
    }
}
