import styled from "styled-components";

export const Card_styled = styled.div`
  margin: 20px;
  margin-bottom: 40px;

  width: 350px;
  height: 100px;
  border-radius: 10px;
  border: 10px solid #a0522d;
  border-style: groove;
  color: white;
  background-color: #f5deb3;
  color: black;
  font-size: 12px;
  border-radius: 5px;

  @media screen and (max-width: 430px) {
    margin: 15px;
    width: 420px;
    font-size: 10px;
  }

  @media screen and (max-width: 370px) {
    width: 250px;
    height: 180px;
  }

  div {
    margin-top: -32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 370px) {
      margin-top: -10px;
      display: flex;
      flex-direction: column-reverse;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      h3 {
        padding-bottom: 10px;
        text-transform: capitalize;

        @media screen and (max-width: 370px) {
          padding-top: 20px;
        }
      }

      .link {
        padding-top: 5px;
        text-decoration: none;
        color: blue;

        @media screen and (max-width: 370px) {
          padding-top: 0;
        }
        .link:hover {
          color: #fff;
        }
      }
    }
  }
  .img {
    transition: transform 0.3s;

    @media screen and (max-width: 370px) {
      width: 120px;
      height: 120px;
    }
  }
  .img:hover {
    transform: scale(1.2);
  }
`;
