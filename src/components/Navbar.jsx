import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-body-tertiary my-nav sticky-top "
      style={{ top: "1rem" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
          <ul className="nav nav-pills nav-fill toggler-list container-fluid">
            <li className="nav-item nav-list-item">
              <a className="nav-option" aria-current="page" href="#home">
                HOME
              </a>
            </li>
            <li className="nav-item nav-list-item">
              <a className="nav-option" href="#skills">
                SKILL
              </a>
            </li>
            <li className="nav-item nav-list-item">
              <a className="nav-option " href="#projects">
                PROJECT
              </a>
            </li>
            <li className="nav-item nav-list-item">
              <a className="nav-option" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item nav-list-item">
              <a className="nav-option" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
