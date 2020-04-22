import React from "react";

const Button = ({ children, onClickFn }) => {
  return <button onClick={onClickFn}>{children}</button>;
};

export default Button;
