import React, { useState } from "react";
import List from "./List";
import "./App.css";
import InputForm from "./InputForm";
import Description from "./Description";
function Form() {
  const [data, setData] = useState([]);
  const [final, setFinal] = useState([]);
  let update = (item) => {
    if (item) {
      //   setData((c) => [...c, item]);
      setData((pre) => [...pre, item]);
      console.log(data);
    }
  };
  let details = (item) => {
    if (item) {
      //   setData((c) => [...c, item]);
      setFinal((pre) => [item]);
      console.log("details item", item);
    }
  };
  //   let sort = () => {
  //     const newData = data.sort();
  //     console.log("jhsvfjhsdv", newData);
  //     setData([...newData]);
  //   };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <div className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "1px solid gray",
            width: "600px",
          }}
        >
          <InputForm parentBag={update} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid gray",
            width: "600px",
          }}
        >
          <div>
            <h3>List of Recipes</h3>
          </div>
          <div>
            <List arr={data} details={details} />
          </div>
        </div>
      </div>
      <div className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "1px solid gray",
            width: "600px",
          }}
        >
          <div>
            <Description details={final} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

// we can send data from form to list because form is the parent of list.
// Problem:- Form needs data from input form component (Which means we need to pass data from child to parent).
