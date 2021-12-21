import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <NavLink to="/" className="item">
        React-Streamy
      </NavLink>
      <div className="right menu">
        <NavLink to="/" className="item">
          All Streams
        </NavLink>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
