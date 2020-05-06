import { useReducer } from "react";
import RomanNumCalc from "../Logic/romanNumCalc";
import ArabicNumCalc from "../Logic/arabicNumCalc";
import {
  convertNumFromRomanToArabic,
  convertNumFromArabicToRoman,
  convertExpFromArabicToRoman,
  convertExpFromRomanToArabic,
} from "../Logic/converterService";

const initialState = {
  isDarkMode: false,
  isRomanMode: true,
  input: "",
  ans: "",
  errorMsg: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };

    case "CHANGE_LANG_MODE":
      let newAns = "";
      let newInput = "";
      let errorMsg = "";

      if (state.isRomanMode && state.ans) {
        newAns = convertNumFromRomanToArabic(state.ans);
      } else if (state.ans) {
        newAns = convertNumFromArabicToRoman(Number(state.ans));
      }

      if (state.isRomanMode && state.input) {
        newInput = convertExpFromRomanToArabic(state.input);
      } else if (state.input) {
        newInput = convertExpFromArabicToRoman(state.input);
      }

      if (newAns.errorMsg) {
        errorMsg = newAns.errorMsg;
        newAns = "";
      }

      if (newInput.errorMsg) {
        errorMsg = newInput.errorMsg;
        newAns = "";
        newInput = state.input;
      }

      return {
        ...state,
        isRomanMode: !state.isRomanMode,
        ans: newAns,
        input: newInput,
        errorMsg,
      };

    case "GET_ANS":
      let expression;
      if (state.isRomanMode) {
        expression = new RomanNumCalc(state.input);
      } else {
        expression = new ArabicNumCalc(state.input);
      }

      let ans = expression.calculation();
      if (ans.errorMsg) {
        return { ...state, errorMsg: ans.errorMsg };
      }
      return { ...state, ans, errorMsg: "" };

    case "ADD_INPUT":
      if (state.ans || state.errorMsg) {
        return {
          ...state,
          input: action.valueToBeAdded,
          ans: "",
          errorMsg: "",
        };
      } else {
        return { ...state, input: state.input + action.valueToBeAdded };
      }

    case "SET_INPUT":
      return { state, input: action.newValue };

    case "SET_ANS":
      return { state, ans: action.newValue };

    case "CLEAR_INPUT_&_ANS":
      return { ...state, ans: "", input: "", errorMsg: "" };

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
