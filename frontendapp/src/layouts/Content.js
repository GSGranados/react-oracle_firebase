import React from "react";
//content-management
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//Icons
import BugReportIcon from "@material-ui/icons/BugReport";
import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";
//Card Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./layouts.css";
//Button
import Button from "@material-ui/core/Button";
//Fonts-typography
import Typography from "@material-ui/core/Typography";
//Router-dom imports
import { Link } from "react-router-dom";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },

  Icon: {
    fontSize: 200,
    fill: "lightGreen"
  },
  Icon2: {
    fontSize: 200,
    fill: "lightBlue"
  },
  Icon3: {
    fontSize: 200,
    fill: "Orange"
  }
};

const Content = () => {
  return (
    <div style={{ padding: 25, marginTop: 20, marginBottom: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <Paper style={styles.Paper}>
            <Card>
              <CardActionArea>
                <div className="bugIcon issues">
                  <BugReportIcon style={styles.Icon}></BugReportIcon>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    RTC Issues
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    In this section you will be able to report every type of
                    issue that you experience as you stay in the magnificent RTC
                    POD, better getting familiarized with consults...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="secondary">
                  File a New Issue
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper style={styles.Paper}>
            <Card>
              <CardActionArea>
                <div className="bugIcon consults">
                  <DescriptionIcon style={styles.Icon2}></DescriptionIcon>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Consult Generator
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Maybe there is a lot of consults and it is a pain in the
                    neck to go check on Support U between all the features. It
                    is better to have them in just one place! Better be cautious.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/consults" style={{ textDecoration: 'none' }}>
                  <Button size="medium" color="primary">
                    Create a new Consult
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper style={styles.Paper}>
            <Card>
              <CardActionArea>
                <div className="bugIcon reports">
                  <AssessmentIcon style={styles.Icon3}></AssessmentIcon>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Reports
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    It is better to have a track of all weekly issues to see how
                    to address them properly and incress our chances to get a
                    good CES! So it's good to keep an eye on them.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="inherit">
                  Check some Reports
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
