import React from "react";
import { Link } from "react-router-dom";
import "./PokeGrid.scss";
import "../../../utils/pokeCalls";

const PokemonCard = ({ index, image, name, id, type, height }) => {
  const style = `card-container ${type}`;
  return (
    <div className={style} key={index}>
      <div className="card-container_image">
        <Link to={`/${id}`}>
          <img src={image} alt={image} />
        </Link>
      </div>
      <div className="pokemon__name">
        <h3>{name}</h3>
        <h6>00{id}</h6>
      </div>
    </div>
  );
};

export default PokemonCard;
