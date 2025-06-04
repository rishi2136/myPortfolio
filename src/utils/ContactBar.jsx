import "./ContactBar.css";

const ContactBar = () => {
  return (
    <div className="contact-bar ">
      <ul className="list-group d-flex " id="social-link">
        <li className="list-group-item border-0">
          <a href="https://www.linkedin.com/in/rishi-agrahari-0b1965274/">
            <i className="fa-brands fa-linkedin "></i>&nbsp; LinkedIn
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="https://twitter.com/RishiAg34860821">
            <i className="fa-brands fa-x-twitter "></i>&nbsp;Twitter
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="##">
            <i className="fa-regular fa-envelope"></i> &nbsp;Email:
            rishiagrahari36@gmail.com
          </a>
        </li>
        <li className="list-group-item border-0">
          <a href="##">
            <i className="fa-solid fa-phone"></i> &nbsp;Contact: +91 7268089353
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactBar;
