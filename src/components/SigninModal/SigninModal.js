import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SigninModal.css";
import React from "react";

//import { useForm } from "../../hooks/useForm";

const SigninModal = ({ onCloseModal, onSignin, onSwitchModal }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();

    onSignin({ email, password });
  };

  return (
    <ModalWithForm
      onCloseModal={onCloseModal}
      modalTitle="Log In"
      submitButtonText="Log In"
      onSubmitForm={handleSigninSubmit}
      extraButton={onSwitchModal}
      extraButtonText="or Sign Up"
    >
      <div className="registerUserForm__input">
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
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
