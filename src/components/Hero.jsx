import profile_pic from "../assets/profile_pic.png";
import MiniBorad from "../utils/MiniBorad";
import "./Hero.css";
import { motion, AnimatePresence, MotionConfig } from "motion/react";

const Hero = () => {
  return (
    <AnimatePresence>
      <div className="container d-flex" id="home">
        <div className="profile-pic-box">
          <motion.div
            initial={{ scale: 0.5, y: -300 }}
            animate={{ scale: 1, y: 0 }}
            // exit={{ scale: 0.2, y: 0 }}
            transition={{ type: "spring", duration: 1.2 }}
          >
            <img
              src={profile_pic}
              alt="profile-picture"
              className="photo mx-auto"
            />
          </motion.div>
          <MiniBorad />
        </div>

        <div className="col-10 info-and-quote ">
          <MotionConfig
            transition={{ type: "spring", duration: 1.2 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: [0, 1], y: [-100, 0] }}
            exit={{ opacity: 0, y: 0 }}
          >
            <motion.h1 className="my-name">Rishi Agrahari</motion.h1>
            <motion.h2 className="my-role">
              Full stack web developer | MERN
            </motion.h2>
            <motion.div
              style={{
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              What sets me apart from other&#39;s is my unwavering commitment to
              learning and adaptability. The tech industry is constantly
              changing, and I thrive in this dynamic environment. I am always
              eager to explore new technologies, frameworks, and best practices
              to ensure that I am delivering the best possible solutions. My
              ability to quickly learn and implement new skills has been
              demonstrated through my successful completion of my diverse
              projects.
            </motion.div>
            <motion.div className="contact-links" transition={{ delay: 0.5 }}>
              <a
                href="https://www.linkedin.com/in/rishi-agrahari-0b1965274/"
                className="me-2"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin "></i>
              </a>
              <a
                href="https://github.com/rishi2136"
                target="_blank"
                className="me-2"
              >
                <i className="fa-brands fa-github "></i>
              </a>
              <a
                href="https://twitter.com/RishiAg34860821"
                target="_blank"
                className="me-2"
              >
                <i className="fa-brands fa-x-twitter "></i>
              </a>
            </motion.div>
          </MotionConfig>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Hero;
