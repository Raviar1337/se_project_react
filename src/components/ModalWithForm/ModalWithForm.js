import "./ModalWithForm.css";
import React from "react";
import ReactDOM from "react-dom";

function ModalWithForm({
  onCloseModal,
  children,
  submitButtonText,
  modalTitle,
}) {
  // some extra code here
  //{`modal modal_type_${name}`}
  // className={`modal modal_type_${name}`}

  return (
    <>
      <div className="modal__backDrop">
        <div className="modalWithForm">
          <button
            type="button"
            className="modal__closeButtton"
            onClick={onCloseModal}
          ></button>
          <form>
            <h3 className="modal__title">{modalTitle}</h3>
            <div>{children}</div>
            <button type="submit" className="modalWithForm__submit">
              {submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWithForm;
