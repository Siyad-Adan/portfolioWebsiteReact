import React from "react";
import { Helmet } from "react-helmet";
import HomeNav from "./HomeNav";

const Home = () => {
  const currents = {
    about: false,
    home: true,
    work: false,
  };

  return (
    <div>
      <Helmet>
        <title>Siyad Adan | Developer</title>
      </Helmet>
      <HomeNav currents={currents} />

      <section id="home-a" className="text-center py-2">
        <h2 className="section-title">Some things I am working on...</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          I am currently enjoying Full Stack Development in .NET, trying to use
          Machine Learning to answer some fun questions, and more projects to
          learn more!
        </p>
        <div className="specials">
          <div>
            <i className="fas fa-file-code fa-3x"></i>
            <h3>Front End</h3>
            <p>
              Constantly learning more about HTML 5, CSS 3, JS, React, Angular
              and more!
            </p>
          </div>
          <div>
            <i className="fas fa-hard-hat fa-3x"></i>
            <h3>Back End</h3>
            <p>Worked with C# and .NET</p>
          </div>
          <div>
            <i className="fas fa-database fa-3x"></i>
            <h3>Database</h3>
            <p>Learning more with SQL Server, MYSQL, MongoDB</p>
          </div>
          <div>
            <i className="fas fa-cogs fa-3x"></i>
            <h3>Infrastructure</h3>
            <p>
              Worked on deploying projects using Azure, AWS, Google cloud
              services!
            </p>
          </div>
        </div>
      </section>

      <section id="home-b" className="text-center py-2">
        <div className="stats">
          <div>
            <ul>
              <li>
                <i className="fas fa-graduation-cap fa-3x"></i>
              </li>
              <li className="stats-title">Degrees</li>
              <li className="stats-number">2 (Almost?)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-code-branch fa-3x"></i>
              </li>
              <li className="stats-title">Projects Completed</li>
              <li className="stats-number">6</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="home-c" className="text-center py-2">
        <div className="container">
          <h2 className="section-title">My Process for Learning!</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            All the technologies that I learn are through project-based learning
            through the following steps
          </p>
          <div className="process">
            <div>
              <i className="far fa-lightbulb fa-4x process-icon my-2">
                <div className="process-step">1</div>
              </i>
              <h3>Think of a Project to Work On</h3>
              <p>
                This could be anything from simple webpage to a mini social
                network!
              </p>
            </div>
            <div>
              <i className="fas fa-desktop fa-4x process-icon my-2">
                <div className="process-step">2</div>
              </i>
              <h3>Brainstorming technologies to use</h3>
              <p>
                Considering all technologies that I could possibly use and
                weight out the pros and cons of each!
              </p>
            </div>
            <div>
              <i className="fas fa-play fa-4x process-icon my-2">
                <div className="process-step">3</div>
              </i>
              <h3>Starting</h3>
              <p>
                Sometimes this is the hardest part. But usually by just starting
                things start to work themselves out
              </p>
            </div>
            <div>
              <i className="fas fa-thumbs-up fa-4x process-icon my-2">
                <div className="process-step">4</div>
              </i>
              <h3>Finish the project</h3>
              <p>
                Usually the last 10% of the project is the hard to complete.
                This usually involves the little details in the project but its
                so rewarding to learning the little details to get a project
                finished!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
