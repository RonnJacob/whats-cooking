import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import MainApp from './MainApp'
import LandingPage from "./LandingPage/LandingPage";
import ExploreRecipes from "./Explore/ExploreRecipes";
import LoginPage from "../containers/LoginPage/LoginPage";
import FavoriteRecipes from "./recipes/FavoriteRecipes"
import MealDBServices from "../services/MealDBServices";

class WhatsCooking extends Component{
    constructor(props){
        super(props);
        this.mealDBServices = new MealDBServices();
        this.state = {
            popularRecipes: []
        };
    }


    componentWillMount() {
        this.mealDBServices.findPopularRecipes()
            .then(recipes =>{
                this.setState
                ({popularRecipes: recipes})
            });
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
                        <Route path='/user/:userId/my-favorites' component={FavoriteRecipes}/>
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
