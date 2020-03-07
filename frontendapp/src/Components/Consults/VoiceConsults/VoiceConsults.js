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
import AudioQualityForm from '../../Forms/VoiceForms/AudioQualityForm';

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

const  VoiceConsults = () => {
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
                  <AdminIssueForm
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
                  <AudioQualityForm>
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