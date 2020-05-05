import React, { useState, useEffect } from "react";
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
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");
  console.log(state);
  useEffect(() => {
    let calculator;
    if (ans) {
      if (state.isRomanMode) {
        calculator = convertFromArabicToRoman(ans);
      } else {
        calculator = convertFromRomanToArabic(ans);
      }

      const newAns = calculator;
      setAns(newAns);
    }

    if (input) {
      if (state.isRomanMode) {
        calculator = convertExpFromArabicToRoman(input);
      } else {
        calculator = convertExpFromRomanToArabic(input);
      }
      const newInput = calculator;
      setInput(newInput);
    }
  }, [state.isRomanMode]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDarkMode ? theme.dark : theme.light}>
        <GlobalStyles />
        <div className="App">
          <DarkModeControl />
          <Display ans={ans} input={input} setInput={setInput} />
          <ModeControl
            ans={ans}
            setAns={setAns}
            input={input}
            setInput={setInput}
          />
          <Panel input={input} setInput={setInput} ans={ans} setAns={setAns} />
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
