import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import MainApp from './MainApp'
import LandingPage from "./LandingPage/LandingPage";
import ExploreRecipes from "./Explore/ExploreRecipes";
import LoginPage from "../containers/LoginPage/LoginPage";
import FavoriteRecipes from "./recipes/FavoriteRecipes"
import RecipeDetails from "./recipes/RecipeDetails";
import MyRecipes from "./recipes/MyRecipes";

class WhatsCooking extends Component{
    constructor(props){
        super(props);
    }


    render(){

        return (
            <div id="landing-page">
                <Router>
                    <Switch>
                    {/*<Link to="/home">Go To Home Page</Link>*/}
                    {/*<Link to="/register">Go To Registration Page</Link>*/}
                    <Route path='/' exact component={LandingPage}/>
                    <Route path='/explore-recipes' component={ExploreRecipes}/>

                        <Route path='/user/:userId/favorites'
                               component={(props) =>
                                   <FavoriteRecipes
                                       userId={`5cb93fa8d765b8de30a1ace2`}
                                       {...props}/>}/>
                        <Route path='/user/:userId/myrecipes'
                               component={(props) =>
                                   <MyRecipes
                                       userId={`1`}
                                       {...props}/>}/>
                        <Route path="/recipes/:recipeId"
                               component={(props) =>
                                   <RecipeDetails
                                       // Regular
                                       userId={`5cb93fa8d765b8de30a1ace2`}
                                       //Chef
                                       // userId={`5cbd7841e9ee3e368d4db140`}
                                       //Nutritionist
                                       // userId={`5cbd79efe9ee3e368d4db142`}
                                       userType='REGULAR'
                                       {...props}/>}/>
                    <Route path='/home' component={HomePage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <Route path="/login" exact component={LoginPage}/>
                    </Switch>
                </Router>
                <MainApp/>
            </div>
        )
    }
}

export default WhatsCooking;
