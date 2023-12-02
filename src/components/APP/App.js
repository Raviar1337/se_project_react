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
import { defaultClothingItems } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [selectedForm, setSelectedForm] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

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

  const handleOpenAddGarmentForm = () => {
    setSelectedForm("addGarment");
  };

  const handleToggleSwitchChange = () => {
    console.log(`toggle function fired ${currentTemperatureUnit}`);
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    } else {
      setCurrentTemperatureUnit("F");
    }
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

  return (
    <BrowserRouter>
      <div className="backdrop">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="App">
            <Header
              onCreateModal={handleCreateModal}
              onOpenAddGarmentForm={handleOpenAddGarmentForm}
              location={location}
            />
            <Main
              items={defaultClothingItems}
              temp={Math.ceil(temp)}
              onCreateModal={handleCreateModal}
              onOpenItemModal={handleOpenItemModal}
              cardSelect={handleCardSelect}
            />
            <Footer />
            {activeModal === "create" && (
              <ModalWithForm
                onCloseModal={handleCloseModal}
                modalTitle="New Garment"
                submitButtonText="Add Garment"
              >
                {selectedForm === "addGarment" && <AddGarmentForm />}
              </ModalWithForm>
            )}
            {activeModal === "preview" && (
              <ItemModal onCloseModal={handleCloseModal} card={selectedCard} />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
