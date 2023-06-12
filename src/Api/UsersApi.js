import axios from "axios";

export const setCurrentUser = (currentUser, isPersistant) => {
    if (isPersistant){
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export const getCurrentUser = () => {
    let userData = localStorage.getItem('currentUser');

    if (userData === null) {
        userData = sessionStorage.getItem('currentUser');
        if (userData === null) {
            return {token: ''};
        }
    }

    return JSON.parse(userData);
}

export const forgotingCurrentUser = () => {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
}

const instance = axios.create({
    baseURL:  'http://localhost:7400/api/',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
});

export class UsersApi {
    static getRoles() {
        return instance.get('users/get_roles', {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static getUsers() {
        return instance.get('users/get_users', {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static getUserById(id) {
        return instance.get(`users/get_user?id=${id}`, {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static createUser(user) {
        return instance.post('users/create_user', user, {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static updateUser(user) {
        return instance.put('users/update_user', user, {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static deleteUser(userId) {
        return instance.delete(`users/delete_user?id=${userId}`, {
            headers: {
                Authorization: `Bearer ${getCurrentUser().token}`
            }
        });
    }

    static loginByEmail(loginData) {
        return instance.post("login/by_email", loginData);
    }
}
