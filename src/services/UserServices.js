import {getFromStorage} from "../utils/storage";

const FETCH_URL = 'http://localhost:4200/api/';
export default class UserServices{
    checkUserNameValidity = (uname) => {
        return fetch(FETCH_URL + 'username/'+uname)
            .then(res=> {return res.json();}
            );
    };

    verifyUser = (token) => {
        return fetch('http://localhost:4200/api/account/verify?token=' + token)
            .then(res => res.json());
    };

    loginUser = (username, password)  => {
        return fetch('http://localhost:4200/api/login', {
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
        return fetch('http://localhost:4200/api/logout?token=' + token)
            .then(res => res.json());
    }
}
