import profile_pic from "../assets/profile_pic.png";

const AboutMe = () => {
  return (
    <div style={{ height: "700px" }} id="about">
      <h1 className="text-center fw-bolder d-block my-5 mx-auto">About Me</h1>
      <div
        className="container-fluid d-flex col-10 mx-auto rounded-3 p-2 border border-3"
        style={{ boxSizing: "border-box", borderColor: "#000000db" }}
      >
        <img
          src={profile_pic}
          alt="profile_picture2"
          style={{
            width: "28rem",
            height: "auto",
            backgroundColor: "#000000db",
          }}
          className=" border rounded-3"
        />
        <div className="ms-5" style={{ flexGrow: "1" }}>
          <ul
            className="nav nav-tabs mb-4"
            style={{ backgroundColor: "#000000db", padding: ".5rem 0" }}
          >
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#aboutMe">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#academics">
                Academics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#certifications">
                Certifications
              </a>
            </li>
          </ul>

          <div
            className="aboutList"
            style={{
              overflow: "auto",
              height: "300px",
              scrollBehavior: " smooth",
            }}
          >
            <AboutMeElement />
            <AcademicsElement />
            <CertificationElement />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutMeElement = () => {
  return (
    <div id="aboutMe" style={{ height: "100%" }}>
      <p className="text-dark">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At molestias
        sed officia ipsa iste aut repellat possimus, facilis obcaecati magnam
        numquam, natus sunt ratione, cumque dolor nostrum odit. Nesciunt,
        temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        laborum delectus commodi? Culpa quibusdam laboriosam dolore labore
        blanditiis facilis a velit, molestias ipsam quas exercitationem eveniet
        voluptatibus delectus minus! Similique cupiditate laborum hic sequi
        dicta vitae! Maxime facilis assumenda repellendus. Magnam sit odit
        assumenda, rerum nemo vel nostrum cumque! Reiciendis.
      </p>
      <p className="text-dark">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At molestias
        sed officia ipsa iste aut repellat possimus, facilis obcaecati magnam
        numquam, natus sunt ratione, cumque dolor nostrum odit. Nesciunt,
        temporibus.
      </p>
    </div>
  );
};

const AcademicsElement = () => {
  return (
    <div id="academics" style={{ height: "100%", color: "black" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          ducimus.
        </li>
        <li className="list-group-item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis, temporibus! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Modi, totam explicabo? Fugiat harum dignissimos
          aliquid temporibus commodi blanditiis deserunt aliquam consequatur
          voluptas, a magnam accusantium eos dolor exercitationem esse
          voluptatem earum, explicabo mollitia consectetur voluptate corporis.
          Vel eum dolore quae sed. Alias assumenda quibusdam fuga hic enim
          tempora sint dolore?
        </li>
      </ul>
    </div>
  );
};

const CertificationElement = () => {
  return (
    <div id="certifications" style={{ height: "100%", color: "black" }}>
      <h4>Full Stack Web developer, MERN </h4>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat aliquam enim beatae alias. Similique alias ex aspernatur, et
        quisquam repellendus. Totam labore eaque ea sapiente facere praesentium
        voluptatum exercitationem laudantium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Placeat aliquam enim beatae alias.
        Similique alias ex aspernatur, et quisquam repellendus. Totam labore
        eaque ea sapiente facere praesentium voluptatum exercitationem
        laudantium.
      </span>
      <br />
      <a>Apna College</a>
    </div>
  );
};

export default AboutMe;
