import React from "react";
import "../css/IconItem.css";
import help from "../assets/images/help.png";
import Fade from "react-reveal/Fade"
//
const IconItem = ({ text }) => {
  return (
    <div className="icon-container">
      <img src={help} alt="Icon" />
      <div className="icon-item-messages">
        {/* itera cada texto */}
       
        {text.map((t, index) => (  
        <Fade left>
          <label key={index}>{t}</label>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default IconItem;
