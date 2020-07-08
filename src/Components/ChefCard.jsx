import React, { Component } from 'react'
import MealContainer from './MealContainer.jsx'

export default class ChefCard extends Component {
    state = {
        fliped: false
    }

    handleClick = (e) => {
        this.setState((prevState) => {
            return {
                fliped: !prevState.fliped
            }
        }
        )
}

    

    render() {
        return (
            <div>
                <div>
                    Name: {this.props.chefName}
                </div>
                <div>
                    {this.state.fliped
                        ? 
                        <div onClick={this.handleClick}><MealContainer chef={this.props.chef}/></div>
                        : 
                        <img onClick={this.handleClick} src={this.props.chefImage} alt={this.props.chefImage} width="200" height="200"/>}             
                </div>
            </div>
        )
    }
}
