import React, { Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
//import firebase
import firebase from "../../Firebase/Firebase";
//Impport Icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
//Route management
import { Link } from "react-router-dom";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Grid } from "@material-ui/core";
//Styles
import "./IssueManagement.css";
import "../Forms/styleForms.css";
import "bootstrap/dist/css/bootstrap.css";
export default class TableList extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  //Filter function - takes the value of the input field and changes its state
  updateSearch(event) {
    event.preventDefault();
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {
    //Filter issues
    let filteredIssues = this.props.issues.filter(issue => {
      return (
        issue.case_number.indexOf(this.state.search) !== -1 ||
        issue.subject.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1 ||
        issue.pfi_tag.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1 ||
          issue.product.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
            -1
      );
    });


    return (
      <>
        <div>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <form>
              <div className="form-group">
              <label htmlFor="filterInput"> Search for an Issue: </label>
                <input
                  type="text"
                  name="filterInput"
                  onChange={this.updateSearch.bind(this)}
                  value={this.state.search}
                  style={{ paddingBottom: 10, marginBottom: 10 }}
                  className="filterInput form-control"
                  placeholder="Case number, PFI-TAG, Product or Subject"
                ></input>
                </div>
              </form>
            </Grid>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Case number</th>
                  <th scope="col">PFI - TAG</th>
                  <th scope="col">Product</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Support Article</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredIssues.map(issue => {
                  return (
                    <tr key={issue.key}>
                      <th scope="row">{issue.case_number}</th>
                      <td>{issue.pfi_tag}</td>
                      <td>{issue.product}</td>
                      <td>{issue.subject}</td>
                      <td>{issue.support_article}</td>
                      <td>
                        <Link
                          style={{ textDecoration: "none", color: "orange" }}
                          to={`/edit/${issue.key}`}
                        >
                          <EditIcon style={{ marginRight: 5 }}></EditIcon>
                        </Link>
                        <Link
                          to="/issues"
                          onClick={() => {
                            Swal.fire({
                              title: "Delete this issue?",
                              text:
                                "You won't be able to revert this, be wise!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!"
                            }).then(result => {
                              if (result.value) {
                                firebase
                                  .firestore()
                                  .collection("issues")
                                  .doc(issue.key)
                                  .delete()
                                  .then(() => {
                                    console.log("Issues successfully deleted!");
                                    this.props.history.push("/issues");
                                  })
                                  .catch(error => {
                                    console.error(
                                      "Error removing document: ",
                                      error
                                    );
                                  });
                                Swal.fire(
                                  "Deleted!",
                                  "Your Issue has been deleted.",
                                  "success"
                                );
                              }
                            });
                          }}
                        >
                          <DeleteIcon
                            style={{ marginRight: 5, color: "red" }}
                          ></DeleteIcon>
                        </Link>
                        <Link
                          to={`/issues/${issue.key}`}
                          style={{ textDecoration: "none", color: "blue" }}
                        >
                          <InfoIcon></InfoIcon>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Grid>
        </div>
      </>
    );
  }
}
