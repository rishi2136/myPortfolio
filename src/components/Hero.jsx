import profile_pic from "../assets/profile_pic.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="container d-flex" id="home">
        <div className="profile-pic-box">
          <img
            src={profile_pic}
            alt="profile-picture"
            className="photo mx-auto"
          />
          <hr style={{ border: "3px solid black" }} />
        </div>
        <div className="info-and-quote  col-10">
          <h1 className="my-name">Rishi Agrahari</h1>
          <h2 className="my-role">Full stack web developer | MERN</h2>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            What sets me apart from other&#39;s is my unwavering commitment to
            learning and adaptability. The tech industry is constantly changing,
            and I thrive in this dynamic environment. I am always eager to
            explore new technologies, frameworks, and best practices to ensure
            that I am delivering the best possible solutions. My ability to
            quickly learn and implement new skills has been demonstrated through
            my successful completion of my diverse projects.
          </div>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/rishi-agrahari-0b1965274/"
              className="me-2"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin "></i>
            </a>
            <a
              href="https://github.com/rishi2136"
              target="_blank"
              className="me-2"
            >
              <i className="fa-brands fa-github "></i>
            </a>
            <a
              href="https://twitter.com/RishiAg34860821"
              target="_blank"
              className="me-2"
            >
              <i className="fa-brands fa-x-twitter "></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
