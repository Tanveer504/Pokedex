import React from "react";
import './PokemonImage.scss'
function PokemonImage({ image, types }) {
  return (
    <>
      {types.map((type, index) => (
        <div className={type.type.name} key={index}>
          <img className="PokemonDetail__Image" src={image} alt={image}></img>
        </div>
      ))}
    </>
  );
}

export default PokemonImage;