import React from "react";
import '../styleForms.css';
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const PlacingCallsForm = () => {
  const handleSubmitPlacingCalls = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const gvNumber = e.target.elements.gvNumber.value;
    const usersAffected = e.target.elements.usersAffected.value;
    const dateTimeForm = e.target.elements.dateTimeForm.value;
    const clientForm = e.target.elements.clientForm.value;
    const otherNumber = e.target.elements.otherNumber.value;
    const callDirection = e.target.elements.callDirection.value;
    const callSamples = e.target.elements.callSamples.value;
    const mobileApp = e.target.elements.mobileApp.value;
    const webApp = e.target.elements.webApp.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Google Voice Number:</strong> ${gvNumber}<br>
      <strong>Users Affected (#):</strong> ${usersAffected}<br>
      <strong>Date & Time when the issue happened:</strong> ${dateTimeForm}<br>
      <strong>Google Voice App that was used:</strong> ${clientForm}<br>
      <strong>Other Numbers involved in the issue:</strong> ${otherNumber}<br>
      <strong>Call Direction (GV-GV or non GV- GV):</strong> ${callDirection}<br>
      <strong>Call Samples:</strong> ${callSamples}<br>
      <strong>Version of the Mobile App (if it was used):</strong> ${mobileApp}<br>
      <strong>Version of the Browser and OS (if it was used):</strong> ${webApp}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
    console.log(domainAffected);
  };

  return (
    <form onSubmit={handleSubmitPlacingCalls}>
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
        Google Voice Phone:
      </label>
      <input
        className="inputForm"
        type="text"
        name="gvNumber"
        placeholder="+123456789"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Number of users affected:
      </label>
      <input
        className="inputForm"
        type="number"
        pattern="[0-9]*"
        name="usersAffected"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Date and Time of the issue:
      </label>
      <input
        className="inputForm"
        type="text"
        name="dateTimeForm"
        placeholder="Tue, Mar 5th; 10:00 AM GMT"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Google Voice Client:
      </label>
      <input
        className="inputForm"
        type="text"
        name="clientForm"
        placeholder="Google Voice Web App"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Other Number:
      </label>
      <input
        className="inputForm"
        type="text"
        name="otherNumber"
        placeholder="+123456789"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Call Direction:
      </label>
      <input
        className="inputForm"
        type="text"
        name="callDirection"
        placeholder="Between Google Voice Subscribers"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Call Samples:
      </label>
      <input
        className="inputForm"
        type="text"
        name="callSamples"
        placeholder="+123456789 at 10:00 AM CST; Tue, Mar 5th"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Mobile App Affected?
      </label>
      <input
        className="inputForm"
        type="text"
        name="mobileApp"
        placeholder="Version of the Mobile App (Request some feedback from customer and attach CASE #)"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Web App affected?
      </label>
      <input
        className="inputForm"
        type="text"
        name="webApp"
        placeholder="Web Browser version and OS version"
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

export default PlacingCallsForm;
