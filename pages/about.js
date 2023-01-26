import react from "react";
import { About_styled } from "../styles/About";
export default function About() {
  return (
    <About_styled>
      <div>
        <h1>About the project</h1>
        <p>
          {" "}
          This project was developed by Eduardo Fagotti with the objective of
          learning and improving the handling of the API, it was also used to
          carry out this project Next.Js the API used is public and can be
          viewed here https://pokeapi.co{" "}
        </p>
      </div>
    </About_styled>
  );
}
