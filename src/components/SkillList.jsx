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

  let skillText = [
    "Passionate about building the web’s foundation with semantic HTML, creating accessible and robust user experiences.",
    "Enthusiast for transforming designs into beautiful, responsive web pages with modern CSS techniques.",
    "JavaScript enthusiast, dedicated to crafting dynamic, interactive web applications with innovative functionality.",
    "Love the fast-paced development, utilizing Bootstrap to deliver responsive designs that shine on any device.",
    "Node.js advocate, focused on building scalable, high-performance server-side applications with JavaScript.",
    "Express.js devotee, simplifying server-side development to create fast, secure, and reliable APIs.",
    "React.js fanatic, committed to developing interactive user interfaces that provide seamless experiences.",
    "RESTful API specialist, passionate about enabling smooth communication between client and server.",
    "Version control enthusiast, managing code with Git and fostering collaboration through GitHub.",
    "MVC architecture advocate, dedicated to structuring applications for organized, scalable, and maintainable codebases.",
  ];

  return (
    <>
      <h1 className="text-center fw-bolder d-block my-5 mx-auto">Skills</h1>
      <div className="mx-auto my-3" style={{ margin: "100px 0" }} id="skills">
        {skills.map((skill, i) => {
          return <Skill key={i} skill={skill} Text={skillText[i]} />;
        })}
      </div>
    </>
  );
};

export default SkillList;
