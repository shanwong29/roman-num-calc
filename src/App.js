import React, { useState, useEffect, useReducer } from "react";
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

import { createContext } from "react";

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

const initialState = {
  isDarkMode: false,
  name: "Shan",
};

export const Context = createContext(initialState);
// the arg in createContext fn is the data you want to pass though the app
//Creates a Context object. When React renders a component that subscribes
//to this Context object it will read the current context value from the closest
//matching Provider above it in the tree.

console.log("Created Context:", Context);
console.log("initialState", initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //useReducer return modified state and dispatch function
  const [mode, setMode] = useState("roman");
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");

  console.log("modified State", state);

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
    //Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    //Accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers.
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <DarkModeControl />
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

        <p>Hello, {!initialState.isDarkMode && `HELLO`}</p>
      </div>
    </Context.Provider>
  );
}

export default App;
