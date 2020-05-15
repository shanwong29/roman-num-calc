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
    width:${({ theme }) => theme.btnSize.default};
    height: ${({ theme }) => theme.btnSize.default};
    border-radius: 50%;
    background: none;
    border: 2px solid;
    margin:2px;
    font-size:1.5rem;
    font-weight:500;
    cursor:pointer;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => theme.btnColor.focus};
    }
    &:hover {
      color: ${({ theme }) => theme.themeStyle.background};
    }
      @media ${({ theme }) => theme.breakpoints.sm} {
        width: ${({ theme }) => theme.btnSize.sm};
        height: ${({ theme }) => theme.btnSize.sm};
      }
  }
`;
