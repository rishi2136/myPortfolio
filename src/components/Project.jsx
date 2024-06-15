import "./Project.css";

const Project = ({ details }) => {
  return (
    <div className="parent col-10  mx-auto">
      <div className="card project-card my-5">
        <div className="col-lg-6 col-12 skill-img-box">
          <img
            src={details.image}
            className="card-img-top project-img"
            alt="..."
          />
          <div className="cover">
            <a href={details.live} target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <br />
              <span style={{ fontSize: "15px" }}>Live</span>
              <br />
            </a>
          </div>
        </div>

        <ul style={{ listStyleType: "none" }} className="col-lg-6 col-12">
          <h3 className="project-title">
            {details.title}{" "}
            <a href={details.repo} target="_blank" className="btn btn-primary">
              <b>Vist Repo</b>
            </a>
          </h3>
          {details.description.map((text, i) => (
            <li className="skill-bullet" key={i}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
