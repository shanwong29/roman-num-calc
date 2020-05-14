import styled from "styled-components";

export const InputDisplay = styled.input`
  grid-area: input;
  min-height: 2rem;
  font-size: 1.1rem;
  background: ${({ theme }) => theme.themeStyle.background};
  color: ${({ theme }) => theme.themeStyle.text};
  border: none;
  outline: none;
`;

export const AnsWrapper = styled.div`
  grid-area: answer;
  min-height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;

  & > span {
    font-size: 1.1rem;
    line-height: 1rem;
  }

  & > p {
    font-size: 2rem;
  }
`;
