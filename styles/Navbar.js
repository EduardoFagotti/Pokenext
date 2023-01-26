import styled from "styled-components";

export const Nav_styled = styled.div`
  margin-top: -100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #f5deb3;
  border: 10px solid #a0522d;
  border-style: groove;
  color: black;
  position: fixed;
  width: 100%;
  height: 0px;
  z-index: 1;

  @media screen and (max-width: 430px) {
    font-size: 12px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -30px;

    h1 {
      font-size: 20px;
      margin-left: 5px;

      @media screen and (max-width: 430px) {
        font-size: 15px;
      }
    }
  }

  input {
    padding: 5px;
    border-color: #a0522d;
  }

  ul {
    display: flex;
    list-style: none;
    margin-left: 20px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }

    li {
      margin-right: 5px;
      padding: 5px;

      a {
        text-decoration: none;
        color: black;
      }

      a:hover {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
`;
