import axios from "axios";

export const setToken = (newToken) => {
    localStorage.setItem('auth-token', newToken);
}

const getToken = () => localStorage.getItem('auth-token');

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
                Authorization: `Bearer ${getToken()}`
            }
        });
    }

    static getUsers() {
        return instance.get('getall', {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
    }

    static getUserById(id) {
        return instance.get(`get?id=${id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
    }

    static saveUser(user) {
        let method = user.id > 0 ? 'update' : 'create';
        return instance.post(method, user, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
    }

    static loginByEmail(loginData) {
        return instance.post("loginByEmail", loginData);
    }
}
