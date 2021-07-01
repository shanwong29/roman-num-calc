import React, { useContext, useEffect, useCallback, useState } from "react";
import Context from "../../store/context";
import * as Styled from "./Panel.styles";

function Panel() {
  console.log("panel");
  const { state, dispatch } = useContext(Context);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const romanNumbers = ["M", "D", "C", "L", "X", "V", "I"];
  const arabicNumbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const numbers = state.isRomanMode ? romanNumbers : arabicNumbers;

  const operators = ["\u00F7", "\u00D7", "-", "+", "."];

  ////////////////////////// handler ///////////////////////////////
  const handleNumInput = useCallback(
    (numberInput) => {
      !state.errorMsg &&
        dispatch({ type: "ADD_NUMBER_TO_INPUT", payload: numberInput });
    },
    [state.errorMsg, dispatch]
  );

  const handleOperators = useCallback(
    (sign) => {
      if (state.errorMsg) {
        return;
      }

      if (state.input.length > 0) {
        // operator is not the first input

        dispatch({ type: "ADD_OPERATOR_OR_DOT_TO_INPUT", payload: sign });
      } else {
        alert("The first input need to be a number.");
      }
    },
    [state.errorMsg, state.input, dispatch]
  );

  const handleBackspace = useCallback(() => {
    state.input && dispatch({ type: "HANDLE_INPUT_BACKSPACE" });
  }, [state.input, dispatch]);

  const handleClearAll = useCallback(() => {
    state.input && dispatch({ type: "CLEAR_INPUT_&_ANS" });
  }, [state.input, dispatch]);

  const handleEqual = useCallback(() => {
    state.input && dispatch({ type: "GET_ANS" });
  }, [state.input, dispatch]);

  const handleKeyPressed = useCallback(
    (e) => {
      if (focused) {
        document.activeElement.blur();
      }
      const keyPressed = e.key;

      const handleNumAndOperators = () => {
        if (operators.indexOf(keyPressed) >= 0) {
          handleOperators(keyPressed);
        } else if (
          arabicNumbers.indexOf(keyPressed) >= 0 &&
          !state.isRomanMode
        ) {
          handleNumInput(keyPressed);
        } else if (
          romanNumbers.indexOf(keyPressed.toUpperCase()) >= 0 &&
          state.isRomanMode
        ) {
          handleNumInput(keyPressed.toUpperCase());
        } else {
          return;
        }
      };

      switch (keyPressed) {
        case "/":
          handleOperators(operators[0]);
          break;
        case "*":
          handleOperators(operators[1]);
          break;
        case "Enter":
          handleEqual();
          break;
        case "Backspace":
          handleBackspace();
          break;
        case "Escape":
          handleClearAll();
          break;
        default:
          handleNumAndOperators();
      }
    },
    [
      handleOperators,
      handleClearAll,
      handleEqual,
      handleBackspace,
      handleNumInput,
      arabicNumbers,
      focused,
      operators,
      romanNumbers,
      state.isRomanMode,
    ]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressed);

    return () => {
      window.removeEventListener("keydown", handleKeyPressed);
    };
  }, [handleKeyPressed]);

  ////////////////////////// Number btns ///////////////////////////////

  const numBtns = numbers.map((el, i) => {
    return (
      <Styled.NumberBtn
        key={i}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={() => handleNumInput(el)}
      >
        {el}
      </Styled.NumberBtn>
    );
  });

  ////////////////////////// operator btns ///////////////////////////////

  const operatorBtns = operators.slice(0, 4).map((el, i) => {
    return (
      <Styled.FunctionBtn
        key={i}
        onFocus={onFocus}
        onBlur={onBlur}
        onClick={() => handleOperators(el)}
      >
        {el}
      </Styled.FunctionBtn>
    );
  });

  const dot = operators[4];
  const dotBtn = (
    <Styled.FunctionBtn
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={() => handleOperators(dot)}
    >
      {dot}
    </Styled.FunctionBtn>
  );

  ////////////////////////// other btns ///////////////////////////////

  const backSpaceBtn = (
    <Styled.FunctionBtn
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={handleBackspace}
    >
      &#8592;
    </Styled.FunctionBtn>
  );

  const clearAllBtn = (
    <Styled.FunctionBtn
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={handleClearAll}
    >
      AC
    </Styled.FunctionBtn>
  );

  const equalBtn = (
    <Styled.EqualBtn
      onFocus={onFocus}
      onBlur={onBlur}
      isRomanMode={state.isRomanMode}
      onClick={handleEqual}
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
      <Styled.OperatorWrapper>{operatorBtns}</Styled.OperatorWrapper>
    </>
  );
}

export default Panel;
