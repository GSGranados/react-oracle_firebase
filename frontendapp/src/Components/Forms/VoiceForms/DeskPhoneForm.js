import React from "react";
import "./voiceForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const DeskPhoneForm = () => {
  const handleSubmitDeskPhone = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const domainAdmin = e.target.elements.domainAdmin.value;
    const urlForm = e.target.elements.urlForm.value;
    const browserForm = e.target.elements.browserForm.value;
    const timeForm = e.target.elements.timeForm.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
          <strong>Domain Admin:</strong> ${domainAdmin}<br>
          <strong>URL Accessed:</strong> ${urlForm}<br>
          <strong>Browser User & Version:</strong> ${browserForm}<br>
          <strong>Time when the issue happened:</strong> ${timeForm}<br>
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
