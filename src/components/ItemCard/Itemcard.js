import "./ItemCard.css";

function ItemCard({ cardTitle, cardImage }) {
  return (
    <li>
      <div className="itemCard">
        <img className="itemCard__image" src={cardImage}></img>
        <h3 className="itemCard__title">{cardTitle}</h3>
      </div>
    </li>
  );
}

export default ItemCard;
