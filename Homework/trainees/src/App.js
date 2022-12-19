import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import TraineesComponent from "./components/TraineesComponent";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div className="App">
      <h1>OTS Solutions</h1>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>
            <Link to="/trainees">Trainee</Link>
          </li>
        </ul>
      </nav>
      <MenuBar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/trainees" element={<TraineesComponent />} />
      </Routes>
    </div>
  );
}

export default App;
