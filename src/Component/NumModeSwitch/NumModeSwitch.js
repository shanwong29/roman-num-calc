import React, { useCallback, useContext, useEffect } from "react";
import Context from "../../store/context";
import * as Styled from "./NumModeSwitch.styles";

const NumModeSwitch = () => {
  const { state, dispatch } = useContext(Context);

  console.log("Mode Control");

  const handleNumSwitch = useCallback(
    (mode) => {
      const isArabicMode = !state.isRomanMode;
      const switchValid =
        (state.isRomanMode && mode === "A") || (isArabicMode && mode === "R");
      if (switchValid) {
        dispatch({ type: `CHANGE_LANG_MODE` });
      }
    },
    [state.isRomanMode, dispatch]
  );

  const handleKeyPressed = useCallback(
    (e) => {
      if (e.key === "A" || e.key === "R") {
        handleNumSwitch(e.key);
      }
    },
    [handleNumSwitch]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressed);

    return () => {
      window.removeEventListener("keydown", handleKeyPressed);
    };
  }, [handleKeyPressed]);

  return (
    <Styled.NumSwitchWrapper>
      <Styled.SwitchBtn
        isActive={!state.isRomanMode}
        onClick={() => handleNumSwitch("A")}
      >
        Arabic
      </Styled.SwitchBtn>
      <Styled.SwitchBtn
        isActive={state.isRomanMode}
        onClick={() => handleNumSwitch("R")}
      >
        Roman
      </Styled.SwitchBtn>
    </Styled.NumSwitchWrapper>
  );
};

export default NumModeSwitch;
