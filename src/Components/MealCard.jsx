import React, { Component } from 'react'
import DishContainer from './DishContainer'

export default class MealCard extends Component {
    state = {
        foods: [{
            id: 1, 
            name: "chicken",
            image: "food1.jpg"
        }, {
            id: 2,
            name: "bread",
            image: "food2.jpg"
        }]
    }

    render() {
        return (
            <div>
                {this.props.name}
                <br/>
                <ul>
                    <DishContainer foodArr = {this.state.foods}/>
                </ul>
            </div>
        )
    }
}
