// const FETCH_URL = 'http://localhost:4200/api/';
const FETCH_URL = 'https://cs5610-backend.herokuapp.com/api/';
export default class UserServices{
    checkUserNameValidity = (uname) => {
        return fetch(FETCH_URL + 'username/'+uname)
            .then(res=> {return res.json();}
            );
    };

    getProfile = () => {
        return fetch(FETCH_URL + 'profile')
            .then(res=> {return res.json();}
            );
    };
}
