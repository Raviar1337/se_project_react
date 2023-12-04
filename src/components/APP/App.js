import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import APIkey from "../../utils/constants";
import { getWeatherInfo, parseWeatherData } from "../../utils/weatherApi";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm";
import ItemModal from "../ItemModal/ItemModal";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import { deleteItem, getItems, postItem } from "../../utils/api";
import AddItemMoal from "../AddItemModal/AddItemModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  //const [selectedForm, setSelectedForm] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [items, setItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleOpenItemModal = () => {
    setActiveModal("preview");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  const handleCardDelete = (card) => {
    console.log("delete buitton was clicked");
    console.log(card);
    deleteItem(card).catch((res) => {
      console.error(res);
    });
    updateItemsDelete(card);
    handleCloseModal();
  };

  // const handleOpenAddGarmentForm = () => {
  //   setSelectedForm("addGarment");
  // };

  const handleToggleSwitchChange = () => {
    console.log(`toggle function fired ${currentTemperatureUnit}`);
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    } else {
      setCurrentTemperatureUnit("F");
    }
  };

  const updateItemsAdd = (item) => {
    setItems([...items, item]);
  };

  const updateItemsDelete = (card) => {
    console.log("update after dlete");
    setItems(
      items.filter((item) => {
        if (item._id !== card.item._id) {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    getWeatherInfo()
      .then((res) => {
        const weatherApiInfo = parseWeatherData(res);

        setTemp(weatherApiInfo[currentTemperatureUnit]);
        setLocation(weatherApiInfo.location);
      })
      .catch((res) => console.log(res));
  }, [currentTemperatureUnit]);

  useEffect(() => {
    getItems()
      .then((res) => {
        setItems(res);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <BrowserRouter>
      <div className="backdrop">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="App">
            <Header
              onCreateModal={handleCreateModal}
              // onOpenAddGarmentForm={handleOpenAddGarmentForm}
              location={location}
            />
            <Main
              items={items}
              temp={Math.ceil(temp)}
              onCreateModal={handleCreateModal}
              onOpenItemModal={handleOpenItemModal}
              cardSelect={handleCardSelect}
            />
            <Footer />
            {activeModal === "create" && (
              <AddItemMoal
                handleCloseModal={handleCloseModal}
                updateItems={updateItemsAdd}
                //handleAddGarmentSubmit={handleAddGarmentSubmit}
              />
            )}
            {activeModal === "preview" && (
              <ItemModal
                onCloseModal={handleCloseModal}
                card={selectedCard}
                handleCardDelete={handleCardDelete}
              />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
