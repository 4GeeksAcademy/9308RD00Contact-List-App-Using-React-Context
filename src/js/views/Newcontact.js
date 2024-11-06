import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Newcontact = () => {
  const { store, actions } = useContext(Context);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const navigate = useNavigate();

  return (
    <div className="row col-10  d-flex">
      <h5 className="text-center">Add a new Contact</h5>
      <div className="mb-3">
        <label for="name" className="form-label">
          Full name
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          placeholder="Full name"
          onChange={(e) => setNameInput(e.target.value)}
        />
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Phone number"
            onChange={(e) => setPhoneInput(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type=""
            className="form-control"
            id="address"
            placeholder="Address"
            onChange={(e) => setAddressInput(e.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary text-center"
        onClick={() =>{
          actions.addContact(nameInput, emailInput, phoneInput, addressInput); navigate("/")}
        }
      >
        Save
      </button>
      <Link to="/">
        <p>Or get back to contacts</p>
      </Link>
    </div>
  );
};
