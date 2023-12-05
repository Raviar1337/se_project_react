import "../Header/Header.css";
import "./SideBar.css";

import avatar from "../../images/AvatarPlaceholder.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const currentUser = { name: "Patrick A", avatar: "" };

function SideBar() {
  return (
    <>
      <div className="sideBar">
        <div className="sideBar__header-left">
          <img
            className="header__userAvatar-sideBar"
            src={avatar}
            alt="avatar"
          ></img>
          <Link to="/profile">
            <div className="header__userName">{currentUser.name}</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar;
