import "./Navbar.css";

export const Navbar = () => {
  return (
    <ul className="nav justify-content-evenly sticky-top align-items-center folio-nav">
      <li className="nav-item">
        <a className="nav-link checkpoint" href="#home">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link checkpoint" href="#projects">
          Project
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link checkpoint" href="#skills">
          Skill
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link checkpoint" href="#experience">
          Experience
        </a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link checkpoint about-link" href="#about">
          About
        </a>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link checkpoint" href="#contact">
          Contact
        </a>
      </li> */}
    </ul>
  );
};
