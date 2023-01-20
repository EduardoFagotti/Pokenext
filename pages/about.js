import Image from "next/image";

import styles from "../styles/About.module.css";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <h1>About the project</h1>
        <p>
          {" "}
          This project was developed by Eduardo Fagotti with the objective of
          learning and improving the handling of the API, it was also used to
          carry out this project Next.Js the API used is public and can be
          viewed here https://pokeapi.co{" "}
        </p>
      </div>
    </div>
  );
}
