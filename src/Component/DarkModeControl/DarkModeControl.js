import React, { useContext } from "react";
import Context from "../../store/context";

/* useContext 
==> Accepts a context object (the value returned from React.createContext) and 
returns the current context value for that context. 
The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree. */

const DarkModeControl = () => {
  const { state, dispatch } = useContext(Context);
  console.log(state);
  return (
    <div>
      isDarkMode: {state.isDarkMode && `true`} name: {state.name}
      <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
        TOGGLE Dark Mode
      </button>
      <button onClick={() => dispatch({ type: "CHANGE_NAME" })}>
        Change Name
      </button>
    </div>
  );
};

export default DarkModeControl;
