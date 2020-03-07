import React from "react";
import "./voiceForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const FormalComplaintForm = () => {
  const handleSubmitDeskPhone = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const userName = e.target.elements.userName.value;
    const phoneNumber = e.target.elements.phoneNumber.value;
    const countryUser = e.target.elements.countryUser.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
          <strong>Username being affected:</strong> ${userName}<br>
          <strong>User's Phone Number:</strong> ${phoneNumber}<br>
          <strong>Country:</strong> ${countryUser}<br>
          <strong>Problem Summary:</strong> ${problemForm}<br>
          <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitDeskPhone}>
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
        Affected Username:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="userName"
        placeholder="user@domain.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Phone Number of that User:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="phoneNumber"
        placeholder="+123456789"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Country of the User:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="countryUser"
        placeholder="United States"
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

export default FormalComplaintForm;
