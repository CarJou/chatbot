import React from "react";
import "../css/UserItem.css";
import woman from "../assets/images/woman.png";

const UserItem = ({ text }) => {
  return (
    <div className="user-item-container">
      <div className="user-item-messages">
        <label>{text}</label>
      </div>
      <img src={woman} alt="woman icon" />
    </div>
  );
};

export default UserItem;
