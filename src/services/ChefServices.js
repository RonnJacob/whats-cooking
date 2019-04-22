// const FETCH_URL = 'http://localhost:4200/api/';
const FETCH_URL = 'https://cs5610-backend.herokuapp.com/api/';

export default class ChefServices{
    registerChef= (chef) => {
        // console.log(chef);
        return fetch(FETCH_URL + 'registerChef', {
            method : 'post',
            body : JSON.stringify(chef),
            headers : {
                'content-type' : 'application/json'
            },
            credentials : "same-origin"
        }).then(res=> console.log(res));
    };
}
