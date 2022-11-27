import React from "react";
import "./Types.scss";

function Types({ types }) {
  return (
    <div className="PokemonDetail__Types">
      {types && types.map((type, index) => (
        <span className={type.type.name} key={index}>
          {type.type.name}
        </span>
      ))}
    </div>
  );
}

export default Types;