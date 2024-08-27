import { extendTheme } from "@chakra-ui/react";

export const Colors = {
  primary: "#5D5FEF",
  secondary: "#4495D1",
  success: "#E9FEE7",
  warning: "#FEF9E3",
  light_blue: "#EFFCFF",
  light_red: "#FFF3EA",
  accent: "#DCF8B8",
  darkAccent: "#458D35",
  dark: "#344054",
  light: "#FFFFFF",
  light_gray: "#EAECF0",
};

export const theme = extendTheme({
  colors: {
    brand: Colors,
  },
});
