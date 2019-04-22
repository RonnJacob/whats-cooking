const FETCH_URL = 'http://localhost:4200/api';

export default class RecipeServices {

    addRecipe = recipe => fetch(FETCH_URL + '/recipes', {
        method: 'post',
        body: JSON.stringify(recipe),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}
