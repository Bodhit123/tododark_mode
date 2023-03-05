import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

const themeObject = {
  light: {
    background: {
      default: "lightblue",
    },                                                   /*Don't use when you want back and white theme-->*/
  },

  dark: {
    background: {
      default: "darkblue",
    },
  },
};

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
      ...themeObject[mode],
    },
  });

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      mode,
      theme,
    }),
    [mode, theme]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
