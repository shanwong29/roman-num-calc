import React, { useContext } from "react";
import Context from "../../store/context";

function Display() {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <input
        type="text"
        value={state.input}
        onChange={(e) =>
          dispatch({ type: "ADD_INPUT", valueToBeAdded: e.target.value })
        }
      ></input>
      <p>{state.ans}</p>
    </>
  );
}

export default Display;
