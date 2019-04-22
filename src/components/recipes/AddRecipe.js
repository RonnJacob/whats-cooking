import React from 'react';
import './Recipe.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AddRecipe = ({addRecipe, userId}) => {
    let name, ingredients, steps;
    return (
        <div>
            <div id="header">
                {/*<HomePageNav/>*/}
            </div>
            <section className="about-banner relative">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                My Recipes
                            </h1>
                            <p className="text-white link-nav"><Link to='/'>Home </Link> <span
                                className="lnr lnr-arrow-right"></span>
                                {/*TODO need to change the hyper link to my recipes*/}
                                <Link to={`/ingredients/${userId}`}>My Recipes</Link>
                                <span
                                    className="lnr lnr-arrow-right"></span>
                                <a href="#">Add Recipe</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-about-area section-gap">
                <div className="container">
                    <h1 className="mb-5 text-center">Add Recipe</h1>
                    <div className="row">
                        <div className="col-lg-6 home-about-left">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Recipe</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form id="add_ingredients">
                                        <div className="form-group">
                                            <label htmlFor="recipe_name">Recipe Name: </label>
                                            <input ref={node => name = node} type="text" className="form-control"
                                                   id="recipe_name"
                                                   aria-describedby="recipeHelp" placeholder="Enter Recipe Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipe_ingredients">Ingredients Needed: </label>
                                            <input ref={node => ingredients = node} type="text" className="form-control"
                                                   id="recipe_ingredients"
                                                   aria-describedby="recipeHelp"
                                                   placeholder="Please enter ingredients separated by commas and no spaces"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="recipe_steps">Steps: </label>
                                            <textarea ref={node => steps = node} type="text" className="form-control"
                                                      id="recipe_steps"
                                                      aria-describedby="recipeHelp" placeholder="Enter Steps"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="middle-div btn btn-primary" id="save_recipe"
                                            onClick={() => {
                                                let recipe = {
                                                    name: name.value,
                                                    ownedBy: userId,
                                                    steps: steps.value,
                                                    ingredients: ingredients.value.split(',').map(function(item) {
                                                        return item.trim();
                                                    }),
                                                    image: 'https://picsum.photos/id/292/200/300'
                                                };
                                                console.log('$$$$$$$$$' + recipe)
                                                addRecipe(recipe)
                                            }}>Save changes
                                    </button>
                                    <Link to={`/ingredients/${userId}`} className="middle-div btn btn-danger"
                                          id="save_recipe">Cancel
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 home-about-right">
                            <img src={require('./add-img.jpg')} alt=""/>
                        </div>

                    </div>
                </div>
            </section>
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
    )
}


export default AddRecipe