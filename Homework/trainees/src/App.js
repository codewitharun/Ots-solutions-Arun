import React from "react";
import "./App.css";
import { Routes, Route, Link, Switch } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import TraineesComponent from "./components/TraineesComponent";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Reactn from "./components/Reactt/Reactn";

function App() {
  return (
    <div className="App">
      <h1>OTS Solutions</h1>
      <div style={{ marginBottom: "20px" }}>
        <nav>
          <div className="navbar">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/contact">ContactUs</Link>
            </div>
            <div>
              <Link to="/trainees">Trainee</Link>
            </div>
            <div>
              <Link to="/services">Service</Link>
            </div>
          </div>
        </nav>
      </div>
      <hr />
      {/* <MenuBar /> */}
      <Routes>
        <Route path="/" index element={<div>Home</div>} />

        <Route path="/services">
          <Route index element={<Services />} />
          <Route path="react" element={<Reactn />} />
          <Route path="angular" element={<div>Angular</div>} />
          <Route path="python" element={<div>Python</div>} />
          <Route path="java" element={<div>Java</div>} />
          <Route path="dotnet" element={<div>Dotnet</div>} />
          <Route path="swift" element={<div>Swift</div>} />
        </Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/trainees" element={<TraineesComponent />} />
      </Routes>
    </div>
  );
}

export default App;
