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
    "RestAPI",
    "Git&GitHub",
    "MVC",
  ];

  return (
    <>
      <div
        className="col-8 mx-auto my-3"
        style={{ margin: "100px 0", height: "600px" }}
        id="skills"
      >
        <h1 className="text-center fw-bolder d-block my-5 mx-auto">Skills</h1>
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default SkillList;
