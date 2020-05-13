import styled from "styled-components";

export const App = styled.div`
  display: grid;
  grid-template-columns: 5vw 5vw 5vw 5vw;
  grid-template-areas:
    "input      input     input      input"
    "answer     answer    answer     answer"
    "langMode   langMode  langMode   langMode"
    ".          .         clearBtns  clearBtns"
    "number     number    number     operator"
    "number     number    number     operator"
    "number     number    number     operator"
    "number     number    number     operator";
`;
