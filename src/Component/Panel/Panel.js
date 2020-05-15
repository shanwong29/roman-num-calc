import React, { useContext } from "react";
// import button from "../button/button";
import Context from "../../store/context";
import * as Styled from "./Panel.styles";

function Panel() {
  const { state, dispatch } = useContext(Context);

  console.log("panel renderede");

  ////////////////////////// Number btns ///////////////////////////////

  let numBtns;
  if (state.isRomanMode) {
    numBtns = [`M`, `D`, `C`, `L`, `X`, `V`, `I`];
  } else {
    numBtns = [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `0`];
  }

  numBtns = numBtns.map((el, i) => {
    return (
      <Styled.NumberBtn
        key={i}
        onClick={() =>
          !state.errorMsg &&
          dispatch({ type: `ADD_NUMBER_TO_INPUT`, payload: el })
        }
      >
        {el}
      </Styled.NumberBtn>
    );
  });

  ////////////////////////// operator btns ///////////////////////////////

  let operators = [`/`, `*`, `-`, `+`];

  const handleOperatorInput = (operator) => {
    if (!state.errorMsg && state.input.length) {
      dispatch({ type: `ADD_OPERATOR_TO_INPUT`, payload: operator });
    } else {
      alert("The first input need to be a number.");
    }
  };

  operators = operators.map((el, i) => {
    return (
      <Styled.FunctionBtn key={i} onClick={() => handleOperatorInput(el)}>
        {el}
      </Styled.FunctionBtn>
    );
  });

  const dotBtn = (
    <Styled.FunctionBtn onClick={() => handleOperatorInput(".")}>
      .
    </Styled.FunctionBtn>
  );

  ////////////////////////// other btns ///////////////////////////////

  const backSpaceBtn = (
    <Styled.FunctionBtn
      onClick={() => {
        state.input && dispatch({ type: "HANDLE_INPUT_BACKSPACE" });
      }}
    >
      C
    </Styled.FunctionBtn>
  );

  const clearAllBtn = (
    <Styled.FunctionBtn
      onClick={() => {
        dispatch({ type: `CLEAR_INPUT_&_ANS` });
      }}
    >
      AC
    </Styled.FunctionBtn>
  );

  const equalBtn = (
    <Styled.EqualBtn
      isRomanMode={state.isRomanMode}
      onClick={() => {
        state.input && dispatch({ type: `GET_ANS` });
      }}
    >
      =
    </Styled.EqualBtn>
  );

  return (
    <>
      <Styled.ClearBtnsWrapper>
        {backSpaceBtn}
        {clearAllBtn}
      </Styled.ClearBtnsWrapper>
      <Styled.NumBtnsWrapper>
        {numBtns}
        {!state.isRomanMode && dotBtn}
        {equalBtn}
      </Styled.NumBtnsWrapper>
      <Styled.OperatorWrapper>{operators}</Styled.OperatorWrapper>
    </>
  );
}

export default Panel;
