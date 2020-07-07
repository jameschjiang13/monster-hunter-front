import React, { Component } from 'react'
import {Route, Switch, Link, NavLink} from 'react-router-dom'

class MealContainer extends Component {
    render() {
        return (
            <div>
                <li>
                    <NavLink to="/meatfest">
                        Meat Fest
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/vegan">
                        Vegan
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/fastfood">
                        Fast Food
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/diet">
                        Diet
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/">
                        Back
                    </NavLink>
                </li>
                
                
            </div>
        )
    }
}


export default MealContainer;