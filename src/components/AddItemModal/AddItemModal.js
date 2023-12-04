import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm";
import React from "react";
import { postItem } from "../../utils/api";
//in case of needing cleaning import Add Garment css and delete abovve line

const AddItemMoal = ({ handleCloseModal, updateItems }) => {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weather, setWeather] = React.useState("");

  const handleOnChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleOnChangeImageUrl = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const handleOnChangeWeather = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    console.log(`So this fired the unput is${{ name, imageUrl, weather }}`);
    console.log({ name, imageUrl, weather });
    postItem({ name, imageUrl, weather })
      .then((res) => {
        updateItems(res);
      })
      .catch((res) => {
        console.error(res);
      });
    handleCloseModal();
  };

  return (
    <ModalWithForm
      onCloseModal={handleCloseModal}
      modalTitle="New Garment"
      submitButtonText="Add Garment"
      onSubmitForm={handleAddItemSubmit}
    >
      <div className="addGarmentForm">
        <label className="addGarmentForm__input">
          Name
          <input
            required
            className="addGarmentForm__input-field"
            type="text"
            name="name"
            placeholder="Name"
            minLength={2}
            onChange={handleOnChangeName}
            value={name}
          ></input>
        </label>
        <label className="addGarmentForm__input">
          Image
          <input
            required
            className="addGarmentForm__input-field"
            type="url"
            name="Image"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleOnChangeImageUrl}
          ></input>
        </label>
        <p className="addGarmentForm__buttonContainer-title">
          Select the weather type
        </p>
        <div className="addGarmentForm__buttonContainer">
          <div>
            <input
              name="weather-type"
              type="radio"
              id="hot"
              value="hot"
              onChange={handleOnChangeWeather}
            />
            <label>Hot</label>
          </div>
          <div>
            <input
              name="weather-type"
              type="radio"
              id="warm"
              value="warm"
              onChange={handleOnChangeWeather}
            />
            <label>Warm</label>
          </div>
          <div>
            <input
              name="weather-type"
              type="radio"
              id="cold"
              value="cold"
              onChange={handleOnChangeWeather}
            />
            <label>Cold</label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemMoal;
