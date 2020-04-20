import React from "react";

function Button({ children, setInput, input, setAns, ans }) {
  return (
    <button
      onClick={() => {
        if (ans) {
          setAns("");
          setInput(children);
        } else {
          setInput((input += children));
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;
