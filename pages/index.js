import { Pokemon_container } from "../styles/Home";
import Image from "next/image";
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 300;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <Pokemon_container>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </Pokemon_container>
    </>
  );
}
