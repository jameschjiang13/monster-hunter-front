// import React from 'react'
import React, {useState, Children} from 'react'

export default function RecipeForm(props) {

  let [ingredients, setIngredients] = useState("")
  let [instructions, setInstructions] = useState("")

  let dropDownOptions = props.foodArr.map((food) => {
      return <option value={food.id}>{food.name}</option>
    })

  let handleSubmit = (e) => {
    e.preventDefault()
    let recipeObj = {
      dish_id: e.target.dish.value,
      ingredients: e.target.ingredients.value,
      instructions: e.target.instructions.value
    } 
    fetch("http://localhost:4000/recipes", {
      method: "POST",
      headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(recipeObj)
        })
        .then(resp => resp.json())
        .then(recipeObj => {props.getFunction(recipeObj)})
    }
  
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Add A Recipe To This Dish:</h3>
          
          <label>Dish</label> <br />
          <select name="dish">
            {dropDownOptions}
          </select>
          <br/>
          <label>Ingredients:</label> <br />
          <textarea name="ingredients" type="text" value = {ingredients} onChange={(e) => setIngredients(e.target.value)} />
          <br />
          <label>Instructions:</label>
          <br />
          <textarea name="instructions" type="text" value = {instructions} onChange={(e) => setInstructions(e.target.value)}/>
          <br />
          <button>Submit Recipe</button>
        </form>
      </div>
    </div>
  )
}


// import React, { Component } from "react";

// class RecipeForm extends Component {

//   handleInput = (e) => {
//     console.log(e)
//     console.log(e.target.name)
//   }

//   dropDownOptions = (foodArr) => {
//     foodArr.map((food) => {
//       return <option value="food.name">{food.name}</option>
//     }
//     )
//   }
  
  

//   render() {
//     return (
//       <div>
//         <form>
//           <h3>Add A Recipe To This Dish:</h3>
//           <label>Meal</label> <br />
//           <textarea name="meal" type="text" value = {this.props.mealName} />
//           <br/>
//           <label>Dish</label> <br />
//           <select>
//             {this.dropDownOptions(this.props.foodArr)}
//           {/* <option value="grapefruit">Grapefruit</option>
//           <option value="lime">Lime</option>
//           <option selected value="coconut">Coconut</option>
//           <option value="mango">Mango</option> */}
//           </select>
//           <br/>
//           <label>Ingredients:</label> <br />
//           <textarea name="ingredients" type="text" value = "hoho" onChange={this.handleInput} />
//           <br />
//           <label>Instructions:</label>
//           <br />
//           <textarea name="instructions" type="textarea" value = "hihi" onChange={this.handleInput}/>
//           <br />
//           <button>Submit Recipe</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default RecipeForm;
