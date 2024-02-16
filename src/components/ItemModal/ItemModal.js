import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "../ModalWithForm/ModalWithForm.css";
import "./ItemModal.css";

function ItemModal({ onCloseModal, card, handleCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.item.owner === currentUser._id;
  const itemDeleteButtonClassName = `"itemModal__deleteButton" ${
    isOwn ? "itemModal__deleteButton_visible" : "itemModal__deleteButton_hidden"
  }`;

  console.log(card);
  return (
    <div className="modal">
      <div className="modal__backDrop">
        <div className="itemModal modalWithForm">
          <button
            type="button"
            className="modal__closeButtton"
            onClick={onCloseModal}
          ></button>
          <img
            className="itemModal__image"
            src={card.item.imageUrl}
            alt={card.item.name}
          ></img>
          <div className="itemModal__footer">
            <div className="itemModal__footer-left">
              <p className="itemModal__footer-content">{card.item.name}</p>
              <p className="itemModal__footer-content">{`Weather: ${card.item.weather}`}</p>
            </div>
            <div className="itemModal__footer-right">
              <button
                className={itemDeleteButtonClassName}
                onClick={() => handleCardDelete(card)}
              >
                Delete Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
