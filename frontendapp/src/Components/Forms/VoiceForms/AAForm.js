import React from "react";
import "./voiceForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const AAForm = () => {
  const handleSubmitAA = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const aANumber = e.target.elements.aANumber.value;
    const callerNumber = e.target.elements.callerNumber.value;
    const affectedUser = e.target.elements.affectedUser.value;
    const problemType = e.target.elements.problemType.value;
    const dateTime = e.target.elements.dateTime.value;
    const gvClient = e.target.elements.gvClient.value;
    const menuConfiguration = e.target.elements.menuConfiguration.value;
    const callerConfiguration = e.target.elements.callerConfiguration.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Google Voice Number:</strong> ${aANumber}<br>
      <strong>Users Affected (#):</strong> ${callerNumber}<br>
      <strong>Date & Time when the issue happened:</strong> ${affectedUser}<br>
      <strong>Google Voice App that was used:</strong> ${problemType}<br>
      <strong>Other Numbers involved in the issue:</strong> ${dateTime}<br>
      <strong>Call Direction (GV-GV or non GV- GV):</strong> ${gvClient}<br>
      <strong>Call Samples:</strong> ${menuConfiguration}<br>
      <strong>Version of the Mobile App (if it was used):</strong> ${callerConfiguration}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
    console.log(domainAffected);
  };

  return (
    <form onSubmit={handleSubmitAA}>
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
        AA Phone Number:
      </label>
      <input
        className="inputForm"
        type="number"
        pattern="[0-9]*"
        name="aANumber"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Caller # and origin (optional):
      </label>
      <input
        className="inputForm"
        type="text"
        name="callerNumber"
        placeholder="+12354645 origin (carrier or another GV Landline)"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Users Affected #:
      </label>
      <input
        className="inputForm"
        type="number"
        pattern="[0-9]*"
        name="affectedUser"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Problem Type:
      </label>
      <input
        className="inputForm"
        type="text"
        name="problemType"
        placeholder="Menu Navigation | Transfer & Voicemail"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Date and Time when issue was experienced:
      </label>
      <input
        className="inputForm"
        type="text"
        name="dateTime"
        placeholder="Wed, Feb 8th 21:00 PM GMT "
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Google Voice Client:
      </label>
      <input
        className="inputForm"
        type="text"
        name="gvClient"
        placeholder="Google Voice web app"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Other Phone # (optional):
      </label>
      <input
        className="inputForm"
        type="number"
        pattern="[0-9]*"
        name="otherNumber"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Menu Configuration Issue Description:
      </label>
      <input
        className="inputForm"
        type="text"
        name="menuConfiguration"
        placeholder="Key Menu With all transfer the caller to a GV number"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Menu Navigation for caller issue:
      </label>
      <input
        className="inputForm"
        type="text"
        name="callerConfiguration"
        placeholder="Pressed Key 1 went to the additional message and got transferred to a GV number."
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

export default AAForm;
