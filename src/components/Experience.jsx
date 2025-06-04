import React, { useRef } from "react";
import "./Experience.css";
import { motion } from "motion/react"; // fixed incorrect import path

const Experience = () => {
  const scrollRef = useRef(null);
  const transition = {
    duration: 3,
    bounce: 1,
    delay: 3,
  };

  const exList = [
    {
      title: "Full stack developer Intern",
      company: "CipherByte Technologies",
      link: "https://www.cipherbytetechnologies.com/",
      duration: "June to July 2024",
      description:
        "Implemented a full-stack Event Planning web application with event management tools and social sharing.",
    },
    {
      title: "Full stack developer Intern",
      company: "Bharat Interns",
      link: "https://bharatintern.live/",
      duration: "July to August 2024",
      description:
        "Implemented several small-scale projects including frontend and server-side rendering (SSR) projects.",
    },
    {
      title: "Web developer Intern",
      company: "Olcademy",
      link: "https://www.olcademy.in/",
      duration: "Nov 2024 to Present",
      description:
        "Working as a web developer in the frontend domain to transform client needs into responsive UI components.",
    },
  ];

  return (
    <div className="ex-card-holder" id="experience">
      <h1 className="ex-head py-5">Experience</h1>

      <div className="ex-wrapper">
        {exList.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: "-50px", scale: 0.8 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              scale: 1,
              transition: { transition },
            }}
            viewport={{ once: true, amount: "all" }}
            className="card ex-card"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{exp.title}</h5>
              <h6 className="card-text">
                <a
                  href={exp.link}
                  target="_blank"
                  className="comp-link"
                  rel="noopener noreferrer"
                >
                  at <span>{exp.company}</span>
                </a>
              </h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {exp.duration}
              </h6>
              <p className="card-text about-text">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
