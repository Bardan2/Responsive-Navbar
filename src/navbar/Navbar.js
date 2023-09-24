import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [valueHide, setValueHideChange] = useState(false);
  const clickMe = () => setValueHideChange(!valueHide);

  return (
    <div className="navbarList">
      <h1>
        <Link to="/">Navbar</Link>
      </h1>
      <ul className={valueHide ? "links active" : "links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={clickMe}>
        {valueHide ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
