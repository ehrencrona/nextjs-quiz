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
    height: 100%;
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
  }
`;
