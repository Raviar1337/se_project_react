import { useContext } from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  items,
  temp,
  onCreateModal,
  onOpenItemModal,
  cardSelect,
  onCardLike,
  isLoggedIn,
  onEditModal,
  onLogOut,
}) {
  return (
    <div className="profile">
      <SideBar
        isLoggedIn={isLoggedIn}
        onEditModal={onEditModal}
        onLogOut={onLogOut}
      />
      <ClothesSection
        items={items}
        temp={temp}
        onCreateModal={onCreateModal}
        onOpenItemModal={onOpenItemModal}
        cardSelect={cardSelect}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
