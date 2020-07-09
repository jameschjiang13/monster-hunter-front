import React, { Component } from "react";
import RecipeContainer from "./RecipeContainer.jsx";

export default class DishCard extends Component {
  render() {
    return (
      <div>
        <ul>Food Name {this.props.name}</ul>
        <img
          src={this.props.image}
          alt={this.props.image}
          width="100"
          height="100"
        />
        <RecipeContainer
          recipes={this.props.recipe}
          extraRecipe={this.props.extraRecipe}
        />
      </div>
    );
  }
}
