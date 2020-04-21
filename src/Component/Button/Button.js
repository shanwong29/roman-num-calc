import React from "react";

const Button = ({ children, handleInput }) => {
  return <button onClick={() => handleInput(children)}>{children}</button>;
};

export default Button;
