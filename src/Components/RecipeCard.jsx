import React, { Component } from "react";

export default class RecipeCard extends Component {
  render() {
    return (
      <div>
        <div>____________________________________</div>
        <p>Ingredients: {this.props.ingredients}</p>
        <p>Instructions: {this.props.instructions}</p>
      </div>
    );
  }
}
