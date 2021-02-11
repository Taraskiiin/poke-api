import React, { useEffect } from "react";
import { getPokemon } from "../../helpers";
import spinner from "../../assets/5.gif";

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6",
};

export default function Pokemon({ match }) {
  const [pokemon, setPokemon] = React.useState(null);
  const index = match.params.pokIndex;

  useEffect(() => {
    getPokemon(index)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index, pokemon]);
  return (
    <div className="info__block">
      {pokemon ? (
        <div>
          {pokemon.sprites.other.dream_world.front_default ? (
            <img src={pokemon.sprites.other.dream_world.front_default}></img>
          ) : (
            <img
              src={spinner}
              style={{ width: "5em", height: "5em" }}
              className="card-img-top rounded mx-auto d-block mt-2"
              alt="loading spinner"
            />
          )}

          <h3>
            {pokemon.name
              .toLowerCase()
              .split(" ")
              .map(
                (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </h3>

          <p>Height:&nbsp;{pokemon.height * 10}</p>
          <p>Weight:&nbsp;{pokemon.weight}</p>
          <p>
            {" "}
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="pokemon__type"
                style={{
                  backgroundColor: `#${TYPE_COLORS[type.type.name]}`,
                }}
              >
                {type.type.name}
              </span>
            ))}
          </p>
          <p>Base experience:&nbsp;{pokemon.base_experience}</p>
        </div>
      ) : (
        <p>...loading</p>
      )}
    </div>
  );
}
