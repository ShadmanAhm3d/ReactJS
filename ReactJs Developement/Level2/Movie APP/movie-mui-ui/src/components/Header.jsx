import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { margin } from "@mui/system";

const Header = () => {
  return (
    <div className="containerHeader">
      <AppBar position="static" sx={{ backgroundColor: "Grey" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            MovieApp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
