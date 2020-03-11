import React from "react";
import '../styleForms.css';
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ServiceAddressIssue = () => {
  const handleSubmitAddress = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const error = e.target.elements.error.value;
    const emergencyAddress = e.target.elements.emergencyAddress.value;
    const dateService = e.target.elements.dateService.value;
    const dateNumber = e.target.elements.dateNumber.value;
    const dateError = e.target.elements.dateError.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
      <strong>Error message received (Attach Screenshots if it's possible):</strong> ${error}<br>
      <strong>User's Emergency Address:</strong> ${emergencyAddress}<br>
      <strong>Date when user assigned that Service Address> ${dateService}<br>
      <strong>Date when user assigned that number:</strong> ${dateNumber}<br>
      <strong>Date when user experienced the error for the first time:</strong> ${dateError}<br>
      <strong>Problem Summary:</strong> ${problemForm}<br>
      <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
    console.log(domainAffected);
  };

  return (
    <form onSubmit={handleSubmitAddress}>
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
        Error Message (Screenshots if it is possible):
      </label>
      <input
        className="inputForm"
        type="text"
        placeholder="Service Address couldn't be verified"
        name="error"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        User phone number:
      </label>
      <input
        className="inputForm"
        type="text"
        name="usersAffected"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        User's Emergency Service Address:
      </label>
      <input
        className="inputForm"
        type="text"
        name="emergencyAddress"
        placeholder="10001, Lake Place FL 4562, USA"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Date when the Service Address was assigned:
      </label>
      <input
        className="inputForm"
        type="text"
        name="dateService"
        placeholder="Wed, Mar 10th"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Date when the number was associated to the user:
      </label>
      <input
        className="inputForm"
        type="text"
        placeholder="Wed, Mar 10th"
        name="dateNumber"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Date when the user first experienced the error message:
      </label>
      <input
        className="inputForm"
        type="text"
        name="dateError"
        placeholder="Wed, Mar 10th"
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

export default ServiceAddressIssue;
