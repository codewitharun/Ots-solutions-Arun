import React from "react";

export default function Description(props) {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Descriptions</h3>

      <ul>
        {props.details.map((i) => (
          <li key={i.recipeName}>{i.recipeName}</li>
        ))}
      </ul>

      <ul>
        {props.details.map((i) => (
          <li key={i.recipeName}>{i.chefName}</li>
        ))}
      </ul>

      <ul>
        {props.details.map((i) => (
          <li key={i.recipeName}>{i.recipeDescription}</li>
        ))}
      </ul>
    </div>
  );
}
