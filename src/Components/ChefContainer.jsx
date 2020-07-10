import ChefCard from "./ChefCard.jsx";

import React from "react";

export default function ChefContainer(props) {
  let componentsArr = props.chefList.map((chefObj) => {
    return (
      <ChefCard
        chef={chefObj}
        chefName={chefObj.name}
        chefImage={chefObj.image_url}
        key={chefObj.id}
      />
    );
  });

  return <div className="container">{componentsArr}</div>;
}
