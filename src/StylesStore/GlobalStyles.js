import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.themeStyle.background};
      color: ${({ theme }) => theme.themeStyle.text};
  }

  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;

    box-sizing: border-box;
  }

  button {
    width:68px;
    height: 68px;
    border-radius: 50%;
    outline:none;
    background: none;
    border: 2px solid ${({ theme }) => theme.grey};;
    color: ${({ theme }) => theme.grey};
    margin:2px;
    font-size:1.5rem;
    font-weight:500;
    cursor:pointer;
    &:hover {
      color: ${({ theme }) => theme.themeStyle.background};
    }
      @media ${({ theme }) => theme.breakpoints.sm} {
        width: 18vw;
        height: 18vw;
      }
  }
`;
// font-size: 1.5rem;
// width: 5vw;
// height: 5vw;
