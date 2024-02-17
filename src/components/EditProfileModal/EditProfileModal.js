import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../RegisterModal/RegisterModal.css";
import React from "react";
import "./EditProfileModal.css";

//import { useForm } from "../../hooks/useForm";

const EditProfileModal = ({ onCloseModal, onEditUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [avatar, setAvatar] = React.useState(currentUser.avatar);

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleEditUserSubmit = (e) => {
    e.preventDefault();

    onEditUser({ name, avatar });
  };

  return (
    <ModalWithForm
      onCloseModal={onCloseModal}
      modalTitle="Edit Profile"
      submitButtonText="Save Changes"
      onSubmitForm={handleEditUserSubmit}
    >
      <div className="registerUserForm__input">
        <label className="registerUserForm__input">
          Name
          <input
            required
            className="registerUserForm__input-field"
            type="text"
            name="name"
            placeholder="Name"
            minLength={2}
            onChange={handleOnChangeName}
            value={name}
          ></input>
        </label>
        <label className="registerUserForm__input">
          Avatar
          <input
            required
            className="registerUserForm__input-field"
            type="url"
            name="avatar"
            placeholder="Avatar url"
            minLength={2}
            onChange={handleOnChangeAvatar}
            value={avatar}
          ></input>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
