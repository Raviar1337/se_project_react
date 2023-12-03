import "./ItemCard.css";

function ItemCard({ item, onOpenItem, cardSelect }) {
  return (
    <li>
      <div className="itemCard" onMouseUp={onOpenItem}>
        <img
          className="itemCard__image"
          src={item.imageUrl}
          onMouseUp={() => cardSelect({ item })}
        ></img>
        <h3 className="itemCard__title">{item.name}</h3>
      </div>
    </li>
  );
}

export default ItemCard;
