import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "../App";

const Header = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", flexGrow: 1 }}
        >
          Inspirational Homepage
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
