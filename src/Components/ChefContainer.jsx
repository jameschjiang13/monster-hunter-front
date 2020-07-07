import React, { Component } from 'react'
import ChefCard from './ChefCard.jsx'

class ChefContainer extends Component {

    componentsArr = this.props.chefList.map((chefObj) => {
        return <ChefCard 
            chefName = {chefObj.name}
            chefImage = {chefObj.image}
            key = {chefObj.id}
        />
    }
    )

    render() {
        return (
            <div>
                These are your chefs
                {this.componentsArr}
            </div>
        )
    }
}



export default ChefContainer