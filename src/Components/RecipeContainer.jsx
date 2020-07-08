import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeContainer(props) {
    console.log(props)
    let componentArr = props.recipes.map((recipe) => {
        return <RecipeCard ingredients={recipe.ingredients} instructions={recipe.instructions}/>
    }
    )
    return (
        <div>
           {componentArr}
        </div>
    )
}
