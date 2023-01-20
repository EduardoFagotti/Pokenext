import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <div className={styles.sub_card}>
        <div className={styles.pokename}>
          <h3>
            #{pokemon.id}:<span>{pokemon.name}</span>
          </h3>
          <Link className={styles.but} href={`/pokemon/${pokemon.id}`}>
            <p> -&gt; Details</p>
          </Link>
        </div>
        <Image
          className={styles.img}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="180"
          height="180"
          alt={pokemon.name}
        />
      </div>
    </div>
  );
}
