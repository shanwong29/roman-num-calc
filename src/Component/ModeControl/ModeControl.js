import React, { useContext } from "react";
import Button from "../Button/Button";
import Context from "../../store/context";

const ModeControl = () => {
  const { state, dispatch } = useContext(Context);

  let modeBtns = [`arabic`, `roman`];

  console.log("Mode Control");

  modeBtns = modeBtns.map((el, i) => {
    return (
      <Button
        key={i}
        onClickFn={() => {
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
      </Button>
    );
  });

  return modeBtns;
};

export default ModeControl;
