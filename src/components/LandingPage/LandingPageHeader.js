import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link, Route,Router} from 'react-router-dom'
import {PopularRecipes} from "./PopularRecipes";
import ExploreRecipes from "../Explore/ExploreRecipes";
import LandingPage from ".//LandingPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import HomePageNav from "../HomePageNav/HomePageNav";
import './LandingPageHeader.css'
import {Navbar, Nav, NavDropdown} from "react-bootstrap";


export const LandingPageHeader = ({popularRecipes}) => {
    {
        return (
            <header className="header-area header-area2">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="logo-area">
                                <a href="/">
                                    <img src={require("../../../src/assets/landingpage/images/logo/newlogo.png")}
                                         alt="logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="custom-navbar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div id="wbdv_main_menu" className="wbdv-main-menu wbdv-main-menu2">
                                <ul className="wbdv-main-menu wbdv-main-menu2">
                                    <li className="active">
                                        <a href="#">home
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`/explore-recipes`}>explore
                                        <Route path='/explore-recipes' render={() => <ExploreRecipes
                                            popularRecipes={popularRecipes}/>}/>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/login">
                                            login
                                        </a>/
                                        <a href="/register">
                                            register
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );

    }
}
