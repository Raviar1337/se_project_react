import "./ModalWithForm.css";
import React from "react";
import ReactDOM from "react-dom";

function ModalWithForm({ onCloseModal, children }) {
  const modalTitle = "Modal Title";

  const submitButtonText = "Add Garment";

  // some extra code here
  //{`modal modal_type_${name}`}
  // className={`modal modal_type_${name}`}

  return (
    <>
      <div className="modal__backDrop">
        <div className="modalWithForm">
          <button
            className="modal__closeButtton"
            onClick={onCloseModal}
          ></button>
          <form>
            <h3 className="modal__title">{modalTitle}</h3>
            <div>{children}</div>
            <button className="modalWithForm__submit">
              {submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWithForm;
