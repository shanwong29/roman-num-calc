import styled from "styled-components";

const switchBtnBgColor = ({ isActive, theme }) => {
  return isActive ? theme.langStyle.color : theme.baseColor;
};

export const NumSwitchWrapper = styled.div`
  grid-area: langMode;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SwitchBtn = styled.button`
  width: 100%;
  border-radius: 20px;
  margin: 10px 5px;
  color: ${switchBtnBgColor};
  border-color: ${switchBtnBgColor};
  &:hover {
    color: ${switchBtnBgColor};
  }
`;

export const RomanSwitch = styled.button``;
