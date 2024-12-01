// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    color: #333;
  }

  h1, h2 {
    color: #ff4c4c;
  }

  button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: #ff4c4c;
    color: white;
    font-size: 16px;
    border-radius: 5px;
  }

  button:hover {
    background-color: #ff2a2a;
  }
`;

export default GlobalStyle;
