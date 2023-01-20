import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
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
  console.log(data.moves);
  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  const [shiny, setShiny] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.text}>
        {shiny ? (
          <>
            <div className={styles.nameCard}>
              <button onClick={() => setShiny(!shiny)}>Base</button>
              <h1>
                #{pokemon.id}-<span>{pokemon.name} shiny</span>
              </h1>
            </div>
            <Image
              className={styles.img}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name}
            />
            <Image
              className={styles.img}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name}
            />
          </>
        ) : (
          <>
            <div className={styles.nameCard}>
              <button onClick={() => setShiny(!shiny)}>Shiny</button>
              <h1>
                #{pokemon.id}-<span>{pokemon.name}</span>
              </h1>
            </div>

            <Image
              className={styles.img}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name}
            />
            <Image
              className={styles.img}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`}
              width="250"
              height="250"
              alt={pokemon.name}
            />
          </>
        )}

        <div className={styles.AboutPokemon}>
          <section>
            <h1>Type:</h1>
            {pokemon.types.map((item, index) => (
              <span className={styles.type} key={index}>
                [{item.type.name}]
              </span>
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
          <div className={styles.abilitys}>
            <h1>abilities:</h1>
            <div>
              {pokemon.abilities.map((item) => (
                <span className={styles.ability}>[{item.ability.name}]</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
