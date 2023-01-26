import Image from "next/image";
import { useState, useEffect } from "react";

import {
  Pokemon_styled,
  Pokemon_info_base,
  Pokemon_info_extras,
} from "../../styles/Pokemon.js";

export const getStaticPaths = async () => {
  const maxPokemons = 500;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();
  console.log(data);
  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  const [shiny, setShiny] = useState(false);

  const [moves, setMoves] = useState(false);

  // const [barColor, setBarColor] = useState("#fff");

  // useEffect(() => {
  //   function getRandomColor() {
  //     var letters = "0123456789ABCDEF";
  //     var color = "#";
  //     for (var i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     console.log(color);
  //     setBarColor(color);
  //   }
  // }, []);

  return (
    <Pokemon_styled>
      <div className="card">
        {shiny ? (
          <>
            <div className="card_title">
              <button onClick={() => setShiny(!shiny)}>Base</button>
              <h1 className="poke_name">
                #{pokemon.id}-<span>{pokemon.name} shiny</span>
              </h1>
            </div>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name}
            />
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name}
            />
          </>
        ) : (
          <>
            <div className="card_title">
              <button onClick={() => setShiny(!shiny)}>Shiny</button>
              <h1 className="poke_name">
                #{pokemon.id}-<span>{pokemon.name}</span>
              </h1>
            </div>

            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name}
            />
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name}
            />
          </>
        )}

        <Pokemon_info_base>
          <section>
            <h1>Type:</h1>
            {pokemon.types.map((item, index) => (
              <span key={index}>[{item.type.name}]</span>
            ))}
          </section>
          <section>
            <h1>height:</h1>
            <p>{pokemon.height * 10} cm</p>
          </section>
          <section>
            <h1>weight:</h1>
            <p>{pokemon.weight / 10} kg</p>
          </section>
          <section>
            <h1>Base experience:</h1>
            <p>{pokemon.base_experience}</p>
          </section>
          <section>
            <h1>abilities:</h1>
            <div>
              {pokemon.abilities.map((item) => (
                <span>[{item.ability.name}]</span>
              ))}
            </div>
          </section>
        </Pokemon_info_base>
      </div>
      {/* ///////////////////////////////////////////// */}
      <Pokemon_info_extras>
        {moves ? (
          <div className="moves">
            <button onClick={() => setMoves(!moves)}>info</button>
            <div>
              <h1>moves:</h1>
              <div className="move-list">
                {pokemon.moves.map((item) => (
                  <p>{item.move.name}</p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="info_bar">
            <button onClick={() => setMoves(!moves)}>moves</button>
            <div>
              <h1>Info:</h1>
              {pokemon.stats.map((item) => (
                <div className="bar">
                  <h1> {item.stat.name}:</h1>
                  <div>
                    <p
                      style={{
                        backgroundColor: "#a0522d",
                        height: "100%",
                        width: `${item.base_stat}px`,
                      }}
                    >
                      {item.base_stat}/300
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Pokemon_info_extras>
    </Pokemon_styled>
  );
}
