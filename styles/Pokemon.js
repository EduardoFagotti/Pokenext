import styled from "styled-components";

export const Pokemon_styled = styled.div`
  display: flex;
  justify-content: center;
  z-index: 0;
  margin-top: 100px;
  margin-left: 50px;
  background-size: 65%;
  background-position: center center;

  .card {
    width: 40%;
    height: 550px;
    margin-top: 50px;
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
  }
`;
export const Pokemon_info_base = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  margin-top: 20px;

  section {
    margin-bottom: 10px;
    margin-right: 10px;
    border: 5px solid #a0522d;
    border-style: groove;
    background-color: #f5deb3;
    padding: 2px;
    display: flex;
    align-items: center;

    h1 {
      font-size: 18px;
      padding-bottom: 10px;
    }
  }
`;

export const Pokemon_info_extras = styled.div`
  width: 40%;
  height: 550px;
  margin-top: 50px;
  padding: 15px;
  margin-bottom: 100px;
  border: 10px solid #a0522d;
  border-style: groove;
  color: white;
  background-color: #f5deb3;
  color: black;
  font-size: 12px;
  border-radius: 5px;

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
        /* width: 100%; */
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

      h1 {
        font-size: 16px;
      }

      div {
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
