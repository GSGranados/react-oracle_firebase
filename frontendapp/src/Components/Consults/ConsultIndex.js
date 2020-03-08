import React, { Component } from "react";
//Layouts import
import Header from "../../layouts/Header";
//content-management
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//Icons
import ChatIcon from "@material-ui/icons/Chat";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import DescriptionIcon from "@material-ui/icons/Description";
//Card Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "./consultIndex.css";
//Button
import Button from "@material-ui/core/Button";
//Fonts-typography
import Typography from "@material-ui/core/Typography";
//Router Imports
import { Link } from "react-router-dom";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  },

  Icon: {
    fontSize: 200
  }
};

class ConsultIndex extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div style={{ padding: 25, marginTop: 40, marginBottom: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={4}>
              <Paper style={styles.Paper}>
                <Card>
                  <CardActionArea>
                    <div className="bugIcon meetIcon">
                      <WhatsAppIcon style={styles.Icon}></WhatsAppIcon>
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Google Voice Consult Templates
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        From Calling issues, Text Messages to not being able to port a freaking number!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link
                      to="/consults/voice"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<DescriptionIcon />}
                        style={{ marginLeft: 10, marginBottom: 5 }}
                      >
                        Voice Consults
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
                    <div className="bugIcon meetIcon">
                      <VoiceChatIcon style={styles.Icon}></VoiceChatIcon>
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Hangouts Meet Consult Templates
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                       Use these when you do not know what is failing (most of the time).
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link
                      to="/consults/meet"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<DescriptionIcon />}
                        style={{ marginLeft: 10, marginBottom: 5 }}
                      >
                        Meet Consults
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
                    <div className="bugIcon meetIcon">
                      <ChatIcon style={styles.Icon}></ChatIcon>
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Hangouts Chat Consult Templates
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        And Chat Consults, pretty handy, but nobody uses them a lot.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link
                      to="/consults/chat"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<DescriptionIcon />}
                        style={{ marginLeft: 10, marginBottom: 5 }}
                      >
                        Chat Consults
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default ConsultIndex;
