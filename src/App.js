import React, { useState } from "react";
import "./App.css";
import Display from "./Component/Display/Display";
import Panel from "./Component/Panel/Panel";

function App() {
  const [mode, setMode] = useState("roman");
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");

  return (
    <div className="App">
      <Display ans={ans} input={input} setInput={setInput} />
      <Panel
        mode={mode}
        setMode={setMode}
        input={input}
        setInput={setInput}
        ans={ans}
        setAns={setAns}
      />
    </div>
  );
}

export default App;
