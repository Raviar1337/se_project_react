import "./ModalWithForm.css";
import React from "react";
import ReactDOM from "react-dom";

function ModalWithForm() {
  const [isOpen, setIsOpen] = React.useState(false);

  const modalTitle = "Modal Title";

  const submitButtonText = "Add Garment";

  function handleClick() {
    setIsOpen(!isOpen);
  }

  // some extra code here
  //{`modal modal_type_${name}`}

  if (isOpen) {
    return (
      <>
        <div className="modal__backDrop">
          <div className="modalWithForm">
            <button
              className="modal__closeButtton"
              onClick={handleClick}
            ></button>
            <form>
              <h3 className="modal__title">{modalTitle}</h3>

              <button className="modalWithForm__submit">
                {submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ModalWithForm;
