import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/Itemcard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function Main({ items }) {
  console.log(items);

  // cardList.items.forEach((item) => {
  //   return <ItemCard cardTitle={item.name} />;
  // });

  return (
    <>
      <div className="main">
        <WeatherCard />
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
