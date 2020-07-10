// import React from "react";
import RecipeCard from "./RecipeCard";
import React, {useState, Children} from 'react'

export default function RecipeContainer(props) {

  let [removedRecipe, setRemovedRecipe] = useState("")

  let getRemovedRecipe = (removedRecipe) => {
    setRemovedRecipe(removedRecipe)
  };

  let fullArr =
    props.recipes[0].dish_id === props.extraRecipe.dish_id
      ? props.recipes.concat(props.extraRecipe)
      : props.recipes;


  let displayArr = fullArr.filter((recipe) => {
      return recipe.id !== removedRecipe.id
  }
  )


  let componentArr = displayArr.map((recipe) => {
    return (
      <RecipeCard
        id={recipe.id}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        removeFunction={getRemovedRecipe}
      />
    );
  });

  
  return <div>{componentArr}</div>;
}
