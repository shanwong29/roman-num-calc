import React from "react";
import Button from "../Button/Button";
import RomanNumCalc from "../../Logic/romanNumCalc";
import ArabicNumCalc from "../../Logic/arabicNumCalc";

function Panel({ mode, setInput, input, ans, setAns }) {
  let numBtns;
  if (mode === "roman") {
    numBtns = [`I`, `V`, `X`, `L`, `C`, `D`, `M`];
  } else {
    numBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  }

  numBtns = numBtns.map((el, i) => {
    return (
      <Button
        key={i}
        setInput={setInput}
        input={input}
        ans={ans}
        setAns={setAns}
      >
        {el}
      </Button>
    );
  });

  let method = [`+`, `-`, `*`, `/`];
  let methodButtons = method.map((el, i) => {
    return (
      <Button
        key={i}
        setInput={setInput}
        input={input}
        ans={ans}
        setAns={setAns}
      >
        {el}
      </Button>
    );
  });

  let cancelBtn = (
    <button
      onClick={() => {
        setInput("");
        setAns("");
      }}
    >
      cancel
    </button>
  );

  let equalBtn = (
    <button
      onClick={() => {
        let expression;
        if (mode === "roman") {
          expression = new RomanNumCalc(input);
        } else {
          expression = new ArabicNumCalc(input);
        }
        if (expression.validation()) {
          let ans = expression.calculation();
          setAns(ans);
        } else {
          setAns("Invalid Input");
        }
      }}
    >
      =
    </button>
  );

  return (
    <div>
      {numBtns}
      {cancelBtn}
      {equalBtn}
      {methodButtons}
    </div>
  );
}

export default Panel;
