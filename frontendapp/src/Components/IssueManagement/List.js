import React, { Component } from "react";
import Header from "../../layouts/Header";
import { Grid, Paper} from "@material-ui/core";
import firebase from "../../Firebase/Firebase";
import TableList from "./TableList";
import {Link} from 'react-router-dom';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default class List extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("issues");
    this.unsubscribe = null;
    this.state = {
      issues: []
    };
  }

  //GETTING ALL DATA FROM FIREBASE

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
            <Paper style={styles.Paper}>
              <TableList  issues={this.state.issues}></TableList>
              <Link to="/issues/create" className="btn btn-info">
                File a new Issue
              </Link>
            </Paper>
            
          </Grid>
        </Grid>
      </div>
    );
  }
}
