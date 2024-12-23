import "./Skills.css";

const Skill = ({ skill, logo }) => {
  return (
    <>
      <div className="card skill-card">
        <div className="card-body">
          <img src={logo} alt="" />
          <h4 className="card-title text-center fw-bolder">{skill}</h4>
        </div>
      </div>
    </>
  );
};

export default Skill;
