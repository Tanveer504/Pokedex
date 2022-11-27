import React from "react";
import "./EggGroups.scss";
function EggGroup({ egg }) {
  return (
    <h6 className="PokemonDetail__eggGroup">
      {egg.map((eggs, index) => (
        <span key={`${eggs.name}+${index}`}>{eggs.name} </span>
      ))}
    </h6>
  );
}

export default EggGroup;
