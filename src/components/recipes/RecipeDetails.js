import React, {Component} from 'react'
import '../../assets/css/linearicons.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/main.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTimes, faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import HomePageNav from '../HomePageNav'
import RecipeServices from "../../services/RecipeServices";
import UserServices from "../../services/UserServices";

library.add(faPlus, faTimes, faPencilAlt, faCheck);

class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.recipeService = new RecipeServices();
        this.userServices = new UserServices();
        const recipeId = props.match.params['recipeId'];
        this.state = {
            recipeId: recipeId,
            recipe: {},
            updateValue: '',
            detail: '',
            owner: {},
            ownerName: '',
            updatedFieldVisibility: 'd-none'
        }
    }

    componentDidMount() {
        document.title = "What's Cooking?";
        let currentRecipe;
        let currentUser = {};
        let currentUserName = '';
        this.recipeService.findRecipeById(this.state.recipeId)
            .then(recipe => {
                let ingredients = recipe.ingredients.join(',');
                recipe.ingredients = ingredients;
                currentRecipe = recipe
            })
            .then(() => this.userServices.findById(currentRecipe.ownedBy))
            .then(user => {
                alert('$$$$$' + user)
                if (user) {
                    currentUser = user;
                    currentUserName = user.firstName
                }

                this.setState({
                    recipe: currentRecipe,
                    owner: currentUser,
                    ownerName: currentUserName
                })
            })
    }

    valueChanged = (event) => {
        this.setState(
            {
                updateValue: event.target.value
            });
    }

    updateIngredient = () => {
        let recipe = JSON.parse(JSON.stringify(this.state.recipe));
        if (this.state.detail === 'ingredients')
            recipe.ingredients = this.state.updateValue.split(',').map(function (item) {
                return item.trim();
            })
        else
            recipe[`${this.state.detail}`] = this.state.updateValue;
        this.recipeService.updateRecipe(this.state.recipeId, recipe)
            .then(() => this.recipeService.findRecipeById(this.state.recipeId))
            .then(recipe => {
                let ingredients = recipe.ingredients.join(',');
                recipe.ingredients = ingredients;
                return this.setState({
                    recipe: recipe,
                    updateValue: '',
                    detail: '',
                    updatedFieldVisibility: 'd-none'
                })
            })
            .then(() => alert('Recipe Updated Successfully!'))
    }

    selectNameForUpdate = (recipeName) => {
        this.setState({
            updateValue: recipeName,
            detail: 'name',
            updatedFieldVisibility: 'd-block'
        })
    }

    selectIngredientsForUpdate = (recipeIngredients) => {
        this.setState({
            updateValue: recipeIngredients,
            detail: 'ingredients',
            updatedFieldVisibility: 'd-block'
        })
    }

    selectStepsForUpdate = (recipeSteps) => {
        this.setState({
            updateValue: recipeSteps,
            detail: 'steps',
            updatedFieldVisibility: 'd-block'
        })
    }

    selectImageForUpdate = (recipeImage) => {
        this.setState({
            updateValue: recipeImage,
            detail: 'image',
            updatedFieldVisibility: 'd-block'
        })
    }

    render() {
        let updatedValue;
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
                                    <Link>My Recipes</Link>
                                    <span
                                        className="lnr lnr-arrow-right"></span>
                                    <a href="#">Recipe Details</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-about-area section-gap">
                    <div className="container">
                        <h1 className="mb-5 text-center">Recipe Details</h1>
                        <div className="row">
                            <div className="col-lg-7 home-about-left">
                                <div className="table-responsive">
                                    <table className="groceries table table-bordered table-hover"
                                           id="grocery_table">
                                        <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Detail</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="name-theader">Name</td>
                                            <td className="name-theader">{this.state.recipe.name}</td>
                                            <td className="actions-theader"><span><a
                                                onClick={() => this.selectNameForUpdate(this.state.recipe.name)}>
                                                <FontAwesomeIcon
                                                    icon="pencil-alt"
                                                    className="fas"/></a></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name-theader">Ingredients</td>
                                            <td className="name-theader">{this.state.recipe.ingredients}</td>
                                            <td className="actions-theader"><span><a
                                                onClick={() =>
                                                    this.selectIngredientsForUpdate(this.state.recipe.ingredients)}>
                                                <FontAwesomeIcon
                                                    icon="pencil-alt"
                                                    className="fas"/></a></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name-theader">Steps</td>
                                            <td className="name-theader">{this.state.recipe.steps}</td>
                                            <td className="actions-theader"><span><a
                                                onClick={() => this.selectStepsForUpdate(this.state.recipe.steps)}>
                                                <FontAwesomeIcon
                                                    icon="pencil-alt"
                                                    className="fas"/></a></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name-theader">Image</td>
                                            <td className="name-theader">{this.state.recipe.image}</td>
                                            <td className="actions-theader"><span><a
                                                onClick={() => this.selectImageForUpdate(this.state.recipe.image)}>
                                                <FontAwesomeIcon
                                                    icon="pencil-alt"
                                                    className="fas"/></a></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="name-theader">Owned By</td>
                                            <td className="name-theader">{this.state.ownerName}</td>
                                            <td className="actions-theader">
                                            </td>
                                        </tr>
                                        <tr className="full-width red-border">
                                            <td>
                                                <div className={`${this.state.updatedFieldVisibility}`}>
                                                    <label className='text-red font-weight-bold'>Change -></label></div>
                                            </td>
                                            <td className="text-red">
                                                <div className={`${this.state.updatedFieldVisibility}`}>
                                                    <input className='full-width no-input-border'
                                                           value={this.state.updateValue}
                                                           onChange={this.valueChanged}
                                                    ></input>
                                                </div>
                                            </td>
                                            <td className="actions-theader ">
                                                <div className={`${this.state.updatedFieldVisibility}`}><span>
                                                <a className="text-red" onClick={this.updateIngredient}>
                                                <FontAwesomeIcon
                                                    icon="check"
                                                    className="fas"/></a></span>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-4 home-about-right">
                                {this.state.recipe.image !== '' && <img src={this.state.recipe.image} alt=""/>
                                ||
                                <img src={require('./about-img.jpg')} alt=""/>}

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
        );
    }


}

export default RecipeDetails;
