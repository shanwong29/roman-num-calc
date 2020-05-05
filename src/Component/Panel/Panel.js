import React, { useContext } from "react";
import Button from "../Button/Button";
import Context from "../../store/context";

function Panel() {
  const { state, dispatch } = useContext(Context);

  let handleInput = (children) => {
    let type;
    let valueToBeAdded = "";
    switch (children) {
      case "cancel":
        type = `CLEAR_INPUT_&_ANS`;
        break;
      case "=":
        type = `GET_ANS`;
        break;
      default:
        type = `ADD_INPUT`;
        valueToBeAdded = children;
    }

    dispatch({ type, valueToBeAdded });
  };

  let numBtns;
  if (state.isRomanMode) {
    numBtns = [`I`, `V`, `X`, `L`, `C`, `D`, `M`];
  } else {
    numBtns = [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `0`];
  }

  numBtns = numBtns.map((el, i) => {
    return (
      <Button key={i} onClickFn={() => handleInput(el)}>
        {el}
      </Button>
    );
  });

  let operators = [`+`, `-`, `*`, `/`, `cancel`, `=`];
  operators = operators.map((el, i) => {
    return (
      <Button key={i} onClickFn={() => handleInput(el)}>
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
