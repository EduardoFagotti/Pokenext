import styled from "styled-components";

export const Pokemon_styled = styled.div`
  display: flex;
  justify-content: center;
  z-index: 0;
  margin-top: 100px;
  margin-left: 50px;
  background-size: 65%;
  background-position: center center;

  @media screen and (max-width: 925px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 925px) {
    margin-left: 0;
  }

  .card {
    width: 40%;
    height: 550px;
    margin-top: 20px;
    padding: 15px;
    margin-bottom: 100px;
    text-align: center;
    border: 10px solid #a0522d;
    border-style: groove;
    color: white;
    background-color: #f5deb3;
    color: black;
    font-size: 12px;
    border-radius: 5px;

    @media screen and (max-width: 925px) {
      width: 70%;
      height: 580px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 550px) {
      width: 90%;
      height: 560px;
    }

    .img {
      @media screen and (max-width: 1425px) {
        width: 200px;
        height: 200px;
      }

      @media screen and (max-width: 1175px) {
        width: 180px;
        height: 180px;
      }

      @media screen and (max-width: 1075px) {
        width: 150px;
        height: 150px;
      }

      @media screen and (max-width: 925px) {
        width: 200px;
        height: 200px;
      }
      @media screen and (max-width: 700px) {
        width: 180px;
        height: 180px;
      }
      @media screen and (max-width: 635px) {
        width: 150px;
        height: 150px;
      }
      @media screen and (max-width: 550px) {
        width: 180px;
        height: 180px;
      }
      @media screen and (max-width: 455px) {
        width: 120px;
        height: 120px;
      }
    }

    .card_title {
      display: flex;
      align-items: center;
      justify-content: start;

      button {
        padding: 5px;
        margin-right: 20px;
        background-color: #a0522d;
        color: #fff;
        border-color: #fff;
        border-style: double;
      }
    }
  }
  .poke_name {
    text-align: center;
    text-transform: capitalize;

    @media screen and (max-width: 1175px) {
      font-size: 18px;
    }
    @media screen and (max-width: 970px) {
      font-size: 16px;
    }
    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
  }
`;
export const Pokemon_info_base = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  margin-top: 20px;

  @media screen and (max-width: 1075px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
  }

  section {
    margin-bottom: 10px;
    margin-right: 10px;
    border: 5px solid #a0522d;
    border-style: groove;
    background-color: #f5deb3;
    padding: 2px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1075px) {
      margin-bottom: 5px;
    }

    @media screen and (max-width: 970px) {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 18px;
      padding-bottom: 10px;

      @media screen and (max-width: 1175px) {
        font-size: 16px;
      }
    }
  }
`;

export const Pokemon_info_extras = styled.div`
  width: 40%;
  height: 550px;
  margin-top: 20px;
  padding: 15px;
  margin-bottom: 100px;
  border: 10px solid #a0522d;
  border-style: groove;
  color: white;
  background-color: #f5deb3;
  color: black;
  font-size: 12px;
  border-radius: 5px;

  @media screen and (max-width: 925px) {
    margin-top: 0;
    width: 70%;
  }

  @media screen and (max-width: 550px) {
    width: 90%;
    /* height: 560px; */
  }

  button {
    width: 100px;
    padding: 5px;
    margin-right: 20px;
    margin-bottom: 10px;
    background-color: #a0522d;
    color: #fff;
    border-color: #fff;
    border-style: double;
    justify-content: start;
  }

  .moves {
    display: flex;
    flex-direction: column;

    div {
      h1 {
        margin-bottom: 10px;
      }
      .move-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        height: 430px;
        overflow: auto;
        text-align: center;

        ::-webkit-scrollbar {
          background-color: #a0522d;
          border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #fff;
          border-radius: 8px;
        }

        p {
          width: 200px;
          margin: 5px;
          font-size: 16px;
        }
      }
    }
  }

  .info_bar {
    display: flex;
    flex-direction: column;

    .bar {
      display: flex;
      flex-direction: column;
      justify-content: start;
      padding: 10px;
      width: 310px;

      h1 {
        font-size: 16px;
      }

      div {
        margin-left: -20px;
        width: 300px;
        color: #fff;
        margin-top: 10px;
        background-color: #a9a9a9;
        border-radius: 8px;

        p {
          padding: 5px;
          border-radius: 8px;
        }
      }
    }
  }
`;
