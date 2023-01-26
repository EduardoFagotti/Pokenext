import Navbar from "./Navbar";
import { Layout_styled } from "../styles/Layout";
import Head from "next/head";
import { useState } from "react";

export default function Layout({ children }) {
  return (
    <Layout_styled>
      <Navbar />
      <main className="main-container">{children}</main>
    </Layout_styled>
  );
}
