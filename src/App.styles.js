import styled from "styled-components";

export const CalcWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 6vw); */
  grid-template-columns: repeat(4, 82px);
  grid-template-areas:
    "input      input     input      input"
    "answer     answer    answer     answer"
    "langMode   langMode  langMode   langMode"
    ".          .         clearBtns  clearBtns"
    "number     number    number     operator"
    "number     number    number     operator"
    "number     number    number     operator"
    "number     number    number     operator";
  border: solid 2px ${({ theme }) => theme.grey};
  border-radius: 25px;
  /* padding: 2vw; */
  padding: 28px;
  align-self: center;
  justify-content: center;
  /* width: 28vw; */
  width: 382px;
  margin-top: 40px;
  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(4, 20vw);
    width: 90vw;
    margin-top: 20vw;
  }
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
