import styled from "styled-components";

export const CalcWrapper = styled.div`
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
  border: solid red 1px;
  border-radius: 25px;
  padding: 2vw;
  align-self: center;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
`;
