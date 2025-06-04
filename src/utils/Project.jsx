import { easeInOut } from "motion";
import "./Project.css";
import { motion } from "motion/react";

const Project = ({ details, pos = false }) => {
  return (
    <div className="parent col-10 mx-auto">
      <div
        className={`card project-card   ${
          pos ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="col-lg-6 col-12 skill-img-box">
          <div className="project-img-box">
            <img
              src={details.image}
              className="card-img-top project-img"
              alt="project image"
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
        </div>

        <motion.ul
          initial={{
            translateX: pos ? -400 : 400,
            opacity: 0.6,
          }}
          whileInView={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          style={{ listStyleType: "none" }}
          className="col-lg-6 col-12  desp-list"
        >
          <h3 className="project-title">{details.title}</h3>
          {details.description.map((text, i) => (
            <li className="skill-bullet" key={i}>
              {text}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Project;
