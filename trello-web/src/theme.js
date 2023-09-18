import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#b2d8d8",
          secondary: "#DC4D01",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#00FFFF",
          secondary: "#FFA500",
        },
      },
    },
  },
});

export default theme;
