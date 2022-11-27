import React, { useEffect, useState } from "react";
import pokemonFetch from "../config/config.json";

const usePokemon = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(
    `${pokemonFetch.pokemonApi}/pokemon?limit=24`
  );
  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `${pokemonFetch.pokemonApi}/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return { allPokemons };
};
export default usePokemon;
