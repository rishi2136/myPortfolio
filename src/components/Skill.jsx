import "./Skills.css";

const Skill = ({ skill, Text }) => {
  return (
    <>
      <div className="card skill-card">
        <div className="card-body">
          <h4 className="card-title text-center">{skill}</h4>
          <div className="card-text skill-text">{Text}</div>
        </div>
      </div>
    </>
  );
};

export default Skill;
