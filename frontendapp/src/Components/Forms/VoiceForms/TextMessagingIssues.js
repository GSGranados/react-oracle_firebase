import React from "react";
import '../styleForms.css';
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const TextMessagingIssues = () => {
  const handleSubmitMessaging = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const gvNumber = e.target.elements.gvNumber.value;
    const usersAffected = e.target.elements.usersAffected.value;
    const dateTimeForm = e.target.elements.dateTimeForm.value;
    const clientForm = e.target.elements.clientForm.value;
    const otherNumber = e.target.elements.otherNumber.value;
    const messageDirection = e.target.elements.messageDirection.value;
    const cstEnvironment = e.target.elements.cstEnvironment.value;
    const network = e.target.elements.network.value;
    const feedback = e.target.elements.feedback.value;
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
      <strong>Message Direction (GV-GV or non GV- GV):</strong> ${messageDirection}<br>
      <strong>Customer environment:</strong> ${cstEnvironment}<br>
      <strong>Have they tried in a different network?</strong> ${network}<br>
      <strong>Did the customer submit feedback?</strong> ${feedback}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
    console.log(domainAffected);
  };

  return (
    <form onSubmit={handleSubmitMessaging}>
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
        Google Voice Phone Number:
      </label>
      <input
        className="inputForm"
        type="text"
        name="gvNumber"
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
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Message Direction:
      </label>
      <input
        className="inputForm"
        type="text"
        name="messageDirection"
        placeholder="Between Google Voice Subscribers"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Browser and OS types and versions of CST environment:
      </label>
      <input
        className="inputForm"
        type="text"
        name="cstEnvironment"
        placeholder="Google Chrome ver 79.0 Windows 10 Home"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Have they tried in a different PC or Network?
      </label>
      <input
        className="inputForm"
        type="text"
        name="network"
        placeholder="Another PC used: Asus rog and different network, the behavior still persist."
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Did the customer submit feedback and reference the CASE #?
      </label>
      <input
        className="inputForm"
        type="text"
        name="feedback"
        placeholder="Yes, customer did submit feedback"
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

export default TextMessagingIssues;
