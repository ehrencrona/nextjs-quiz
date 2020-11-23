import css from "styled-jsx/css";
import theme from "../styles/theme";

export default css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: Yanone Kaffeesatz;
    font-size: 24px;
    font-weight: 300;
  }

  h1,
  h2,
  h3,
  h4 {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    min-height: 100%;
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    color: black;
    background-color: ${theme.colors.accent};
    border: none;
    padding: 0.5em 0.8em;
    font-family: inherit;
    font-size: inherit;
    border-radius: 0.1em;
    margin-top: 2em;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: ${theme.colors.hoverAccent};
  }
`;
