const FETCH_URL = 'http://localhost:4200/api/';
export default class UserServices{
    checkUserNameValidity = (uname) => {
        return fetch(FETCH_URL + 'username/'+uname)
            .then(res=> {return res.json();}
            );
    };
}
