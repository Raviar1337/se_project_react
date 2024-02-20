import "../Header/Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import logo from "../../images/logo.svg";
import avatar from "../../images/AvatarPlaceholder.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  onCreateModal,
  onRegisterModal,
  location,
  onSigninModal,
  onEditModal,
  onLogOut,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  //current Location place holder to be replaced with code
  const currentLocation = location;
  const headerButtonLoggedInClassName = isLoggedIn
    ? "header__button"
    : "header__button-hidden";

  const headerButtonLoggedOutClassName = isLoggedIn
    ? "header__button-hidden"
    : "header__button";

  const headerAvatarClassName = isLoggedIn
    ? "header__userAvatar"
    : "header__button-hidden";

  const headerUserNameClassName = isLoggedIn
    ? "header__userName"
    : "header__button-hidden";

  // Current user place holder to be replaced with code

  //todo fix css for element locations
  return (
    <header className="header">
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
          className={headerButtonLoggedOutClassName}
          onClick={onRegisterModal}
        >
          Sign Up
        </button>
        <button
          className={headerButtonLoggedOutClassName}
          onClick={onSigninModal}
        >
          Log In
        </button>

        <button
          className={headerButtonLoggedInClassName}
          onClick={onCreateModal}
        >
          + Add clothes
        </button>
        <Link to="/profile" className={headerUserNameClassName}>
          {currentUser.name}
        </Link>
        <img
          className={headerAvatarClassName}
          src={currentUser.avatar}
          placeholder={`P`}
          alt="avatar"
        ></img>
      </div>
    </header>
  );
}

export default Header;
