import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Nav = (props) => {
  const currentStyle = {
    borderColor: "#ffbc00",
    color: "white",
  };

  return (
    <header id="header-inner">
      <div class="container">
        <nav id="main-nav">
          <div class="rainbow">
            <h1 id="logo-home">SA</h1>
          </div>
          <ul>
            <li>
              <Link to="/" className={props.currents.home ? "current" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={props.currents.about ? "current" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className={props.currents.work ? "current" : ""}>
                Work
              </Link>
            </li>
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
