import React from "react";
import "./voiceForms.css";
//Import Alertify
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const NumberPortingIssue = () => {
  const handleSubmitPorting = e => {
    e.preventDefault();
    const domainAffected = e.target.elements.domainAffected.value;
    const domainAdmin = e.target.elements.domainAdmin.value;
    const orderID = e.target.elements.orderID.value;
    const quantity = e.target.elements.quantity.value;
    const carrierName = e.target.elements.carrierName.value;
    const portIO = e.target.elements.portIO.value;
    const problemForm = e.target.elements.problemForm.value;
    const harScreenForm = e.target.elements.harScreenForm.value;

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Consult Generated!",
      html: `<strong>Domain Affected: </strong> ${domainAffected}<br>
          <strong>Domain Admin:</strong> ${domainAdmin}<br>
          <strong>Google Voice order ID:</strong> ${orderID}<br>
          <strong>Quantity of numbers being ported:</strong> ${quantity}<br>
          <strong>Carrier name:</strong> ${carrierName}<br>
          <strong>Is a Port In or Port Out request?</strong> ${portIO}<br>
          <strong>Problem Summary:</strong> ${problemForm}<br>
          <strong>Screenshots and HARs:</strong> ${harScreenForm}`
    });
  };

  return (
    <form onSubmit={handleSubmitPorting}>
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
        Domain Admin:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="domainAdmin"
        placeholder="admin@domain.com"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Order ID:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="orderID"
        placeholder="G0D0000000215455"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
       Quantity of numbers for which Port Request has been submitted:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="quantity"
        placeholder="2 numbers (+123456789, +64 7894 5465)"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Carrier Name:{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="carrierName"
        placeholder="Verizon | T-Mobile"
      ></input>
      <label className="labelForm" style={{ display: "block" }}>
        Port in or Port out request?{" "}
      </label>
      <input
        className="inputForm"
        type="text"
        name="portIO"
        placeholder="Port In request"
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

export default NumberPortingIssue;
