import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import './LandingPage.css'
import LoginPage from "../components/LoginPage/LoginPage";
import MainApp from "../components/MainApp";

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div id="landing-page">
                <Router>
                        {/*<Link to="/home">Go To Home Page</Link>*/}
                        {/*<Link to="/register">Go To Registration Page</Link>*/}
                        <Route path='/' exact render={() => <RegisterPage/>}/>
                        <Route path='/home' component={HomePage}/>
                        <Route path="/register" exact component={RegisterPage}/>
                        <Route path="/login" exact component={LoginPage}/>
                    {/*<MainApp/>*/}
                </Router>
            </div>
        )
    }
}

export default LandingPage;
