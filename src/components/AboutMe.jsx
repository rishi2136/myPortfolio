import "../logic/app";
import "./AboutMe.css";
import Scrollspy from "./Scrollspy";

const AboutMe = () => {
  return (
    <div
      style={{
        height: "auto",
      }}
    >
      <h1 className="text-center fw-bolder d-block my-5 mx-auto">About Me</h1>
      <div
        style={{
          height: "auto",
        }}
        id="about"
      >
        <div
          className="container  mx-auto rounded-3 p-2 border border-3 about-card"
          style={{ boxSizing: "border-box" }}
        >
          <Scrollspy />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
