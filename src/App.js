import React from "react";
import "./App.css";
import Display from "./Component/Display/Display";
import Panel from "./Component/Panel/Panel";
import ModeControl from "./Component/ModeControl/ModeControl";
import DarkModeControl from "./Component/DarkModeControl/DarkModeControl";

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

  console.log(state.ans, state.input);

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
