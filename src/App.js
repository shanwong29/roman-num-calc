import React, { useEffect } from "react";
import "./App.css";
import Display from "./Component/Display/Display";
import Panel from "./Component/Panel/Panel";
import ModeControl from "./Component/ModeControl/ModeControl";
import DarkModeControl from "./Component/DarkModeControl/DarkModeControl";
import {
  convertFromRomanToArabic,
  convertFromArabicToRoman,
  convertExpFromArabicToRoman,
  convertExpFromRomanToArabic,
} from "./Logic/converterService";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme/theme";
import Context from "./store/context";
import useGlobalState from "./store/useGlobalState";

const GlobalStyles = createGlobalStyle`
  body{
  
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;

export function App() {
  const [state, dispatch] = useGlobalState();

  console.log(state);
  console.log(state.ans, state.input);
  useEffect(() => {
    // let calculator;
    // if (state.ans) {
    //   if (state.isRomanMode) {
    //     calculator = convertFromArabicToRoman(state.ans);
    //   } else {
    //     calculator = convertFromRomanToArabic(state.ans);
    //   }
    //   const newAns = calculator;
    //   dispatch({ type: "SET_ANS", newValue: newAns });
    // }
    // if (state.input) {
    //   if (state.isRomanMode) {
    //     calculator = convertExpFromArabicToRoman(state.input);
    //   } else {
    //     calculator = convertExpFromRomanToArabic(state.input);
    //   }
    //   const newInput = calculator;
    //   dispatch({ type: "SET_INPUT", newValue: newInput });
    // }
  }, [state.isRomanMode]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDarkMode ? theme.dark : theme.light}>
        <GlobalStyles />
        <div className="App">
          <DarkModeControl />
          <Display />
          <ModeControl />
          <Panel />
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
