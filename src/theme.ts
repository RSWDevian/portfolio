import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b0f14",
      paper: "#0f1522",
    },
    primary: { main: "#7de1f7" },
    secondary: { main: "#f6c453" },
  },
  typography: {
    fontFamily: "\"Fraunces\", \"General Sans\", system-ui, -apple-system, sans-serif",
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 600, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
});

export default theme;