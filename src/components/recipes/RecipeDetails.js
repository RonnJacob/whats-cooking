import React, {Component} from 'react'
import '../../assets/css/linearicons.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/main.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ReactTooltip from 'react-tooltip'
import {
    faPlus,
    faTimes,
    faPencilAlt,
    faCheck,
    faUtensils,
    faMedkit,
    faHeart as solidHeart,
    faThumbsUp as solidThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import {faHeart as emptyHeart, faThumbsUp as emptyThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {BrowserRouter as Router, Link, Route, Redirect} from "react-router-dom";
import HomePageNav from '../HomePageNav'
import RecipeServices from "../../services/RecipeServices";
import UserServices from "../../services/UserServices";
import RegularUserServices from "../../services/RegularUserServices";
import NutritionistServices from "../../services/NutritionistServices";
import ChefServices from "../../services/ChefServices";
import {getFromStorage} from "../../utils/storage";

library.add(faPlus, faTimes, faPencilAlt, faCheck, emptyHeart, solidHeart, solidThumbsUp, emptyThumbsUp, faUtensils, faMedkit);

class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.recipeService = new RecipeServices();
        this.userServices = new UserServices();
        this.regularUserServices = new RegularUserServices();
        this.nutritionistServices = new NutritionistServices();
        this.chefServices = new ChefServices();
        const recipeId = props.match.params['recipeId'];
        const obj = getFromStorage('project_april');
        let defaultTooltip = '';
        let defaultButtonIcon = [];
        if (this.props.userType === 'REGULAR') {
            defaultButtonIcon = ['far', 'heart'];
            defaultTooltip = 'Favorite this Recipe!'
        } else {
            defaultButtonIcon = ['far', 'thumbs-up'];
            defaultTooltip = 'Endorse this Recipe!'
        }

        this.state = {
            userId: obj.user[0]._id,
            userType: obj.user[0].userType,
            recipeId: recipeId,
            recipe: {},
            updateValue: '',
            detail: '',
            owner: {},
            ownerName: '',
            endorsedByChef: [],
            endorsedByNutritionist: [],
            updatedFieldVisibility: 'd-none',
            defaultButtonIcon: defaultButtonIcon,
            defaultActionTooltip: defaultTooltip,
            isActioned: false
        }
    }

    componentDidMount() {
        document.title = "What's Cooking?";
        this.renderAllFields('', '', 'd-none');
        const obj = getFromStorage('project_april');
        if (obj && obj.token) {
            const { token } = obj;
            this.userServices.verifyUser(token).then(json => {
                console.log(json);
                if (json.success) {
                            // alert("updated"+courses.length)
                            this.setState({
                                token,
                                user: obj.user[0]
                            });
                }
            });
        }

    }

    renderAllFields = (updateValue, detail, updatedFieldVisibility) => {
        let currentRecipe = {};
        let currentUser = {};
        let currentUserName = '';
        let endorsedByChef = [];
        let endorsedByNutritionist = [];
        this.recipeService.findRecipeById(this.state.recipeId)
            .then(recipe => {
                    let ingredients = recipe.ingredients.join(',');
                    recipe.ingredients = ingredients;
                    currentRecipe = recipe
                }
            )
            .then(() => {
                if (currentRecipe.endorsedByChef) {
                    let chefNames = [];
                    currentRecipe.endorsedByChef.map(e => {
                        this.userServices.findById(e)
                            .then(user => {
                                // this.state.chefIds.push(user._id)
                                // this.state.endorsedByChef.push(user.firstName)
                                this.state.endorsedByChef.push(user)
                            })
                    })
                }
                if (currentRecipe.endorsedByNutritionist) {
                    let nutritionistNames = [];
                    currentRecipe.endorsedByNutritionist.map(e => {
                        this.userServices.findById(e)
                            .then(user => {
                                // this.state.nutritionistIds.push(user._id)
                                // this.state.endorsedByNutritionist.push(user.firstName)
                                this.state.endorsedByNutritionist.push(user)
                            })
                    })
                }
            })
            .then(() => this.userServices.findById(currentRecipe.ownedBy))
            .then(user => {
                // alert('$$$$$' + user)
                if (user) {
                    currentUser = user;
                    currentUserName = user.firstName
                }
            })
            .then(() => {
                endorsedByChef = this.state.endorsedByChef.filter((thing, index) => {
                    return index === this.state.endorsedByChef.findIndex(obj => {
                        return JSON.stringify(obj) === JSON.stringify(thing);
                    });
                })
            })
            .then(() => {
                endorsedByNutritionist = this.state.endorsedByNutritionist.filter((thing, index) => {
                    return index === this.state.endorsedByNutritionist.findIndex(obj => {
                        return JSON.stringify(obj) === JSON.stringify(thing);
                    });
                });
            })
            .then(() => this.setState({
                recipe: currentRecipe,
                owner: currentUser,
                ownerName: currentUserName,
                endorsedByChef: endorsedByChef,
                endorsedByNutritionist: endorsedByNutritionist,
                updateValue: updateValue,
                detail: detail,
                updatedFieldVisibility: updatedFieldVisibility
            }))
    }

    valueChanged = (event) => {
        this.renderAllFields(event.target.value, this.state.detail, 'd-block')
    }

    toggleAction = () => {
        if (this.state.userType === 'REGULAR') {
            if (!this.state.isActioned) {
                console.log(this.state.userId);
                console.log(this.state.recipeId);
                this.regularUserServices.favoriteRecipe(this.state.userId, this.state.recipeId)
                    .then(() => this.setState({
                        defaultButtonIcon: ['fas', 'heart'],
                        isActioned: true
                    }))
                    .then(() => alert("Added to your Favorites successfully!"));
            }
            else{
                this.regularUserServices.removeFavorite(this.state.userId, this.state.recipeId)
                    .then(() => this.setState({
                        defaultButtonIcon: ['far', 'heart'],
                        isActioned: false
                    }))
                    .then(() => alert("Removed from your Favorites successfully!"));
            }

        } else if (this.state.userType === 'CHEF') {
            if (!this.state.isActioned)
                this.chefServices.endorseRecipe(this.state.userId, this.state.recipeId)
                    .then(() => this.setState({
                        defaultButtonIcon: ['fas', 'thumbs-up'],
                        isActioned: true
                    }))
                    .then(() => alert("Added to your Endorsed successfully!"));
            else
                this.chefServices.removeEndorsed(this.state.userId, this.state.recipeId)
                    .then(() => this.setState({
                        defaultButtonIcon: ['far', 'thumbs-up'],
                        isActioned: false
                    }))
                    .then(() => alert("Removed from your Endorsed successfully!"));
        } else {
            if (!this.state.isActioned)
                this.nutritionistServices.endorseRecipe(this.state.userId, this.state.recipeId)
                    .then(() => this.setState({
                        defaultButtonIcon: ['fas', 'thumbs-up'],
                        isActioned: true
                    }))
                    .then(() => alert("Added to your Endorsed successfully!"));
            else
                this.nutritionistServices.removeEndorsed(this.state.userId, this.state.recipeId)
                    .then(() => this.setState({
                        defaultButtonIcon: ['far', 'thumbs-up'],
                        isActioned: false
                    }))
                    .then(() => alert("Removed from your Endorsed successfully!"));
        }

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
            .then(() => this.renderAllFields('', '', 'd-none'))
            .then(() => alert('Recipe Updated Successfully!'))
    }

    selectNameForUpdate = (recipeName) => this.renderAllFields(recipeName, 'name', 'd-block')


    selectIngredientsForUpdate = (recipeIngredients) =>
        this.renderAllFields(recipeIngredients, 'ingredients', 'd-block')


    selectStepsForUpdate = (recipeSteps) => this.renderAllFields(recipeSteps, 'steps', 'd-block')

    selectImageForUpdate = (recipeImage) => this.renderAllFields(recipeImage, 'image', 'd-block')

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
                                <p className="text-white link-nav"><a href='/home'>Home </a> <span
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
                        <h1 className="mb-5 text-center">Recipe Details
                            <span>&nbsp;&nbsp;<a className='hand-cursor'
                                                 onClick={this.toggleAction} data-tip={this.state.defaultActionTooltip}>
                                {this.state.userType === 'REGULAR' && <FontAwesomeIcon
                                    icon={this.state.defaultButtonIcon}/>
                                || (this.state.userType === 'CHEF' || this.state.userType === 'NUTRITIONIST') &&
                                <FontAwesomeIcon
                                    icon={this.state.defaultButtonIcon}/>
                                }</a></span>
                        </h1>
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

                                        {this.state.ownerName &&
                                        <tr>
                                            <td className="name-theader">Owned By</td>
                                            <td className="name-theader">{this.state.ownerName}</td>
                                            <td className="actions-theader">
                                            </td>
                                        </tr>
                                        }
                                        {(this.state.endorsedByChef.length != 0
                                            || this.state.endorsedByNutritionist.length != 0)
                                        &&
                                        <tr>
                                            <td className="name-theader">Endorsed By</td>
                                            <td className="">

                                                {this.state.endorsedByChef.length != 0 &&
                                                <div>
                                                    <div className='row endorsed-theader'>
                                                        <FontAwesomeIcon
                                                            icon={faUtensils}
                                                            className="fas" data-tip='Chefs'/>
                                                    </div>
                                                    {/*{this.state.endorsedByChef.map((e, index) => <div*/}
                                                    {/*className='row endorsed-theader'>*/}
                                                    {/*<Link to={`/profile/${this.state.chefIds[index]}`}>{e}</Link></div>)*/}
                                                    {/*}*/}

                                                    {this.state.endorsedByChef.map(e => <div
                                                        className='row endorsed-theader'>
                                                        <Link to={`/profile/CHEF/${e._id}`} className='hand-cursor'>
                                                            {e.firstName}</Link>
                                                    </div>)
                                                    }
                                                </div>
                                                }
                                                {this.state.endorsedByNutritionist.length != 0 &&
                                                <div>
                                                    <div className='row endorsed-theader'>
                                                        <FontAwesomeIcon
                                                            icon={faMedkit}
                                                            className="fas"/>
                                                    </div>
                                                    {this.state.endorsedByNutritionist.map(e => <div
                                                        className='row endorsed-theader'><Link
                                                        to={`/profile/NUTRITIONIST/${e._id}`}
                                                        className='hand-cursor'>
                                                        {e.firstName}</Link></div>)
                                                    }
                                                </div>
                                                }
                                            </td>
                                            <td className="actions-theader">
                                            </td>
                                        </tr>
                                        }

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
                <ReactTooltip/>
            </div>
        );
    }


}

export default RecipeDetails;
