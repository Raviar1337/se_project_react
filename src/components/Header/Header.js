import "../Header/Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import logo from "../../images/logo.svg";
import avatar from "../../images/AvatarPlaceholder.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";

function Header({ onCreateModal, location, onOpenAddGarmentForm }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  //current Location place holder to be replaced with code
  const currentLocation = location;

  // Current user place holder to be replaced with code
  const currentUser = { name: "Patrick A", avatar: "" };

  //todo fix css for element locations
  return (
    <>
      <div className="header">
        <div className="wraper header__left">
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo"></img>
          </Link>
          <div className="header__location-info">
            {currentDate}, {currentLocation}
          </div>
        </div>
        <div className="wraper header__right">
          <ToggleSwitch />
          <button
            className="header__button"
            onMouseUp={onCreateModal}
            onMouseDown={onOpenAddGarmentForm}
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__userName">
            {currentUser.name}
          </Link>
          <img className="header__userAvatar" src={avatar} alt="avatar"></img>
        </div>
      </div>
    </>
  );
}

export default Header;
