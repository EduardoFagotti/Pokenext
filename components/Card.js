import Image from "next/image";
import Link from "next/link";

import { Card_styled } from "../styles/Card.js";

export default function Card({ pokemon }) {
  return (
    <Card_styled>
      <div>
        <div>
          <h3>
            #{pokemon.id}:<span>{pokemon.name}</span>
          </h3>
          <Link className="link" href={`/pokemon/${pokemon.id}`}>
            <p> -&gt; Details</p>
          </Link>
        </div>
        <Image
          className="img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="160"
          height="160"
          alt={pokemon.name}
        />
      </div>
    </Card_styled>
  );
}
