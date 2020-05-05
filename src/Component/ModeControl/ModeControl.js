import React, { useContext } from "react";
import Button from "../Button/Button";
import Context from "../../store/context";

const ModeControl = () => {
  const { dispatch } = useContext(Context);

  let modeBtns = [`arabic`, `roman`];

  modeBtns = modeBtns.map((el, i) => {
    return (
      <Button
        key={i}
        onClickFn={() => dispatch({ type: `CHANGE_LANG_MODE`, mode: el })}
      >
        {el}
      </Button>
    );
  });

  return modeBtns;
};

export default ModeControl;
