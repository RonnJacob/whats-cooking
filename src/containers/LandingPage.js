import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import RegisterPage from "./RegisterPage/RegisterPage";


class LandingPage extends Component{
    constructor(props){
        super(props);
    }

    goToHome = () =>
        window.location.href = '../home';
    goToRegister= () =>
        window.location.href = '../register';

    render(){

        return (
            <div>
                <Router>
                    <div>
                        <a onClick={this.goToHome}>asd</a>
                        <a onClick={this.goToRegister}>asd</a>
                        {/*<Link to="/home">Go To Home Page</Link>*/}
                        {/*<Link to="/register">Go To Registration Page</Link>*/}
                        <Route path='/home' component={HomePage}/>
                        <Route path="/register"
                               exact component={RegisterPage}>
                        </Route>
                    </div>
                </Router>
            </div>
        )
    }
}

export default LandingPage;
