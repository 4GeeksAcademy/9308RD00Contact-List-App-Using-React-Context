import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contact = (props) => {
  const { store, actions } = useContext(Context);


  return (
    <div>
      <div>
        <img
          className=" row col-4 d-flex "
          style={{ borderRadius: "50%", maxWidth: "10%" }}
          src="https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
        />
      </div>
      <div>{props.contact.name}</div>
      <div>{props.contact.email}</div>
      <div>{props.contact.phone}</div>
      <div>{props.contact.address}</div>
      <Link to={"/editcontact/" + props.contact.id}>
        <button
          style={{ margin: "5px" }}
          type="button"
          className="btn btn-secondary"
          onClick={() => actions.updateContact()}
        >
          <i
            class="fas
     fa-user-edit"
          ></i>
        </button>
      </Link>

      <button
        type="button"
        className=" btn btn-danger "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={()=>{props.setId(props.contact.id)
           props.setToDelete(props.contact)}
        }
        >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};
