import React, { useContext } from "react";
// import button from "../button/button";
import Context from "../../store/context";
import * as Styled from "./Panel.styles";

function Panel() {
  const { state, dispatch } = useContext(Context);

  console.log("panel renderede");

  let numBtns;
  if (state.isRomanMode) {
    numBtns = [`I`, `V`, `X`, `L`, `C`, `D`, `M`];
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

  let multipleAndDivisionBtns = [`/`, `*`];

  multipleAndDivisionBtns = multipleAndDivisionBtns.map((el, i) => {
    return (
      <Styled.FunctionBtn
        key={i}
        onClick={() =>
          !state.errorMsg &&
          (state.input.length > 1 ||
            (state.input.length === 1 &&
              state.input[0] !== "+" &&
              state.input[0] !== "-")) &&
          dispatch({ type: `ADD_OPERATOR_TO_INPUT`, payload: el })
        }
      >
        {el}
      </Styled.FunctionBtn>
    );
  });

  let minusAndPlusBtns = [`-`, `+`];

  minusAndPlusBtns = minusAndPlusBtns.map((el, i) => {
    return (
      <Styled.FunctionBtn
        key={i}
        onClick={() =>
          !state.errorMsg &&
          dispatch({ type: `ADD_OPERATOR_TO_INPUT`, payload: el })
        }
      >
        {el}
      </Styled.FunctionBtn>
    );
  });

  const dotBtn = (
    <Styled.FunctionBtn
      onClick={() =>
        !state.errorMsg &&
        state.input.length &&
        dispatch({ type: `ADD_OPERATOR_TO_INPUT`, payload: "." })
      }
    >
      .
    </Styled.FunctionBtn>
  );

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
      <Styled.OperatorWrapper>
        {multipleAndDivisionBtns}
        {minusAndPlusBtns}
      </Styled.OperatorWrapper>
    </>
  );
}

export default Panel;
