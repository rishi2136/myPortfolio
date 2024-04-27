import profile_pic from "../assets/profile_pic.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div
        className="container  d-flex"
        style={{ height: "700px", marginTop: "60px" }}
        id="home"
      >
        <div className="info-and-quote col-6 " style={{ paddingLeft: "100px" }}>
          <h1 style={{ fontSize: "3.5rem" }}>Rishi Agrahari</h1>
          <h2 style={{ fontSize: "2.2rem" }}>Full stack web developer</h2>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            facilis quos, reprehenderit veritatis porro labore, ipsa est nihil
            natus esse molestiae quibusdam aspernatur quae sint quisquam harum
            animi voluptatibus quis illo. Dolore reprehenderit suscipit nemo.
          </div>
          <div
            className="container-fluid"
            style={{
              fontSize: "2.0rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            <a
              href="https://www.linkedin.com/in/rishi-agrahari-0b1965274/"
              className="me-2"
            >
              <i className="fa-brands fa-linkedin text-dark"></i>
            </a>
            <a href="https://github.com/rishi2136" className="me-2">
              <i className="fa-brands fa-github  text-dark"></i>
            </a>
            <a href="https://twitter.com/RishiAg34860821" className="me-2">
              <i className="fa-brands fa-x-twitter  text-dark"></i>
            </a>
          </div>
        </div>
        <div>
          <img
            src={profile_pic}
            alt="profile-picture"
            className="photo mx-auto"
            style={{ width: "32rem", marginBottom: "-1rem", flexGrow: "1" }}
          />
          <hr style={{ border: "3px solid black" }} />
        </div>
      </div>
    </>
  );
};

export default Hero;
