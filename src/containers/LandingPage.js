import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";
import './LandingPage.css'
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
                    <Route path='/home' component={HomePage}/>
                    <Route path="/register"
                           exact component={RegisterPage}>
                    </Route>
                    <MainApp/>
                </Router>
            </div>
        )
    }
}

export default LandingPage;
