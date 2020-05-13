import React from "react";
import "./App.css";
import Display from "./Component/Display/Display";
import Panel from "./Component/Panel/Panel";
import ModeControl from "./Component/ModeControl/ModeControl";
import DarkModeControl from "./Component/DarkModeControl/DarkModeControl";
import GlobalStateProvider from "./store/GloblaStateProvider";

export function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <DarkModeControl />
        <Display />
        <ModeControl />
        <Panel />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
