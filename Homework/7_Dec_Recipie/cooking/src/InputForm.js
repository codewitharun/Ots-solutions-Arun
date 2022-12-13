import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function InputForm({ parentBag, editable, afteredit }) {
  // console.log("editing the value", editable);
  const inputRecipeName = useRef();
  const inputChefName = useRef();
  const inputDetails = useRef();

  const onSubmit = () => {
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
        id: uuidv4(),
      };

      parentBag(Details);
      inputRecipeName.current.value = "";
      inputDetails.current.value = "";
      inputChefName.current.value = "";
    } else {
      alert("please enter all the details");
    }
  };
  const afterEdit = () => {
    const afterUpdate = {
      chefName: editable?.chefName,
      recipeName: editable?.recipeName,
      recipeDescription: editable?.recipeDescription,
      id: editable?.id,
    };
    //   console.log(inputref.current.value);
    afteredit(afterUpdate);
    inputRecipeName.current.value = "";
    inputDetails.current.value = "";
    inputChefName.current.value = "";
    afteredit = {};
  };

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
        placeholder={
          editable?.chefName ? editable?.chefName : "Enter Chef Name"
        }
        ref={inputChefName}
      />
      <input
        className="search"
        type="text"
        placeholder={
          editable?.recipeName ? editable?.recipeName : "Enter Recipe Name"
        }
        ref={inputRecipeName}
      />
      <input
        className="search"
        type="text"
        placeholder={
          editable?.recipeDescription
            ? editable?.recipeDescription
            : "Enter Recipe Details"
        }
        ref={inputDetails}
      />
      {editable?.recipeDescription &&
      editable?.recipeName &&
      editable?.chefName ? (
        <button className="btn" onClick={afterEdit}>
          Edit
        </button>
      ) : (
        <button className="btn" onClick={onSubmit}>
          Add to Recipe
        </button>
      )}

      {/* <button onClick={click}>Sort</button> */}
    </div>
  );
}

export default InputForm;
