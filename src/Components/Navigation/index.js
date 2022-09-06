import React, { useState } from "react";
import "./App.css";
import logo from "../../Images/logo.png";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navigation() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavigation = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={logo} alt="logo" />
        </div>
        <div className="hiddenLinks">
          <a href="Home">Home</a>
          <a href="Menu">Menu</a>
          <a href="About">About</a>
          <a href="Contact">Contact</a>
        </div>
        <div className="rightSide">
          <a href="Home">Home</a>
          <a href="Menu">Menu</a>
          <a href="About">About</a>
          <a href="Contact">Contact</a>
          <button onClick={toggleNavigation}>
            <ReorderIcon />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
