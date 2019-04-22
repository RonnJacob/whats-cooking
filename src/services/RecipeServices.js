const FETCH_URL = 'http://localhost:4200/api';

export default class RecipeServices {

    addRecipe = recipe => fetch(FETCH_URL + '/recipes', {
        method: 'post',
        body: JSON.stringify(recipe),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

    deleteRecipe = recipeId => fetch(FETCH_URL + '/recipes/' + recipeId, {
        method: 'delete',
        headers: {
            'content-type': 'application/json'
        }
    })

    updateRecipe = (recipeId, recipe) => fetch(FETCH_URL + '/recipes/' + recipeId, {
        method: 'put',
        body: JSON.stringify(recipe),
        headers: {
            'content-type': 'application/json'
        }
    });

    findRecipeById = recipeId =>
        fetch(FETCH_URL + '/recipes/' + recipeId).then(response => response.json());


}
