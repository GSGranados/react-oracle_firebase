import React from "react";
import Header from "../../../layouts/Header";
import BottomNavigation from "../../../layouts/BottomNavigation";

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

//Forms
import AdminIssueForm from "../../Forms/VoiceForms/AdminIssueForm";
import AudioQualityForm from "../../Forms/VoiceForms/AudioQualityForm";
import DeskPhoneForm from "../../Forms/VoiceForms/DeskPhoneForm";
import FormalComplaintForm from "../../Forms/VoiceForms/FormalComplaintForm";
import AAForm from "../../Forms/VoiceForms/AAForm";
import MobileIssueForm from "../../Forms/VoiceForms/MobileIssueForm";
import NumberPortingIssue from "../../Forms/VoiceForms/NumberPortingIssue";
import PlacingCallsForm from "../../Forms/VoiceForms/PlacingCallsForm";
import TextMessagingIssues from "../../Forms/VoiceForms/TextMessagingIssues";
import ServiceAddressIssue from "../../Forms/VoiceForms/ServiceAddressIssue";
import WebIssueForm from "../../Forms/VoiceForms/WebIssuesForm";

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

const VoiceConsults = () => {
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
                Admin Issue Consult
              </Typography>
              <Typography className={classes.secondaryHeading}>
                This consult can be used when some Admins are having problems
                with Service Management Settings (unexpected behaviors).
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <AdminIssueForm></AdminIssueForm>
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
                Audio Quality Issues
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Can be used when end user is experimenting poor quality on calls
                or dropping calls
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <AudioQualityForm></AudioQualityForm>
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
                Deskphone Issues
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Report problems related to a Deskphone or request a password
                from one of them.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <DeskPhoneForm></DeskPhoneForm>
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
                Formal Complaint
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Report some complaints about the product usage, capabilities or
                limitations.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <FormalComplaintForm></FormalComplaintForm>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5h-content"
              id="panel5bh-header"
            >
              <Typography className={classes.heading}>
                Auto Attendant Issues
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Report problems related to Auto Attendants / Calls placed to an
                Auto Attendant.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <AAForm></AAForm>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6h-content"
              id="panel6bh-header"
            >
              <Typography className={classes.heading}>
                Mobile Issues (Voice Mail Playback)
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Report problems related to Google Voice Mobile App.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <MobileIssueForm></MobileIssueForm>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7h-content"
              id="panel7bh-header"
            >
              <Typography className={classes.heading}>
                Number Porting Issue
              </Typography>
              <Typography className={classes.secondaryHeading}>
                We use this template when there are orders who are stuck or are
                giving errors when we trying to perform the Port Process.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <NumberPortingIssue></NumberPortingIssue>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8h-content"
              id="panel8bh-header"
            >
              <Typography className={classes.heading}>
                Placing Calls, Receiving or Forwarding
              </Typography>
              <Typography className={classes.secondaryHeading}>
                We use this template when there are issues making calls from one
                endpoint to another.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <PlacingCallsForm></PlacingCallsForm>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9h-content"
              id="panel9bh-header"
            >
              <Typography className={classes.heading}>
                Text Messaging Issues
              </Typography>
              <Typography className={classes.secondaryHeading}>
                We use this template when there are issues sending text messages
                from one endpoint to another.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <TextMessagingIssues></TextMessagingIssues>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10h-content"
              id="panel10bh-header"
            >
              <Typography className={classes.heading}>
                Service Address Verification Issues
              </Typography>
              <Typography className={classes.secondaryHeading}>
                We use this template when there are issues verifying service
                addresses provided by users in the Admin Console.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <ServiceAddressIssue></ServiceAddressIssue>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel11h-content"
              id="panel11bh-header"
            >
              <Typography className={classes.heading}>
                Web App Desktop Issues / Voicemail Playback
              </Typography>
              <Typography className={classes.secondaryHeading}>
              Report problems related to Google Voice Web App
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <WebIssueForm></WebIssueForm>
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

export default VoiceConsults;
