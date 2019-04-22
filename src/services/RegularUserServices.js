// const FETCH_URL = 'http://localhost:4200/api/';
const FETCH_URL = 'https://cs5610-backend.herokuapp.com/api/';

export default class RegularUserServices{
    registerRegularUser= (regularUser) => {
        // console.log(regularUser);
        return fetch(FETCH_URL + 'registerUser', {
            method : 'post',
            body : JSON.stringify(regularUser),
            headers : {
                'content-type' : 'application/json'
            },
            credentials : "same-origin"
        }).then(res=> console.log(res));
    };
}
