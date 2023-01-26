import Link from "next/link";
import Image from "next/image";
// import { FcSearch } from "react-icons/fc";

import { Nav_styled } from "../styles/Navbar.js";

export default function Navbar() {
  return (
    <Nav_styled>
      <div>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      {/* <div className="search">
        <input type={"text"} placeholder="Search..." />
      </div> */}
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p>About</p>
          </Link>
        </li>
      </ul>
    </Nav_styled>
  );
}
