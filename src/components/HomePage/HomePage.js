import React, {Component} from 'react'
import '../../assets/css/linearicons.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/main.css'
import './HomePage.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../assets/css/bootstrap.css'
import HomePageNav from "../HomePageNav/HomePageNav";
import UserServices from '../../services/UserServices'
import {getFromStorage} from '../../utils/storage';
import RegisterPage from "../WhatsCooking";
import Ingredients from "../ingredients/Ingredients";
import AddIngredient from "../ingredients/AddIngredient";
import AddRecipe from "../recipes/AddRecipe";
import Profile from "../Profile";
import IngredientServices from "../../services/IngredientServices";
import RecipeServices from "../../services/RecipeServices";
import RecipeDetails from "../recipes/RecipeDetails";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainApp from "../MainApp";

class HomePage extends  Component {
    constructor(props){
        super(props);
        const obj =  getFromStorage('project_april');
        this.state = {
            user: obj.user[0],
            userId: obj.user[0]._id,
            ingredients: []};
        this.userServices = new UserServices();
        this.ingredientService = new IngredientServices();
        this.recipeService = new RecipeServices();
    }

    componentDidMount() {
        const obj = getFromStorage('project_april');
        if (obj && obj.token) {
            const { token } = obj;
            this.userServices.verifyUser(token).then(json => {
                    console.log(json);
                    if (json.success) {
                        this.ingredientService.findIngredientsByUser(obj.user[0]._id)
                            .then(ingredients => {
                                // alert("updated"+courses.length)
                                this.setState({
                                    ingredients: ingredients,
                                    token,
                                    user: obj.user[0]
                                })
                            });
                    }
                });
        }
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
                window.location.href = `/ingredients/${this.state.userId}`
            })
    };


    logOut = () => {
        const obj = getFromStorage('project_april');
        if (obj && obj.token) {
            const { token } = obj;
            this.userServices.logOutUser(token)
                .then(json => {
                    console.log(json);
                    if (json.success) {
                        this.setState({
                            token: ''
                        });
                    }
                });
        }
    };


    render(){
        return (
            <div id="home-page">
                <Router>
                    <Route path='/ingredients/:userId' exact
                           component={(props) =>
                               <Ingredients
                                   ingredients={this.state.ingredients}
                                   {...props}/>}/>

                    <Route path="/addIngredient"
                           render={() =>
                               <AddIngredient
                                   addIngredient={this.addIngredient}/>}/>
                    {/*<Route path="/addRecipe"*/}
                    {/*render={() =>*/}
                    {/*<AddRecipe*/}
                    {/*addRecipe={this.addRecipe}*/}
                    {/*userId={1}/>}/>*/}
                    {/*<Route path="/recipes/:recipeId"*/}
                    {/*component={(props) =>*/}
                    {/*<RecipeDetails*/}
                    {/*// Regular*/}
                    {/*userId={`5cb94983e587896bea89fefd`}*/}
                    {/*//Chef*/}
                    {/*// userId={`5cbd7841e9ee3e368d4db140`}*/}
                    {/*//Nutritionist*/}
                    {/*// userId={`5cbd79efe9ee3e368d4db142`}*/}
                    {/*userType='REGULAR'*/}
                    {/*{...props}/>}/>*/}
                    {/*<Route path='/profile/:userType/:userId' exact*/}
                    {/*component={(props) =>*/}
                    {/*<Profile*/}
                    {/*{...props}/>}/>*/}
                </Router>
                <div id="header">
                        <HomePageNav user={this.state.user} logOut={this.logOut}/>
                </div>
                <section className="banner-area home-page">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-between">
                            <div className="col-lg-12 banner-content">
                                <h1 className="text-white">Hi {this.state.user ?
                                    this.state.user.firstName: this.props.location.state.user.firstName}!
                                    What's Cooking?</h1>
                                <p className="text-white">
                                    Here is your one stop solution to find recipes that best match the ingredients in
                                    h
                                    and.<br/>
                                    What's Cooking? makes your life easier by helping you decide what to cook based on
                                    the time and
                                    ingredients in hand.
                                    You no longer have to surf various websites to find the "perfect" recipe.
                                </p>
                                <h5 className="text-white">Get results in just three easy steps!</h5>
                                <br/>
                                <p className="text-white">Step 1: Add the Ingredients</p>
                                <p className="text-white">Step 2: Enter the time in hand</p>
                                <p className="text-white">Step 3: Well! Everything is done, just click see results
                                    button to find out your
                                    recipes</p>

                                {this.state.user.userType==='REGULAR' &&
                                <button type="button"
                                        className="primary-btn text-uppercase mt-3"
                                        onClick={()=>window.location.href=`/user/${this.state.userId}/findRecipes`}
                                        id="prepare"
                                        style={{marginBottom:'20px'}}>
                                        Let's Cook!
                                </button>}
                            </div>
                        </div>
                    </div>
                </section>
                <MainApp/>
            </div>
        );
    }



}
export default HomePage
