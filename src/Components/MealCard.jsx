import React, { Component } from 'react'
import DishContainer from './DishContainer'
import ResponsivePlayer from '../Video/ResponsivePlayer'
import RecipeForm from './RecipeForm'

export default class MealCard extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt={this.props.image} width="200" height="200"/>
                <RecipeForm mealName = {this.props.name} foodArr = {this.props.dishes} />
                <ResponsivePlayer/>
                <br/>
                <ul>
                    <DishContainer foodArr = {this.props.dishes}/>
                </ul>
            </div>
        )
    }
}
