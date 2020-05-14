import styled from "styled-components";

export const NumBtnsWrapper = styled.div`
  display: grid;
  grid-area: number;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */

  justify-items: center;
  align-items: center;
  justify-items: center;
  align-items: center;
  /* direction: rtl; */
`;

export const OperatorWrapper = styled.div`
  display: grid;
  grid-area: operator;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  align-items: center;
`;

export const ClearBtnsWrapper = styled.div`
  grid-area: clearBtns;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
