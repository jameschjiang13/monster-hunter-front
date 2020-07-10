import React, { Component } from "react";
import RecipeContainer from "./RecipeContainer.jsx";

export default class DishCard extends Component {
  render() {
    return (
      <div className="dishes">
          <div class="column left">
            <img
            src={this.props.image}
            alt={this.props.image}
            width="150"
            height="150"
            />
          </div>

          <div class="column right">
            <ul>Food Name {this.props.name}</ul>
            <RecipeContainer
            recipes={this.props.recipe}
            extraRecipe={this.props.extraRecipe}
            />
           <div class="seperator"> --------------------------------------------------------------------------------- </div>
          </div>
      </div>
    );
  }
}
