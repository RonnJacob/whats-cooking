import React, {Component} from 'react'
import '../../assets/css/linearicons.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/magnific-popup.css'
// import '../../assets/css/jquery-ui.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/animate.min.css'
// import '../../assets/css/owl.carousel.css'
import '../../assets/css/main.css'
import './HomePage.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../assets/css/bootstrap.css'
import HomePageNav from "../../components/HomePageNav";
// import '../../assets/js/vendor/jquery-2.2.4.min'
// import '../../assets/js/vendor/bootstrap.min'
// import '../../assets/js/popper.min'
// import '../../assets/js/main'
// import '../../assets/js/whats_cooking.script'
// import '../../assets/js/jquery-ui'
// import '../../assets/js/easing.min'
// import '../../assets/js/hoverIntent'
// import '../../assets/js/superfish.min'
// import '../../assets/js/jquery.ajaxchimp.min.min'
// import '../../assets/js/jquery.magnific-popup.min'
// import '../../assets/js/jquery.nice-select.min'
// import '../../assets/js/owl.carousel.min'
// import '../../assets/js/isotope.pkgd.min'
// import '../../assets/js/mail-script'
import mealDBServices from '../../services/MealDBServices'

class HomePage extends  Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        document.title = "What's Cooking?";
    }

    render(){
        return (
            <div>
                <div id="header">
                        <HomePageNav/>
                </div>
                <section className="banner-area">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-between">
                            <div className="col-lg-12 banner-content">
                                <h1 className="text-white">What's Cooking?</h1>
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
                                        style={{marginBottom:'20px'}}>Start
                                    Preparing
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-about-area section-gap" id="main-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="ingredients">
                                    <h4 className="text-center mt-2">Available Groceries</h4>
                                    <ol className="list--alt" id="grocery_list">
                                        <li>Bread</li>
                                        <li>Egg</li>
                                        <li>Chicken</li>
                                        <li>Onion</li>
                                        <li>Banana</li>
                                        <li>Oil</li>
                                    </ol>
                                    <div className="btn-wrap">
                                        <a href="#" className="primary-btn text-uppercase">Add Ingredients</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="add-time">
                                    <h4 className="text-center mt-2">Add Time In hand</h4>
                                    <p className="pt-20">Enter the time in hand</p>
                                    <input type="text" className="form-control" id="time_input"
                                           placeholder="Enter time in HH:MM:SS"></input>
                                        <div className="btn-wrap">
                                            <a href="#" className="primary-btn text-uppercase"
                                               data-toggle="modal"
                                               id="submit_time"
                                               data-target="#add_time">Add Time</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="saved-recipes mt-2">
                                    <h4 className="text-center">Saved Recipes</h4>
                                    <ol className="list--alt">
                                        <li>Chicken Sandwich (20 mins)</li>
                                        <li>Omelette (15 mins)</li>
                                        <li>Banana Milkshake (7 mins)</li>
                                        <li>Egg Fry (10 mins)</li>
                                        <li>Chicken Caesar Salad (20 mins)</li>
                                    </ol>
                                    <div className="btn-wrap">
                                        <a href="#s" className="primary-btn text-uppercase">View Recipes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 text-center">
                            <div className="col-lg-12">
                                <h5>Done adding Ingredients and Time, click the Results Button to find out the available
                                    recipes</h5>
                                <button className="btn btn-success text-uppercase mt-4" id="results_btn">Results
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="modal fade" id="add_time" tabIndex="-1" role="dialog" aria-labelledby="view_results"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h4 style={{padding: '40px', textAlign: 'center'}}>Time Added Successfully</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-area">
                    <div className="footer-bottom-wrap">
                        <div className="container">
                            <div className="row footer-bottom d-flex justify-content-between align-items-center">
                                <p className="col-lg-8 col-mdcol-sm-6 -6 footer-text m-0">
                                   Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }



}
export default HomePage
