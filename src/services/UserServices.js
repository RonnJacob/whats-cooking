
import {getFromStorage} from "../utils/storage";

const FETCH_URL = 'http://localhost:4200/api/';
// const FETCH_URL = 'https://cs5610-backend.herokuapp.com/api/';
export default class UserServices {
    checkUserNameValidity = (uname) => {
        return fetch(FETCH_URL + 'username/' + uname)
            .then(res => {
                    return res.json();
                }
            );
    };

    verifyUser = (token) => {
        return fetch(FETCH_URL + 'account/verify?token=' + token)
            .then(res => res.json());
    }
    getProfile = () => {
        return fetch(FETCH_URL + 'profile')
            .then(res => {
                    return res.json();
                }
            );
    };

    loginUser = (username, password) => {
        return fetch(FETCH_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then(res => res.json());
    };

    logOutUser = (token) => {
        return fetch(FETCH_URL + 'logout?token=' + token)
            .then(res => res.json());
    }

    findById = userID => {
        return fetch(FETCH_URL + 'user/' + userID)
            .then(response => response.json());
    }



}
