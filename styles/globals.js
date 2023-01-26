import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
* {
  font-family: "Press Start 2P", cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  ::-webkit-scrollbar {
    width: 0px;
}
}
`;
