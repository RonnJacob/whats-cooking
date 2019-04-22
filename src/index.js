import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {browserHistory} from 'react-router'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'
import HomePage from "./containers/HomePage/HomePage";
import LandingPage from "./containers/LandingPage";
import RegisterPage from "./containers/RegisterPage/RegisterPage";
import Ingredients from "./components/ingredients/Ingredients";
import AddIngredient from "./components/ingredients/AddIngredient";

ReactDOM.render(<LandingPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
