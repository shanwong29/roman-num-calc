import React, { useContext } from "react";
import Context from "../../store/context";
import * as Styled from "./ModeControl.styles";

const ModeControl = () => {
  const { state, dispatch } = useContext(Context);

  let modeBtns = [`arabic`, `roman`];

  console.log("Mode Control");

  modeBtns = modeBtns.map((el, i) => {
    return (
      <button
        key={i}
        onClick={() => {
          if (
            (el === `roman` && state.isRomanMode) ||
            (el === `arabic` && !state.isRomanMode)
          ) {
            return;
          } else {
            dispatch({ type: `CHANGE_LANG_MODE` });
          }
        }}
      >
        {el}
      </button>
    );
  });

  return <Styled.modeBtnsWrapper>{modeBtns}</Styled.modeBtnsWrapper>;
};

export default ModeControl;
