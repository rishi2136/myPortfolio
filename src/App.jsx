import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import AboutMe from "./components/AboutMe";
import ContectMe from "./components/ContectMe";

import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillList />
      <ProjectList />
      <AboutMe />
      <ContectMe />
    </>
  );
}

export default App;
