import React from "react";
import Button from "../Button/Button";

const ModeControl = ({ setMode }) => {
  let modeBtns = [`arabic`, `roman`];
  modeBtns = modeBtns.map((el, i) => {
    return (
      <Button key={i} onClickFn={() => setMode(el)}>
        {el}
      </Button>
    );
  });

  return modeBtns;
};

export default ModeControl;
