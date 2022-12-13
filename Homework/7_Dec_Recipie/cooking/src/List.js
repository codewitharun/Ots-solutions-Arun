import React, { useEffect, useState } from "react";

export default function List(props) {
  let final = {};

  return (
    <div>
      <ul>
        {props.arr.map((i) => (
          <li key={i?.id}>
            <div>
              <h4
                style={{ display: "inline" }}
                onClick={() => {
                  final = i;
                  props.details(final);
                }}
              >
                {i?.recipeName}
              </h4>
              <span>
                <button
                  onClick={() => {
                    props.deleteObject(i?.id);
                  }}
                >
                  X
                </button>
              </span>
              <span>
                <button
                  onClick={() => {
                    final = i;
                    props.editable(final);
                  }}
                >
                  Edit
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
