import React from "react";
import "./Weakness.scss";
function Weakness({ weakness }) {
  return (
    <div className="pokemondetail__weakness">
      {weakness.map((weak, index) => (
        <span className={weak.name} key={index}>
          {weak.name}
        </span>
      ))}
    </div>
  );
}

export default Weakness;