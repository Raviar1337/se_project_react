import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/Itemcard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { parseTemp } from "../utils/constants";

function Main({ items, temp, onCreateModal, onOpenItemModal, cardSelect }) {
  console.log(items);
  console.log(temp);

  // cardList.items.forEach((item) => {
  //   return <ItemCard cardTitle={item.name} />;
  // });

  return (
    <>
      <div className="main">
        <WeatherCard temp={temp} />
        <p className="main__message">
          Today is {temp} F, you may want to wear:
        </p>
        <ul className="main__cards">
          {items.map((item) => {
            const currentWeather = parseTemp(temp);
            console.log(currentWeather);
            if (item.weather === currentWeather) {
              return (
                <ItemCard
                  item={item}
                  onCreateModal={onCreateModal}
                  onOpenItem={onOpenItemModal}
                  cardSelect={cardSelect}
                />
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default Main;
