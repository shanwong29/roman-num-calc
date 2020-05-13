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
      <Styled.App className="App">
        <DarkModeControl />
        <Display />
        <ModeControl />
        <Panel />
      </Styled.App>
    </GlobalStateProvider>
  );
}

export default App;
