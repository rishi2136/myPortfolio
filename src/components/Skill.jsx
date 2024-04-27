import { useState } from "react";
import "./Skills.css";

const Skill = ({ skill }) => {
  let [isToggle, setIsToggle] = useState(false);

  let handleClick = () => {
    if (!isToggle) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  };

  return (
    <div className="skill-box">
      <button
        className={`btn btn-dark skill-btn ${isToggle ? "bg-danger" : ""}`}
        onClick={handleClick}
      >
        {skill}
      </button>
      {isToggle && (
        <p
          className="fw-700"
          style={{
            border: "2px solid black",
            backgroundColor: "rgb(0, 0, 0, 0.5)",
            zIndex: "5",
            width: "450px",
            position: "absolute",
            color: "white",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          labore, rerum consequatur minima doloribus dolore dolorum eveniet
          praesentium quaerat sit atque aspernatur laboriosam placeat modi vel
          illo dolores est assumenda, sapiente reprehenderit! Obcaecati numquam
          esse dolores magni et, enim incidunt quibusdam non amet quam sapiente
          porro deserunt aspernatur at molestias excepturi voluptatum suscipit
          quasi. Nostrum maiores vitae, voluptas obcaecati quae totam similique
          suscipit, delectus asperiores cupiditate qui! Eaque, porro cupiditate.
        </p>
      )}
    </div>
  );
};

export default Skill;
