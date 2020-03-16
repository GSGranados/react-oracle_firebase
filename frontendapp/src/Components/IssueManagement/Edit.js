import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import firebase from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
//import styles
import "../Forms/styleForms.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../layouts/Header";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default class Edit extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("issues");
    this.state = {
      case_number: "",
      pfi_tag: "",
      product: "",
      subject: "",
      support_article: "",
      troubleshoot_steps: ""
    };
  }
  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("issues")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        const issue = doc.data();
        this.setState({
          key: doc.id,
          case_number: issue.case_number,
          pfi_tag: issue.pfi_tag,
          product: issue.product,
          subject: issue.subject,
          support_article: issue.support_article,
          troubleshoot_steps: issue.troubleshoot_steps
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ issue: state });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      case_number,
      pfi_tag,
      product,
      subject,
      support_article,
      troubleshoot_steps
    } = this.state;

    const updateRef = firebase
      .firestore()
      .collection("issues")
      .doc(this.state.key);
    updateRef
      .set({
        case_number,
        pfi_tag,
        product,
        subject,
        support_article,
        troubleshoot_steps
      })
      .then(docRef => {
        this.setState({
          case_number: null,
          pfi_tag: "",
          product: "",
          subject: "",
          support_article: "",
          troubleshoot_steps: ""
        });
        this.props.history.push(`/issues/${this.props.match.params.id}`);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
      Swal.fire({
        icon: "info",
        title: "Issue updated!",
      });
  };

  render() {
    return (
      <>
        <Header></Header>
        <div>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <Paper style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Edit Issue : {this.state.subject}</h3>
                  </div>
                  <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group">
                        <label htmlFor="title">Case number:</label>
                        <input
                          type="number"
                          className="form-control"
                          name="case_number"
                          value={this.state.case_number}
                          onChange={this.onChange}
                          placeholder="2230045"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pfi_tag">PFI - Tag:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pfi_tag"
                          value={this.state.pfi_tag}
                          onChange={this.onChange}
                          placeholder="PFI-12345678"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="product">Product Involved:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="product"
                          value={this.state.product}
                          onChange={this.onChange}
                          placeholder="Google Voice"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Issue Subject:</label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          value={this.state.subject}
                          onChange={this.onChange}
                          placeholder="Google Voice is Dropping Calls"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="support_article">
                          Help Center Article related:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="support_article"
                          value={this.state.support_article}
                          onChange={this.onChange}
                          placeholder="https://support.google.com/a/answer/12345678"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="troubleshoot_steps">
                          Troubleshoot Steps Taken:
                        </label>
                        <textarea
                          className="form-control"
                          name="troubleshoot_steps"
                          onChange={this.onChange}
                          placeholder="Incognito window tried and behavior still persists"
                          value={this.state.troubleshoot_steps}
                          cols="80"
                          rows="3"
                        >
                        </textarea>
                      </div>
                      <button
                        style={{ marginRight: 10 }}
                        type="submit"
                        className="btn btn-warning"
                      >
                        Update Issue
                      </button>
                      <Link to="/issues" className="btn btn-primary">
                        Get back to Issue List
                      </Link>
                    </form>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}
