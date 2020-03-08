import React from "react";
import "../styleForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const RecordingIssues = () => {
  const handleSubmitRecording = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const meetID = e.target.elements.meetID.value;
    const recording = e.target.elements.recording.value;
    const usersAffected = e.target.elements.usersAffected.value;
    const driveLink = e.target.elements.driveLink.value;
    const trash = e.target.elements.trash.value;
    const offset = e.target.elements.offset.value;
    const stopOffset = e.target.elements.stopOffset.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Meet ID and CFM or HMK serial number:</strong> ${meetID}<br>
      <strong>User who started the recording:</strong> ${recording}<br>
      <strong>Users Affected (organizer or participants):</strong> ${usersAffected}<br>
      <strong>Drive Link of the Recording:</strong> ${driveLink}<br>
      <strong>Is the Recording Folder in trash?</strong> ${trash}<br>
      <strong>Video is Offset (mm:ss) at:</strong> ${offset}<br>
      <strong>The offset stopped at:</strong> ${stopOffset}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitRecording}>
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
        Affected Meeting ID:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="meetID"
        placeholder="meet.google.com/asd-ddd-fff"
      ></input>
       <label className="labelForm" style={{ display: "block" }}>
        User who started the recording:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="recording"
        placeholder="recorder@domain.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Users being affected and some examples (organizer and user who cannot reproduce the recording):{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="usersAffected"
        placeholder="user1@domain.com; screenshot1 and user2@domain.com; screenshot 2"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Drive Link of the Meet Recorded:
      </label>
      <input
        className="inputForm"
        type="text"
        name="driveLink"
        placeholder="drive.google.com/vfndjkfkdffnvk"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Is the recording folder in the Drive Trash? 
      </label>
      <input className="inputForm" type="text" name="trash"></input>
      <label className="labelForm" style={{ display: "block" }}>
        Issues Start offset - Provide the exact time (mm:ss) when this appears in the recording:{" "}
      </label>
      <input className="inputForm" type="text" name="offset" placeholder="Min 35:10"></input>
      <label className="labelForm" style={{ display: "block" }}>
        Time when the Offset stopped:
      </label>
      <input
        className="inputForm"
        type="text"
        name="stopOffset"
        placeholder="Min 45:10"
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
        Additional Info (HAR Files and Screenshots or Video of the Meeting):{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="harScreenForm"
        placeholder="googleplex.com/kdnfkdnfkjdvk.png"
      ></input>
      <button type="submit" className="form_button">
        Create Consult
      </button>
    </form>
  );
};

export default RecordingIssues;
