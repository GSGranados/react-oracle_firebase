import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { lightGreen } from "@material-ui/core/colors";

const Header = () => {
  return (
    <div>
      <AppBar position="sticky" styles = {{ background : lightGreen}}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Oracle - TICA/RTC
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
