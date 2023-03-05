import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TodoApp from "./TodoApp";
import { ColorModeContext } from "./store/index";
import { useContext } from "react";
import { Stack } from "@mui/material";

function App() {
  const { mode, toggleMode, theme } = useContext(ColorModeContext);

  console.log(mode);

  return (
    <>
      <Box className="main_div" sx={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 20,
            p: 3,
            position: "absolute",
          }}
        >
          <TodoApp />
          <Stack sx={{ position: "absolute", top: 20, left: 20 }}>
            {theme.palette.mode} mode
            <IconButton
              sx={{ ml: 1, mb: 1 }}
              color="inherit"
              onClick={toggleMode}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default App;
