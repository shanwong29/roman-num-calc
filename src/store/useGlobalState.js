import { useReducer } from "react";

const initialState = {
  isDarkMode: false,
  name: "Shan",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };
    case "CHANGE_NAME":
      if (state.name === "Shan") {
        return { ...state, name: "Izzi" };
      } else {
        return { ...state, name: "Shan" };
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
