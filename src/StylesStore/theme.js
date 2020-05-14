const black = "#18191A";
const lightGrey = "#eee8d5";
const white = "#fdf6e3";
const magenta = "#d33682";
const yellow = "#b58900";
const cyan = "#2aa198";
const green = "#859900";
const violet = "#6c71c4";

export const theme = {
  grey: "#93a1a1",

  light: {
    text: black,
    background: lightGrey,
    switchColor: violet,
  },
  dark: {
    text: white,
    background: black,
    switchColor: green,
  },

  romanStyle: {
    color: cyan,
  },

  arabicStyle: {
    color: yellow,
  },

  btnColor: {
    function: magenta,
  },

  fontSizes: {
    sm: "10px",
    md: "15px",
    lg: "25px",
  },

  breakpoints: {
    sm: "(max-width: 540px)",
    md: "(max-width: 800px)",
    lg: "(max-width: 960px)",
  },

  // red: "#e26d5c", "ff686b", da627d
};
