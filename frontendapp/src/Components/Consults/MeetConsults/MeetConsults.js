import React from "react";
import Header from "../../../layouts/Header";

//Content Management
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//Expansion Panel
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AudioVideoForm from "../../Forms/MeetForms/AudioVideoForm";
import InCallChatIssues from "../../Forms/MeetForms/InCallChatIssues";
import IssueJoining from "../../Forms/MeetForms/IssuesJoining";
import RecordingIssues from "../../Forms/MeetForms/RecordingIssues";

//import navigation
import BottomNavigation from "../../../layouts/BottomNavigation";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

const MeetConsults = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Header></Header>

      <Grid container spacing={2}>
        <div
          className={classes.root}
          style={{ padding: 25, marginTop: 20, marginBottom: 20 }}
        >
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                Audio Video Media Issues during Meeting
              </Typography>
              <Typography className={classes.secondaryHeading}>
                This is a very complex consult but it is to determine if this
                behavior experienced by the customer is something that TSEs can
                address on their end or not (probably not).
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <AudioVideoForm></AudioVideoForm>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Meetings: In-Call Chat issues during meeting
              </Typography>
              <Typography className={classes.secondaryHeading}>
                We use this template when there are some users experiencing some
                issues with in-Call Chat and we need to identify the root cause.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <InCallChatIssues></InCallChatIssues>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                Issues joining a video Meeting
              </Typography>
              <Typography className={classes.secondaryHeading}>
                We use this consult template when there are some users having
                problems joining a Meeting (Meet ID not working, not letting
                them to join or to admit users).
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <IssueJoining></IssueJoining>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>
                Recording Issues / During or After the Meeting
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Use this consult templated when customer is facing some problems
                with the recording feature from Hangouts Meet
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <RecordingIssues></RecordingIssues>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Grid>
      <BottomNavigation></BottomNavigation>
    </div>
  );
};

export default MeetConsults;
