import React from 'react'

import MealDBServices from "../../services/MealDBServices";
import RecipeCard from "../LandingPage/RecipeCard";

class ExploreRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.mealDBServices = new MealDBServices();
        this.state = {
            recipes: []

        };


    }

    componentWillMount() {
        document.title = "Explore Recipes";
        this.mealDBServices.findAllRecipes()
            .then(recipes =>{
                this.setState
                ({recipes: recipes})
            });
        console.log(this.state.popularRecipes)
    }

    render() {
        return (


                <div className="food-area container">



                        <div className="row">

                            {
                                this.state.recipes.meals &&
                                this.state.recipes.meals .map(recipe =>
                                    <RecipeCard popularRecipe={recipe}/>
                                )

                            }
                        </div>

                </div>
          

        )
    }
}

export default ExploreRecipes;
