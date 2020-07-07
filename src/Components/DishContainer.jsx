import React from 'react'
import DishCard from './DishCard'

export default function DishContainer(props) {
    let componentArr = props.foodArr.map((food) => {
        return <DishCard
        name={food.name}
        image={food.image}
        key={food.id}
        />
    }
    )
    return (
        <div>
           {componentArr} 
        </div>
    )
}
