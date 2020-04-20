import React from "react";
import Button from "../Button/Button";

function Panel({ mode, setInput, input, ans, setAns }) {
  let numBtns;
  if (mode === "roman") {
    numBtns = [`I`, `V`, `X`, `L`, `C`, `D`, `M`];
  } else {
    numBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  }

  numBtns = numBtns.map((el, i) => {
    return (
      <Button
        key={i}
        setInput={setInput}
        input={input}
        ans={ans}
        setAns={setAns}
      >
        {el}
      </Button>
    );
  });

  let method = [`+`, `-`, `*`, `/`];
  let methodButtons = method.map((el, i) => {
    return (
      <Button
        key={i}
        setInput={setInput}
        input={input}
        ans={ans}
        setAns={setAns}
      >
        {el}
      </Button>
    );
  });

  let cancelBtn = (
    <button
      onClick={() => {
        setInput("");
        setAns("");
      }}
    >
      cancel
    </button>
  );

  let equalBtn = (
    <button
      onClick={() => {
        //impletment calc logic
      }}
    >
      =
    </button>
  );

  return (
    <div>
      {numBtns}
      {cancelBtn}
      {equalBtn}
      {methodButtons}
    </div>
  );
}

export default Panel;
