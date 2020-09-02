import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import logo from "../logo.svg";

const HomeNav = (props) => {
  const currentStyle = {
    borderColor: "#ffbc00",
    color: "#ffbc00",
  };

  return (
    <header id="header-home">
      <div className="container">
        <nav id="main-nav">
          <h1 id="logo-home">SA</h1>
          <ul>
            <li>
              <Link className={props.currents.home ? "current" : ""} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={props.currents.about ? "current" : ""}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link className={props.currents.work ? "current" : ""} to="/work">
                Work
              </Link>
            </li>
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
        <div className="header-content">
          <h1 className="showcase">
            I am Siyad The
            <Link to="/about" style={currentStyle}>
              <Typical
                loop={Infinity}
                wrapper="span"
                steps={[" Developer", 3000, " Techie", 3000, " ?????", 3000]}
              ></Typical>
            </Link>
          </h1>
          <p className="lead">
            I love developing and I am always eager to learn more!
          </p>
          <Link className="btn-light" to="/work">
            View My Work
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeNav;
