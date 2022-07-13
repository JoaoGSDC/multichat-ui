import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    color: #d1d7db;
    background-color: #fbfbfb;
    font-family: 'Roboto', sans-serif;

    div#root {
      height: 100%;
      width: 100%;
    }

    a {
      text-decoration: none;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.17rem;
    }

    h4 {
      font-size: 1rem;
    }

    h5 {
      font-size: 0.83rem;
    }

    h6 {
      font-size: 0.75rem;
    }
  }
`;
