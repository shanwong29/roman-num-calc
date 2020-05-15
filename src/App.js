import React from "react";
import * as Styled from "./App.styles.js";
import Display from "./Component/Display/Display";
import Panel from "./Component/Panel/Panel";
import NumModeSwitch from "./Component/NumModeSwitch/NumModeSwitch";
import DarkModeSwitch from "./Component/DarkModeSwitch/DarkModeSwitch";
import GlobalStateProvider from "./store/GloblaStateProvider";

export function App() {
  return (
    <GlobalStateProvider>
      <Styled.AppWrapper>
        <DarkModeSwitch />
        <Styled.CalcWrapper>
          <Display />
          <NumModeSwitch />
          <Panel />
        </Styled.CalcWrapper>
      </Styled.AppWrapper>
    </GlobalStateProvider>
  );
}

export default App;
