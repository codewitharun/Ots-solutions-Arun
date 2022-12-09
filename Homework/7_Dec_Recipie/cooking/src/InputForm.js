import React, { useRef, useState } from "react";

function InputForm({ parentBag, click }) {
  const inputRecipeName = useRef();
  const inputChefName = useRef();
  const inputDetails = useRef();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "200px",
        // backgroundColor: "green",
        justifyContent: "space-evenly",
      }}
    >
      <input
        className="search"
        type="text"
        placeholder="Enter Recipe Details"
        ref={inputDetails}
      />
      <input
        className="search"
        type="text"
        placeholder="Enter Chef Name"
        ref={inputChefName}
      />
      <input
        className="search"
        type="text"
        placeholder="Enter Recipe Name"
        ref={inputRecipeName}
      />
      <button
        className="btn"
        onClick={() => {
          //   console.log(inputref.current.value);

          if (
            inputChefName.current.value &&
            inputRecipeName.current.value &&
            inputDetails.current.value
          ) {
            const Details = {
              chefName: inputChefName.current.value,
              recipeName: inputRecipeName.current.value,
              recipeDescription: inputDetails.current.value,
            };

            parentBag(Details);
            inputRecipeName.current.value = "";
            inputDetails.current.value = "";
            inputChefName.current.value = "";
          } else {
            alert("Please fill all the details");
          }
        }}
      >
        Add
      </button>
      {/* <button onClick={click}>Sort</button> */}
    </div>
  );
}

export default InputForm;
