import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { lightGreen } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <AppBar position="sticky" styles={{ background: lightGreen }}>
        <Toolbar>
          <Link to="/" style={{textDecoration: "none", color: "white"}}>
            <Typography variant="h6" color="inherit">
              Oracle - TICA/RTC
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
