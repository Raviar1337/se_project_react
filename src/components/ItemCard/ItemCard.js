import "./ItemCard.css";

function ItemCard({ item, onOpenItem, cardSelect }) {
  const handleSelect = () => {
    cardSelect({ item });
    onOpenItem();
  };

  return (
    <li>
      <div className="itemCard">
        <img
          className="itemCard__image"
          src={item.imageUrl}
          onClick={handleSelect}
          alt={item.name}
        ></img>
        <h3 className="itemCard__title">{item.name}</h3>
      </div>
    </li>
  );
}

export default ItemCard;
