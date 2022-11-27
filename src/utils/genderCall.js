import React, { useEffect, useState } from "react";
import pokemonFetch from "../config/config.json";
const useGender = () => {
  const [gender, setgender] = useState([]);

  const [loadgender, setLoadgender] = useState(
    `${pokemonFetch.pokemonApi}/gender/`
  );

  const getGender = async () => {
    const res = await fetch(loadgender);
    const data = await res.json();
    setLoadgender(data.next);

    function createGenderObject(result) {
      result.forEach(async (gender) => {
        const res = await fetch(
          `${pokemonFetch.pokemonApi}/gender/${gender.name}`
        );
        const data = await res.json();
        setgender((currentList) => [...currentList, data]);
      });
    }
    createGenderObject(data.results);
  };

  useEffect(() => {
    getGender();
  }, []);

  return { gender };
};
export default useGender;
