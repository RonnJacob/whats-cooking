import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from "./HomePage/HomePage";


class LandingPage extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div>
                <Router>
                    <div>
                        <Link to="/home">Go To Home Page</Link>
                        <Route path='/home' component={HomePage}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default LandingPage;
