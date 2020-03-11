import React, { Component } from "react";
import Header from "../../layouts/Header";
import { Grid, Paper } from "@material-ui/core";
import firebase from "../../Firebase/Firebase";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("issues");
    this.unsubscribe = null;
    this.state = {
      issues: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const issues = [];
    querySnapshot.forEach(doc => {
      const {
        pfi_tag,
        product,
        subject,
        support_article,
        troubleshoot_steps
      } = doc.data();
      issues.push({
        key: doc.id,
        doc, // DocumentSnapshot
        pfi_tag,
        product,
        subject,
        support_article,
        troubleshoot_steps
      });
    });
    this.setState({
      issues
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Paper>
              {this.state.issues.map(issue => (
                <div key={issue.key}>
                    <p>{issue.key}</p>
                  <p>{issue.pfi_tag}</p>
                  <p>{issue.product}</p>
                  <p>{issue.subject}</p>
                  <p>{issue.support_article}</p>
                  <p>{issue.troubleshoot_steps}</p>
                  <br></br>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
