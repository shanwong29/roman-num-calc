import styled from "styled-components";

export const SwitchBtn = styled.button`
  position: absolute;
  left: 80%;
  margin: 0;
  padding-top: 5px;
  font-size: 3rem;
  border: none;
  color: ${({ theme }) => theme.themeStyle.switchColor};
  &:hover {
    color: ${({ theme }) => theme.themeStyle.switchColor};
  }
`;
