import React from "react";
import "./voiceForms.css";

const AudioQualityForm = props => {
  return (
    <form onSubmit={props.handleSubmitAudioQuality}>
      <label className="labelForm" style={{ display: "block" }}>
        Affected Domain:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="domainAffectedQ"
        placeholder="exampledomain.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Google Voice Phone:{" "}
      </label>
      <input
        className="inputForm"
        type="number"
        pattern="[0-9]*"
        name="gvNumber"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Number of users affected:{" "}
      </label>
      <input
        className="inputForm"
        type="number"
        pattern="[0-9]*"
        name="usersAffected"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Date and Time of the issue:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="dateTimeForm"
        placeholder="Tue, Mar 5th; 10:00 AM GMT"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Google Voice Client:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="clientForm"
        placeholder="Google Voice Web App"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Other Number:{" "}
      </label>
      <input
        className="inputForm"
        type="number"
        pattern="[0-9]*"
        name="otherNumber"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Call Direction:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="callDirection"
        placeholder="Between Google Voice Subscribers"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Call Samples:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="callSamples"
        placeholder="+123456789 at 10:00 AM CST; Tue, Mar 5th"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Mobile App Affected?{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="mobileApp"
        placeholder="Version of the Mobile App"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Web App affected?{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="webApp"
        placeholder="Web Browser version and OS version"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Calls using WiFi or Mobile Data?{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="wifiMobile"
        placeholder="WiFi / Mobile Data"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Is the Number Ported?
      </label>
      <input
        className="inputForm"
        name="portedNumber"
        type="text"
        placeholder="Yes - the number is Ported"
      />
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

export default AudioQualityForm;
