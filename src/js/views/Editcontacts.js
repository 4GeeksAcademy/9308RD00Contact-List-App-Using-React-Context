import React, { Component, useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";

export const Editcontact = () => {
  const [editNameInput, setEditNameInput] = useState("");
  const [editEmailInput, setEditEmailInput] = useState("");
  const [editPhoneInput, setEditPhoneInput] = useState("");
  const [editAddressInput, setEditAddressInput] = useState("");
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let foundPerson = store.contacts.find(
      (contactEdit) => contactEdit.id == params.id
    );
    setEditNameInput(foundPerson.name); 
    setEditEmailInput(foundPerson.email);
    setEditPhoneInput(foundPerson.phone);
    setEditAddressInput(foundPerson.address);
  }, []);

  return (
    <div className="row col-10  d-flex">
      <h5 className="text-center">Edit contact</h5>
      <div className="mb-3">
        <label for="name" className="form-label">
          Full name
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          value={editNameInput}
          placeholder="Full name"
          onChange={(e) => setEditNameInput(e.target.value)}
        />
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            value={editEmailInput}
            placeholder="name@example.com"
            onChange={(e) => setEditEmailInput(e.target.value)}
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
            value={editPhoneInput}
            placeholder="Phone number"
            onChange={(e) => setEditPhoneInput(e.target.value)}
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
            value={editAddressInput}
            placeholder="Address"
            onChange={(e) => setEditAddressInput(e.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary text-center"
        onClick={() =>{
          actions.updateContact(
            params.id,
            editNameInput,
            editEmailInput,
            editPhoneInput,
            editAddressInput
          );
          navigate("/")}
        }
        
      >
        Save change
      </button>
      <Link to="/">
        <p>Get back</p>
      </Link>
    </div>
  );
};
