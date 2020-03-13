import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import { Grid, Paper } from "@material-ui/core";

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: {},
      key: ""
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("issues")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          issue: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete = () => {
    firebase
      .firestore()
      .collection("issues")
      .doc(this.state.key)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/issues");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Paper style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>
                    <Link to="/issues">RTC Issues List</Link>
                  </h4>
                  <h3 className="panel-title">{this.state.issue.subject}</h3>
                </div>
                <div className="panel-body">
                  <dl>
                    <dt>PFI Tag used:</dt>
                    <dd>{this.state.issue.pfi_tag}</dd>
                    <dt>Product:</dt>
                    <dd>{this.state.issue.product}</dd>
                    <dt>Support Article related:</dt>
                    <dd>{this.state.issue.support_article}</dd>
                    <dt>Troubleshoot steps taken:</dt>
                    <dd>{this.state.issue.troubleshoot_steps}</dd>
                  </dl>
                  <Link
                    to={`/edit/${this.state.key}`}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                  &nbsp;
                  <button onClick={this.delete} className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
