import React from "react";

export default function Description({ details }) {
  // console.log(props.details);
  return (
    <div>
      {/* <h3 style={{ textAlign: "center" }}>Descriptions</h3> */}

      <h2>Dish Name: {details?.recipeName}</h2>
      <h3>Chef Name: {details?.chefName}</h3>
      <p>Description: {details?.recipeDescription}</p>
    </div>
  );
}
