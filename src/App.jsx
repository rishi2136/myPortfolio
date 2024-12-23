import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import AboutMe from "./components/AboutMe";
import ContectMe from "./components/ContectMe";

import Footer from "./utils/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./utils/Navbar";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";
import Experience from "./components/Experience";
import ContactBar from "./utils/ContactBar";

function App() {
  return (
    <div className="outer-container">
      <Navbar />
      <Hero />
      <SkillList />
      <Experience />
      <ProjectList />
      {/* <AboutMe /> */}
      <ContactBar />
      <ContectMe />
      <Footer />
    </div>
  );
}

export default App;
