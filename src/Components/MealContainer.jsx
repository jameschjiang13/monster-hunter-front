import { Route, Switch, Link, NavLink } from "react-router-dom";
import React from "react";

export default function MealContainer(props) {
  let NavArr = props.chef.meals.map((meal) => {
    return (
      <li>
        <NavLink to={`/${meal.name.toLowerCase().split(" ").join("")}`}>
          {meal.name}
        </NavLink>
      </li>
    );
  });
  return <div>{NavArr}</div>;
}
