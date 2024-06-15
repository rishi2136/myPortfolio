import "../../public/script.js";
import certificate from "../assets/certificate.pdf";

const Scrollspy = () => {
  return (
    <div className="nav-box">
      <nav id="navbar-example2" className="navbar px-3 bg-light  skill-nav">
        <ul className="nav nav-pills ">
          <li className="nav-item">
            <a className="nav-link about-link" href="#tag1">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link about-link" href="#tag2">
              Academics & Certification
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example px-3 rounded-2 skill-scrollbar"
        tabIndex="0"
        style={{
          padding: "70px 16px",
          overflowY: "auto",
          height: "inherit",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <div id="tag1">
          <h4 style={{ fontSize: "30px" }}>About Myself</h4>
          <p style={{ fontSize: "22px" }}>
            I am a highly motivated and committed third-year Bachelor&#39;s
            student with a robust expertise in the MERN stack. My technical
            proficiency spans MongoDB, Express.js, React, and Node.js,
            supplemented by a solid foundation in JavaScript. I thrive in
            environments with tight deadlines and am driven by a learn-and-adapt
            attitude, consistently seeking opportunities to enhance my skill set
            and contribute effectively to team goals.
          </p>
        </div>
        <br />
        <br />
        <br />
        <div id="tag2">
          <h4 style={{ fontSize: "30px" }}>Academics & Certification</h4>
          <p style={{ fontSize: "22px" }} className="acedamics">
            Bachelor&#39;s of Computer Application| BCA
            <span className="ps-3">81 %</span>
            <br />
            <span style={{ fontSize: "18px" }}>
              Deen Dayal Upadhayay Gorakhpur University | Gorakhpur, U.P
            </span>
            <br />
            <span>2022 - 2025</span>
          </p>
          <br />
          <p style={{ fontSize: "22px" }} className="certificate">
            Full Stack Web Development Certification <br />
            by
            <a
              href="https://www.apnacollege.in/"
              style={{ color: "#0d6efd", fontSize: "18px" }}
            >
              Apan College
            </a>
            <br />
            <a
              href={certificate}
              className="btn btn-primary my-2"
              target="_blank"
            >
              View Certificate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scrollspy;
