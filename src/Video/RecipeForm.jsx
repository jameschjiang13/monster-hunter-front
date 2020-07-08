import React, { Component } from "react";

class RecipeForm extends Component {
  state = {
    ingredients: "",
    instructions: "",
  };

  render() {
    return (
      <div>
        <form>
          <h3>Add A Recipe To This Dish:</h3>
          <label>Ingredients:</label> <br />
          <textarea name="ingredients" type="text" />
          <br />
          <label>Instructions:</label>
          <br />
          <textarea name="instructions" type="textarea" />
          <br />
          <button>Submit Recipe</button>
        </form>
      </div>
    );
  }
}

export default RecipeForm;
