import styled from "styled-components";

export const NumBtnsWrapper = styled.div`
  display: grid;
  grid-area: number;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  justify-items: center;
  align-items: end;
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

export const EqualBtn = styled.button`
  grid-column: ${({ isRomanMode }) => isRomanMode && `span 2`};
  width: ${({ isRomanMode }) => isRomanMode && `100%`};
  border-radius: ${({ isRomanMode }) => isRomanMode && `25px`};
  color: ${({ theme }) => theme.btnColor.function};
  border-color: ${({ theme }) => theme.btnColor.function};
  &:hover {
    background: ${({ theme }) => theme.btnColor.function};
  }
`;

export const NumberBtn = styled.button`
  color: ${({ theme }) => theme.langStyle.color};
  border-color: ${({ theme }) => theme.langStyle.color};
  &:hover {
    background: ${({ theme }) => theme.langStyle.color};
  }
`;

export const FunctionBtn = styled.button`
  color: ${({ theme }) => theme.btnColor.function};
  border-color: ${({ theme }) => theme.btnColor.function};
  &:hover {
    background: ${({ theme }) => theme.btnColor.function};
  }
`;
