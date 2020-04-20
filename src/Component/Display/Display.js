import React from "react";

function Display({ input, ans, setInput }) {
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <p>{ans}</p>
    </>
  );
}

export default Display;
