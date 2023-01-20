import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";
import { useState } from "react";

export default function Layout({ children }) {
  return (
    <div className="background">
      <Navbar />
      <main className="main-container">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
