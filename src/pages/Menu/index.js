import React from "react";
import { Data } from "../../Components/Data";
import MenuItem from "../../Components/MenuItem";
import "./App.css";

function index() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              peice={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default index;
