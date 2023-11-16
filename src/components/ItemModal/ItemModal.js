import "../ModalWithForm/ModalWithForm.css";
import "./ItemModal.css";

function ItemModal({ onCloseModal, card }) {
  console.log(card);
  return (
    <>
      <div className="modal__backDrop">
        <div className="itemModal modalWithForm">
          <button
            type="button"
            className="modal__closeButtton"
            onClick={onCloseModal}
          ></button>
          <img className="itemModal__image" src={card.item.link}></img>
          <div className="itemModal__footer">
            <p className="itemModal__footer-content">{card.item.name}</p>
            <p className="itemModal__footer-content">{`Weather: ${card.item.weather}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemModal;
