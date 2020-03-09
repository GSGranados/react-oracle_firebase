import React from "react";
//content-management
import Grid from "@material-ui/core/Grid";
//Router Components
import { Link } from "react-router-dom";

//import layouts css
import "../layouts/layouts.css";


const BottomNavigation = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <div style={{ textAlign: "center", padding: "15" }}>
            <Link to="/consults/voice" style={{ textDecoration: "none" }}>
              <button className="nav_button">Google Voice Consults</button>
            </Link>
            <Link to="/consults/meet" style={{ textDecoration: "none" }}>
            <button className="nav_button">Hangouts Meet Consults</button>
            </Link>
            <Link to="/consults/chat" style={{ textDecoration: "none" }}>
            <button className="nav_button">Hangouts Chat Consults</button>
            </Link>
            <Link to="/consults/" style={{ textDecoration: "none" }}>
            <button className="nav_button">Go back home</button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default BottomNavigation;
