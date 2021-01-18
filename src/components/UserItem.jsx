import React from "react";
import "../css/UserItem.css";
import woman from "../assets/images/woman.png";
import Fade from "react-reveal/Fade"

const UserItem = ({ text }) => {
  return (
    <div className="user-item-container">
      <div className="user-item-messages">
        <Fade right>
        <label>{text}</label>
        </Fade>
      </div>
      <img src={woman} alt="woman icon" />
    </div>
  );
};

export default UserItem;
