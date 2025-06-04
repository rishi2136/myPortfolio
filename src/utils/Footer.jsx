import "./Footer.css";

const Footer = () => {
  return (
    <div className=" text-center footer border-top border-light flex items-center">
      <b>Contacts: &nbsp;</b>
      <a
        href="https://www.linkedin.com/in/rishi-agrahari-0b1965274/"
        className="me-4"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin "></i>
      </a>
      <a href="https://github.com/rishi2136" className="me-4" target="_blank">
        <i className="fa-brands fa-github "></i>
      </a>
      <a
        href="https://twitter.com/RishiAg34860821"
        className="me-4"
        target="_blank"
      >
        <i className="fa-brands fa-x-twitter  "></i>
      </a>
    </div>
  );
};

export default Footer;
