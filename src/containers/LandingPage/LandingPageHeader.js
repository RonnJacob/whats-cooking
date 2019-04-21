import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link, Route,Router} from 'react-router-dom'
import {PopularRecipes} from "./PopularRecipes";
import ExploreRecipes from "../Explore/ExploreRecipes";
import LandingPage from "../LandingPage/LandingPage";
import RegisterPage from "../RegisterPage/RegisterPage";


export const LandingPageHeader = () => {


    {
        return (

            <header className="header-area header-area2">

                <div className="container">
                    <div
                        className="row">
                        < div
                            className="col-lg-2">
                            < div
                                className="logo-area">
                                <a href="/">
                                    <img src={require("../../../src/assets/landingpage/images/logo/newlogo.png")}
                                         alt="logo"/></a>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="custom-navbar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="main-menu main-menu2">
                                <ul>
                                    <li className="active"><a href="about.html">home
                                        {/*<Link  to={`/`}>explore</Link>*/}

                                        {/*<Route path='/' exact component={LandingPage}/>*/}
                                        </a></li>


                                    <li><a href="about.html">

                                        <Link  to={`/explore-recipes`}>explore</Link>

                                        <Route path='/explore-recipes' component={ExploreRecipes}/>

                                        {/*<Route path='/explore-recipes'*/}
                                               {/*render={() => <ExploreRecipes/>}/>*/}

                                    </a></li>


                                    <li><a href="menu.html">login</a>/<a href="menu.html"><Link  to={`/register`}>sign up</Link>

                                        <Route path='/register' component={RegisterPage}/></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );

    }
}
