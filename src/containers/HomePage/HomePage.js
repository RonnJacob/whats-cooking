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
import userServices from '../../services/UserServices'

class HomePage extends  Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.userServices = new userServices();
        this.userServices.getProfile().then(resp => console.log(resp));
    }

    componentDidMount() {
        document.title = "What's Cooking?";
        // {this.props.location.state.user.firstName}
    }

    render(){
        return (
            <div id="home-page">
                <div id="header">
                        <HomePageNav/>
                </div>
                <section className="banner-area">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-between">
                            <div className="col-lg-12 banner-content">
                                <h1 className="text-white">Hi ! What's Cooking?</h1>
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
