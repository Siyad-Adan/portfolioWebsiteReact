import React from "react";
import Nav from "./Nav";
import { Helmet } from "react-helmet";
import about from "../images/about.JPG";
import Pdf from "../images/SiyadAdanResume.pdf";

const About = () => {
  const currents = {
    about: true,
    home: false,
    work: false,
  };

  return (
    <div>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <Nav currents={currents} />
      <section id="about-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">About Me!</h2>
          <div className="bottom-line"></div>
          <div className="lead">Let me tell you a little about myself...</div>
          <div className="about-info">
            <img src={about} alt="" className="bio-image" />
            <div className="bio bg-light">
              <h4>Life is Weird</h4>
              <p>
                My education started with pursing Chemical Engineering at the
                University of Ottawa. In my final year, after taking a Java
                course, I figured out that I really enjoyed programming alot! It
                was since then that I decided to start pursuing it as a career.
                I enrolled in Carleton University for the Computer Science
                program and the rest is history...
              </p>
            </div>
            <div className="bio-more">
              <p>Wanna learn some more about me? Check out these links!</p>
            </div>
          </div>
          <div className="container-links">
            <div className="link-1">
              <a href={Pdf} target="_blank">
                <i className="far fa-file fa-2x"></i>
                <h3>Resume</h3>
              </a>
            </div>
            <div className="link-2">
              <a href="https://ca.linkedin.com/in/siyadadan" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
                <h3>LinkedIn</h3>
              </a>
            </div>
            <div className="link-3">
              <a href="https://github.com/Siyad-Adan/" target="_blank">
                <i className="fab fa-github fa-2x"></i>
                <h3>GitHub</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
