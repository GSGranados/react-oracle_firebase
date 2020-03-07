import React from "react";
import "../styleForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const AudioVideoForm = () => {
  const handleSubmitAV = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const meetID = e.target.elements.meetID.value;
    const usersAffected = e.target.elements.usersAffected.value;
    const dateTime = e.target.elements.dateTime.value;
    const testRTC = e.target.elements.testRTC.value;
    const hangLogs = e.target.elements.hangLogs.value;
    const audioDump = e.target.elements.audioDump.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Meet ID and CFM or HMK serial number:</strong> ${meetID}<br>
      <strong>Users Affected (#):</strong> ${usersAffected}<br>
      <strong>Date & Time when the issue happened:</strong> ${dateTime}<br>
      <strong>Logs from Test WebRTC tool:</strong> ${testRTC}<br>
      <strong>Hangouts Meet Logs:</strong> ${hangLogs}<br>
      <strong>Audio Dump Files:</strong> ${audioDump}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitAV}>
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
        Affected Meeting ID, CFM or HMK serial number:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="meetID"
        placeholder="meet.google.com/asd-ddd-fff"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Number of users being affected and some examples:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="usersAffected"
        placeholder="user1@domain.com; screenshot1 and user2@domain.com; screenshot 2"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Date and time when the customer first experienced the issue:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="dateTime"
        placeholder="Thu, May the 25th at 9:00 AM CST"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Test WebRTC.org output (attach here the link of the results of the
        test):{" "}
      </label>
      <input className="inputForm" type="text" name="testRTC"></input>
      <label className="labelForm" style={{ display: "block" }}>
        Hangouts Logs (from the Meet Quality Tool or Manual logs from the
        customer):{" "}
      </label>
      <input className="inputForm" type="text" name="hangLogs"></input>
      <label className="labelForm" style={{ display: "block" }}>
        Audio Dump files, access at chrome://webrtc-internals/{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="audioDump"
        placeholder="Please tell the customer to access on a new tab at https://appr.tc/"
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
      <button type="submit" className="form_button">
        Create Consult
      </button>
    </form>
  );
};

export default AudioVideoForm;
