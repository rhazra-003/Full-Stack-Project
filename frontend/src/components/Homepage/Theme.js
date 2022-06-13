import { red, green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#2b2b2b",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#000",
      main: "#f97242",
      dark: "#000",
      contrastText: "#fff"
    },
    info: {
      light: "#fff",
      main: "#fff",
      dark: "#f97242",
      contrastText: "#000"
    }
  },
  shape: {
    borderRadius: 2
  }
});

export default Theme;
