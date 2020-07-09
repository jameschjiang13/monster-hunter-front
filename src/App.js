import logo from "./logo.svg";
import ChefContainer from "./Components/ChefContainer.jsx";
import "./App.css";

import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MealCard from "./Components/MealCard.jsx";
import NotFound from "./Components/NotFound";
import Header from './Components/Header'
import About from './Components/About'

export default class App extends Component {
  state = {
    chefList: [],
  };

  componentDidMount() {
    fetch("http://localhost:4000/chefs")
      .then((resp) => resp.json())
      .then((chefObjs) => {
        this.setState({
          chefList: chefObjs,
        });
      }
      );
  }

  decideWhichCharactersToRender = (routerProps) => {
    let usertyped = routerProps.match.params.meal;
    let mealsArr = this.state.chefList
      .map((chef) => {
        return chef.meals;
      })
      .flat();
    let foundMeal = mealsArr.find((meal) => {
      return meal.name.toLowerCase().split(" ").join("") === usertyped;
    });
    if (foundMeal) {
      return (
        <MealCard
          name={foundMeal.name}
          image={foundMeal.image_url}
          dishes={foundMeal.dishes}
          video={foundMeal.video_url}
        />
      );
    } else {
      return <NotFound />;
    }
  };

  

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/:meal" render={this.decideWhichCharactersToRender} />
          <Route path="/" exact>
            <ChefContainer chefList={this.state.chefList} />
          </Route>
        </Switch>
      </div>
    );
  }
}
