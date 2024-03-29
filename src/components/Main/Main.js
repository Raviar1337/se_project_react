import React from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { parseTemp } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  items,
  temp,
  onCreateModal,
  onOpenItemModal,
  cardSelect,
  onCardLike,
}) {
  console.log(temp);
  console.log(onCardLike);

  const currentTemperatureUnit = React.useContext(
    CurrentTemperatureUnitContext
  );
  const currentWeather = parseTemp(
    temp,
    currentTemperatureUnit.currentTemperatureUnit
  );
  // cardList.items.forEach((item) => {
  //   return <ItemCard cardTitle={item.name} />;
  // });

  return (
    <main className="main">
      <WeatherCard temp={temp} />
      <p className="main__message">
        Today is {temp} &deg;{currentTemperatureUnit.currentTemperatureUnit},
        you may want to wear:
      </p>
      <ul className="main__cards">
        {items.map((item) => {
          if (item.weather === currentWeather) {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCreateModal={onCreateModal}
                onOpenItem={onOpenItemModal}
                cardSelect={cardSelect}
                onCardLike={onCardLike}
              />
            );
          }
        })}
      </ul>
    </main>
  );
}

export default Main;
