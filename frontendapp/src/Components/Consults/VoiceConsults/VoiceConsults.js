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

//Forms
import AdminIssueForm from "../../Forms/VoiceForms/AdminIssueForm";
import AudioQualityForm from "../../Forms/VoiceForms/AudioQualityForm";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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

  const handleSubmitAdminIssue = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const domainAdmin = e.target.elements.domainAdmin.value;
    const urlForm = e.target.elements.urlForm.value;
    const browserForm = e.target.elements.browserForm.value;
    const timeForm = e.target.elements.timeForm.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Domain Admin:</strong> ${domainAdmin}<br>
      <strong>URL Accessed:</strong> ${urlForm}<br>
      <strong>Browser User & Version:</strong> ${browserForm}<br>
      <strong>Time when the issue happened:</strong> ${timeForm}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  const handleSubmitAudioQuality = e => {
    e.preventDefault();
    const domainAffected = e.event.elements.domainAffectedQ.value;
    const gvNumber = e.event.elements.gvNumber.value;
    const usersAffected = e.event.elements.usersAffected.value;
    const dateTimeForm = e.event.elements.dateTimeForm.value;
    const clientForm = e.event.elements.clientForm.value;
    const otherNumber = e.event.elements.otherNumber.value;
    const callDirection = e.event.elements.callDirection.value;
    const callSamples = e.event.elements.callSamples.value;
    const mobileApp = e.event.elements.mobileApp.value;
    const webApp = e.event.elements.webApp.value;
    const wifiMobile = e.event.elements.wifiMobile.value;
    const portedNumber = e.event.elements.portedNumber.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Domain Admin:</strong> ${gvNumber}<br>
      <strong>URL Accessed:</strong> ${usersAffected}<br>
      <strong>Browser User & Version:</strong> ${dateTimeForm}<br>
      <strong>Time when the issue happened:</strong> ${clientForm}<br>
      <strong>Time when the issue happened:</strong> ${otherNumber}<br>
      <strong>Time when the issue happened:</strong> ${callDirection}<br>
      <strong>Time when the issue happened:</strong> ${callSamples}<br>
      <strong>Time when the issue happened:</strong> ${mobileApp}<br>
      <strong>Time when the issue happened:</strong> ${webApp}<br>
      <strong>Time when the issue happened:</strong> ${wifiMobile}<br>
      <strong>Time when the issue happened:</strong> ${portedNumber}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
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
                  <AdminIssueForm
                    handleSubmit={handleSubmitAdminIssue}
                  ></AdminIssueForm>
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
              <Typography className={classes.heading}>Audio Quality Issues</Typography>
              <Typography className={classes.secondaryHeading}>
                Can be used when end user is experimenting poor quality on calls or dropping calls
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item sm={12}>
                <Paper style={styles.Paper}>
                  <AudioQualityForm handleSubmitAudioQuality={handleSubmitAudioQuality}>
                  </AudioQualityForm>
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
                Advanced settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
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
              <Typography className={classes.heading}>Personal data</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </Grid>
    </div>
  );
};

export default VoiceConsults;
