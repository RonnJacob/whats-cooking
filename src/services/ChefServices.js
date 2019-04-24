// const FETCH_URL = 'http://localhost:4200/api/';
const FETCH_URL = 'https://cs5610-backend.herokuapp.com/api/';

export default class ChefServices {
    registerChef = (chef) => {
        return fetch(FETCH_URL + 'registerChef', {
            method: 'post',
            body: JSON.stringify(chef),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "same-origin"
        }).then(res => console.log(res));
    };

    findById = userID => fetch(FETCH_URL + 'chef/' + userID)
        .then(response => response.json());

    endorseRecipe = (userId, recipeId) => {
        return fetch(FETCH_URL + 'chef/' + userId + '/recipes/' + recipeId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };

    removeEndorsed = (userId, recipeId) => {
        return fetch(FETCH_URL + 'chef/' + userId + '/recipes/' + recipeId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };
}
