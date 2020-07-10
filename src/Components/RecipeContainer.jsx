import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeContainer(props) {
  let fullArr =  props.recipes[0].dish_id === props.extraRecipe.dish_id? props.recipes.concat(props.extraRecipe) : props.recipes
  let componentArr = fullArr.map((recipe) => {
    return (
      <RecipeCard
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
      />
    );
  });
  return <div>{componentArr}</div>;
}
