import "../Header/Header.css";
import "./SideBar.css";

import avatar from "../../images/AvatarPlaceholder.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ isLoggedIn, onEditModal, onLogOut }) {
  const currentUser = useContext(CurrentUserContext);
  const headerButtonLoggedInClassName = isLoggedIn
    ? "sidebar__button"
    : "header__button-hidden";

  const headerButtonLoggedOutClassName = isLoggedIn
    ? "header__button-hidden"
    : "header__button";

  // const handleEditProfile = () => {
  //   onEditModal();
  // };

  // const handleLogOut = () => {
  //   onLogOut();
  // };

  return (
    <div className="sideBar">
      <div className="sideBar__header-left">
        <img
          className="header__userAvatar-sideBar"
          src={currentUser.avatar}
          alt="avatar"
        ></img>
        <Link to="/profile">
          <div className="header__userName">{currentUser.name}</div>
        </Link>
      </div>
      <div className="sidebar__menue">
        <button className={headerButtonLoggedInClassName} onClick={onEditModal}>
          Change profile data
        </button>
        <button className={headerButtonLoggedInClassName} onClick={onLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
