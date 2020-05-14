import styled from "styled-components";

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
  color: ${({ isRomanActive, isArabicActive, theme }) =>
    (isRomanActive && theme.langStyle.color) ||
    (isArabicActive && theme.langStyle.color)};
  border-color: ${({ isRomanActive, isArabicActive, theme }) =>
    (isRomanActive && theme.langStyle.color) ||
    (isArabicActive && theme.langStyle.color)};

  &:hover {
    background: ${({ isRomanActive, isArabicActive, theme }) =>
      (isRomanActive && theme.langStyle.color) ||
      (isArabicActive && theme.langStyle.color) ||
      theme.grey};
  }
`;
