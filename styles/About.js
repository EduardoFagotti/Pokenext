import styled from "styled-components";
import backImg from "../public/images/about-back.png";

export const About_styled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* max-whidth: 1100px; */
  margin: 0 auto;
  z-index: 0;
  margin-top: 100px;
  padding-top: 100px;
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center center;

  div {
    border: 10px solid #a0522d;
    border-style: groove;
    background-color: #f5deb3;
    padding: 50px;
    margin-bottom: 300px;

    @media screen and (max-width: 700px) {
      width: 500px;
    }

    @media screen and (max-width: 510px) {
      width: 400px;
    }

    @media screen and (max-width: 410px) {
      width: 320px;
      padding: 10px;
    }
    /* background-image: url("../public/images/about-back.png"); */
    h1 {
      font-size: 2em;
      margin-bottom: 1em;
      text-align: center;
    }

    p {
      max-width: 500px;
      margin: 0 auto 1.5em;
      line-height: 1.4;
      text-align: center;
    }
  }
`;
