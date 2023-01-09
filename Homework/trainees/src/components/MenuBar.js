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
          items.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              aria-current={item.current ? "page" : undefined}
              onClick={() => {
                item.current = true;
                console.log(item.current);
              }}
            >
              {item.name}
            </Link>
          ));
        }}
      />
    </>
  );
};

export default MenuBar;
