import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
// import AboutMe from "./components/AboutMe";
import ContectMe from "./components/ContectMe";

import Footer from "./utils/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./utils/Navbar";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";
import Experience from "./components/Experience";
import ContactBar from "./utils/ContactBar";
import { motion, useScroll } from "motion/react";
// import Drone from "./utils/Drone";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 59,
          left: 0,
          zIndex: 200,
          right: 0,
          height: 6,
          originX: 0,
          backgroundColor: "black",
        }}
      />
      {/* <Drone /> */}

      <div className="outer-container">
        <Navbar />
        <Hero />
        <SkillList />
        <Experience />
        <ProjectList />
        {/* <AboutMe /> */}
        <ContactBar />
        {/* <ContectMe /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
