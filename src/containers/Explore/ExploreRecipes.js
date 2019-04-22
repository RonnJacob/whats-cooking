import React from 'react'

import MealDBServices from "../../services/MealDBServices";
import RecipeCard from "../LandingPage/RecipeCard";
import {LandingPageHeader} from "../LandingPage/LandingPageHeader";
import HomePageNav from "../../components/HomePageNav";
import GuestNav from "../LandingPage/GuestNav";
import {PopularRecipes} from "../LandingPage/PopularRecipes";
import '../../assets/landingpage/css/sidebar.css'
import FilterRecipes from "./FilterRecipes";

class ExploreRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.mealDBServices = new MealDBServices();
        this.state = {
            recipes: [],
            searchRecipe:'',
            popularRecipes:[],
            filterCategory:[]

        };
        this.searchRecipe= this.searchRecipe.bind(this);

    }

    componentWillMount() {
        document.title = "Explore Recipes";
        this.mealDBServices.findAllRecipes()
            .then(recipes =>{
                this.setState
                ({recipes: recipes})
            });
    }

    componentDidMount() {
       this.mealDBServices.findAllCategories()
           .then(filterCategory =>{
               this.setState
               ({filterCategory: filterCategory.meals})
           });
    }

    findAllCuisines = () => {
        this.mealDBServices.findAllCuisines()
            .then(filterCategory =>{
                this.setState
                ({filterCategory: filterCategory.meals})
            });}

    myFunction(id) {
        var x = document.getElementById(id);
        if(x) {
            if (x.className.indexOf("w3-show") === -1) {
                x.className += " w3-show";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
        }
    }

    filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        var div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            var txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    findAllCategories = () => {
        this.mealDBServices.findAllCategories()
            .then(filterCategory =>{
                this.setState
                ({filterCategory: filterCategory.meals})
            });}

    findRecipesByCategory = (category) => {
        this.mealDBServices.findRecipesByCategory(category)
            .then(recipes =>{
                this.setState
                ({recipes: recipes})
            });}

    findRecipesByCuisine= (cuisine) => {
        this.mealDBServices.findRecipesByCuisines(cuisine)
            .then(recipes =>{
                this.setState
                ({recipes: recipes})
            });}

    searchRecipe = (recipe) => {
        this.mealDBServices.findRecipeByName(recipe).then(recipes =>{

            this.setState
            ({recipes: recipes})
            if(recipes.meals==null){
                document.getElementById("food-area").innerHTML=
                    " <div class=\"no-results\">" +
                    "<h3>We searched all over but didn't " +
                    "find a recipe for '"+`${recipe}`+"'</h3>" +

                    "<div class=\"no-results-suggestion\">" +
                    "<img src=\"https://x.yummlystatic.com/s/e3ccfc5a7/img/check_spelling.svg\">" +
                    "<span>Check Spelling</span></div><div class=\"no-results-suggestion\">" +
                    "<img src=\"https://x.yummlystatic.com/s/e3ccfc5a7/img/different_keywords.svg\">" +
                    "<span>Different Keywords</span></div><div class=\"no-results-suggestion\">" +
                    "<img src=\"https://x.yummlystatic.com/s/e3ccfc5a7/img/simplify_search.svg\">" +
                    "<span>Simplify Search</span></div></div>" +
                    "" +
                    " </PopularRecipes popularRecipes={"+this.state.popularRecipes+"}>"


            }
        });
    }
    searchChanged = (event) => {
        this.setState(
            {
                searchRecipe: event.target.value
            });

    }

    render() {
        return (

            <div>
                {/*<LandingPageHeader/>*/}
                <div id="header">
                <GuestNav/>
                </div>
                <div>
                <section className="table-area section-padding" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-top2 text-center">
                                    <h3>Find <span>a</span> recipe</h3>
                                    <p><i>Time to get into a yummilicious world.</i></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <form action="#">


                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback"></span>
                                        <input type="text" className="form-control" placeholder="search a million recipes & more" onChange={this.searchChanged}/>
                                    </div>

                                    <div className="table-btn text-center">
                                        <a href="#" className="template-btn template-btn2 mt-4"
                                           onClick={() => this.searchRecipe(this.state.searchRecipe)}>Go</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                </div>

                <section className="header">
<div className={"row"}>
    <div className="split left">
                    <div className={"side-menu"}>

                        <div className="">

                            <div className="sidebar-categories">
                                <div className="head">Filter up your TasteBuds</div>
                                <ul className="main-categories">



                                    {this.state.filterCategory.map(category =>
                                        <FilterRecipes category={category.strCategory}
                                                       findRecipesByCategory={this.findRecipesByCategory}
                                                       findRecipesByCuisine={this.findRecipesByCuisine}/>
                                    )}




                                </ul>
                            </div></div>
                    </div></div>
    <div className="split right">
                    <div className="food-area " id={"food-area"}>

                        <div className="container">
                            <div className="row">





                                {
                                    this.state.recipes.meals &&
                                    this.state.recipes.meals .map(recipe =>
                                        <RecipeCard popularRecipe={recipe}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
    </div></div>
                </section>

</div>
        )
    }
}

export default ExploreRecipes;
