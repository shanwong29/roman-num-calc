import { useReducer } from "react";
import { getArabicAns, isOperator } from "../service/getArabicAns";
import { convertExpFromRomanToArabic } from "../service/convertRomanToArabic";
import {
  convertNumFromArabicToRoman,
  convertExpFromArabicToRoman,
} from "../service/convertArabicToRoman";

const initialState = {
  isDarkMode: window.localStorage.getItem("roman-num-coverter-dark-mode")
    ? true
    : false,
  isRomanMode: false,
  input: "",
  ans: "",
  errorMsg: "",
};

const getRomanAns = (input) => {
  const arabicExp = convertExpFromRomanToArabic(input);
  if (arabicExp.errorMsg) {
    return arabicExp;
  }
  const arabicAns = getArabicAns(arabicExp);
  const ansInRoman = convertNumFromArabicToRoman(arabicAns);

  return ansInRoman;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      if (state.isDarkMode) {
        window.localStorage.removeItem("roman-num-coverter-dark-mode");
      } else {
        window.localStorage.setItem("roman-num-coverter-dark-mode", true);
      }
      return { ...state, isDarkMode: !state.isDarkMode };

    case "CHANGE_LANG_MODE":
      let newAns = "";
      let newInput = "";
      let errorMsg = "";

      if (state.isRomanMode && state.input) {
        newInput = convertExpFromRomanToArabic(state.input);
      } else if (state.input) {
        newInput = convertExpFromArabicToRoman(state.input);
      }
      if (newInput.errorMsg) {
        errorMsg = `Convert Err: ${newInput.errorMsg}`;
        newAns = "";
        newInput = state.input;
        return {
          ...state,
          ans: newAns,
          input: newInput,
          errorMsg,
        };
      }

      if (state.ans || state.ans === 0) {
        if (state.isRomanMode) {
          newAns = getArabicAns(newInput);
        } else {
          newAns = getRomanAns(newInput);
        }
      }

      if (newAns.errorMsg) {
        errorMsg = newAns.errorMsg;
        newAns = "";
      }

      return {
        ...state,
        isRomanMode: !state.isRomanMode,
        ans: newAns,
        input: newInput,
        errorMsg,
      };

    case "GET_ANS":
      let ans;
      if (state.isRomanMode) {
        ans = getRomanAns(state.input);
      } else {
        ans = getArabicAns(state.input);
      }

      if (ans.errorMsg) {
        return { ...state, errorMsg: ans.errorMsg, ans: "" };
      }

      return { ...state, ans, errorMsg: "" };

    case "ADD_NUMBER_TO_INPUT":
      if (state.ans || state.ans === 0) {
        return {
          ...state,
          input: action.payload,
          ans: "",
        };
      } else {
        return { ...state, input: state.input + action.payload };
      }

    case `ADD_OPERATOR_OR_DOT_TO_INPUT`:
      const lastChar = state.input[state.input.length - 1];
      const isLastCharOperator = isOperator(lastChar) || lastChar === ".";
      if (state.ans || state.ans === 0) {
        // add input to previous ans
        return {
          ...state,
          input: state.ans + action.payload,
          ans: "",
          errorMsg: "",
        };
      }
      if (isLastCharOperator) {
        //to avoid two consecutive operator input, e.g. "++"
        return {
          ...state,
          input: state.input.slice(0, state.input.length - 1) + action.payload,
        };
      }
      // ans is empty string
      return { ...state, input: state.input + action.payload };

    case "CLEAR_INPUT_&_ANS":
      return { ...state, ans: "", input: "", errorMsg: "" };

    case "HANDLE_INPUT_BACKSPACE":
      return {
        ...state,
        ans: "",
        errorMsg: "",
        input: state.input.slice(0, state.input.length - 1),
      };

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
