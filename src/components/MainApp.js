import React from 'react';
import {browserHistory} from 'react-router'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import RegisterPage from "../components/RegisterPage/RegisterPage";
import Ingredients from "../components/ingredients/Ingredients";
import AddIngredient from "../components/ingredients/AddIngredient";
import IngredientServices from "../services/IngredientServices";
import AddRecipe from "./recipes/AddRecipe";
import RecipeServices from "../services/RecipeServices";
import RecipeDetails from "./recipes/RecipeDetails";
import Profile from "./Profile";
import {getFromStorage} from '../utils/storage';

class MainApp extends React.Component {
    constructor() {
        super();
        this.ingredientService = new IngredientServices();
        this.recipeService = new RecipeServices();
        const obj = getFromStorage('project_april');
        this.state = {
            userId: obj.user[0]._id,
            user: obj.user[0],
            ingredients: [],
        }
    }

    componentDidMount() {
        this.ingredientService.findIngredientsByUser(this.state.userId)
            .then(ingredients => {
                // alert("updated"+courses.length)
                this.setState({
                    ingredients: ingredients
                })
            })
    }


    addIngredient = (ingredient) => {
        this.ingredientService.addIngredient(ingredient)
            .then(() => this.ingredientService.findIngredientsByUser(this.state.userId))
            .then(ingredients =>
                this.setState({
                    ingredients: ingredients
                }))
            .then(() => {
                alert('Ingredient Added Successfully!');
                window.location.href = `/ingredients`
            })
    };

    addRecipe = (recipe) => {
        this.recipeService.addRecipe(recipe)
            .then(() => {
                alert('Recipe Added Successfully!')
                window.location.href = `/user/${this.state.userId}/myrecipes`
            })
    };



    render() {
        return (<h1>Almost Deleted</h1>
        )
    }
}

export default MainApp;
