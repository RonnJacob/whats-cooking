const FETCH_URL = 'http://localhost:4200/api/';

export default class NutritionistServices {
    registerNutritionist = (nutritionist) => {
        return fetch(FETCH_URL + 'registerNutritionist', {
            method: 'post',
            body: JSON.stringify(nutritionist),
            headers: {
                'content-type': 'application/json'
            },
            credentials: "same-origin"
        }).then(res => console.log(res));
    };

    findById = userID => fetch(FETCH_URL + 'nutritionist/' + userID)
        .then(response => response.json());

    endorseRecipe = (userId, recipeId) => {
        return fetch(FETCH_URL + 'nutritionist/' + userId + '/recipes/' + recipeId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };

    removeEndorsed = (userId, recipeId) => {
        return fetch(FETCH_URL + 'nutritionist/' + userId + '/recipes/' + recipeId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };
}
