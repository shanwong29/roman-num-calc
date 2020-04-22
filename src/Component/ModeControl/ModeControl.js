import React, { useEffect } from "react";
import Button from "../Button/Button";
import {
  convertFromRomanToArabic,
  convertFromArabicToRoman,
} from "../../Logic/converterService";

const ModeControl = ({ ans, setAns, mode, setMode }) => {
  useEffect(() => {
    let calculator;
    if (ans) {
      if (mode === "roman") {
        calculator = convertFromArabicToRoman(ans);
      } else {
        calculator = convertFromRomanToArabic(ans);
      }

      const newAns = calculator;
      setAns(newAns);
    }
  }, [mode]);

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
