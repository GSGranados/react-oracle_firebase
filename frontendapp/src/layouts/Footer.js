import React, { Component } from "react";
import PropTypes from "prop-types";
//Bottom Navigation
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//Icons
import BugReportIcon from "@material-ui/icons/BugReport";
import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TimelineIcon from '@material-ui/icons/Timeline';

const styles = {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
  };

class Footer extends Component {
  state = {
    value: "issues"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        style={styles}
      >
        <BottomNavigationAction
          label="Issues"
          value="issues"
          icon={<BugReportIcon />}
        />
        <BottomNavigationAction
          label="Consults"
          value="consults"
          icon={<DescriptionIcon />}
        />
        <BottomNavigationAction
          label="Reports"
          value="reports"
          icon={<AssessmentIcon />}
        />
        <BottomNavigationAction
          label="Decision Tree"
          value="d-tree"
          icon={<TimelineIcon />}
        />
      </BottomNavigation>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default Footer;