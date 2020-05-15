import React, { useContext } from "react";
import Context from "../../store/context";
import * as Styled from "./NumModeSwitch.styles";

const NumModeSwitch = () => {
  const { state, dispatch } = useContext(Context);

  console.log("Mode Control");

  const isArabicMode = !state.isRomanMode;

  return (
    <Styled.NumSwitchWrapper>
      <Styled.SwitchBtn
        isActive={isArabicMode}
        onClick={() => {
          state.isRomanMode && dispatch({ type: `CHANGE_LANG_MODE` });
        }}
      >
        Arabic
      </Styled.SwitchBtn>
      <Styled.SwitchBtn
        isActive={state.isRomanMode}
        onClick={() => {
          isArabicMode && dispatch({ type: `CHANGE_LANG_MODE` });
        }}
      >
        Roman
      </Styled.SwitchBtn>
    </Styled.NumSwitchWrapper>
  );
};

export default NumModeSwitch;
