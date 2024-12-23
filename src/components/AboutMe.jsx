import "./AboutMe.css";

const about = [
  {
    heading: "Acadmics",
    text: "bnjbasjkbfkuu23qrfbsabndjfcbasbjfbakqrfbwcuewrqfcbreqwbfbjchb erfcbjqebcbqbqbdcxqbwfchbrwehfrwbnfn ",
  },
  {
    heading: "Myself",
    text: "bnjbasjkbfkuu23qrfbsabndjfcbasbjfbakqrfbwcuewrqfcbreqwbfbjchb erfcbjqebcbqbqbdcxqbwfchbrwehfrwbnfn ",
  },
  {
    heading: "Other activites",
    text: "bnjbasjkbfkuu23qrfbsabndjfcbasbjfbakqrfbwcuewrqfcbreqwbfbjchb erfcbjqebcbqbqbdcxqbwfchbrwehfrwbnfn ",
  },
];

const AboutMe = () => {
  return (
    <div
      style={{
        height: "auto",
      }}
      id="about"
      className="about-section"
    >
      <h1 className="text-center fw-bolder d-block py-5 mx-auto"> About Me</h1>
      <div className="detail-wrapper">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
