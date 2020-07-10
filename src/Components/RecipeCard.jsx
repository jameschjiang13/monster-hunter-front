import React, { Component } from "react";

export default class RecipeCard extends Component {
  state = {
    removed: {},
  };
  handleClick = (e) => {
    fetch(`http://localhost:4000/recipes/${this.props.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((removedRecipe) => {
        this.setState({
          removed: removedRecipe,
        });
      });
  };

  render() {
    return (
      <div>
        <div>_________________________________</div>
        <p>Ingredients: {this.props.ingredients}</p>
        <p>Instructions: {this.props.instructions}</p>
        <button onClick={this.handleClick}>Remove Recipe</button>
      </div>
    );
  }
}
