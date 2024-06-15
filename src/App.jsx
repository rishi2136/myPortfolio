import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import AboutMe from "./components/AboutMe";
import ContectMe from "./components/ContectMe";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import SkillList from "./components/SkillList";

function App() {
  return (
    <div className="outer-container">
      <Navbar />
      <Hero />
      <Projects />
      <SkillList />
      <AboutMe />
      <ContectMe />
      <Footer />
    </div>
  );
}

export default App;
