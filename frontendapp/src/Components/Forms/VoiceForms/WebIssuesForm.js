import React from "react";
import '../styleForms.css';
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const WebIssueForm = () => {
  const handleSubmitWeb = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const userAffected = e.target.elements.userAffected.value;
    const numberaffected = e.target.elements.numberaffected.value;
    const dateTime = e.target.elements.dateTime.value;
    const wVersion = e.target.elements.wVersion.value;
    const OSVersion = e.target.elements.OSVersion.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
          <strong>Username being affected:</strong> ${userAffected}<br>
          <strong>Number of affected users:</strong> ${numberaffected}<br>
          <strong>Date and time when the issue happened:</strong> ${dateTime}<br>
          <strong>Web Broswer Used and Version:</strong> ${wVersion}<br>
          <strong>Operating System Version:</strong> ${OSVersion}<br>
          <strong>Problem Summary:</strong> ${problemForm}<br>
          <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitWeb}>
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
        Affected User:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="userAffected"
        placeholder="user@domain.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Number of users affected:{" "}
      </label>
      <input
        className="inputForm"
        type="number"
        name="numberaffected"
        pattern="[0-9]*"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
       Date and Time when de issue happened:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="dateTime"
        placeholder="Wed, Mar 10th; 15:30 CST"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Web Browser version:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="wVersion"
        placeholder="Google Chrome 79.0.0.0"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        OS and Version:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="OSVersion"
        placeholder="Windows 10 Home"
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

export default WebIssueForm;
