import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({ items, temp, onCreateModal, onOpenItemModal, cardSelect }) {
  return (
    <>
      <div className="profile">
        <SideBar />
        <ClothesSection
          items={items}
          temp={temp}
          onCreateModal={onCreateModal}
          onOpenItemModal={onOpenItemModal}
          cardSelect={cardSelect}
        />
      </div>
    </>
  );
}

export default Profile;
