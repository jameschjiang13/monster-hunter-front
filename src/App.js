import logo from './logo.svg';
import ChefContainer from './Components/ChefContainer.jsx'
import './App.css';

import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import MealCard from './Components/MealCard.jsx'
import NotFound from './Components/NotFound'

export default class App extends Component {

  state = {
    chefList: [{
      id: 1,
      name: "Meow",
      image: "https://i.pinimg.com/236x/eb/41/ee/eb41ee851405a0c0a20128169d08889f--monster-hunter-character-art.jpg"
    }, {
      id:2,
      name: "Gram",
      image: "https://vignette.wikia.nocookie.net/monsterhunter/images/8/83/MHWI-Seliana_Screenshot_001.jpg/revision/latest?cb=20190604171445"
    }],

    MealList : [{
      id: 1,
      name: "Meat Fest",
      chefId: 1
    }, {
      id: 2,
      name: "Vegan",
      chefId: 1
    }, {
      id: 3,
      name: "Fast Food",
      chefId: 2
    }, {
      id: 4,
      name: "Diet",
      chefId: 2
    }]
  }

  render() {
    return (
      <div className="App">
     
        <Switch>
        <Route path="/meatfest">
            <MealCard name="Meat Fest"/>
        </Route> 
          
        <Route path="/vegan">
            <MealCard name="Vegan"/>
        </Route> 
          
        <Route path="/fastfood">
            <MealCard name="Fast Food"/>
        </Route> 
          
        <Route path="/diet">
            <MealCard name="Diet"/>
        </Route> 
          
        
        <Route path="/" exact>
          <ChefContainer chefList = {this.state.chefList}/>
          </Route>
          
        <Route path="/" component={NotFound} />
      </Switch>
      </div>
    );
  }
}