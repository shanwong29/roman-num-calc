import { createContext } from "react";

const Context = createContext({});
// the arg in createContext fn is the initial-data you want to pass though the app
/* Creates a Context object. When React renders a component that subscribes to this Context object 
it will read the current context value from the closest matching Provider above it in the tree. */

export default Context;
