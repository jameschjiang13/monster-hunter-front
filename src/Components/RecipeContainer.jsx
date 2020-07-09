import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeContainer(props) {

    let fullRecipe = props.recipes[0].dish_id === props.extraRecipe.dish_id ? props.recipes.concat(props.extraRecipe) : props.recipes

    let componentArr = fullRecipe.map((recipe) => {
        return <RecipeCard ingredients={recipe.ingredients} instructions={recipe.instructions}/>
    }
    )
    console.log(props)
    return (
        <div>
           {componentArr}
        </div>
    )
}
