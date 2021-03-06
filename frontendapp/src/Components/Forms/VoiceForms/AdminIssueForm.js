import React from "react";
import "../styleForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const AdminIssueForm = () => {
  const handleSubmitAdminIssue = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const domainAdmin = e.target.elements.domainAdmin.value;
    const urlForm = e.target.elements.urlForm.value;
    const browserForm = e.target.elements.browserForm.value;
    const timeForm = e.target.elements.timeForm.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Domain Admin:</strong> ${domainAdmin}<br>
      <strong>URL Accessed:</strong> ${urlForm}<br>
      <strong>Browser User & Version:</strong> ${browserForm}<br>
      <strong>Time when the issue happened:</strong> ${timeForm}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitAdminIssue}>
      <label className="labelForm" style={{ display: "block" }}>
        Affected Domain:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="domainAffected"
        placeholder="exampledomain.com"
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
      <button className="form_button" type="submit">
        Create Consult
      </button>
    </form>
  );
};

export default AdminIssueForm;
