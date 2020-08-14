import React from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to={"/"}>
        <button className="return"></button>
      </Link>

      <p className="Dev">
        Desarrollado por Carla Joumier
        <span role="img" aria-label="emojis">
          {" "}
          🌈✨{" "}
        </span>
      </p>
    </div>
  );
};

export default Nav;
