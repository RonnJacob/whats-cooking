import {FETCH_URL} from "../utils/constants";

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

    findEndorsedRecipes = (userID) => {
        return fetch(FETCH_URL + 'chef/' + userID+'/recipes')
            .then(function(response){
                return response.json();
            });
    }

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
