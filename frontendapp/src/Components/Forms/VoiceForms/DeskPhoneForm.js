import React from "react";
import '../styleForms.css';
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const DeskPhoneForm = () => {
  const handleSubmitDeskPhone = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const macAddress = e.target.elements.macAddress.value;
    const serialNumber = e.target.elements.serialNumber.value;
    const emailUser = e.target.elements.emailUser.value;
    const numberUser = e.target.elements.numberUser.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
          <strong>MAC Address:</strong> ${macAddress}<br>
          <strong>Serial Number:</strong> ${serialNumber}<br>
          <strong>Email Associated to that user:</strong> ${emailUser}<br>
          <strong>Number Associated to that user:</strong> ${numberUser}<br>
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
        MAC Addres:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="macAddress"
        placeholder="82152543EB0DDA"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Serial Number:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="serialNumber"
        placeholder="82152543EB0DDA"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Email Address associated to the user:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="emailUser"
        placeholder="user@mail.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Number Associated:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="numberUser"
        placeholder="+123456789"
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

export default DeskPhoneForm;
