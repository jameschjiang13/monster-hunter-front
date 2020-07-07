import React, { Component } from 'react'
import Recipe from './Recipe.jsx'

export default class DishCard extends Component {
    render() {
        return (
            <div>
                <ul>Food Name: {this.props.name}</ul>
                <ul>Image: {this.props.image}</ul>
                <Recipe/>
            </div>
        )
    }
}
