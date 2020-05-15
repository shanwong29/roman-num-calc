const black = "#18191A";
const grey = "#93a1a1";
const lightGrey = "#eee8d5";
const white = "#fdf6e3";
const magenta = "#d33682";
const yellow = "#b58900";
const cyan = "#2aa198";
const violet = "#6c71c4";
const transparantGrey = "rgba(147, 161, 161, 0.4)";

export const theme = {
  baseColor: grey,

  light: {
    text: black,
    background: lightGrey,
    switchColor: violet,
  },
  dark: {
    text: white,
    background: black,
    switchColor: white,
  },

  romanStyle: {
    color: yellow,
  },

  arabicStyle: {
    color: cyan,
  },

  btnColor: {
    function: magenta,
    focus: transparantGrey,
  },

  btnSize: {
    sm: "18vw",
    default: "68px",
  },

  breakpoints: {
    sm: "(max-width: 540px)",
    // md: "(max-width: 800px)",
    // lg: "(max-width: 960px)",  didn't use
  },
};
