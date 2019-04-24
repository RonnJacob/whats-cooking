import React, {Component} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../../../node_modules/boot strap/dist/css/bootstrap.css'
import '../../assets/landingpage/css/style.css'
import '../../assets/landingpage/css/owl-carousel.min.css'
import '../../assets/landingpage/css/nice-select.css'
import '../../assets/landingpage/css/jquery.datetimepicker.min.css'
// import '../../assets/landingpage/css/font-awesome-4.7.0.min.css'
import '../../assets/landingpage/css/bootstrap-4.1.3.min.css'
import '../../assets/landingpage/css/animate-3.7.0.css'
import MealDBServices from '../../services/MealDBServices'
import RecipeCard from "./RecipeCard";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import ExploreRecipes from "../Explore/ExploreRecipes";
import {LandingPageHeader} from "./LandingPageHeader";

class LandingPage extends Component {
    constructor() {
        super();
        this.mealDBServices = new MealDBServices();
        this.state = {
            popularRecipes: []
        };
        // var recipes = this.findPopularRecipes();
        // console.log("Recipes"+recipes);


    }



    componentWillMount() {
        document.title = "What's Cooking?";
        this.mealDBServices.findPopularRecipes()
            .then(recipes =>{
                this.setState
                ({popularRecipes: recipes})
            });
    }

    // findAllCourses = () => {
    //     this.courseService.findAllCourses()
    //         .then(courses =>{
    //             this.setState
    //             ({courses: courses})
    //
    //         });}




    render() {
        return (
            <div>

                {/*<Router>*/}
                    {/*<Switch>*/}
                        {/*<Route path='/' exact*/}
                               {/*render={() =>*/}
                                   {/*<LandingPage/>}/>*/}

                        {/*<Route  path="/explore-recipes"   render={() =>*/}
                            {/*<ExploreRecipes findAllRecipes={this.findAllRecipes}/>}/>*/}





                    {/*</Switch>*/}
                {/*</Router>*/}
                <div className="preloader">
                    <div className="spinner"></div>
                </div>

                <Router>
            <LandingPageHeader popularRecipes={this.state.popularRecipes}/>
                </Router>

                {/*// {<!--Header Area End-->}*/}
                {/*// <!-- Banner Area Starts -->*/}
                <section className="banner-area banner-area2 menu-bg text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className='text-white'><i>Our Menu</i></h1>
                                <p className="pt-2"><i>What's Cooking is your smart cooking sidekick!!
                                    From healthy and yummy recipes to handy tools and helpful tips from great chefs, We
                                    have everything you need to improve life in the kitchen.</i></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="food-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">


                                <div className="features-content nav-content p2-text"><h2
                                    className="features-overview-title nav-title font-bold h2-text">Find the Perfect
                                    Recipe</h2><h2
                                    className="features-section-title font-bold h4-text filter-title">Sort &amp; Filter</h2>
                                    <p className="features-section-description p2-text filter-description">Yummly’s
                                        unique search filters allow you to narrow down your search by cook time, course,
                                        cuisine, occasion, diet, allergy, nutrition and more!</p><h2
                                        className="features-section-title font-bold h4-text diet-title">Diet &amp; Allergy</h2>
                                    <p className="features-section-description p2-text diet-description">Tell Yummly
                                        your diet needs and allergies, and you’ll only see recipes that work for
                                        you.</p><h2
                                        className="features-section-title font-bold h4-text collection-title">Collect
                                        Your Favorites</h2><p
                                        className="features-section-description p2-text collection-description">Use the
                                        Yum button to save and organize recipes in your personal recipe box.</p><h2
                                        className="features-section-title font-bold h4-text browse-title">
                                        <p
                                            title="Browse for Inspiration" aria-label="Browse for Inspiration" href="/dish">Browse
                                            for Inspiration</p></h2><p
                                        className="features-section-description p2-text browse-description"><p
                                        title="Not Sure Where to Start? Browse Through Article Content to Read About Kitchen Tips, Trending Foods, and Recipe Roundups."
                                        aria-label="Not Sure Where to Start? Browse Through Article Content to Read About Kitchen Tips, Trending Foods, and Recipe Roundups."
                                        href="/dish">Not sure where to start? Browse through article content to read
                                        about kitchen tips, trending foods, and recipe roundups.</p></p></div>
                            </div>
                        </div>
                    </div>
                </section>


                {/*//<!-- Banner Area End -->*/}

                {/*// <!--Food Area starts-->*/}

                <section className="table-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-top2 text-center">
                                    <h3>Find <span>our popular</span> recipes down below</h3>
                                    <p><i>Time to get into a yummilicious world.</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="food-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="section-top">
                                    <h3> <span className="style-change"> we
                                serve </span> <br/>delicious recipes to excite your appetite</h3>
                                    <p className="pt-3"> Every recipe you need for a fulfilling and tummy filling day is
                                        right here.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            {
                                this.state.popularRecipes.meals &&
                                this.state.popularRecipes.meals.map(recipe =>
                                    <RecipeCard popularRecipe={recipe} loggedIn={false}/>
                                )
                            }
                        </div>
                    </div>
                </section>
                {/*// <!-- Food Area End -->*/}

                {/*// <!-- Table Area Starts -->*/}

                {/*// <!-- Table Area End -->*/}
                {/*//*/}
                {/*// <!-- Footer Area Starts -->*/}
                    <div className="footer-widget section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-widget single-widget1">
                                        <a href="index.html"><img
                                            src={require("../../../src/assets/landingpage/images/logo/newlogo.png")}
                                            alt=""/></a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-widget single-widget2 my-5 my-md-0">
                                        <h5 className="mb-4">contact us</h5>
                                        <div className="d-flex">
                                            <div className="into-icon">
                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                            <div className="info-text">
                                                <p>1234 Some St Boston, MA 94102, US 1.800.123.4567 </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="into-icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="info-text">
                                                <p>(123) 456 78 90</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="into-icon">
                                                <i className="fa fa-envelope-o"></i>
                                            </div>
                                            <div className="info-text">
                                                <p>support@whatscooking.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }


}

export default LandingPage
