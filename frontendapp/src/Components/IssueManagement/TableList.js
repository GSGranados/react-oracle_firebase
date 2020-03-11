import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
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
            { props.issues.map(issue => {
            return(
            <tr>
              <th scope="row">{issue.key}</th>
            <td>{issue.pfi_tag}</td>
            <td>{issue.product}</td>
            <td>{issue.subject}</td>
            <td>{issue.support_article}</td>
            <td><EditIcon style={{marginRight:5}}></EditIcon> <DeleteIcon></DeleteIcon> </td>
            </tr>
            )})
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
