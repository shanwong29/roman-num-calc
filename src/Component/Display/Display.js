import React, { useContext } from "react";
import Context from "../../store/context";

function Display() {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <input
        type="text"
        value={state.input}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch({ type: "SET_INPUT", newValue: e.target.value });
        }}
      ></input>
      <p>
        {state.ans} {state.errorMsg}
      </p>
    </>
  );
}

export default Display;
