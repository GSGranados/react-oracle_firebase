import React from "react";
import "../styleForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const InCallChatIssues = () => {
  const handleSubmitInChat = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const meetID = e.target.elements.meetID.value;
    const meetHW = e.target.elements.meetHW.value;
    const usersAffected = e.target.elements.usersAffected.value;
    const dateTime = e.target.elements.dateTime.value;
    const devices = e.target.elements.devices.value;
    const browser = e.target.elements.browser.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Meet ID being affected:</strong> ${meetID}<br>
      <strong>CFM or HMK involved in the issue (optional):</strong> ${meetHW}<br>
      <strong>Users Affected (#):</strong> ${usersAffected}<br>
      <strong>Date & Time when the issue happened:</strong> ${dateTime}<br>
      <strong>Devices in-chat being affected:</strong> ${devices}<br>
      <strong>Broswer for troubleshooting:</strong> ${browser}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitInChat}>
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
        CFM or HMK serial number (Optional):{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="meetHW"
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
        Devices where in-chat call issue is present:{" "}
      </label>
      <input className="inputForm" type="text" name="devices" placeholder="iPhone7, Google Pixel 3"></input>
      <label className="labelForm" style={{ display: "block" }}>
        Browser Version for Troubleshooting:{" "}
      </label>
      <input className="inputForm" type="text" name="browser" placeholder="Google Chrome ver 79.0.0.0"></input>
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

export default InCallChatIssues;
