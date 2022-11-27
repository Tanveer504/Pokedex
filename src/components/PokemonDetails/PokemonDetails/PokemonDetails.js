import React from "react";
import { useParams } from "react-router-dom";
import EggGroup from "../EggGroups/EggGroups";
import "./PokemonDetails.scss";
import useFetch from "../../../utils/useFetch";
import Ability from "../Ability/Ability";
import Types from "../Types/Types";
import Weakness from "../Weakness/Weakness";
import Description from "../Description/Description";
import Gender from "../Gender/Gender";
import { Link } from "react-router-dom";
import PokemonImage from "../PokemonImage/PokemonImage";
import pokemonFetch from "../../../config/config.json";
function PokemonDetails() {
  const { id } = useParams();
  const {
    data: pokeFeature,
    isPending: isPokeFeature,
    error: pokeFeatureError,
  } = useFetch(`${pokemonFetch.pokemonApi}/pokemon-species/${id}`);
  const {
    data: pokemonDetails,
    isPending: isPokemonDetailsPending,
    error: pokemonError,
  } = useFetch(`${pokemonFetch.pokemonApi}/pokemon/${id}`);
  const {
    data: weakness,
    isPending: isWeaknessPending,
    error: weaknessError,
  } = useFetch(`${pokemonFetch.pokemonApi}/type/${id}`);
  const {
    data: gender,
    isPending: isGenderPending,
    error: genderError,
  } = useFetch(`${pokemonFetch.pokemonApi}/gender/1/`);

  return (
    <div className="PokemonDetail">
      {/* Pokemon Image */}
      {pokemonDetails && (
        <PokemonImage
          image={pokemonDetails.sprites.other.dream_world.front_default}
          types={pokemonDetails.types}
        />
      )}

      {/* Pokemon name */}
      {pokemonError && <div>{pokemonError}</div>}
      {isPokemonDetailsPending && <h1>Loading...</h1>}
      {pokemonDetails && (
        <h1 className="pokemondetail__name">{pokemonDetails.name}</h1>
      )}

      <h1 className="seprator"></h1>

      {/* Pokemon Number */}
      {pokemonError && <div>{pokemonError}</div>}
      {isPokemonDetailsPending && <h3>Loading...</h3>}
      {pokemonDetails && (
        <h2 className="pokemondetail__number">00{pokemonDetails.order}</h2>
      )}

      {/*sepration*/}
      <h1 className="wordseprator"></h1>

      <Link to="/">
        <button className="pokemondetail__cancel">X</button>
      </Link>

      {/*Description */}
      {pokeFeatureError && <div>{pokeFeatureError}</div>}
      {isPokeFeature && <h6>Loading...</h6>}
      {pokeFeature && <Description desc={pokeFeature.flavor_text_entries} />}

      {/* Height */}
      <h6 className="height">Height</h6>
      {pokemonError && <div>{pokemonError}</div>}
      {isPokemonDetailsPending && <h6>Loading...</h6>}
      {pokemonDetails && (
        <h6 className="pokemondetail__height">{pokemonDetails.height}</h6>
      )}
      {/* Weight */}
      <h6 className="weight">Weight</h6>
      {pokemonError && <div>{pokemonError}</div>}
      {isPokemonDetailsPending && <h6>Loading...</h6>}
      {pokemonDetails && (
        <h6 className="pokemondetail__weight">{pokemonDetails.weight}</h6>
      )}

      {/* Gender */}
      <h6 className="pokemondetail__gender">Gender(s)</h6>
      {genderError && <div>{genderError}</div>}
      {isGenderPending && <h6>Loading...</h6>}
      {gender && <Gender gender={gender} pokemon={pokeFeature.name} />}

      {/* Egg Groups */}
      <h6 className="pokemondetail__egggroup">Egg Groups</h6>
      {pokeFeatureError && <div>{pokeFeatureError}</div>}
      {isPokeFeature && <h6>Loading...</h6>}
      {pokeFeature && <EggGroup egg={pokeFeature.egg_groups} />}

      {/* Abilities */}
      <h6 className="pokemondetail__ability">Abilities</h6>
      {pokemonError && <div>{pokemonError}</div>}
      {isPokemonDetailsPending && <h6>Loading...</h6>}
      {pokemonDetails && <Ability ability={pokemonDetails.abilities} />}

      {/* Types */}
      <h6 className="pokemondetail__types">Types</h6>
      {pokemonError && <div>{pokemonError}</div>}
      {isPokemonDetailsPending && <h6>Loading...</h6>}
      {pokemonDetails && <Types types={pokemonDetails.types} />}

      {/* Weakness Against */}
      <h6 className="pokemondetail__weak">Weak Against</h6>
      {weaknessError && <div>{weaknessError}</div>}
      {isWeaknessPending && <h6>Loading...</h6>}
      {weakness && (
        <Weakness weakness={weakness.damage_relations.double_damage_from} />
      )}
    </div>
  );
}

export default PokemonDetails;
