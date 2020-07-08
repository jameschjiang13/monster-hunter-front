import React, { Component } from 'react'

export default class RecipeCard extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>Ingredients: {this.props.ingredients}</p>
                <p>Instructions: {this.props.instructions}</p>
            </div>
        )
    }
}