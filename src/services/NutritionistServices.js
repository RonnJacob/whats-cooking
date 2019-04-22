// const FETCH_URL = 'http://localhost:4200/api/';
const FETCH_URL = 'https://cs5610-backend.herokuapp.com/api/';

export default class NutritionistServices{
    registerNutritionist= (nutritionist) => {
        return fetch(FETCH_URL + 'registerNutritionist', {
            method : 'post',
            body : JSON.stringify(nutritionist),
            headers : {
                'content-type' : 'application/json'
            },
            credentials : "same-origin"
        }).then(res=> console.log(res));
    };
}
