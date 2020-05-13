import React from "react";
import useGlobalState from "./useGlobalState";
import Context from "./context";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../StylesStore/GlobalStyles";
import { theme } from "../StylesStore/theme";

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useGlobalState();
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDarkMode ? theme.dark : theme.light}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Context.Provider>
    /*Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    Context.Provider accepts a value prop to be passed to consuming components that are descendants of this Provider. 
    One Provider can be connected to many consumers. */
  );
};

export default GlobalStateProvider;
