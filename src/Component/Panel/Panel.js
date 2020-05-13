import React, { useContext } from "react";
import Button from "../Button/Button";
import Context from "../../store/context";

function Panel() {
  const { state, dispatch } = useContext(Context);

  console.log("panel renderede");

  let handleInput = (children) => {
    let type;
    let payload = "";

    const lastChar = state.input[state.input.length - 1];
    const operatorsRegex = /\+|-|\*|\/|\./;
    const isOperator = operatorsRegex.test(children);
    switch (children) {
      case "cancel":
        type = `CLEAR_INPUT_&_ANS`;
        break;
      case "=":
        if (!state.input) {
          return;
        }
        type = `GET_ANS`;
        break;

      default:
        if (isOperator && !lastChar) {
          //avoid having operator as input[0]
          return;
        }
        if (isOperator && operatorsRegex.test(lastChar)) {
          //to catch the case for two operator // two dot input
          payload = state.input.slice(0, state.input.length - 1) + children;
          console.log("payLoad", payload);
          type = `CHANGE_INPUT`;
        } else {
          //when input is number
          type = `ADD_INPUT`;
          payload = children;
        }
    }

    dispatch({ type, payload });
  };

  let numBtns;
  if (state.isRomanMode) {
    numBtns = [`I`, `V`, `X`, `L`, `C`, `D`, `M`];
  } else {
    numBtns = [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `0`, `.`];
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
