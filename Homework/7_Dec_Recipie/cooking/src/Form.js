import React, { useState, useEffect } from "react";
import List from "./List";
import "./App.css";
import InputForm from "./InputForm";
import Description from "./Description";
function Form() {
  const [data, setData] = useState([]);
  const [final, setFinal] = useState(null);
  const [edit, setEdit] = useState(null);
  let update = (item) => {
    setData((pre) => [...pre, item]);
    console.log(data);
  };
  const afteredit = (item) => {
    let newdata = data.map((obj) => {
      if (obj.id == item.id) {
        return { ...item };
      }

      return obj;
    });
    console.log("NEW DATA AFTER EDIT", newdata);
    setEdit(null);
    setData(newdata);
  };
  let details = (item) => {
    if (item) {
      setFinal(item);
    }
  };

  const editable = (item) => {
    if (item) {
      setEdit(item);
    }

    // setData(newdata);
  };

  const deleteObject = (item) => {
    let newdata = data.filter((c) => {
      if (c.id === item) {
        return false;
      } else return true;
    });
    setData(newdata);
    setFinal(null);
  };

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
          <InputForm parentBag={update} editable={edit} afteredit={afteredit} />
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
            <List
              arr={data}
              details={details}
              deleteObject={deleteObject}
              editable={editable}
            />
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
