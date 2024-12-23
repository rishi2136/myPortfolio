import Skill from "./Skill";

const SkillList = () => {
  let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Nodejs",
    "Express.js",
    "Reactjs",
    "Redux",
    "Tailwindcss",
    "RestAPI",
    "Git&GitHub",
    "MVC ",
  ];

  const techIconsImg = [
    "HTML5.svg",
    "CSS3.svg",
    "JavaScript.svg",
    "Bootstrap.svg",
    "Node.js.svg",
    "Express.svg",
    "React.svg",
    "Redux.svg",
    "Tailwindcss.svg",
    "cloud-api.png",
    "Git.svg",
  ];

  return (
    <div className="skill-section">
      <h1 className="text-center fw-bolder d-block my-5 mx-auto heading">
        Skills
      </h1>
      <div id="skills">
        {skills.map((skill, i) => {
          return <Skill key={i} skill={skill} logo={techIconsImg[i]} />;
        })}
      </div>
    </div>
  );
};

export default SkillList;
