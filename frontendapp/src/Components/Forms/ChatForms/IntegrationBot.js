import React from "react";
import "../styleForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const IntegrationBot = () => {
  const handleSubmitBot = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const usersAffected = e.target.elements.usersAffected.value;
    const webURL = e.target.elements.webURL.value;
    const roomName = e.target.elements.roomName.value;
    const directMessage = e.target.elements.directMessage.value;
    const botName = e.target.elements.botName.value;
    const botError = e.target.elements.botError.value;
    const dateTime = e.target.elements.dateTime.value;
    const cstEnvironment = e.target.elements.cstEnvironment.value;
    const reproducibleBrowser = e.target.elements.reproducibleBrowser.value;
    const reproducibleSteps = e.target.elements.reproducibleSteps.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Users Affected (#):</strong> ${usersAffected}<br>
      <strong>If Web, provide the Room URL:</strong> ${webURL}<br>
      <strong>Desktop/App - Room Name:</strong> ${roomName}<br>
      <strong>Desktop/App - Direct Message (include other party username):</strong> ${directMessage}<br>
      <strong>Bot Name being used:</strong> ${botName}<br>
      <strong>Error message displayed by the Bot:</strong> ${botError}<br>
      <strong>Date and Time when customer experienced this issue:</strong> ${dateTime}<br>
      <strong>Customer Environment (Browser and OS versions):</strong> ${cstEnvironment}<br>
      <strong>Reproducible in our end? Provide Browser and OS versions:</strong> ${reproducibleBrowser}<br>
      <strong>Reproducible in our end? Provide the steps to do it:</strong> ${reproducibleSteps}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitBot}>
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
        Number of users being affected and some examples:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="usersAffected"
        placeholder="user1@domain.com; screenshot1 and user2@domain.com; screenshot 2"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        If web, Submit the Room URL:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="webURL"
        placeholder="www.chat.google.com/<room-or-dm>/code"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Desktop/App - Room Name (Specific Name):{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="roomName"
        placeholder="Test Room"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Desktop/App - Direct Message (include username of the other party
        conversation):{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="directMessage"
        placeholder="otherParty@domainName.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Bot Name:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="botName"
        placeholder="otherParty@domainName.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Problem Description - Error provided by bot:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="botError"
        placeholder="otherParty@domainName.com"
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
        Browser and OS types and versions of customer environment:{" "}
      </label>
      <input className="inputForm" type="text" name="cstEnvironment"></input>
      <label className="labelForm" style={{ display: "block" }}>
       Reproducible in our end? - Provide Browser and OS versions{" "}
      </label>
      <input className="inputForm" type="text" name="reproducibleBrowser"></input>
      <label className="labelForm" style={{ display: "block" }}>
      Reproducible in our end? - Steps to reproduce it{" "}
      </label>
      <textarea
        className="inputForm textAreaForm"
        type="text"
        name="reproducibleSteps"
        placeholder="1. Go to chat.google.com 
        2. access the room 
        3. send a message"
      ></textarea>
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

export default IntegrationBot;
