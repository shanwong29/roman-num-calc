import React from "react";
import useGlobalState from "./useGlobalState";
import Context from "./context";

const GlobalStateProvider = ({ children }) => {
  return (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
    /*Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    Context.Provider accepts a value prop to be passed to consuming components that are descendants of this Provider. 
    One Provider can be connected to many consumers. */
  );
};

export default GlobalStateProvider;
