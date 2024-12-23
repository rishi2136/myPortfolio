import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="ex-card-holder" id="experience">
      <h1 className="ex-head py-5">Experience</h1>
      <div className="ex-wrapper">
        <div className="card ex-card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Full stack developer Intern</h5>
            <h6 className="card-text ">
              <a href="https://www.cipherbytetechnologies.com/">
                at CipherByte Technologies
              </a>
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              June to July 2024
            </h6>

            <p className="card-text about-text">
              Implentment an full stack Event Planning web application which
              have the facility like event management tools and social sharing.
            </p>
          </div>
        </div>
        <div className="card ex-card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Full stack developer Intern</h5>
            <h6 className="card-text ">
              <a href="https://bharatintern.live/">at Bharat Interns</a>
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              July to Augest 2024
            </h6>
            <p className="card-text about-text">
              Implentment some small size project including FrontEnd and SSR
              projects
            </p>
          </div>
        </div>
        <div className="card ex-card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Web developer Intern</h5>
            <h6 className="card-text ">
              <a href="https://www.olcademy.in/">at Olcademy</a>
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Nov 2024 to Present..
            </h6>
            <p className="card-text about-text">
              Working as a web developer, current in FrontEnd domain transform
              client needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
