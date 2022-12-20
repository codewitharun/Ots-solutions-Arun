import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const items = [
  { key: "home", name: "Home", to: "/" },
  { key: "services", name: "Services", to: "/contact" },
  { key: "contact-us", name: "Contact Us", to: "/contact" },
  { key: "trainees", name: "Trainees", to: "/trainees" },
];

const MenuBar = (props) => {
  const [clicked, setClicked] = useState({});
  return (
    <>
      <Menu
        items={items}
        onItemClick={(e) => {
          <Link to={`/${e.target.innerText.toLowerCase()}`} />;
          console.log(`/${e.target.innerText.toLowerCase()}`);
        }}
      />
    </>
  );
};

export default MenuBar;
