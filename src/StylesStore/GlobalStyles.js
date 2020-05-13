import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  * {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;

    text-align: center;
    box-sizing: border-box;
  }

  button {
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
  }
`;
