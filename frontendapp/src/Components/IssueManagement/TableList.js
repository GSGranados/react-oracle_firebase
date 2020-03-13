import React from "react";
import "bootstrap/dist/css/bootstrap.css";
//Impport Icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
//Route management
import { Link } from "react-router-dom";

const TableList = props => {
  console.log(props.issues);
  return (
    <>
      <div>
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
            {props.issues.map(issue => {
              return (
                <tr key={issue.key}>
                  <th scope="row">{issue.key}</th>
                  <td>{issue.pfi_tag}</td>
                  <td>{issue.product}</td>
                  <td>{issue.subject}</td>
                  <td>{issue.support_article}</td>
                  <td>
                    <EditIcon style={{ marginRight: 5 }}></EditIcon>
                    <DeleteIcon style={{ marginRight: 5 }}></DeleteIcon>
                    <Link
                      to={`/issues/${issue.key}`}
                      style={{ textDecoration: "none" }}
                    >
                      <InfoIcon></InfoIcon>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
