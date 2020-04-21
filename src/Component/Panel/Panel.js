import React from "react";
import Button from "../Button/Button";
import RomanNumCalc from "../../Logic/romanNumCalc";
import ArabicNumCalc from "../../Logic/arabicNumCalc";

function Panel({ mode, setInput, input, ans, setAns }) {
  let handleInput = (children) => {
    switch (children) {
      case "cancel":
        cancelAll();
        break;
      case "=":
        getAns();
        break;
      default:
        // when inputs are number
        addInput(children);
    }
  };

  const getAns = () => {
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
  };

  const addInput = (children) => {
    if (ans) {
      setAns("");
      setInput(children);
    } else {
      setInput((input += children));
    }
  };

  const cancelAll = () => {
    setInput("");
    setAns("");
  };

  let numBtns;
  if (mode === "roman") {
    numBtns = [`I`, `V`, `X`, `L`, `C`, `D`, `M`];
  } else {
    numBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  }

  numBtns = numBtns.map((el, i) => {
    return (
      <Button key={i} handleInput={handleInput}>
        {el}
      </Button>
    );
  });

  let operators = [`+`, `-`, `*`, `/`, `cancel`, `=`];
  operators = operators.map((el, i) => {
    return (
      <Button key={i} handleInput={handleInput}>
        {el}
      </Button>
    );
  });

  return (
    <div>
      {numBtns}
      {operators}
    </div>
  );
}

export default Panel;
