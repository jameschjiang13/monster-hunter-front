import React, { Component } from "react";
import DishContainer from "./DishContainer";
import ResponsivePlayer from "../Video/ResponsivePlayer";
import RecipeForm from "./RecipeForm";

export default class MealCard extends Component {
  state = {
    newRecipeObj: {},
  };

  getNewRecipeFromForm = (recipeObj) => {
    this.setState({
      newRecipeObj: recipeObj,
    });
  };

  render() {
    return (
      <div>
        <div>
          <ResponsivePlayer video={this.props.video} />
        </div>
        <div className="topdiv">
          {/* <h2 className="luckycat">{this.props.name}</h2> */}
          <img
            className="luckypicture"
            src={this.props.image}
            alt={this.props.image}
            width="200"
            height="200"
          />

          <RecipeForm
            className="addrecipe"
            mealName={this.props.name}
            foodArr={this.props.dishes}
            getFunction={this.getNewRecipeFromForm}
          />
        </div>

        <ul>
          <DishContainer
            foodArr={this.props.dishes}
            extraRecipe={this.state.newRecipeObj}
          />
        </ul>
      </div>
    );
  }
}
