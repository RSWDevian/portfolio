import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gradient: {
      avatar: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      avatar?: string;
    };
  }
}

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0b0f19",
      paper: "#161f30",
    },
    primary: {
      main: "#a06b10",
      light: "rgba(36, 144, 168, 0.2)",
    },
    secondary: {
      main: "#f59e0b",
      light: "rgba(246, 196, 83, 0.3)",
    },
    gradient: {
      avatar:
        "linear-gradient(135deg, #a855f7 0%, #f59e0b 45%, #db2777 100%)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#94a3b8",
      disabled: "rgba(255, 255, 255, 0.4)",
    },
  },
  typography: {
    fontFamily: '"Fraunces", "General Sans", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 600, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
});

export default theme;
