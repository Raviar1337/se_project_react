import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ClothesSection({
  items,
  temp,
  onCreateModal,
  onOpenItemModal,
  cardSelect,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothesSection">
      <div className="clothesSection__header">
        Your Items{" "}
        <button
          className="clothesSection__header-button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothesSection__main">
        <ul className="main__cards">
          {items.map((item) => {
            if (item.owner === currentUser._id) {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCreateModal={onCreateModal}
                  onOpenItem={onOpenItemModal}
                  cardSelect={cardSelect}
                  onCardLike={onCardLike}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
