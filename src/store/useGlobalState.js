import { useReducer } from "react";
import RomanNumCalc from "../Logic/romanNumCalc";
import ArabicNumCalc from "../Logic/arabicNumCalc";

const initialState = {
  isDarkMode: false,
  isRomanMode: true,
  input: "",
  ans: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };

    case "CHANGE_LANG_MODE":
      if (action.mode === `arabic`) {
        return { ...state, isRomanMode: false };
      }
      return { ...state, isRomanMode: true };

    case "GET_ANS":
      let expression;
      if (state.isRomanMode) {
        expression = new RomanNumCalc(state.input);
      } else {
        expression = new ArabicNumCalc(state.input);
      }
      if (expression.validation()) {
        let ans = expression.calculation();
        return { ...state, ans };
      }
      return { ...state, ans: "Invalid Input" };

    case "ADD_INPUT":
      if (state.ans) {
        return { ...state, input: action.valueToBeAdded, ans: "" };
      } else {
        return { ...state, input: state.input + action.valueToBeAdded };
      }

    case "SET_INPUT":
      return { state, input: action.newValue };

    case "SET_ANS":
      return { state, ans: action.newValue };

    case "CLEAR_INPUT_&_ANS":
      return { ...state, ans: "", input: "" };

    default:
      return state;
  }
};

const useGlobalState = () => {
  return useReducer(reducer, initialState);
  //useReducer return modified state and a dispatch function
  //dispatch function takes an action as a parameter
};

export default useGlobalState;
