import React from 'react'
import '../assets/css/main.css'
import AddIngredient from "./MainApp";
class HomePageNav extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Router>
            <div className="container main-menu">
                <div className="row align-items-center justify-content-center d-flex">
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><a href="#">Home</a></li>
                            {
                                (this.props.user['userType']==='REGULAR') &&
                                <li>
                                    <a href="">Ingredients</a>
                                    <AddIngredient
                                        addIngredient={this.addIngredient}
                                        userId={this.state.userId}/>
                                </li>
                            }
                            {(this.props.user['userType'] ==='CHEF' || this.props.user['userType']==='REGULAR')
                            && <li><a href="#">My Recipes</a></li>}
                            {(this.props.user['userType']==='REGULAR') && <li><a href="#">Favorite Recipes</a></li>}
                            {(this.props.user['userType'] ==='CHEF' || this.props.user['userType']==='NUTRITIONIST')
                            && <li><a href="#">Endorsed Recipes</a></li>}
                            <li><a href="#">Explore</a></li>
                            <li><a href="/login" onClick={this.props.logOut}>Log Out</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            </Router>
        );
    }
};



export default HomePageNav;


