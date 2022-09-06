import React from "react";
import BannerImage from "../../Images/food.jpeg";
import "./App.css";
function index() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK.</p>
        <a href="Menu">
          <button>Order Now</button>
        </a>
      </div>
    </div>
  );
}

export default index;
