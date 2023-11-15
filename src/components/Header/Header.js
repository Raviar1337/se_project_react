import "../Header/Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function Header({ onCreateModal }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  //current Location place holder to be replaced with code
  const currentLocation = "Atlanta GA";

  // Current user place holder to be replaced with code
  const currentUser = { name: "Patrick A", avatar: "" };

  //todo fix css for element locations
  return (
    <>
      <div className="header">
        <div className="wraper header__left">
          <image className="header__logo" />
          <div className="header__location-info">
            {currentDate},{currentLocation}
          </div>
        </div>
        <div className="wraper header__right">
          <button className="header__button" onClick={onCreateModal}>
            + Add clothes
          </button>
          <div className="header__userName">{currentUser.name}</div>
          <image className="header__userAvatar">{currentUser.avatar}</image>
        </div>
      </div>
    </>
  );
}

export default Header;
