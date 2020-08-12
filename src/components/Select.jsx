import React from "react";
import "../css/Select.css";

const Select = ({ options, handleSelectedOptions }) => {
  return (
    <div className="select-content">
      <div className="select-container">
        {options.map((op) => (
          <div
            onClick={(e) => handleSelectedOptions(op.id)}
            key={op.id}
            className="select-options"
          >
            <label>{op.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
