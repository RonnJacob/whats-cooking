import React from 'react'

import MealDBServices from "../../services/MealDBServices";
import RecipeCard from "../LandingPage/RecipeCard";
import GuestNav from "../LandingPage/GuestNav";
import '../../assets/landingpage/css/sidebar.css'
import FilterRecipes from "./FilterRecipes";

class ExploreRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.mealDBServices = new MealDBServices();
        this.state = {
            recipes: [],
            unsortedRecipes: [],
            searchRecipe: '',
            popularRecipes: [],
            filterCategory: [],
            sorted:0

        };
        this.searchRecipe = this.searchRecipe.bind(this);

    }

    componentWillMount() {
        document.title = "Explore Recipes";
        this.mealDBServices.findAllRecipes()
            .then(recipes => {
                this.setState
                ({
                    recipes: recipes.meals
                })
            });

    }

    componentDidMount() {
        this.mealDBServices.findAllCategories()
            .then(filterCategory => {
                this.setState
                ({filterCategory: filterCategory.meals})
            });
        this.mealDBServices.findAllRecipes()
            .then(recipes => {
                this.setState
                ({

                    unsortedRecipes: recipes.meals})
            });
    }

    findAllCuisines = () => {
        this.mealDBServices.findAllCuisines()
            .then(filterCategory => {
                this.setState
                ({filterCategory: filterCategory.meals})
            });
    }

    findAllCategories = () => {
        this.mealDBServices.findAllCategories()
            .then(filterCategory => {
                this.setState
                ({filterCategory: filterCategory.meals})
            });
    }

    findRecipesByCategory = (category) => {
        this.mealDBServices.findRecipesByCategory(category)
            .then(recipes => {
                this.setState
                ({recipes: recipes.meals,
                    unsortedRecipes:recipes.meals})
            });
    }

    findRecipesByCuisine = (cuisine) => {
        this.mealDBServices.findRecipesByCuisines(cuisine)
            .then(recipes => {
                this.setState
                ({recipes: recipes.meals})
            });
    }


    searchRecipe = (recipe) => {
        this.mealDBServices.findRecipeByName(recipe).then(recipes => {

            this.setState
            ({recipes: recipes.meals})
            if (recipes.meals == null) {
                document.getElementById("food-area").innerHTML =
                    " <div class=\"no-results\">" +
                    "<h3>We searched all over but didn't " +
                    "find a recipe for '" + `${recipe}` + "'</h3>" +

                    "<div class=\"no-results-suggestion\">" +
                    "<img src=\"https://x.yummlystatic.com/s/e3ccfc5a7/img/check_spelling.svg\">" +
                    "<span>Check Spelling</span></div><div class=\"no-results-suggestion\">" +
                    "<img src=\"https://x.yummlystatic.com/s/e3ccfc5a7/img/different_keywords.svg\">" +
                    "<span>Different Keywords</span></div><div class=\"no-results-suggestion\">" +
                    "<img src=\"https://x.yummlystatic.com/s/e3ccfc5a7/img/simplify_search.svg\">" +
                    "<span>Simplify Search</span></div></div>" +
                    "" +
                    " </PopularRecipes popularRecipes={" + this.state.popularRecipes + "}>"


            }
        });
    }


    compareAsc(a, b) {
        // Use toUpperCase() to ignore character casing
        const recipeA = a.strMeal.toUpperCase();
        const recipeB = b.strMeal.toUpperCase();

        let comparison = 0;
        if (recipeA > recipeB) {
            comparison = 1;
        } else if (recipeA < recipeB) {
            comparison = -1;
        }
        return comparison;
    }
    compareDesc(a, b) {
        // Use toUpperCase() to ignore character casing
        const recipeA = a.strMeal.toUpperCase();
        const recipeB = b.strMeal.toUpperCase();

        let comparison = 0;
        if (recipeA > recipeB) {
            comparison = 1;
        } else if (recipeA < recipeB) {
            comparison = -1;
        }
        return comparison*-1;
    }

    sortAscend = () => {
        var unsortedRecipes=this.state.recipes;
        const sortedRecipes=unsortedRecipes.sort(this.compareAsc);

            this.setState
            ({recipes: sortedRecipes,
                sorted:1})
        this.mealDBServices.findAllRecipes()
            .then(recipes => {
                this.setState
                ({

                    unsortedRecipes: recipes.meals})
            });

    };

    sortDescend = () => {
        var dummy=this.state.recipes;
        // const unsortedRecipes=this.state.recipes;
        console.log()
        const sortedRecipes=dummy.sort(this.compareDesc);

            this.setState
            ({recipes: sortedRecipes,
                    sorted: 1})
        this.mealDBServices.findAllRecipes()
            .then(recipes => {
                this.setState
                ({

                    unsortedRecipes: recipes.meals})
            });


    };

    resetSort=()=>{
        const unsortedRecipes= this.state.unsortedRecipes;
        if(this.state.sorted===1){
            this.setState({
                recipes: unsortedRecipes,
                unsortedRecipes: unsortedRecipes,
                sorted:0
            })
        }

    }


    searchChanged = (event) => {
        this.setState(
            {
                searchRecipe: event.target.value
            });
    };

    render() {
        return (

            <div>
                {/*<LandingPageHeader/>*/}
                <div id="header">
                    <GuestNav/>
                </div>
                <div>
                    <section className="table-area section-padding">
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
                                            <input type="text" className="form-control"
                                                   placeholder="search a million recipes & more"
                                                   onChange={this.searchChanged}/>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="split right">
                            <div className="filter-bar d-flex flex-wrap align-items-center">
                                <div className="sorting">

                                </div>
                                <div className="sorting mr-auto">

                                </div>
                                <div className="pagination">
                                    <a href="#" className="prev-arrow head" onClick={this.sortAscend}><i className="fa fa-sort-alpha-asc"
                                                                          aria-hidden="true"></i></a>
                                    <a href="#" className="next-arrow head" onClick={this.sortDescend}><i className="fa fa-sort-alpha-desc"
                                                                          aria-hidden="true"></i></a>

                                    <a href="#" onClick={this.resetSort}>reset</a>

                                </div>
                            </div>
                            <div className="food-area " id={"food-area"}>

                                <div className="container">
                                    <div className="row">


                                        {
                                            this.state.recipes &&
                                            this.state.recipes.map(recipe =>
                                                <RecipeCard popularRecipe={recipe}/>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default ExploreRecipes;
