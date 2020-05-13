import React, { useContext } from "react";
import Context from "../../store/context";

function Display() {
  const { state } = useContext(Context);

  return (
    <>
      <p>{state.input}</p>
      <p>
        {state.ans} {state.errorMsg}
      </p>
    </>
  );
}

export default Display;
