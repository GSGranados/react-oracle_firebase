import React from "react";
import "./voiceForms.css";
const AdminIssueForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label className="labelForm" style={{ display: "block" }}>
        Affected Domain:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="domainAffected"
        placeholder="example@domain.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Domain Admin:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="domainAdmin"
        placeholder="admin@domain.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        URL:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="urlForm"
        placeholder="admin.google.com/mail"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Browser Type and version:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="browserForm"
        placeholder="Google Chrome ver 79.0.0.15"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Time Frame when Issue Occurred:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="timeForm"
        placeholder="9PM - 10 PM CST"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Problem Description:{" "}
      </label>
      <textarea
        className="inputForm textAreaForm"
        type="text"
        name="problemForm"
        placeholder="admin.google.com/mail"
      ></textarea>
      <label className="labelForm" style={{ display: "block" }}>
        Additional Info (HAR Files and Screenshots):{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="harScreenForm"
        placeholder="googleplex.com/kdnfkdnfkjdvk.png"
      ></input>
      <button className="form_button" type="submit">Create Consult</button>
    </form>
  );
};

export default AdminIssueForm;
