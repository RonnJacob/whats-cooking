import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomePage from "./components/HomePage/HomePage";
import LandingPage from "./components/LandingPage/LandingPage";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RegisterPage from "./components/RegisterPage/RegisterPage";
import WhatsCooking from "./components/WhatsCooking";

ReactDOM.render(

    <WhatsCooking/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
