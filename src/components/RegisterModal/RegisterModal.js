import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
import React from "react";

//import { useForm } from "../../hooks/useForm";

const RegisterModal = ({ onCloseModal, onCreateUser }) => {
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleRegisterUserSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      onCreateUser({ name, avatar, email, password, passwordConfirm });
    } else {
      console.log("password confirmation does not match password");
    }
  };

  return (
    <ModalWithForm
      onCloseModal={onCloseModal}
      modalTitle="New User"
      submitButtonText="Register"
      onSubmitForm={handleRegisterUserSubmit}
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
        <label className="registerUserForm__input">
          Email
          <input
            required
            className="registerUserForm__input-field"
            type="text"
            name="email"
            placeholder="Email"
            minLength={7}
            onChange={handleOnChangeEmail}
            value={email}
          ></input>
        </label>
        <label className="registerUserForm__input">
          Password
          <input
            required
            className="registerUserForm__input-field"
            type="password"
            name="password"
            placeholder="Password"
            minLength={5}
            onChange={handleOnChangePassword}
            value={password}
          ></input>
        </label>
        <label className="registerUserForm__input">
          Confoirm Password
          <input
            required
            className="registerUserForm__input-field"
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            minLength={5}
            onChange={handleOnChangePasswordConfirm}
            value={passwordConfirm}
          ></input>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
