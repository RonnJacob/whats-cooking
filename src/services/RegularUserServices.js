const FETCH_URL = 'localhost:4200/api/';

export default class RegularUserServices{
    registerRegularUser= (regularUser) => {
        // console.log(regularUser);
        return fetch('http://localhost:4200/api/registerUser', {
            method : 'post',
            body : JSON.stringify(regularUser),
            headers : {
                'content-type' : 'application/json'
            },
            credentials : "same-origin"
        }).then(res=> console.log(res));
    };
}
