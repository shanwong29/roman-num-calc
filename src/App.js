import React from "react";
import * as Styled from "./App.styles.js";
import Display from "./Component/Display/Display";
import Panel from "./Component/Panel/Panel";
import ModeControl from "./Component/ModeControl/ModeControl";
import DarkModeControl from "./Component/DarkModeControl/DarkModeControl";
import GlobalStateProvider from "./store/GloblaStateProvider";

export function App() {
  return (
    <GlobalStateProvider>
      <Styled.AppWrapper>
        <Styled.NavWrapper>
          <DarkModeControl />
        </Styled.NavWrapper>
        <Styled.CalcWrapper>
          <Display />
          <ModeControl />
          <Panel />
        </Styled.CalcWrapper>
      </Styled.AppWrapper>
    </GlobalStateProvider>
  );
}

export default App;
