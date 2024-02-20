import "./ModalWithForm.css";
import React from "react";
import ReactDOM from "react-dom";

function ModalWithForm({
  onCloseModal,
  children,
  submitButtonText,
  modalTitle,
  onSubmitForm,
  extraButton,
  extraButtonText,
}) {
  // some extra code here
  //{`modal modal_type_${name}`}
  // className={`modal modal_type_${name}`}

  return (
    <div className="modal">
      <div className="modal__backDrop">
        <div className="modalWithForm">
          <button
            type="button"
            className="modal__closeButtton"
            onClick={onCloseModal}
          ></button>
          <form onSubmit={onSubmitForm}>
            <h3 className="modal__title">{modalTitle}</h3>
            {children}
            <button type="submit" className="modalWithForm__submit">
              {submitButtonText}
            </button>
            {extraButton ? (
              <button
                type="button"
                onClick={extraButton}
                className="modalWithForm__submit modalWithForm__extraButton"
              >
                {extraButtonText}
              </button>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
