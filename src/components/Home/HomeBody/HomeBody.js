import React, { useState } from "react";
import PokemonCard from "../PokeGrid/PokeGrid";
import usePokemon from "../../../utils/pokeCalls";
import useGender from "../../../utils/genderCall";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "./HomeBody.scss";

const HomeBody = () => {
  const [search, setSearch] = useState("");
  const [pokeType, setPokeType] = useState("");
  const { allPokemons } = usePokemon();
  const { gender } = useGender();
  const [pokeGender, setPokeGender] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  const pokeTypeList = allPokemons.map((i) => {
    return i.types[0].type.name;
  });

  //Remove duplicate items
  const uniqueIds = [];
  const pokemonList = allPokemons.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);
    if (!isDuplicate) {
      uniqueIds.push(element.id);
      return true;
    }
    return false;
  });

  //Remove duplicate items
  const typeList = pokeTypeList.filter((element, index) => {
    return pokeTypeList.indexOf(element) === index;
  });

  //Remove duplicate items
  const uniqueIds1 = [];
  const genderList = gender.filter((element) => {
    const isDuplicate = uniqueIds1.includes(element.id);
    if (!isDuplicate) {
      uniqueIds1.push(element.id);
      return true;
    }
    return false;
  });

  return (
    <div className="card__wrapper">
      <div className="homebody">
        <div className="pokemon__search">
          <h6>Search By</h6>
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control"
              aria-label="Search"
              aria-describedby="search-addon"
              placeholder="Name or Number "
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              style={{
                backgroundColor: "#C9DDE2",
                zIndex: "0",
                borderRadius: "12%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="search__filter">
          <div className="pokemon__types">
            <h6>Type</h6>

            <Dropdown className="dropdown" data-testid="dropdown">
              <Dropdown.Toggle
                style={{ backgroundColor: "#C9DDE2" }}
                variant="light"
                id="dropdown-basic"
              >
                Normal <strong style={{fontSize:'12px'}}>+5 More </strong>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {typeList.map((type, i) => {
                  return (
                    <Dropdown.Item href="/">
                      <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label={type}
                        value={type}
                        onClick={(e) => {
                          e.preventDefault();
                          setPokeType(e.target.value);
                        }}
                      />
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="pokemon__genders">
            <h6>Gender</h6>
            <Dropdown className="dropdown">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  backgroundColor: "#C9DDE2",
                  color: "black",
                  borderColor: "#C9DDE2",
                }}
              >
                Male <strong style={{fontSize:'12px'}}>+5 More </strong>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {genderList.map((gender, i) => {
                  return (
                    <Dropdown.Item href="/">
                      <Form.Check
                        key={i}
                        type="checkbox"
                        id="default-checkbox"
                        label={gender.name}
                        value={gender.name}
                        onClick={(e) => {
                          e.preventDefault();

                          setPokeGender(e.target.value);
                        }}
                      />
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="hamburger" onClick={() => setBtnClicked(true)}>
          <img
            className="toggle_Menu"
            src="https://mdbootstrap.com/img/svg/hamburger1.svg?color=ffffff"
            alt="image1"
          ></img>
        </div>
      </div>
      {btnClicked && (
        <div className="filtered">
          <h1 className="filtered__name">Filters</h1>
          <button
            className="filtered__cancel"
            onClick={() => setBtnClicked(false)}
          >
            X
          </button>
          <div>
            <h1 className="mobilefilter__type">Type</h1>
            <h1 className="mobilefilter__gender">Gender</h1>
            <div className="mobilefilter">
              <Dropdown className="dropdown" data-testid="dropdown">
                <Dropdown.Toggle
                  style={{ backgroundColor: "#C9DDE2" }}
                  variant="light"
                  id="dropdown-basic"
                >
                  Normal <strong style={{fontSize:'12px'}}>+5 More </strong>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {typeList.map((type, i) => {
                    return (
                      <Dropdown.Item href="/">
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox"
                          label={type}
                          value={type}
                          onClick={(e) => {
                            e.preventDefault();
                            setPokeType(e.target.value);
                          }}
                        />
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
              <br></br>
              <br></br>
              <br></br>
              <Dropdown className="dropdown">
                <Dropdown.Toggle
                  variant="success"
                  style={{
                    backgroundColor: "#C9DDE2",
                    color: "black",
                    borderColor: "#C9DDE2",
                  }}
                  id="dropdown-basic"
                >
                   Male <strong style={{fontSize:'12px'}}>+5 More </strong>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {genderList.map((gender, i) => {
                    return (
                      <Dropdown.Item href="#/action-1">
                        <Form.Check
                          type="checkbox"
                          id="default-checkbox"
                          label={gender.name}
                          value={gender.name}
                          onClick={(e) => {
                            e.preventDefault();
                            setPokeGender(e.target.value);
                          }}
                        />
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      )}

      <div className="pokemongrid">
        {pokemonList.sort((a,b)=>a.id - b.id)
          .filter(
            (pokemon, index) =>
              pokemon.name.includes(search) &&
              pokemon.types[0].type.name.includes(pokeType)
          )
          .map((pokemon, index) => (
            <>
              <PokemonCard
                key={index}
                image={pokemon.sprites.other.dream_world.front_default}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                height={pokemon.height}
              />
            </>
          ))}
      </div>
    </div>
  );
};
export default HomeBody;
