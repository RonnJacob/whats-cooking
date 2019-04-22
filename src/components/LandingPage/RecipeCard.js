import React from 'react'
import {Link, Route} from 'react-router-dom'


const RecipeCard = ({popularRecipe}) =>

    <div className="col-md-4 col-sm-6">
        <div className="single-food">
            <div className="food-img">
                <img src={popularRecipe.strMealThumb}
                     className="img-fluid" alt=""/>
            </div>
            <div className="food-content">
                <div className="d-flex justify-content-between">
                    <h5>{popularRecipe.strMeal}</h5>

                </div>

            </div>
        </div>
    </div>
export default RecipeCard;
