import { useReducer } from "react";
import { getArabicAns } from "../Logic/getArabicAns";
import {
  convertNumFromRomanToArabic,
  convertExpFromRomanToArabic,
} from "../Logic/convertRomanToArabic";

import {
  convertNumFromArabicToRoman,
  convertExpFromArabicToRoman,
} from "../Logic/convertArabicToRoman";

const initialState = {
  isDarkMode: true,
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
      let ans;
      if (state.isRomanMode) {
        const arabicExp = convertExpFromRomanToArabic(state.input);
        const arabicAns = getArabicAns(arabicExp);
        ans = convertNumFromArabicToRoman(arabicAns);
      } else {
        ans = getArabicAns(state.input);
      }
      if (ans.errorMsg) {
        return { ...state, errorMsg: ans.errorMsg, ans: "" };
      }
      return { ...state, ans, errorMsg: "" };

    case "ADD_INPUT":
      if (state.ans || state.errorMsg) {
        return {
          ...state,
          input: action.payload,
          ans: "",
          errorMsg: "",
        };
      } else {
        return { ...state, input: state.input + action.payload };
      }

    case `CHANGE_INPUT`:
      return { ...state, input: action.payload };

    case "SET_INPUT":
      return { ...state, input: action.newValue };

    case "SET_ANS":
      return { ...state, ans: action.newValue };

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
