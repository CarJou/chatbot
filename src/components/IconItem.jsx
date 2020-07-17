import React from "react";
import "../css/IconItem.css";
import help from "../assets/images/help.png";

const IconItem = ({ text }) => {
  return (
    <div className="icon-container">
      <img src={help} alt="Icon" />
      <div className="icon-item-messages">
        {text.map((t, index) => (
          <label key={index}>{t}</label>
        ))}
      </div>
    </div>
  );
};

export default IconItem;
