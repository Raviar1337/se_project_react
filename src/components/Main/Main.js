import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/Itemcard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function Main({ items, temp }) {
  console.log(items);
  console.log(temp);

  // cardList.items.forEach((item) => {
  //   return <ItemCard cardTitle={item.name} />;
  // });

  return (
    <>
      <div className="main">
        <WeatherCard temp={temp} />
        <ul className="main__cards">
          {items.map((item) => {
            console.log(item.name);
            return <ItemCard cardTitle={item.name} cardImage={item.link} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default Main;
