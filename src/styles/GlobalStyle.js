import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
