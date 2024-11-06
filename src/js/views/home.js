import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Newcontact } from "./Newcontact";
import { Context } from "../store/appContext";
import { Contact } from "./Contact";
import { Link } from "react-router-dom";

export const Home = (props) => {
  const [nameInput, setNameInput] = useState([]);
  const { store, actions } = useContext(Context);
  const [id, setId] = useState(0);
  const [toDelete, setToDelete] = useState({});

  useEffect(() => {
    actions.getFetch();
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Comfirm Your Action
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you want to delete <strong>{toDelete.name}</strong> from your contacts list?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => actions.deleteContact(id)}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ border: "1px solid grey" }}
        className=" row col-10 text-end mt-5"
      >
        <div>
          <Link to="/newcontact">
            <button type="button" className="btn btn-success">
              + Add new
            </button>
          </Link>

          <div>
            {store.contacts.map((contact) => (
              <Contact contact={contact} setId={setId} setToDelete={setToDelete}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
