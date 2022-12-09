import React from "react";

export default function List(props) {
  let final = {};

  return (
    <div>
      <ul>
        {props.arr.map((i) => (
          <li
            key={i.recipeName}
            onClick={() => {
              final = i;
              props.details(final);
            }}
          >
            {i.recipeName}
          </li>
        ))}
      </ul>
    </div>
  );
}
