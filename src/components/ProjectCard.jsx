const ProjectCard = ({ gameImage, gameLink, gameName }) => {
  return (
    <div className="card" style={{ height: "auto " }}>
      <div className="image-cover">
        <img
          src={gameImage}
          className="card-img-top project-image"
          alt=""
          style={{ width: "24rem" }}
        />
      </div>
      <div className="card-footer d-flex justify-content-between">
        <span className="py-2">{gameName}</span>
        <button className="btn btn-danger">
          <a href={gameLink}>Play Now</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
