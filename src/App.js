import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./Component/Display/Display";
import Panel from "./Component/Panel/Panel";
import ModeControl from "./Component/ModeControl/ModeControl";
import {
  convertFromRomanToArabic,
  convertFromArabicToRoman,
  convertExpFromArabicToRoman,
  convertExpFromRomanToArabic,
} from "./Logic/converterService";

function App() {
  const [mode, setMode] = useState("roman");
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");

  useEffect(() => {
    let calculator;
    if (ans) {
      if (mode === "roman") {
        calculator = convertFromArabicToRoman(ans);
      } else {
        calculator = convertFromRomanToArabic(ans);
      }

      const newAns = calculator;
      setAns(newAns);
    }

    if (input) {
      if (mode === "roman") {
        calculator = convertExpFromArabicToRoman(input);
      } else {
        calculator = convertExpFromRomanToArabic(input);
      }
      const newInput = calculator;
      setInput(newInput);
    }
  }, [mode]);

  return (
    <div className="App">
      <Display ans={ans} input={input} setInput={setInput} />
      <ModeControl
        setMode={setMode}
        mode={mode}
        ans={ans}
        setAns={setAns}
        input={input}
        setInput={setInput}
      />
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
