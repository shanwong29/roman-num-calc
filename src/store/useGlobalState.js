import { useReducer } from "react";

const initialState = {
  isDarkMode: false,
  isRomanMode: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };
    case "CHANGE_LANG_MODE":
      if (action.mode === `arabic`) {
        return { ...state, isRomanMode: false };
      } else {
        return { ...state, isRomanMode: true };
      }
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
