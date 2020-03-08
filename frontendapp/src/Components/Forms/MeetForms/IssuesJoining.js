import React from "react";
import "../styleForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const IssueJoining = () => {
  const handleSubmitJoining = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const meetID = e.target.elements.meetID.value;
    const usersAffected = e.target.elements.usersAffected.value;
    const dateTime = e.target.elements.dateTime.value;
    const created = e.target.elements.created.value;
    const accessed = e.target.elements.accessed.value;
    const calendarInfo = e.target.elements.calendarInfo.value;
    const timeSchedule = e.target.elements.timeSchedule.value;
    const timeFail = e.target.elements.timeFail.value;
    const ownerEvent = e.target.elements.ownerEvent.value;
    const externalUser = e.target.elements.externalUser.value;
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
      <strong>How the Meet Session was created:</strong> ${created}<br>
      <strong>How the Meet Session was accessed:</strong> ${accessed}<br>
      <strong>Calendar Info (issues experienced joining via PSTN):</strong> ${calendarInfo}<br>
      <strong>When was the Meeting Scheduled:</strong> ${timeSchedule}<br>
      <strong>Time when the user failed to join:</strong> ${timeFail}<br>
      <strong>Owner of the calendar event:</strong> ${ownerEvent}<br>
      <strong>Is the user part of the Domain?:</strong> ${externalUser}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitJoining}>
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
        How the Hangouts Meet Session was created:{" "}
      </label>
      <input className="inputForm" type="text" name="created"></input>
      <label className="labelForm" style={{ display: "block" }}>
        How the Hangouts Meet Session was accessed:{" "}
      </label>
      <input className="inputForm" type="text" name="accessed"></input>
      <label className="labelForm" style={{ display: "block" }}>
        Calendar information (issues experienced joining via PSTN):{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="calendarInfo"
        placeholder="Dial in + PIN , time of the call, caller ID, meet ID"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        PSTN - Dial in only/ When was the meeting scheduled to happen?{" "}
      </label>
      <input
        className="inputForm "
        type="text"
        name= "timeSchedule"
        placeholder="Tue, Mar 3rd at 9:00 AM PST"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        PSTN - Dial in only/ Time the user failed to Join
      </label>
      <input
        className="inputForm"
        type="text"
        name="timeFail"
        placeholder="Tue, Mar 3rd at 9:00 AM PST"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        PSTN - Dial in only/ Account where the Calendar Event is on
      </label>
      <input
        className="inputForm "
        type="text"
        name="ownerEvent"
        placeholder="owner@domainName.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        PSTN - Dial in only/ Is the user part of the Domain? if not, did the organizer receive a notification to admin?
      </label>
      <input
        className="inputForm "
        type="text"
        name="externalUser"
        placeholder="Yes, the user is part of the Domain"
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

export default IssueJoining;
