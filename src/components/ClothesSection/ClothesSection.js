import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  items,
  temp,
  onCreateModal,
  onOpenItemModal,
  cardSelect,
}) {
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
            if (item === item) {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCreateModal={onCreateModal}
                  onOpenItem={onOpenItemModal}
                  cardSelect={cardSelect}
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
