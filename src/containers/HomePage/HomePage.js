import React, {Component} from 'react'
import '../../assets/css/linearicons.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/main.css'
import './HomePage.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../assets/css/bootstrap.css'
import HomePageNav from "../../components/HomePageNav/HomePageNav";
import UserServices from '../../services/UserServices'
import {getFromStorage} from '../../utils/storage';

class HomePage extends  Component {
    constructor(props){
        super(props);
        this.state = {user: {}}
        this.userServices = new UserServices();
    }

    componentDidMount() {
        const obj = getFromStorage('project_april');
        if (obj && obj.token) {
            const { token } = obj;
            this.userServices.verifyUser(token).then(json => {
                    console.log(json);
                    if (json.success) {
                        this.setState({
                            token,
                            user: obj.user[0]
                        });
                    }
                });
        }
    }

    logOut = () => {
        const obj = getFromStorage('project_april');
        if (obj && obj.token) {
            const { token } = obj;
            this.userServices.logOutUser(token)
                .then(json => {
                    console.log(json);
                    if (json.success) {
                        this.setState({
                            token: ''
                        });
                    }
                });
        }
    };


    render(){
        return (
            <div id="home-page">
                <div id="header">
                        <HomePageNav user={this.state.user.length ?
                            this.state.user: this.props.location.state.user} logOut={this.logOut}/>
                </div>
                <section className="banner-area">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-between">
                            <div className="col-lg-12 banner-content">
                                <h1 className="text-white">Hi {this.state.user ?
                                    this.state.user.firstName: this.props.location.state.user.firstName}!
                                    What's Cooking?</h1>
                                <p className="text-white">
                                    Here is your one stop solution to find recipes that best match the ingredients in
                                    hand.<br/>
                                    What's Cooking? makes your life easier by helping you decide what to cook based on
                                    the time and
                                    ingredients in hand.
                                    You no longer have to surf various websites to find the "perfect" recipe.
                                </p>
                                <h5 className="text-white">Get results in just three easy steps!</h5>
                                <br/>
                                <p className="text-white">Step 1: Add the Ingredients</p>
                                <p className="text-white">Step 2: Enter the time in hand</p>
                                <p className="text-white">Step 3: Well! Everything is done, just click see results
                                    button to find out your
                                    recipes</p>
                                <button type="button" className="primary-btn text-uppercase mt-3" id="prepare"
                                        style={{marginBottom:'20px'}}>Let's Cook!
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }



}
export default HomePage
