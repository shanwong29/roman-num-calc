import styled from "styled-components";

const switchBtnBgColor = ({ isRomanActive, isArabicActive, theme }) => {
  if (isRomanActive) {
    return theme.langStyle.color;
  } else if (isArabicActive) {
    return theme.langStyle.color;
  }
  return theme.grey;
  //when both cases are false, use the default color
};

export const NumSwitchWrapper = styled.div`
  grid-area: langMode;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NumSwitchBtn = styled.button`
  width: 100%;
  border-radius: 20px;
  margin: 10px 5px;
  color: ${switchBtnBgColor};
  border-color: ${switchBtnBgColor};
  &:hover {
    color: ${switchBtnBgColor};
  }
`;
