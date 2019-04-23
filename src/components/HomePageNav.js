import React from 'react'
import '../assets/css/main.css'
import AddIngredient from "./MainApp";
import {Link} from "react-router-dom";
class HomePageNav extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.user['userType']);
    }


    render(){
        return(
            <div className="container main-menu">
                <div className="row align-items-center justify-content-center d-flex">
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><a href="#">Home</a></li>
                            {
                                (this.props.user['userType']==='REGULAR') &&
                                <li>
                                    <a href="/ingredients">
                                            Ingredients
                                    </a>
                                </li>
                            }
                            {(this.props.user['userType'] ==='CHEF' || this.props.user['userType']==='REGULAR')
                            && <li>
                                <Link to={`/user/${this.props.user._id}/myrecipes`}>
                                    My Recipes
                                </Link>

                            </li>}
                            {(this.props.user['userType']==='REGULAR')
                            && <li>
                                <Link to={`/user/${this.props.user._id}/favorites`}>
                                    Favorite Recipes
                                </Link>
                            </li>}
                            {(this.props.user['userType'] ==='CHEF' || this.props.user['userType']==='NUTRITIONIST')
                            && <li><a href="#">Endorsed Recipes</a></li>}
                            <li><a href="/explore-recipes">Explore</a></li>
                            <li><a href="/login" onClick={this.props.logOut}>Log Out</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
};



export default HomePageNav;


