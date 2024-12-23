import React from "react";
import "./MiniBorad.css";

const MiniBorad = () => {
  return (
    <div>
      <ul className="list-group ">
        <li className="list-group-item">
          <img className="" src="MongoDB.svg" alt="mongodb icon image" />
        </li>

        <li className="list-group-item">
          <img className="" src="Express.svg" alt="express icon image" />
        </li>
        <li className="list-group-item">
          <img className="" src="React.svg" alt="react icon image" />
        </li>
        <li className="list-group-item">
          <img className="" src="Node.js.svg" alt="nodeJs icon image" />
        </li>
      </ul>
    </div>
  );
};

export default MiniBorad;
