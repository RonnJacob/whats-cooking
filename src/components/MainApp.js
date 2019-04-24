import React from 'react';
import {browserHistory} from 'react-router'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import RegisterPage from "../containers/RegisterPage/RegisterPage";
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

    deleteIngredient = (recipeId) => {
        this.recipeService.deleteRecipe(recipeId)
            .then(() => alert('Recipe Deleted Successfully!'))
    };


    // selectCourse = (course) => {
    //     alert('hey')
    //     this.courseService.findCourseById(course)
    //         .then(course => {
    //             return this.setState({
    //                 course: course
    //             })
    //         })
    //     // .then(() => window.location.href = '/course')
    // }

    // logout = () => {
    //     this.userService.logout()
    //         .then(() => window.location.href = '/')
    // }
    //
    // profile = () => {
    //     this.userService.profile().then((user) => {
    //         return this.setState({
    //             user: user
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                <Router>
                    <Route path='/ingredients' exact
                           component={(props) =>
                               <Ingredients
                                   ingredients={this.state.ingredients}
                                   {...props}/>}/>
                    <Route path='/register' exact
                           render={() =>
                               <RegisterPage/>}/>
                    <Route path="/addIngredient"
                           render={() =>
                               <AddIngredient
                                   addIngredient={this.addIngredient}
                                   userId={this.state.user.id}/>}/>
                    <Route path="/addRecipe"
                           render={() =>
                               <AddRecipe
                                   addRecipe={this.addRecipe}
                                   userId={this.state.userId}/>}/>
                    <Route path="/recipes/:recipeId"
                           component={(props) =>
                               <RecipeDetails
                                   userType={this.state.user.userType}
                                   {...props}/>}/>
                    <Route path='/profile/:userType/:userId' exact
                           component={(props) =>
                               <Profile
                                   {...props}/>}/>
                </Router>
            </div>
        )
    }
}

export default MainApp;
