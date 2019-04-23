import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import MainApp from './MainApp'
import LandingPage from "./LandingPage/LandingPage";
import ExploreRecipes from "./Explore/ExploreRecipes";
import FavoriteRecipes from "./recipes/FavoriteRecipes"

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
                        <Route path='/user/:userId/my-favorites' component={FavoriteRecipes}/>
                    <Route path='/home' component={HomePage}/>
                    <Route path="/register"
                           exact component={RegisterPage}>
                    </Route>
                    </Switch>
                </Router>
                <MainApp/>
            </div>
        )
    }
}

export default WhatsCooking;
