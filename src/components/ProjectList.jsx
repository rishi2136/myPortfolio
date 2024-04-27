import Flip_image from "../assets/Flip_game.png";
import Simon_says from "../assets/Simon_says.png";
import Project1 from "./Project1";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  let Flip_game_link = "https://rishi2136.github.io/flip_and_match/";
  let Simon_says_link = "https://rishi2136.github.io/Simon-Says/";
  return (
    <div id="projects">
      <h1 className="text-center fw-bolder d-block my-5 mx-auto">Projects</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "700px",
        }}
      >
        <Project1 />
        <div className="game-projects">
          <ProjectCard
            gameImage={Flip_image}
            gameLink={Flip_game_link}
            gameName={"Flip and Match"}
          />
          <ProjectCard
            gameImage={Simon_says}
            gameLink={Simon_says_link}
            gameName={"Simon Says"}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectList;
