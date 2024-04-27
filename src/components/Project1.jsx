import wanderlust from "../assets/wanderlust.png";

const Project1 = () => {
  let styles = {
    fontSize: "0.8rem",
  };

  return (
    <div className="card" style={{ width: "24rem" }}>
      <div className="card-header">Wanderlust: Your stay for destinations</div>
      <img src={wanderlust} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          <ul className="list-group list-group-flush" style={styles}>
            <li className="list-group-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos veritatis quibusdam neque laborum, vel commodi.
            </li>
            <li className="list-group-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos veritatis quibusdam neque laborum, vel commodi.
            </li>
            <li className="list-group-item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos veritatis quibusdam neque laborum, vel commodi.
            </li>
          </ul>
        </p>
        <a href="#" className="btn btn-primary">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project1;
