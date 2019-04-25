const FETCH_URL = 'http://localhost:4200/api';
// const FETCH_URL = 'https://cs5610-backend.herokuapp.com/api';

export default class IngredientServices {
    findIngredientsByUser = userId =>
        fetch(FETCH_URL + '/users/' + userId + '/ingredients').then(response => response.json());

    addIngredient = ingredient => fetch(FETCH_URL + '/ingredient', {
        method: 'post',
        body: JSON.stringify(ingredient),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

    deleteIngredient = ingredientId => fetch(FETCH_URL + '/ingredients/' + ingredientId, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        }
    })

    updateIngredient = (ingredientId, ingredient) => fetch(FETCH_URL + '/ingredients/' + ingredientId, {
        method: 'put',
        body: JSON.stringify(ingredient),
        headers: {
            'content-type': 'application/json'
        }
    });
}
